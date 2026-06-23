"use client";

import { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitCode, setSubmitCode] = useState("");

  const budgets = ["< $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBudgetSelect = (val) => {
    setFormData((prev) => ({ ...prev, budget: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Name, Email, and Message are required fields.");
      return;
    }
    setLoading(true);
    setSubmitCode(`ABBA-${(Math.random() * 10000).toFixed(0)}`);

    // Simulate database submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="bg-[#0D0D0D] text-white grow flex flex-col font-sans">
      {/* Page Title Section */}
      <section 
        className="relative py-24 md:py-32 border-b border-white/8 bg-cover bg-center select-none"
        style={{ backgroundImage: "url('/images/background/service-bg-1-1.jpg')" }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase block">
              {"// LET'S TALK"}
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Initiate Project
            </h1>
            <nav className="flex font-mono text-xs text-zinc-500 uppercase gap-2 pt-2">
              <Link href="/" className="hover:text-[#FF6B1E] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF6B1E] font-semibold">Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-24 md:py-32 grow flex items-center bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Office Meta */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="font-mono text-xs font-bold text-[#FF6B1E] block mb-3 uppercase tracking-wider">
                  {"// CONTACT PRESETS"}
                </span>
                <h2 className="font-heading text-3xl font-extrabold uppercase tracking-tight text-white mb-6 leading-none">
                  Frictionless Lead Capture
                </h2>
                <p className="text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
                  We value precision. Provide your product details, technical requirements, and estimated project budget 
                  below, and our operations lead will initiate contact within 24 hours.
                </p>
              </div>

              <div className="border-t border-white/5 pt-8 space-y-6">
                <div>
                  <span className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">DIRECT OFFICE:</span>
                  <a href="tel:+1234567890" className="text-lg text-white font-extrabold hover:text-[#FF6B1E] transition-colors">
                    (+123) 456 7890
                  </a>
                </div>
                <div>
                  <span className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">EMAIL DISPATCH:</span>
                  <a href="mailto:project@abbadigital.com" className="text-lg text-white font-extrabold hover:text-[#FF6B1E] transition-colors">
                    project@abbadigital.com
                  </a>
                </div>
                <div>
                  <span className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">SECURE OFFICE ADDRESS:</span>
                  <p className="text-zinc-300 leading-relaxed font-bold uppercase tracking-wider text-xs">
                    1901 Thornridge Circle, Shiloh<br />
                    Hawaii, USA 81063
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div className="lg:col-span-7 border border-white/5 rounded-[45px] p-8 md:p-12 bg-[#151515] shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-12 space-y-6 animate-fade-in">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B1E] text-black text-xl font-bold">
                    &check;
                  </div>
                  <h3 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-white">
                    Project Request Logged
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md mx-auto font-light">
                    Thank you. We have saved your project details under code{" "}
                    <span className="font-mono font-bold text-[#FF6B1E]">{submitCode}</span>.
                    An engineering lead will call you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", company: "", budget: "", message: "" });
                    }}
                    className="inline-flex items-center justify-center rounded-full bg-[#FF6B1E] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">
                      01 / Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Emily Carter"
                      className="w-full minimal-input py-2 placeholder-zinc-700 uppercase font-bold tracking-wider text-xs"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">
                      02 / Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g., emily@company.com"
                      className="w-full minimal-input py-2 placeholder-zinc-700 uppercase font-bold tracking-wider text-xs"
                    />
                  </div>

                  {/* Company field */}
                  <div>
                    <label htmlFor="company" className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">
                      03 / Organization / Company (Optional)
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="e.g., AeroRetail Global"
                      className="w-full minimal-input py-2 placeholder-zinc-700 uppercase font-bold tracking-wider text-xs"
                    />
                  </div>

                  {/* Budget field */}
                  <div>
                    <label className="font-heading text-xs font-bold text-zinc-500 block mb-3 uppercase tracking-widest">
                      04 / Estimated Project Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgets.map((val) => (
                        <button
                          key={val}
                          type="button"
                          onClick={() => handleBudgetSelect(val)}
                          className={`font-mono text-xs border rounded-full py-2.5 text-center cursor-pointer transition-all duration-300 ${
                            formData.budget === val
                              ? "bg-[#FF6B1E] border-[#FF6B1E] text-black font-bold"
                              : "bg-[#0D0D0D] border-white/5 text-zinc-400 hover:border-[#FF6B1E] hover:text-white"
                          }`}
                        >
                          {val}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="font-heading text-xs font-bold text-zinc-500 block mb-2 uppercase tracking-widest">
                      05 / Project Specifications & Message *
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your technical requirements, goals, and attribution pipelines..."
                      className="w-full minimal-input py-2 placeholder-zinc-700 uppercase font-bold tracking-wider text-xs"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-style-one cursor-pointer w-full"
                    >
                      <span className="btn-arrow-left">
                        <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                      </span>
                      <span className="btn-title">{loading ? "Registering Technical Scope..." : "Initiate Scope Review"}</span>
                      <span className="btn-arrow-right">
                        <img src="/images/icons/right-arrow-1-2.png" alt="arrow" className="w-3 h-3" />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section border-t border-white/5 relative overflow-hidden bg-[#0D0D0D]">
        <div className="absolute inset-0 bg-[#0D0D0D]/60 pointer-events-none z-10"></div>
        <iframe
          title="ABBA Digital Office Location Map"
          className="map w-full h-[400px] border-none filter grayscale invert opacity-75 contrast-125"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(ABBA%20Digital)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>
    </div>
  );
}
