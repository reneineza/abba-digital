import { projects } from "@/data/home"
import Image from "next/image"
import Link from "next/link"
import SectionHeading from "@/components/ui/SectionHeading"
import Button from "@/components/ui/Button"

export default function ProjectsShowcaseSection() {
  return (
    <section className="relative py-28 border-b border-white/8 overflow-hidden select-none bg-[#0D0D0D]">
      <div className="absolute right-12 top-12 w-64 h-64 pointer-events-none opacity-20">
        <Image src="/images/icons/ellipse1-1.png" alt="dot bg" className="w-full h-full object-contain" fill />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeading tag="Case Study">
              Our Recently Completed{" "}
              <span className="text-[#FF6B1E]">Latest Projects</span>
            </SectionHeading>

          <Button href="/work" className="shrink-0">View All Projects</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="group relative space-y-6">
              <div className="relative aspect-4/5 rounded-[40px] overflow-hidden border border-white/5 shadow-xl">
                <Image
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <Link href="/work" className="absolute right-6 bottom-6 w-12 h-12 rounded-full bg-[#FF6B1E] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Image src="/images/icons/arrow-icon.png" alt="diagonal arrow" className="w-4 h-4 object-contain" width={16} height={16} />
                </Link>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading text-xl font-extrabold uppercase tracking-wide text-white group-hover:text-[#FF6B1E] transition-colors">
                  <Link href="/work">{proj.title}</Link>
                </h4>
                <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 uppercase tracking-widest">
                  <span>{proj.categories[0]}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B1E]"></span>
                  <span>{proj.categories[1]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
