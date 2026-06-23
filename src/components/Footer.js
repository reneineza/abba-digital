import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section relative bg-[#0D0D0D] border-t border-white/8 overflow-hidden text-white">
      {/* Gencyo background shapes */}
      <div className="absolute left-0 bottom-0 w-80 h-80 pointer-events-none opacity-20 tm-gsap-animate-circle">
        <img src="/images/icons/footer-shape-1-1.png" alt="Footer Shape" className="w-full h-full object-contain" />
      </div>

      <div className="relative pt-24 pb-12">
        {/* Footer Top Header */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
          <div className="footer-line mb-8 opacity-25">
            <img src="/images/icons/footer-line1-1.png" alt="line" className="w-full" />
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8">
            <Link href="/" className="group flex items-center gap-3">
              <img 
                src="/images/logo/white-logo.png" 
                alt="ABBA Digital Logo" 
                className="h-8 object-contain" 
              />
              <span className="font-heading text-xl font-extrabold tracking-wider text-white">
                ABBA <span className="text-[#FF6B1E]">DIGITAL</span>
              </span>
            </Link>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 font-heading text-lg font-bold">
              <a href="mailto:info@abbadigital.com" className="hover:text-[#FF6B1E] transition-colors">
                info@abbadigital.com
              </a>
              <a href="tel:+12345678900" className="hover:text-[#FF6B1E] transition-colors">
                (+123) 456789 00
              </a>
            </div>
          </div>
        </div>

        {/* Footer Content Columns */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Newsletter Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase leading-none text-white tracking-tight">
                Let’s Talk <br />
                <span className="text-[#FF6B1E]">Work Together</span>
              </h2>
              <h3 className="font-heading text-lg font-bold text-zinc-300 uppercase tracking-wide pt-4">
                Get the latest inspiration & insights
              </h3>
              
              <form className="relative max-w-md mt-4">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="w-full minimal-input pr-12 focus:border-[#FF6B1E] transition-colors font-bold uppercase tracking-wider text-xs"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#FF6B1E] hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300 cursor-pointer"
                  >
                    {/* Paper Plane Icon */}
                    <svg className="w-4 h-4 transform rotate-45 -translate-y-px -translate-x-px" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>

            <div className="lg:col-span-1"></div>

            {/* Quick Links Column */}
            <div className="col-span-1 sm:col-span-3 lg:col-span-2.5">
              <h4 className="font-heading text-xs font-bold text-[#FF6B1E] uppercase tracking-[0.2em] mb-6">
                Quick Link
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "About Us", href: "/#about" },
                  { name: "Our Team", href: "/#team" },
                  { name: "Our Portfolio", href: "/work" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-zinc-400 hover:text-[#FF6B1E] uppercase tracking-wider transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="col-span-1 sm:col-span-3 lg:col-span-2.5">
              <h4 className="font-heading text-xs font-bold text-[#FF6B1E] uppercase tracking-[0.2em] mb-6">
                Our Solutions
              </h4>
              <ul className="space-y-4">
                {[
                  { name: "Web Development", href: "/services" },
                  { name: "UI/UX Design", href: "/services" },
                  { name: "Mobile Application", href: "/services" },
                  { name: "Cloud Service", href: "/services" },
                  { name: "Cyber Security", href: "/services" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-zinc-400 hover:text-[#FF6B1E] uppercase tracking-wider transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Footer Bottom copyright & socials */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-20 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">
              &copy; {currentYear} ABBA Digital. All rights reserved. Clone of Gencyo.
            </p>
            <div className="flex flex-wrap gap-6">
              {["Twitter", "Facebook", "Pinterest", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-bold text-zinc-500 hover:text-[#FF6B1E] uppercase tracking-widest transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
