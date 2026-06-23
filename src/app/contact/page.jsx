"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { handleContactSubmission } from "@/app/actions/contact";

// ─── Static data ───────────────────────────────────────────────────────────────

const PROJECT_SCOPES = [
  "Custom Web Development",
  "Mobile App Development",
  "Digital Marketing Campaigns",
  "SEO & Content Strategy",
  "E-Commerce Platform",
  "Performance Optimisation",
  "Brand & Identity",
  "Data & Analytics",
  "Other",
];

const BUDGET_OPTIONS = [
  { value: "", label: "Prefer not to say" },
  { value: "<5k", label: "Under £5,000" },
  { value: "5k-15k", label: "£5,000 – £15,000" },
  { value: "15k-50k", label: "£15,000 – £50,000" },
  { value: "50k+", label: "£50,000+" },
];

const INITIAL_STATE = { status: "idle" };

// ─── Sub-components ────────────────────────────────────────────────────────────

function FieldError({ message }) {
  if (!message) return null;
  return (
    <motion.p
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      role="alert"
      className="mt-2 text-xs text-red-400 font-medium"
    >
      {message}
    </motion.p>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    handleContactSubmission,
    INITIAL_STATE
  );

  const fieldErrors = state.status === "error" ? state.errors : {};

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {state.status === "success" ? (
          <motion.section
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="min-h-[80vh] flex items-center justify-center px-6 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="text-center max-w-lg relative z-10 p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                <CheckCircle className="w-10 h-10" />
              </motion.div>

              <h1
                className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Inquiry Received.
              </h1>

              <p className="text-muted text-sm leading-relaxed mb-8">
                Thank you, <span className="text-white font-bold">{state.submittedName}</span>. Our team will review your blueprint and reach out within 24 business hours.
              </p>

              <a
                href="/contact"
                className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white/10 text-white text-xs tracking-[0.2em] uppercase font-bold border border-white/20 px-8 py-4 transition-all duration-300 hover:bg-white hover:text-black group"
              >
                <span>Submit Another Enquiry</span>
              </a>
            </div>
          </motion.section>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <p className="text-accent text-xs tracking-[0.3em] uppercase mb-8 font-bold flex items-center gap-3">
                    <span className="w-8 h-px bg-accent" />
                    Contact
                  </p>
                  <h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05]"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    Start a
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-500">
                      Conversation.
                    </span>
                  </h1>
                </div>
                <div className="max-w-sm">
                  <p className="text-muted text-sm leading-relaxed mb-6">
                    Tell us about your project. We&apos;ll review your brief and respond within one business day with a clear plan of action.
                  </p>
                  <p className="text-muted text-xs">
                    Prefer email?{" "}
                    <a
                      href="mailto:hello@abbadigital.com"
                      className="text-white hover:text-accent transition-colors duration-200 underline underline-offset-4"
                    >
                      hello@abbadigital.com
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section className="px-6 lg:px-12 max-w-7xl mx-auto py-16 md:py-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                
                <form
                  id="contact-form"
                  action={formAction}
                  noValidate
                  className="space-y-8 lg:col-span-8"
                  aria-label="Client inquiry form"
                >
                  {state.status === "error" && state.errors.global && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                      className="border border-red-500/50 bg-red-500/10 px-5 py-4 rounded-xl text-xs text-red-200 tracking-wide flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      {state.errors.global}
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="contact-name" className="block text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-3">
                        Full Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name" name="name" type="text" autoComplete="name" required
                        placeholder="Jane Smith" disabled={isPending}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20 outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                      />
                      <FieldError message={fieldErrors.name} />
                    </div>

                    <div className="relative group">
                      <label htmlFor="contact-email" className="block text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-3">
                        Business Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email" name="email" type="email" autoComplete="email" required
                        placeholder="jane@company.com" disabled={isPending}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20 outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                      />
                      <FieldError message={fieldErrors.email} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative group">
                      <label htmlFor="contact-company" className="block text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-3">
                        Company / Brand
                      </label>
                      <input
                        id="contact-company" name="company" type="text" autoComplete="organization"
                        placeholder="Acme Inc." disabled={isPending}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20 outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 disabled:opacity-50"
                      />
                    </div>

                    <div className="relative group">
                      <label htmlFor="contact-budget" className="block text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-3">
                        Approximate Budget
                      </label>
                      <select
                        id="contact-budget" name="budget" disabled={isPending} defaultValue=""
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer disabled:opacity-50"
                      >
                        {BUDGET_OPTIONS.map(({ value, label }) => (
                          <option key={value} value={value} className="bg-background text-white">
                            {label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="relative group">
                    <label htmlFor="contact-scope" className="block text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-3">
                      Project Scope <span className="text-accent">*</span>
                    </label>
                    <select
                      id="contact-scope" name="scope" required disabled={isPending} defaultValue=""
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer disabled:opacity-50"
                    >
                      <option value="" disabled className="text-white/40 bg-background">
                        Select a primary service area
                      </option>
                      {PROJECT_SCOPES.map((scope) => (
                        <option key={scope} value={scope} className="bg-background text-white">
                          {scope}
                        </option>
                      ))}
                    </select>
                    <FieldError message={fieldErrors.scope} />
                  </div>

                  <div className="relative group">
                    <label htmlFor="contact-message" className="block text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-3">
                      Project Brief
                    </label>
                    <textarea
                      id="contact-message" name="message" rows={5} disabled={isPending}
                      placeholder="Describe your project goals, timeline, and any relevant technical constraints..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white text-sm placeholder:text-white/20 outline-none focus:border-accent focus:bg-white/10 transition-all duration-300 resize-none disabled:opacity-50"
                    />
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-6">
                    <button
                      type="submit" disabled={isPending}
                      className="relative overflow-hidden rounded-full bg-accent text-white text-xs tracking-[0.2em] uppercase font-bold px-10 py-5 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-1 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isPending ? "Transmitting..." : "Send Enquiry"}
                        {!isPending && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-accent to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>

                    {isPending && (
                      <p className="text-accent text-xs tracking-[0.15em] uppercase font-medium animate-pulse flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Establishing secure connection…
                      </p>
                    )}
                  </div>
                </form>

                <aside className="hidden lg:flex flex-col justify-between lg:col-span-4 border-l border-white/10 pl-16">
                  <div>
                    <h2 className="text-xs tracking-[0.3em] uppercase font-bold text-white mb-10 flex items-center gap-3">
                      <span className="w-8 h-px bg-white/20" />
                      Our Process
                    </h2>
                    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-white/10 before:to-transparent">
                      {[
                        { step: "01", label: "Brief Review", copy: "We study your submission and evaluate technical feasibility within 24 hours." },
                        { step: "02", label: "Discovery", copy: "A focused 30-minute scoping session to align on architecture and deliverables." },
                        { step: "03", label: "Proposal", copy: "A detailed blueprint outlining scope, timeline, investment, and success metrics." },
                        { step: "04", label: "Execution", copy: "We onboard your team and begin agile delivery with weekly transparent updates." },
                      ].map((item) => (
                        <div key={item.step} className="relative flex items-start gap-6">
                          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-background border border-white/20 z-10 text-[10px] text-accent font-bold">
                            {item.step}
                          </div>
                          <div className="pt-1">
                            <p className="text-white text-sm font-bold mb-2">{item.label}</p>
                            <p className="text-muted text-xs leading-relaxed">{item.copy}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-white/10">
                    <p className="text-[10px] tracking-[0.25em] uppercase text-muted font-bold mb-4">
                      Direct Contact
                    </p>
                    <a href="mailto:hello@abbadigital.com" className="text-white text-sm font-medium hover:text-accent transition-colors duration-200 block mb-2">
                      hello@abbadigital.com
                    </a>
                    <a href="tel:+442012345678" className="text-muted text-sm hover:text-white transition-colors duration-200 block">
                      +44 20 1234 5678
                    </a>
                  </div>
                </aside>

              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
