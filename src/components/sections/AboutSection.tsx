import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="relative py-28 border-b border-white/8 overflow-hidden select-none">
      <div className="absolute left-6 top-12 w-64 h-64 pointer-events-none opacity-20">
        <Image src="/images/icons/about-light-1-1.png" alt="shape" className="object-contain blend-screen" fill />
      </div>
      <div className="absolute left-24 top-24 w-32 h-32 pointer-events-none opacity-30 tm-gsap-animate-circle">
        <Image src="/images/icons/about-shape-1-1.png" alt="shape" className="object-contain blend-screen" fill />
      </div>
      <div className="absolute right-12 bottom-12 w-72 h-72 pointer-events-none opacity-20">
        <Image src="/images/icons/about-light-1-2.png" alt="shape" className="object-contain blend-screen" fill />
      </div>
      <div className="absolute right-24 bottom-24 w-36 h-36 pointer-events-none opacity-30 tm-gsap-animate-circle">
        <Image src="/images/icons/about-shape-1-2.png" alt="shape" className="object-contain blend-screen" fill />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-[85%] aspect-4/5 rounded-[100px_0px_100px_100px] border border-white/8 overflow-hidden relative">
              <Image src="/images/resource/about-1-1.jpg" alt="Team Discussion" className="object-cover" fill />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase">
                <Image src="/images/icons/star.png" alt="star" className="object-contain" width={12} height={12} />
                Who We Are
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
                A Creative Digital Agency Focused <span className="text-[#FF6B1E]">on Real Results</span>
              </h2>
            </div>

            <p className="text-zinc-400 font-light leading-relaxed">
              ABBA Digital builds web assets that perform under operational pressure. We eliminate technical lag, ensure edge caching speed, and build client acquisition funnels that convert traffic into predictable, systematic pipelines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-heading text-sm font-bold uppercase tracking-wider text-white">
              {["Creativity Meets Strategy", "Design. Develop. Deliver.", "Innovative Development", "Unleashing Digital Power."].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B1E]"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
              <div className="w-36 h-24 rounded-2xl overflow-hidden border border-white/8 shrink-0 relative">
                <Image src="/images/resource/about-1-2.jpg" alt="meeting" className="object-cover" fill />
              </div>
              <div className="flex items-center gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5 w-full sm:w-auto">
                <span className="font-heading text-5xl font-extrabold text-[#FF6B1E]">5%</span>
                <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest leading-normal">
                  Satisfied Clients <br />
                  Returning Often
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/services" className="btn-style-one">
                <span className="btn-arrow-left">
                  <Image src="/images/icons/right-arrow-1-2.png" alt="arrow" width={12} height={12} />
                </span>
                <span className="btn-title">Discover More</span>
                <span className="btn-arrow-right">
                  <Image src="/images/icons/right-arrow-1-2.png" alt="arrow" width={12} height={12} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
