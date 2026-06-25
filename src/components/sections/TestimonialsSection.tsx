"use client"

import { useState } from "react"
import { testimonials } from "@/data/home"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0d0d0d] overflow-hidden">
      <div className="absolute inset-0 opacity-15 pointer-events-none relative">
        <Image src="/images/icons/testi-bg-shape.png" alt="bg shape" fill className="object-cover blend-screen" sizes="100vw" />
      </div>
      <div className="absolute left-6 top-1/4 w-72 h-72 pointer-events-none opacity-25 relative">
        <Image src="/images/icons/testi-light-shape-1-1.png" alt="light" fill className="object-contain blend-screen" sizes="288px" />
      </div>
      <div className="absolute left-16 top-1/3 w-32 h-32 pointer-events-none opacity-30 tm-gsap-animate-circle relative">
        <Image src="/images/icons/testi-shape-1-1.png" alt="shape" fill className="object-contain blend-screen" sizes="128px" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          <SectionHeading tag="Testimonial">
              The Best Customers <br />
              Says <span className="text-[#FF6B1E]">About Our Action</span>
            </SectionHeading>

          <div className="lg:col-span-4 flex items-center gap-4 bg-[#151515] p-5 rounded-3xl border border-white/5">
            <span className="font-heading text-4xl font-extrabold text-white">4.8</span>
            <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest leading-normal">
              (5k+) Customer <br />
              <span className="text-[#FF6B1E]">Reviews</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              <svg className="w-full h-full ani-circle" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="testimonialCircle" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                </defs>
                <text fontSize="13" fill="#FF6B1E" fontWeight="700" letterSpacing="3" fontFamily="monospace">
                  <textPath href="#testimonialCircle">CUSTOMER REVIEW ★ HAPPY CLIENTS ★ </textPath>
                </text>
              </svg>
              <div className="absolute w-12 h-12 flex items-center justify-center">
                <Image src="/images/icons/quote-icon-1-1.png" alt="quotes logo" className="w-8 h-8 object-contain blend-screen" width={32} height={32} />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-[#151515] p-8 md:p-10 rounded-[35px] border border-white/5 space-y-6">
              <div className="flex gap-1.5 text-[#FF6B1E]">
                {Array(testimonials[activeTestimonial].stars).fill(0).map((_, i) => (
                  <span key={i} className="text-lg font-bold">&starf;</span>
                ))}
              </div>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light italic">
                &quot;{testimonials[activeTestimonial].quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/10 relative">
                  <Image src={testimonials[activeTestimonial].image} alt="Client" fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <h5 className="font-heading text-base font-extrabold text-white uppercase tracking-wider">
                    {testimonials[activeTestimonial].name}
                  </h5>
                  <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest">
                    {testimonials[activeTestimonial].role}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-[#FF6B1E] hover:text-black transition-all cursor-pointer"
              >
                &larr;
              </button>
              <button
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center hover:bg-[#FF6B1E] hover:text-black transition-all cursor-pointer"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h4 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wider text-white">
            Our Customers <br />
            <span className="text-[#FF6B1E]">Consistently Rated 4.8/5</span>
          </h4>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 w-full md:w-auto">
            <div className="flex items-center gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5 w-full sm:w-auto">
              <Image src="/images/icons/capterra-1-1.png" alt="capterra" className="h-6 object-contain" width={24} height={24} />
              <div>
                <h5 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider">Capterra</h5>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">4.8/5 (102 Reviews)</span>
              </div>
            </div>
            <div className="w-px h-8 bg-white/5 hidden sm:block"></div>
            <div className="flex items-center gap-4 bg-[#151515] p-5 rounded-2xl border border-white/5 w-full sm:w-auto">
              <Image src="/images/icons/google-1-1.png" alt="google" className="h-6 object-contain" width={24} height={24} />
              <div>
                <h5 className="font-heading text-sm font-extrabold text-white uppercase tracking-wider">Google</h5>
                <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">4.8/5 (102 Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
