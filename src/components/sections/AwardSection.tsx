import { awards } from "@/data/home"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"

export default function AwardSection() {
  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D] overflow-hidden">
      <div className="absolute left-6 top-1/4 w-80 h-80 pointer-events-none opacity-20 relative">
        <Image src="/images/icons/award-shape-1-2.png" alt="award bg" fill className="object-contain blend-screen animate-bounce" sizes="320px" />
      </div>
      <div className="absolute left-24 top-1/3 w-96 h-96 pointer-events-none opacity-10 relative">
        <Image src="/images/icons/award-light-1-1.png" alt="light" fill className="object-contain blend-screen" sizes="384px" />
      </div>
      <div className="absolute right-6 bottom-12 w-80 h-80 pointer-events-none opacity-20 relative">
        <Image src="/images/icons/award-shape-1-3.png" alt="shape" fill className="object-contain blend-screen animate-pulse" sizes="320px" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            {awards.map((award, idx) => (
              <Card
                key={idx}
                className="group flex flex-col sm:flex-row gap-6 items-start sm:items-center p-6"
              >
                <div className="flex gap-4 items-center shrink-0">
                  <span className="font-heading text-lg font-extrabold text-[#FF6B1E]">
                    {award.year}
                  </span>
                  <div className="w-14 h-14 bg-black/40 rounded-2xl flex items-center justify-center p-3 border border-white/5">
                    <Image src={award.img} alt={award.title} className="w-full h-full object-contain" width={56} height={56} />
                  </div>
                </div>
                <div className="space-y-1">
                  <h4 className="font-heading text-lg font-extrabold uppercase tracking-wider text-white">
                    {award.title}
                  </h4>
                  <p className="text-zinc-500 text-xs leading-relaxed font-light">
                    {award.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <SectionHeading tag="Award Winning Company">
                Innovation for Business{" "}
                <span className="text-[#FF6B1E]">Growth with ABBA Digital</span>
              </SectionHeading>
            <p className="text-zinc-400 font-light leading-relaxed">
              We understand that every business is unique. That&apos;s why we offer customized solutions to meet your specific needs.
            </p>

            <div className="relative w-44 h-44 mx-auto lg:mx-0 opacity-15 pointer-events-none">
              <Image src="/images/icons/award-shape-1-1.png" alt="wheel" className="w-full h-full object-contain tm-gsap-animate-circle blend-screen" width={176} height={176} />
            </div>

            <div className="flex justify-center lg:justify-start gap-4">
              <span className="font-heading text-5xl font-extrabold text-[#FF6B1E]">15+</span>
              <p className="text-xs font-bold text-zinc-300 uppercase tracking-widest text-left leading-normal">
                Years In Providing <br />
                Digital Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
