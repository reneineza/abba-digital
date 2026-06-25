import { services } from "@/data/home"
import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"

export default function ServicesGridSection() {
  return (
    <section
      className="relative py-28 bg-cover bg-center border-b border-white/8 select-none"
      style={{ backgroundImage: "url('/images/background/service-bg-1-1.jpg')" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading tag="What We Do" center className="mb-20">
            Helping You Succeed Through{" "}
            <span className="text-[#FF6B1E]">Creative & Digital Services</span>
          </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-[#151515]/95 border border-white/5 hover:border-[#FF6B1E]/40 p-8 rounded-3xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="relative w-12 h-12">
                    <Image src={service.icon} alt={service.title} className="w-full h-full object-contain" fill />
                  </div>
                  <span className="font-heading text-lg font-extrabold text-zinc-600 group-hover:text-[#FF6B1E] transition-colors">
                    {service.num}
                  </span>
                </div>
                <h4 className="font-heading text-xl font-extrabold uppercase tracking-wide text-white">
                  {service.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>

              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B1E] uppercase tracking-widest mt-8 hover:text-white transition-colors"
              >
                <span>View Details</span>
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#FF6B1E" stroke-width="1.5"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
