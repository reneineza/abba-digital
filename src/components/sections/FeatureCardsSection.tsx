import { featureCards } from "@/data/home"
import Image from "next/image"
import Link from "next/link"

export default function FeatureCardsSection() {
  return (
    <section className="relative py-28 border-b border-white/8 overflow-hidden select-none">
      <div className="absolute left-0 top-1/4 w-32 h-64 pointer-events-none float-bob-y opacity-30">
        <Image src="/images/resource/feature-shape-1-1.png" alt="shape" className="object-contain" fill />
      </div>
      <div className="absolute right-0 bottom-1/4 w-32 h-64 pointer-events-none float-bob-y opacity-30">
        <Image src="/images/resource/feature-shape-1-2.png" alt="shape" className="object-contain" fill />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featureCards.map((card, i) => (
            <div key={i} className="group relative pt-10 pb-10 border-b md:border-b-0 md:border-r border-white/8 last:border-0 px-4 space-y-6">
              <div className="w-14 h-14 relative">
                <Image src={card.icon} alt={card.title} className="object-contain filter brightness-100" fill />
              </div>
              <h4 className="font-heading text-2xl font-extrabold uppercase tracking-tight text-white group-hover:text-[#FF6B1E] transition-colors">
                {card.title}
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {card.desc}
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 text-xs font-bold text-[#FF6B1E] uppercase tracking-widest hover:text-white transition-colors">
                <span>Read More</span>
                <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8.00008L15 8.00008M18.3361 8.01939C15.2241 7.82927 9 9.16017 9 16.0048M18.3361 7.98545C15.2241 8.17558 9 6.84467 9 0" stroke="#FF6B1E" stroke-width="1.5"/>
                </svg>
              </Link>
              <div className="absolute right-0 top-0 bottom-0 w-px bg-white/5 last:hidden"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
