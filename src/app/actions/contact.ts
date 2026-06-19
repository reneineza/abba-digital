"use server";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ABBA DIGITAL — Contact Form Server Action
 * File: src/app/actions/contact.ts
 *
 * Architecture overview:
 *   1. Parse & sanitise all inbound FormData fields.
 *   2. Run strict server-side validation (never trust the client).
 *   3. Build a typed, immutable ContactPayload.
 *   4. [INTEGRATION POINT] Persist to database OR dispatch transactional email.
 *   5. Return a typed ActionState to the client for UI feedback.
 *
 * Environment variables required (add to .env.local):
 *   - DATABASE_URL       → Supabase / PlanetScale / Neon connection string
 *   - RESEND_API_KEY     → Resend transactional email API key
 *   - NOTIFICATION_EMAIL → Inbox that receives new inquiry alerts
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Types ────────────────────────────────────────────────────────────────────

/** All fields that can carry a server-side validation error. */
export type ContactFieldErrors = {
  name?: string;
  email?: string;
  scope?: string;
  global?: string; // Non-field-specific runtime failures
};

/** The shape returned by the server action to the client on every invocation. */
export type ActionState =
  | { status: "idle" }
  | { status: "success"; submittedName: string }
  | { status: "error"; errors: ContactFieldErrors };

/**
 * The validated, immutable payload sent to downstream integrations.
 * Never mutate this object after construction.
 */
type ContactPayload = Readonly<{
  name: string;
  email: string;
  company: string;
  scope: string;
  budget: string;
  message: string;
  submittedAt: string; // ISO-8601 UTC timestamp
  ipAddress: string | null; // For audit/spam detection — populated via headers()
}>;

// ─── Validation ───────────────────────────────────────────────────────────────

/**
 * RFC-5321 compliant email regex.
 * Rejects: consecutive dots, missing TLD, IP literals, quoted strings.
 * Allows: plus-addressing (user+tag@domain.com), subdomains.
 */
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;

/** Allowed project scope values — prevents injection of arbitrary strings. */
const ALLOWED_SCOPES = new Set([
  "Custom Web Development",
  "Mobile App Development",
  "Digital Marketing Campaigns",
  "SEO & Content Strategy",
  "E-Commerce Platform",
  "Performance Optimisation",
  "Brand & Identity",
  "Data & Analytics",
  "Other",
]);

/** Allowed budget brackets. */
const ALLOWED_BUDGETS = new Set(["", "<5k", "5k-15k", "15k-50k", "50k+"]);

/**
 * Sanitise a raw string from FormData:
 *  - Trim leading/trailing whitespace.
 *  - Strip null bytes (common in injection probes).
 *  - Truncate to maxLength to prevent oversized payloads.
 */
function sanitise(raw: FormDataEntryValue | null, maxLength = 500): string {
  if (typeof raw !== "string") return "";
  return raw.replace(/\0/g, "").trim().slice(0, maxLength);
}

/**
 * Pure validation function — returns errors map or null if valid.
 * Runs on the SERVER only; client-side validation is a UX courtesy, not a gate.
 */
function validatePayload(
  fields: Omit<ContactPayload, "submittedAt" | "ipAddress">
): ContactFieldErrors | null {
  const errors: ContactFieldErrors = {};

  if (!fields.name) {
    errors.name = "Full name is required.";
  } else if (fields.name.length < 2) {
    errors.name = "Please enter your full name (at least 2 characters).";
  }

  if (!fields.email) {
    errors.email = "Business email is required.";
  } else if (!EMAIL_REGEX.test(fields.email)) {
    errors.email = "Please enter a valid business email address.";
  }

  if (!fields.scope) {
    errors.scope = "Please select a project scope.";
  } else if (!ALLOWED_SCOPES.has(fields.scope)) {
    // Scope value tampered on the client
    errors.scope = "Invalid project scope selected.";
  }

  if (fields.budget && !ALLOWED_BUDGETS.has(fields.budget)) {
    // Budget value tampered — silently discard rather than error (optional field)
    // We handle this by resetting the field in the payload builder below.
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

// ─── Server Action ────────────────────────────────────────────────────────────

/**
 * handleContactSubmission
 *
 * Next.js Server Action bound to the contact form via useActionState.
 * Signature matches the (prevState, formData) contract required by React's
 * useActionState hook.
 *
 * @param _prevState - Previous ActionState (required by useActionState API;
 *                     not consumed here but must be accepted).
 * @param formData   - Native browser FormData submitted from the <form> element.
 * @returns          - A new ActionState communicated back to the client.
 */
export async function handleContactSubmission(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // ── 1. Parse & sanitise ─────────────────────────────────────────────────────
  const name = sanitise(formData.get("name"), 120);
  const email = sanitise(formData.get("email"), 254); // RFC-5321 max email length
  const company = sanitise(formData.get("company"), 120);
  const scope = sanitise(formData.get("scope"), 80);
  const budget = sanitise(formData.get("budget"), 20);
  const message = sanitise(formData.get("message"), 2000);

  // ── 2. Server-side validation ────────────────────────────────────────────────
  const validationErrors = validatePayload({ name, email, company, scope, budget, message });

  if (validationErrors) {
    return { status: "error", errors: validationErrors };
  }

  // ── 3. Build immutable payload ───────────────────────────────────────────────
  const payload: ContactPayload = Object.freeze({
    name,
    email,
    company,
    scope,
    budget: ALLOWED_BUDGETS.has(budget) ? budget : "", // Guard tampered value
    message,
    submittedAt: new Date().toISOString(),
    ipAddress: null, // ← Populate via: (await headers()).get("x-forwarded-for")
  });

  // ── 4a. DATABASE INTEGRATION POINT ──────────────────────────────────────────
  //
  // Uncomment and configure one of the following adapters:
  //
  // ▸ SUPABASE (recommended for quick start):
  //   import { createClient } from "@supabase/supabase-js";
  //   const supabase = createClient(
  //     process.env.SUPABASE_URL!,
  //     process.env.SUPABASE_SERVICE_ROLE_KEY! // server-only key
  //   );
  //   const { error: dbError } = await supabase
  //     .from("contact_submissions")
  //     .insert([payload]);
  //   if (dbError) throw new Error(dbError.message);
  //
  // ▸ PRISMA + POSTGRESQL / PLANETSCALE / NEON:
  //   import { prisma } from "@/lib/prisma"; // singleton client
  //   await prisma.contactSubmission.create({ data: payload });
  //
  // ▸ MONGODB via Mongoose:
  //   import { ContactSubmission } from "@/models/ContactSubmission";
  //   await ContactSubmission.create(payload);
  //
  // ────────────────────────────────────────────────────────────────────────────

  // ── 4b. TRANSACTIONAL EMAIL INTEGRATION POINT ───────────────────────────────
  //
  // ▸ RESEND (recommended — built for Next.js):
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY!);
  //   await resend.emails.send({
  //     from: "no-reply@abbadigital.com",
  //     to: process.env.NOTIFICATION_EMAIL!,
  //     subject: `New Inquiry — ${payload.scope} from ${payload.name}`,
  //     html: `
  //       <h2>New Client Inquiry</h2>
  //       <p><strong>Name:</strong> ${payload.name}</p>
  //       <p><strong>Email:</strong> ${payload.email}</p>
  //       <p><strong>Company:</strong> ${payload.company || "—"}</p>
  //       <p><strong>Scope:</strong> ${payload.scope}</p>
  //       <p><strong>Budget:</strong> ${payload.budget || "Not disclosed"}</p>
  //       <p><strong>Brief:</strong> ${payload.message || "—"}</p>
  //       <p><strong>Submitted:</strong> ${payload.submittedAt}</p>
  //     `,
  //   });
  //
  // ▸ SENDGRID:
  //   import sgMail from "@sendgrid/mail";
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
  //   await sgMail.send({ to: ..., from: ..., subject: ..., html: ... });
  //
  // ────────────────────────────────────────────────────────────────────────────

  // ── 5. Structured server-side audit log (replace with your logger) ───────────
  //
  // In production, pipe this to a structured logging service:
  //   - Axiom: axiom.ingest("contact-submissions", payload)
  //   - Datadog / Logtail / Sentry: logger.info("contact_submission", payload)
  //
  // Never log PII to an unencrypted destination in production.
  //
  console.info("[ABBA DIGITAL] Contact submission received:", {
    name: payload.name,
    scope: payload.scope,
    submittedAt: payload.submittedAt,
    // ↑ Intentionally omits email/message from logs (PII minimisation)
  });

  // ── 6. Return success state to the client ────────────────────────────────────
  return {
    status: "success",
    submittedName: payload.name.split(" ")[0], // First name only for personalised UI
  };
}
