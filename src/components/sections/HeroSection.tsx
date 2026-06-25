"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/Button"

export default function HeroSection() {
  const [rotation, setRotation] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setRotation(window.scrollY * 0.15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative pt-32 pb-32 md:pt-44 md:pb-44 overflow-hidden bg-cover bg-center select-none"
      style={{ backgroundImage: "url('/images/banner/hero-bg-1-1.jpg')" }}
    >
      <div className="absolute top-24 left-12 w-28 h-28 pointer-events-none float-bob-y opacity-90">
        <Image src="/images/icons/hero-object-1-1.png" alt="3D Sphere" className="object-contain blend-screen" fill />
      </div>
      <div className="absolute bottom-24 right-1/4 w-24 h-24 pointer-events-none float-bob-y opacity-80" style={{ animationDelay: "1s" }}>
        <Image src="/images/icons/hero-object-1-2.png" alt="3D Shape" className="object-contain blend-screen" fill />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl space-y-10">
          <div className="opacity-95 hidden md:block">
            <svg width="240" height="22" viewBox="0 0 283 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M281.958 9.2867C287.808 -5.23407 75.0926 -2.10704 2.45233 14.3507C-1.44595 14.8817 -0.44477 17.216 3.6793 16.6863C104.169 5.89575 175.017 4.9921 240.033 6.76138C334.734 9.62295 123.021 14.9105 110.28 21.2919C107.951 22.4583 106.638 25.9245 114.938 25.4909C195.706 18.049 277.839 19.5104 281.958 9.2867Z" fill="#FF6B1E"/>
            </svg>
          </div>

          <h1 className="font-heading text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase leading-[0.9] text-white tracking-tight">
            <span className="text-zinc-400 font-light block normal-case">We Build Digital</span>
            Experiences That <br />Grow Your Business
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-10 pt-4">
            <div className="relative w-24 h-24 shrink-0 hidden sm:flex items-center justify-center">
              <svg className="w-full h-full ani-circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <path id="circlePath" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text fontSize="10.5" fill="#FF6B1E" fontWeight="700" letterSpacing="2" fontFamily="monospace" style={{ textTransform: "uppercase" }}>
                  <textPath href="#circlePath">DIGITAL AGENCY ★ WEB DESIGN ★ </textPath>
                </text>
              </svg>
              <Link href="/services" className="absolute w-10 h-10 rounded-full bg-[#151515] flex items-center justify-center hover:bg-[#FF6B1E] transition-colors border border-white/10">
                <Image src="/images/icons/right-arrow-1-1.png" alt="arrow" className="object-contain" width={14} height={14} />
              </Link>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                From startups to established companies, we create high-impact digital solutions that attract, engage, and convert customers.
              </p>
              <Button href="/services">Discover More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
