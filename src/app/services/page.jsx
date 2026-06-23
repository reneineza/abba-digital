"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Terminal, Server, Zap, LineChart, Search, PieChart, MousePointerClick } from "lucide-react";

const technicalServices = [
  {
    id: "web-development",
    title: "Custom Web Development",
    description: "Precision-engineered web platforms built with Next.js and React. Fast, accessible, and architected to scale from day one.",
    tags: ["Next.js", "React", "TypeScript", "Performance"],
    icon: <Code className="w-6 h-6 text-accent" />,
  },
  {
    id: "app-development",
    title: "Mobile & App Development",
    description: "Cross-platform mobile applications and progressive web apps that deliver native-quality experiences across every device.",
    tags: ["React Native", "PWA", "iOS", "Android"],
    icon: <Terminal className="w-6 h-6 text-accent" />,
  },
  {
    id: "systems-architecture",
    title: "Scalable Architecture",
    description: "Backend infrastructure, API design, and cloud-native architecture that can sustain exponential growth without friction.",
    tags: ["Node.js", "AWS", "PostgreSQL", "Microservices"],
    icon: <Server className="w-6 h-6 text-accent" />,
  },
  {
    id: "performance-optimisation",
    title: "Performance Optimisation",
    description: "Deep audits and surgical refactoring to maximise Core Web Vitals, reduce load times, and improve conversion.",
    tags: ["Core Web Vitals", "Lighthouse", "CDN", "Caching"],
    icon: <Zap className="w-6 h-6 text-accent" />,
  },
];

const growthServices = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Full-funnel paid and organic marketing campaigns engineered for measurable ROI at every stage of the customer journey.",
    tags: ["Google Ads", "Meta Ads", "LinkedIn", "Full-Funnel"],
    icon: <LineChart className="w-6 h-6 text-purple-400" />,
  },
  {
    id: "seo",
    title: "Search Optimisation",
    description: "Technical SEO foundations and content strategies that compound authority and capture high-intent organic search traffic.",
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
    icon: <Search className="w-6 h-6 text-purple-400" />,
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    description: "End-to-end analytics implementation and custom dashboards that turn raw data into strategic clarity and insight.",
    tags: ["GA4", "Looker Studio", "Mixpanel", "Dashboards"],
    icon: <PieChart className="w-6 h-6 text-purple-400" />,
  },
  {
    id: "cro",
    title: "Conversion Optimisation",
    description: "Hypothesis-driven testing and UX improvements that systematically increase the value of your existing traffic.",
    tags: ["A/B Testing", "Heatmaps", "UX Research", "Analysis"],
    icon: <MousePointerClick className="w-6 h-6 text-purple-400" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

function ServiceCard({ service, index }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-6 p-3 rounded-xl bg-black/40 inline-block border border-white/5 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        
        <h3
          className="text-white text-xl font-bold mb-3 leading-snug"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          {service.title}
        </h3>
        
        <p className="text-muted text-sm leading-relaxed mb-6">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="border border-white/10 bg-white/5 text-muted text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  return (
    <div className="w-full">
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-xs tracking-[0.3em] uppercase mb-8 font-bold flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            Our Services
          </p>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white max-w-4xl leading-[1.05]"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Two Disciplines.
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-purple-500">
              One Mission.
            </span>
          </h1>
          <p className="mt-8 text-muted text-lg leading-relaxed max-w-xl">
            We operate at the intersection of technical engineering and digital
            growth strategy — combining both to build systems that attract,
            convert, and retain customers at scale.
          </p>
        </motion.div>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 bg-accent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <h2
            className="text-2xl font-bold uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Technical Engineering
          </h2>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {technicalServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
          <h2
            className="text-2xl font-bold uppercase tracking-widest text-white"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Digital Growth
          </h2>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {growthServices.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </motion.div>
      </section>

      <section className="border-t border-white/10 px-6 lg:px-12 max-w-7xl mx-auto py-24 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between gap-8 mt-12">
        <div>
          <h2
            className="text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Ready to get started?
          </h2>
          <p className="text-muted text-base max-w-md">
            Tell us about your project and we&apos;ll scope out a tailored technical solution.
          </p>
        </div>
        <Link
          href="/contact"
          className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-accent text-white text-sm tracking-[0.2em] uppercase font-bold px-10 py-5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1 group shrink-0"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start a Project <ArrowRight className="w-4 h-4" />
          </span>
          <div className="absolute inset-0 bg-linear-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
      </section>
    </div>
  );
}
