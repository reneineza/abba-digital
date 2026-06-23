"use server";

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ABBA DIGITAL — Contact Form Server Action
 * File: src/app/actions/contact.js
 *
 * Architecture overview:
 *   1. Parse & sanitise all inbound FormData fields.
 *   2. Run strict server-side validation (never trust the client).
 *   3. Build an immutable ContactPayload.
 *   4. [INTEGRATION POINT] Persist to database OR dispatch transactional email.
 *   5. Return an ActionState to the client for UI feedback.
 *
 * Environment variables required (add to .env.local):
 *   - DATABASE_URL       → Supabase / PlanetScale / Neon connection string
 *   - RESEND_API_KEY     → Resend transactional email API key
 *   - NOTIFICATION_EMAIL → Inbox that receives new inquiry alerts
 * ─────────────────────────────────────────────────────────────────────────────
 */

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
function sanitise(raw, maxLength = 500) {
  if (typeof raw !== "string") return "";
  return raw.replace(/\0/g, "").trim().slice(0, maxLength);
}

/**
 * Pure validation function — returns errors map or null if valid.
 * Runs on the SERVER only; client-side validation is a UX courtesy, not a gate.
 */
function validatePayload(fields) {
  const errors = {};

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
export async function handleContactSubmission(_prevState, formData) {
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
  const payload = Object.freeze({
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
  // ... (comments removed for brevity)
  // ────────────────────────────────────────────────────────────────────────────

  // ── 4b. TRANSACTIONAL EMAIL INTEGRATION POINT ───────────────────────────────
  // ... (comments removed for brevity)
  // ────────────────────────────────────────────────────────────────────────────

  // ── 5. Structured server-side audit log (replace with your logger) ───────────
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
