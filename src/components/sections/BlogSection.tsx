import { blogPosts } from "@/data/home"
import Link from "next/link"
import Image from "next/image"
import SectionHeading from "@/components/ui/SectionHeading"
import Card from "@/components/ui/Card"

export default function BlogSection() {
  return (
    <section className="relative py-28 select-none bg-[#0D0D0D]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading tag="Our Blog" center className="mb-20">
            Check Out Latest News <br />
            <span className="text-[#FF6B1E]">Updates & Articles</span>
          </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((blog, idx) => (
            <Card key={idx} rounded="[40px]" className="group overflow-hidden shadow-xl flex flex-col justify-between">
              <div>
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-[#FF6B1E] text-black font-heading text-lg font-extrabold p-3 rounded-2xl w-12 h-12 flex items-center justify-center">
                    {blog.date}
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <span className="text-xs font-bold text-[#FF6B1E] uppercase tracking-widest">
                    Digital Agency
                  </span>
                  <h4 className="font-heading text-lg sm:text-xl font-extrabold uppercase tracking-wide text-white group-hover:text-[#FF6B1E] transition-colors leading-tight">
                    <Link href="/">{blog.title}</Link>
                  </h4>
                </div>
              </div>

              <div className="px-8 pb-8">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white uppercase tracking-widest hover:text-[#FF6B1E] transition-colors"
                >
                  <span>Read More</span>
                  <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 5.60006L10.5 5.60006M12.8353 5.61358C10.6569 5.48049 6.3 6.41212 6.3 11.2034M12.8353 5.58981C10.6569 5.7229 6.3 4.79127 6.3 0" stroke="white" stroke-width="1.5"/>
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
