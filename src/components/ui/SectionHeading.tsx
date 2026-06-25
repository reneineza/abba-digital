import Image from "next/image"

interface SectionHeadingProps {
  tag: string
  center?: boolean
  className?: string
  children: React.ReactNode
}

export default function SectionHeading({
  tag,
  center = false,
  className = "",
  children,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center max-w-2xl mx-auto" : ""} space-y-3 ${className}`}>
      <span className={`inline-flex items-center gap-2 font-mono text-xs font-semibold tracking-[0.3em] text-[#FF6B1E] uppercase ${center ? "justify-center" : ""}`}>
        <Image src="/images/icons/star.png" alt="star" width={12} height={12} className="object-contain" />
        {tag}
      </span>
      <h2 className="font-heading text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-none">
        {children}
      </h2>
    </div>
  )
}
