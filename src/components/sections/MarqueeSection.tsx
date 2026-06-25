import { marqueeItems, marqueeItemsOrange } from "@/data/home"
import Image from "next/image"

export default function MarqueeSection() {
  return (
    <section className="py-12 bg-black border-b border-white/8 overflow-hidden select-none">
      <div className="space-y-4">
        <div className="relative flex overflow-x-hidden border-b border-white/5 pb-4">
          <div className="animate-marquee-left flex gap-12 text-2xl md:text-4xl font-heading font-extrabold uppercase tracking-wider text-white">
            {Array(3).fill(marqueeItems).flat().map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <Image src={item.star} alt="star shape" className="w-6 h-6 object-contain" width={24} height={24} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex overflow-x-hidden pt-2">
          <div className="animate-marquee-right flex gap-12 text-2xl md:text-4xl font-heading font-extrabold uppercase tracking-wider text-[#FF6B1E]">
            {Array(3).fill(marqueeItemsOrange).flat().map((item, idx) => (
              <div key={idx} className="flex items-center gap-6">
                <Image src={item.star} alt="star shape" className="w-6 h-6 object-contain" width={24} height={24} />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
