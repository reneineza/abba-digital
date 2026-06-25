"use client"

import { useState } from "react"
import { steps } from "@/data/home"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"

export default function WorkProcessSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <SectionHeading tag="Working Process">
                Shaping the Future Through{" "}
                <span className="text-[#FF6B1E]">Step-by-Step Innovation</span>
              </SectionHeading>
            <div className="relative w-64 h-64 opacity-80 pt-6">
              <Image src="/images/icons/work-process-shape1-1.png" alt="Process shape" fill sizes="256px" className="object-contain tm-gsap-animate-circle blend-screen" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`group cursor-pointer p-8 rounded-3xl transition-all duration-300 border ${
                    isActive
                      ? "bg-[#FF6B1E] border-transparent text-[#0D0D0D]"
                      : "bg-[#151515] border-white/5 hover:border-[#FF6B1E]/30 text-white"
                  }`}
                >
                  <div className="flex gap-6 items-start">
                    <span className={`font-heading text-2xl font-extrabold tracking-widest ${
                      isActive ? "text-[#0D0D0D]/60" : "text-zinc-600"
                    }`}>
                      {step.num}
                    </span>
                    <div className="space-y-4 w-full">
                      <h4 className="font-heading text-2xl font-extrabold uppercase tracking-wide">
                        {step.title}
                      </h4>
                      <p className={`text-sm leading-relaxed font-light transition-colors ${
                        isActive ? "text-[#0D0D0D]/80" : "text-zinc-400"
                      }`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
