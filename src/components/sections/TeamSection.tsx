import { teamMembers } from "@/data/home"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"

export default function TeamSection() {
  return (
    <section
      className="relative py-28 bg-cover bg-center border-b border-white/8 select-none"
      style={{ backgroundImage: "url('/images/background/team-bg-1-1.jpg')" }}
    >
      <div className="absolute right-6 top-1/4 w-80 h-80 pointer-events-none opacity-20 relative">
        <Image src="/images/icons/team-light-1-1.png" alt="bg shape" fill className="object-contain blend-screen" sizes="320px" />
      </div>
      <div className="absolute right-16 top-1/3 w-36 h-36 pointer-events-none opacity-30 tm-gsap-animate-circle relative">
        <Image src="/images/icons/team-shape-1-1.png" alt="shape" fill className="object-contain blend-screen" sizes="144px" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading tag="Our Team" center className="mb-20">
            Meet Our Experienced <br />
            <span className="text-[#FF6B1E]">Team People</span>
          </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <Card key={idx} rounded="[40px]" className="group overflow-hidden shadow-xl">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-[#FF6B1E]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4 text-black text-lg font-bold">
                    {["Twitter", "Facebook", "Pinterest", "Instagram"].map((s, i) => (
                      <a key={i} href="#" className="hover:text-white transition-colors uppercase text-xs tracking-wider">{s}</a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h4 className="font-heading text-lg font-extrabold uppercase tracking-wider text-white">
                  {member.name}
                </h4>
                <span className="text-xs text-zinc-500 font-bold uppercase tracking-widest mt-1 block">
                  {member.role}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
