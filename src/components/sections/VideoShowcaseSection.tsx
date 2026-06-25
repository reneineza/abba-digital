import Image from "next/image"

export default function VideoShowcaseSection() {
  return (
    <section className="relative py-28 border-b border-white/8 select-none bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative aspect-video rounded-[45px] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
          <Image src="/images/resource/video-1-1.jpg" alt="Video cover" fill sizes="(max-width: 1280px) 100vw, 1280px" className="absolute inset-0 object-cover opacity-80" />

          <div className="absolute top-12 left-12 w-20 h-20 opacity-20 pointer-events-none">
            <Image src="/images/icons/video-shape-1-1.png" alt="shape" width={80} height={80} className="object-contain" />
          </div>

          <div className="relative z-10 text-center space-y-6 px-4">
            <div className="flex justify-center">
              <a
                href="https://www.youtube.com/watch?v=Fvae8nxzVz4"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-20 h-20 rounded-full bg-[#FF6B1E] flex items-center justify-center hover:scale-105 transition-transform"
              >
                <span className="ripple"></span>
                <span className="ripple" style={{ animationDelay: "0.5s" }}></span>
                <span className="ripple" style={{ animationDelay: "1s" }}></span>

                <svg className="w-6 h-6 text-white ml-1 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
            <h3 className="font-heading text-xl sm:text-3xl font-extrabold uppercase tracking-wider text-white max-w-2xl">
              See How We Turn Ideas Into Impactful Digital Experiences
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
