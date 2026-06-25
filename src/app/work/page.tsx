import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Work() {
  const caseStudies = [
    {
      num: "01",
      title: "E-Commerce Growth Engine",
      category: "Web Architecture / Performance Marketing",
      client: "AeroRetail Global",
      description:
        "Architected a custom Headless Shopify solution integrated with performance scaling systems. We solved caching problems and improved mobile rendering, creating a high-speed storefront designed to convert traffic under high-volume seasonal spikes.",
      outcomes: [
        { label: "Conversion Rate", value: "+45% Increase" },
        { label: "Median Page Load", value: "0.3 Seconds" },
        { label: "Organic Revenue", value: "2.1x Scaled" },
      ],
      techUsed: ["Next.js", "GraphQL", "Tailwind CSS", "Shopify API"],
    },
    {
      num: "02",
      title: "Enterprise Logistics App",
      category: "Mobile Application / API Integration",
      client: "Vector Logistics Co.",
      description:
        "Developed a cross-platform React Native mobile application optimizing real-time route-dispatch tracking pipelines and field operations. Built a local-first offline syncing engine that handles dead zones seamlessly.",
      outcomes: [
        { label: "Dispatch Sync Latency", value: "<100ms Target" },
        { label: "Dispatch Efficiency", value: "+28% Improved" },
        { label: "App Store Rating", value: "4.9 Stars" },
      ],
      techUsed: ["React Native", "Node.js", "Redis", "Google Maps API"],
    },
    {
      num: "03",
      title: "SaaS Expansion Pipeline",
      category: "Full-Spectrum Marketing / Client Acquisition",
      client: "Vigilant Security SaaS",
      description:
        "Engineered an end-to-end client acquisition pipeline and email automation sequence. By integrating advanced behavioral tracking, we built a predictable engine that filters, scores, and captures high-value B2B opportunities.",
      outcomes: [
        { label: "Cost Per Lead (CPL)", value: "-30% Saved" },
        { label: "B2B Lead Volume", value: "+180% Generated" },
        { label: "Email Open Rate", value: "42% Average" },
      ],
      techUsed: ["HubSpot CRM", "Segment API", "PostHog Analytics"],
    },
    {
      num: "04",
      title: "Unified Business System",
      category: "Integrated Solutions / Operations",
      client: "Summit Financial Group",
      description:
        "Unified a brand's technical systems, databases, CRM, and email lists into one operational dashboard. Automated manual data sync processes to eliminate synchronization lag and billing errors.",
      outcomes: [
        { label: "Manual Sync Error Rate", value: "0.00% Defect" },
        { label: "Operational Hours Saved", value: "40+ Hours/Week" },
        { label: "Billing Accuracy", value: "100% Verified" },
      ],
      techUsed: ["AWS Lambda", "PostgreSQL", "Node.js API", "Stripe Connect"],
    },
  ];

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
              {"// CASE STUDIES & ENGAGEMENTS"}
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Selected Work
            </h1>
            <nav className="flex font-mono text-xs text-zinc-500 uppercase gap-2 pt-2">
              <Link href="/" className="hover:text-[#FF6B1E] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF6B1E] font-semibold">Work</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Case Studies Grid Section */}
      <section className="py-24 md:py-32 bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-28">
            {caseStudies.map((project, index) => (
              <div
                key={project.num}
                className="border-b border-white/5 pb-24 last:border-none last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  {/* Info Column */}
                  <div className="lg:col-span-5 space-y-6">
                    <span className="font-mono text-xs font-bold text-zinc-500 block uppercase tracking-wider">
                      PROJECT CASE 0{index + 1} {"// CLIENT:"} {project.client}
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                      {project.title}
                    </h2>
                    <span className="inline-block font-mono text-xs font-semibold bg-[#FF6B1E]/10 border border-[#FF6B1E]/20 text-[#FF6B1E] px-4 py-1.5 rounded-full uppercase tracking-widest">
                      {project.category}
                    </span>
                    <p className="text-zinc-400 leading-relaxed pt-2 font-light text-sm sm:text-base">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="pt-4 space-y-3">
                      <span className="font-heading text-xs font-bold text-zinc-500 block uppercase tracking-widest">INFRASTRUCTURE STACK:</span>
                      <div className="flex flex-wrap gap-2">
                        {project.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs border border-white/8 bg-[#151515] rounded-full px-4 py-1.5 text-zinc-300 font-light"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Outcomes / Metrics Column */}
                  <div className="lg:col-span-7 bg-[#151515] border border-white/5 rounded-[45px] p-8 md:p-12 flex flex-col justify-between min-h-[320px] shadow-2xl relative overflow-hidden group hover:border-[#FF6B1E]/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] bg-size-[16px_16px] opacity-60"></div>
                    <div className="relative">
                      <span className="font-heading text-xs font-bold text-[#FF6B1E] block mb-8 uppercase tracking-[0.2em]">
                        {"// VERIFIED BUSINESS OUTCOMES:"}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {project.outcomes.map((metric) => (
                          <div key={metric.label} className="border-t border-white/5 pt-6">
                            <span className="block text-3xl font-heading font-extrabold text-[#FF6B1E] tracking-tight mb-2">
                              {metric.value}
                            </span>
                            <span className="font-heading text-[10px] font-bold text-zinc-500 uppercase tracking-widest block">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="relative mt-12 pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500 uppercase">
                      <span>SYSTEM CODE: 0x2A9F{index}</span>
                      <span className="text-zinc-400 font-semibold">{"// METRICS SECURED"}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="mt-28 border-t border-white/5 pt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-3">
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
                Ready to Engineer Your Infrastructure?
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-xl font-light text-sm sm:text-base">
                Our team prioritizes architecture stability, clean databases, and conversion scale. 
                Let’s construct a system configured to perform under pressure.
              </p>
            </div>
            
            <Button href="/contact" className="shrink-0">Initiate Project Scope</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
