interface CardProps {
  hover?: boolean
  rounded?: "2xl" | "3xl" | "[40px]"
  className?: string
  children: React.ReactNode
}

const roundedMap = {
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "[40px]": "rounded-[40px]",
} as const

export default function Card({
  hover = true,
  rounded = "3xl",
  className = "",
  children,
}: CardProps) {
  return (
    <div className={`bg-[#151515] border border-white/5 ${roundedMap[rounded]} ${hover ? "hover:border-[#FF6B1E]/30 transition-all duration-300" : ""} ${className}`}>
      {children}
    </div>
  )
}
