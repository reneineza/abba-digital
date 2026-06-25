import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Services() {
  const pillars = [
    {
      num: "01",
      title: "Web Architecture",
      narrative:
        "We build high-speed, secure, and structurally sound web platforms. Our websites are treated as digital real estate designed to perform flawlessly under pressure, load instantly, and act as the central hub for a business's operations.",
      features: [
        "Headless / JAMstack Implementations (Next.js, React)",
        "Edge Hosting & Global Content Delivery Networks",
        "Technical SEO & Core Web Vitals Optimization",
        "Secure Database Architecture & Clean State Management",
      ],
      metrics: "Core Web Vitals Score: 98+ Average | Hydration Time: <0.4s",
    },
    {
      num: "02",
      title: "Mobile Applications",
      narrative:
        "Seamless, cross-platform mobile experiences that bring utility directly to users' pockets. We design intuitive interfaces and robust mobile systems that maintain high engagement and flawless functionality.",
      features: [
        "Cross-Platform Development (React Native, Flutter)",
        "Native API integration & Device Sensor Connectivity",
        "Offline-First Capability & Local Data Syncing",
        "Streamlined Store Publishing & Beta Release Pipelines",
      ],
      metrics: "Crash-Free Session Rate: 99.9% | Data Sync Latency: <100ms",
    },
    {
      num: "03",
      title: "Full-Spectrum Digital Marketing",
      narrative:
        "Growth is not an accident; it is engineered. We deploy integrated marketing campaigns, performance marketing, and client-acquisition pipelines that drive measurable scale, turning traffic into consistent, predictable revenue.",
      features: [
        "Data-Driven Performance Marketing & Ad Auditing",
        "Advanced Conversion Rate Optimization (CRO)",
        "End-to-End Client Acquisition Funnels",
        "Behavioral Analytics Tracking & Attribution Setup",
      ],
      metrics: "Average Client ROI: 3.8x | Conversion Rate Increase: +32% avg",
    },
    {
      num: "04",
      title: "Integrated Solutions",
      narrative:
        "Connecting the dots between complex platforms. From custom software integrations to end-to-end digital systems, we unify a brand's technical infrastructure so their entire business scales seamlessly from code to campaign.",
      features: [
        "Custom API Development & Legacy Migration",
        "Automated CRM & Customer Data Platform Integrations",
        "Workflow Automation & Operations Streamlining",
        "Enterprise Dashboard & Real-Time Reporting Systems",
      ],
      metrics: "Manual Labor Hours Saved: 40%+ | Data Synchronization: 100%",
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
              {"// SPECIFICATION SHEET"}
            </span>
            <h1 className="font-heading text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-white leading-none">
              Our Capabilities
            </h1>
            <nav className="flex font-mono text-xs text-zinc-500 uppercase gap-2 pt-2">
              <Link href="/" className="hover:text-[#FF6B1E] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#FF6B1E] font-semibold">Services</span>
            </nav>
          </div>
        </div>
      </section>

      {/* The Balance: Engineering vs Scale Section */}
      <section className="py-24 md:py-32 border-b border-white/8 bg-[#0D0D0D]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Block: Technical Engineering */}
            <div className="border-t border-[#FF6B1E] pt-12 space-y-6">
              <span className="font-mono text-xs font-bold text-[#FF6B1E] block uppercase">
                {"SYSTEM PILLAR 01 // CORE INFRASTRUCTURE"}
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Technical Engineering & Craftsmanship
              </h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
                We design and engineer robust digital architecture that acts as a secure, high-speed foundation. 
                We write clean, semantic code that compiles flawlessly, loads instantly, and runs with high reliability 
                under heavy operations. We treat code as the core foundation of your digital asset.
              </p>
              <ul className="space-y-4">
                {["Zero-latency databases", "Highly-scalable hosting", "Strict type-safety configurations", "Clean data mapping"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="font-mono text-xs text-[#FF6B1E] font-bold">[0{index + 1}]</span>
                    <span className="font-heading text-sm font-bold uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Block: Marketing & Scale */}
            <div className="border-t border-[#FF6B1E] pt-12 space-y-6">
              <span className="font-mono text-xs font-bold text-[#FF6B1E] block uppercase">
                {"SYSTEM PILLAR 02 // PERFORMANCE ENGINE"}
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
                Aggressive Scale & Marketing Execution
              </h2>
              <p className="text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
                Great infrastructure needs a powerful performance engine to drive scaling. We execute performance-driven 
                digital marketing campaigns, build customer acquisitions, and deploy CRM setups. Growth is engineered by 
                deploying client acquisition pipelines that transform traffic into predictable revenue streams.
              </p>
              <ul className="space-y-4">
                {["Optimized client acquisition funnels", "Predictable revenue channels", "Attribution tracking architectures", "Aggressive conversion optimization"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="font-mono text-xs text-[#FF6B1E] font-bold">[0{index + 1}]</span>
                    <span className="font-heading text-sm font-bold uppercase tracking-wider">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Specification Segment */}
      <section className="py-24 md:py-32 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20">
            <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#FF6B1E] uppercase block mb-3">
              {"// DETAILED ARCHITECTURE"}
            </span>
            <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              Pillar Specifications
            </h2>
          </div>

          <div className="space-y-16">
            {pillars.map((pillar) => (
              <div
                key={pillar.num}
                className="border border-white/5 rounded-[45px] p-8 md:p-12 hover:border-[#FF6B1E]/40 transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#151515] shadow-xl group"
              >
                {/* Index / Info */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-lg font-bold text-[#FF6B1E] block mb-4">
                      {pillar.num}
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white mb-4 group-hover:text-[#FF6B1E] transition-colors">
                      {pillar.title}
                    </h3>
                  </div>
                  <div className="border-t border-white/5 pt-6 mt-8 lg:mt-0 font-heading text-xs tracking-wider">
                    <span className="block text-zinc-500 font-bold mb-2">BENCHMARKS:</span>
                    <span className="text-[#FF6B1E] font-bold">{pillar.metrics}</span>
                  </div>
                </div>

                {/* Narrative & Feature List */}
                <div className="lg:col-span-8 space-y-6">
                  <p className="text-zinc-400 leading-relaxed font-light text-sm sm:text-base">
                    {pillar.narrative}
                  </p>
                  <div className="border-t border-white/5 pt-6">
                    <span className="font-heading text-xs font-bold text-zinc-500 block mb-4 tracking-widest uppercase">
                      INCLUDED SYSTEM CAPABILITIES:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {pillar.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#FF6B1E] font-semibold text-sm">&bull;</span>
                          <span className="text-sm text-zinc-300 leading-tight font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-28 border border-white/5 rounded-[45px] p-8 md:p-16 text-center max-w-4xl mx-auto bg-[#151515] shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] bg-size-[16px_16px] opacity-60"></div>
            <div className="relative space-y-6">
              <h3 className="font-heading text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
                Require Custom Technical Specifications?
              </h3>
              <p className="text-zinc-400 leading-relaxed max-w-xl mx-auto mb-8 font-light text-sm sm:text-base">
                Every business runs on different operational pipelines. We build custom software integrations, data pipelines,
                and scaling engines configured specifically for your workflow.
              </p>
              
              <Button href="/contact">Initiate Project Planning</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
