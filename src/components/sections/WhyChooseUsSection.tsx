import Image from "next/image"
import { whyChooseUsItems } from "@/data/home"
import SectionHeading from "@/components/ui/SectionHeading"

export default function WhyChooseUsSection() {
  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <SectionHeading tag="Why Choose Us">
                Here&apos;s Why Brands Trust{" "}
                <span className="text-[#FF6B1E]">Our Expertise</span>
              </SectionHeading>
            <p className="text-zinc-400 font-light leading-relaxed">
              We design and engineer digital platforms that convert. Our approach is grounded in deep technical diagnostics, clean UI patterns, and aggressive performance integrations.
            </p>

            <div className="space-y-6">
              {whyChooseUsItems.map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <div className="w-12 h-12 shrink-0">
                    <Image src={item.icon} alt={item.title} width={48} height={48} className="object-contain" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-heading text-lg font-extrabold uppercase tracking-wider text-white">
                      {item.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 overflow-hidden select-none">
                  {["client-1-1.jpg", "client-1-2.jpg", "client-1-3.jpg", "client-1-4.jpg"].map((img, i) => (
                    <Image
                      key={i}
                      src={`/images/icons/${img}`}
                      alt="Customer Avatar"
                      width={36}
                      height={36}
                      className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0D0D0D] object-cover"
                    />
                  ))}
                </div>
                <span className="font-heading text-xs font-bold text-white uppercase tracking-widest">
                  300+ Happy Customers
                </span>
              </div>
              <div className="w-12 h-12 opacity-50 shrink-0 hidden sm:block">
                <Image src="/images/icons/ball.png" alt="Decorative sphere shape" width={48} height={48} className="object-contain animate-bounce" style={{ animationDuration: "5s" }} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-[85%] aspect-4/5 rounded-[0px_100px_100px_100px] border border-white/8 overflow-hidden">
              <Image src="/images/resource/choose-us-1-1.jpg" alt="Developer Team" fill sizes="(max-width: 1024px) 85vw, 40vw" className="object-cover" />
              <div className="absolute bottom-8 left-8 bg-[#FF6B1E] p-6 rounded-3xl border border-white/10 shadow-2xl flex items-center gap-4">
                <span className="font-heading text-5xl font-extrabold text-[#0D0D0D]">10%</span>
                <p className="text-xs font-bold text-[#0D0D0D] uppercase tracking-widest leading-normal">
                  Satisfied Clients <br />
                  Returning Often
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
