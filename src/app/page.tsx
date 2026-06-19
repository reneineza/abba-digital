"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, BarChart, Globe } from "lucide-react";

const stats = [
  { value: "120+", label: "Projects Delivered", icon: <Globe className="w-5 h-5 text-accent" /> },
  { value: "98%", label: "Client Retention", icon: <Sparkles className="w-5 h-5 text-accent" /> },
  { value: "4×", label: "Average ROI Increase", icon: <BarChart className="w-5 h-5 text-accent" /> },
  { value: "12", label: "Countries Served", icon: <Code className="w-5 h-5 text-accent" /> },
];

const previewCards = [
  {
    tag: "Engineering",
    title: "Web & App Development",
    body: "Custom web applications, robust mobile apps, and scalable backends engineered for performance, accessibility, and global scale.",
    href: "/services",
  },
  {
    tag: "Growth",
    title: "Digital Marketing",
    body: "Data-driven organic and paid marketing campaigns engineered to capture high-intent traffic and maximize ROI.",
    href: "/services",
  },
  {
    tag: "Analytics",
    title: "Data & SEO Strategy",
    body: "End-to-end analytics implementation and technical SEO foundations that compound your organic search authority.",
    href: "/services",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function HomePage() {
  return (
    <div className="w-full">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-24 pb-20 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Animated Background Gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen animate-float pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen animate-float pointer-events-none" style={{ animationDelay: "-3s" }} />

        <div className="relative z-10 max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white text-xs tracking-[0.2em] uppercase font-medium">
              Web Design • App Dev • Marketing
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold uppercase tracking-tight leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Digital Infrastructure. <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent via-blue-400 to-purple-500">
              Measurable Growth.
            </span>
          </motion.h1>

          {/* Sub-copy + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row md:items-center gap-8"
          >
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              ABBA DIGITAL is a premium web development and digital marketing agency. We build highly scalable digital infrastructure and engineer measurable business acceleration.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="relative overflow-hidden rounded-full bg-accent text-white text-sm tracking-[0.15em] uppercase font-bold px-8 py-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:-translate-y-1 group flex items-center gap-3"
              >
                <span className="relative z-10">Start a Project</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-linear-to-r from-accent to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-white/20 text-white text-sm tracking-[0.15em] uppercase font-bold px-8 py-4 hover:bg-white/10 transition-colors duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS BENTO GRID ────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm group hover:border-accent/50 transition-colors duration-300"
            >
              {/* Hover glow effect */}
              <div className="absolute -inset-px bg-linear-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 rounded-xl bg-black/40 inline-block border border-white/5">
                  {stat.icon}
                </div>
                <p
                  className="text-4xl lg:text-5xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </p>
                <p className="text-muted text-xs tracking-[0.15em] uppercase font-medium">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── MARQUEE STRIP ─────────────────────────────────────────── */}
      <section className="border-y border-white/10 py-6 overflow-hidden bg-black/50 backdrop-blur-md my-12">
        <div
          className="flex whitespace-nowrap gap-0"
          style={{ animation: "marquee 25s linear infinite" }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className="text-xs tracking-[0.4em] uppercase text-accent font-bold px-12 shrink-0 flex items-center gap-12"
            >
              <span>Web Development</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>Digital Marketing</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>App Development</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span>Search Optimisation</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </span>
          ))}
        </div>
      </section>

      {/* ── PREVIEW CARDS ────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-4"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Expertise &amp; Focus
            </h2>
            <p className="text-muted text-sm tracking-[0.2em] uppercase">
              What we do best
            </p>
          </div>
          <Link
            href="/services"
            className="text-accent text-sm tracking-[0.15em] uppercase font-bold hover:text-accent-hover transition-colors duration-200 flex items-center gap-2"
          >
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {previewCards.map((card, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-1 flex flex-col h-full"
            >
              {/* Animated Border Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/20 group-hover:to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative z-10 bg-background/90 backdrop-blur-xl rounded-[22px] p-8 lg:p-10 flex flex-col h-full border border-white/5 group-hover:bg-background/80 transition-colors duration-300">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-accent text-[10px] tracking-[0.25em] uppercase font-bold mb-8 w-fit border border-white/5">
                  {card.tag}
                </span>
                
                <h3
                  className="text-white text-2xl font-bold mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {card.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed flex-1 mb-10">
                  {card.body}
                </p>
                
                <Link
                  href={card.href}
                  className="text-white text-xs tracking-[0.2em] uppercase font-bold flex items-center gap-2 group/btn"
                >
                  Explore
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-accent group-hover/btn:text-white transition-all duration-300 group-hover/btn:w-10">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── FULL-WIDTH CTA ────────────────────────────────────────── */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-32 text-center relative">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10">
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-6 font-bold">
            Ready to Accelerate?
          </p>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white max-w-4xl mx-auto leading-[1.05] mb-12"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Let&apos;s Build The Future Together.
          </h2>
          <Link
            href="/contact"
            className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-white text-black text-sm tracking-[0.2em] uppercase font-bold px-10 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 hover:bg-gray-100 group"
          >
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
