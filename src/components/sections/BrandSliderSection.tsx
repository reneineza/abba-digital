import { brands } from "@/data/home"
import Image from "next/image"

export default function BrandSliderSection() {
  return (
    <section className="py-16 bg-[#0D0D0D] border-b border-white/8 overflow-hidden select-none">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee-left flex gap-16 items-center">
          {Array(4).fill(brands).flat().map((img, idx) => (
            <div key={idx} className="w-36 h-12 opacity-40 hover:opacity-100 transition-opacity shrink-0">
              <Image src={img} alt="brand partner logo" className="w-full h-full object-contain filter invert" width={144} height={48} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
