"use client"

import { useState } from "react"
import { faqs } from "@/data/home"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D] overflow-hidden">
      <div className="absolute left-6 top-1/4 w-80 h-80 pointer-events-none opacity-20">
        <Image src="/images/icons/faq-light-1-1.png" alt="faq bg" width={320} height={320} className="object-contain blend-screen" />
      </div>
      <div className="absolute left-16 top-1/3 w-36 h-36 pointer-events-none opacity-35 tm-gsap-animate-circle">
        <Image src="/images/icons/faq-shape-1-1.png" alt="shape" width={144} height={144} className="object-contain blend-screen" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <SectionHeading tag="Faqs" center className="mb-20">
            Have Questions in Your Mind? <br />
            <span className="text-[#FF6B1E]">Get the Answers Now</span>
          </SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx
            return (
              <Card
                key={idx}
                className="overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left font-heading text-base sm:text-lg font-extrabold uppercase tracking-wide text-white hover:text-[#FF6B1E] transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#FF6B1E] text-xl shrink-0 ml-4">
                    {isOpen ? "\u2212" : "\u002B"}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 sm:px-8 sm:pb-8 border-t border-white/5 pt-4">
                    <p className="text-sm text-zinc-400 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </div>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
