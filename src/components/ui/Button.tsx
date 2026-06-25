import Link from "next/link"
import Image from "next/image"

interface ButtonProps {
  href?: string
  type?: "button" | "submit"
  disabled?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export default function Button({
  href,
  type = "button",
  disabled = false,
  onClick,
  className = "",
  children,
}: ButtonProps) {
  const classes = `btn-style-one ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        <span className="btn-arrow-left">
          <Image src="/images/icons/right-arrow-1-2.png" alt="arrow" width={12} height={12} />
        </span>
        <span className="btn-title">{children}</span>
        <span className="btn-arrow-right">
          <Image src="/images/icons/right-arrow-1-2.png" alt="arrow" width={12} height={12} />
        </span>
      </Link>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${classes} cursor-pointer`}
    >
      <span className="btn-arrow-left">
        <Image src="/images/icons/right-arrow-1-2.png" alt="arrow" width={12} height={12} />
      </span>
      <span className="btn-title">{children}</span>
      <span className="btn-arrow-right">
        <Image src="/images/icons/right-arrow-1-2.png" alt="arrow" width={12} height={12} />
      </span>
    </button>
  )
}
