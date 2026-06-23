import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Pages: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "App Development", href: "/services#app-development" },
    { label: "Digital Marketing", href: "/services#digital-marketing" },
    { label: "Analytics", href: "/services#analytics" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Upper footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="inline-block mb-6 hover:opacity-80 transition-opacity duration-200"
              aria-label="ABBA DIGITAL — Home"
            >
              <Image
                src="/logo.png"
                alt="ABBA DIGITAL"
                width={160}
                height={160}
                className="h-12 w-auto invert"
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed max-w-sm mb-10">
              We build scalable digital infrastructure and engineer measurable
              business growth for ambitious brands worldwide.
            </p>
            <div>
              <Link
                href="/contact"
                className="relative overflow-hidden inline-flex items-center justify-center rounded-full bg-accent text-white text-xs tracking-[0.2em] uppercase font-bold px-8 py-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] hover:-translate-y-1 group"
              >
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-linear-to-r from-accent to-accent-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-white text-xs tracking-[0.2em] uppercase font-bold mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                {group}
              </h3>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Lower footer — separator + copyright */}
      <div className="border-t border-white/10 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-muted text-xs tracking-wide">
            © {currentYear} ABBA DIGITAL. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="/privacy"
              className="text-muted text-xs hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted text-xs hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
