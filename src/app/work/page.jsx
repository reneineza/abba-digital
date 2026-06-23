"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "meridian-bank",
    title: "Meridian Bank",
    category: "Web Platform",
    description: "A full rebrand and digital platform build for a challenger bank. Delivered a 340% increase in online account applications within 90 days of launch.",
    tags: ["Next.js", "Design System", "Fintech"],
    year: "2024",
    size: "large",
  },
  {
    id: "volta-energy",
    title: "Volta Energy",
    category: "Marketing & SEO",
    description: "Comprehensive SEO strategy and paid campaign management for a renewable energy scale-up targeting enterprise clients.",
    tags: ["SEO", "Google Ads", "B2B"],
    year: "2024",
    size: "small",
  },
  {
    id: "nova-commerce",
    title: "Nova Commerce",
    category: "E-Commerce",
    description: "Custom Shopify build with headless architecture and a bespoke checkout experience optimised for mobile conversion.",
    tags: ["Shopify", "Headless", "CRO"],
    year: "2024",
    size: "small",
  },
  {
    id: "arbor-health",
    title: "Arbor Health",
    category: "App Development",
    description: "A HIPAA-compliant React Native app enabling telemedicine consultations and prescription management at scale.",
    tags: ["React Native", "Healthcare", "Compliance"],
    year: "2023",
    size: "large",
  },
  {
    id: "terrain-studio",
    title: "Terrain Studio",
    category: "Brand & Web",
    description: "Editorial portfolio website and brand identity system for a leading architecture and interior design studio.",
    tags: ["Branding", "Next.js", "Animation"],
    year: "2023",
    size: "small",
  },
  {
    id: "atlas-logistics",
    title: "Atlas Logistics",
    category: "Digital Marketing",
    description: "Multi-channel paid media strategy that cut cost-per-lead by 62% and drove £4.2M in attributed pipeline revenue.",
    tags: ["Paid Media", "Analytics", "B2B"],
    year: "2023",
    size: "small",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 80 } },
};

export default function WorkPage() {
  return (
    <div className="w-full">
      {/* ── PAGE HEADER ──────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-8 font-bold flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Selected Work
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[1.05]"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Projects
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-500">
                That Perform.
              </span>
            </h1>
            <p className="text-muted text-lg leading-relaxed max-w-sm mb-2">
              A focused portfolio of high-impact digital work — built to a brief where precision and results matter.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── PROJECT GRID ─────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-16 md:py-24 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-8 lg:p-10 flex flex-col hover:border-accent/50 hover:bg-white/10 transition-all duration-500 ${
                project.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-10">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-accent text-[10px] tracking-[0.25em] uppercase font-bold border border-white/10">
                    {project.category} · {project.year}
                  </span>
                  
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-accent group-hover:border-accent transition-all duration-300 transform group-hover:rotate-45">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h2
                  className={`text-white font-bold uppercase tracking-tight leading-none mb-6 ${
                    project.size === "large"
                      ? "text-4xl md:text-5xl lg:text-6xl"
                      : "text-3xl md:text-4xl"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-muted text-sm leading-relaxed flex-1 mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-white border border-white/10 bg-white/5 text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24 md:py-32 text-center relative border-t border-white/10 mt-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6 font-bold">
            Want results like these?
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-10 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let&apos;s Build Your Case Study.
          </h2>
          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white text-black text-sm tracking-[0.2em] uppercase font-bold px-10 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:bg-gray-100 group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Project <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
