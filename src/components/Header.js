"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="group flex items-center gap-3">
              <img 
                src="/images/logo/real-estate-logo.png" 
                alt="ABBA Digital Logo" 
                className="h-16 md:h-20 object-contain opacity-90 transition-opacity group-hover:opacity-100 brightness-0 invert" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-bold tracking-wide uppercase transition-colors duration-300 nav-link-underline pb-1 ${
                    isActive
                      ? "text-[#FF6B1E] nav-link-underline-active"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions (Search & Let's Talk Button) */}
          <div className="hidden md:flex items-center gap-5">
            <button className="text-white hover:text-[#FF6B1E] transition-colors p-2 cursor-pointer">
              {/* Magnifying Glass Icon */}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent hover:bg-[#FF6B1E] hover:border-transparent px-6 py-2.5 text-xs font-bold tracking-widest uppercase text-white transition-all duration-300"
            >
              Let’s Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-white hover:text-zinc-400 focus:outline-none cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <div className="space-y-1.5 flex flex-col items-end w-6">
                  <span className="block h-0.5 w-6 bg-white rounded-full"></span>
                  <span className="block h-0.5 w-4 bg-white rounded-full"></span>
                  <span className="block h-0.5 w-5 bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/8 bg-[#0D0D0D] animate-fade-in" id="mobile-menu">
          <div className="space-y-1 px-6 pb-6 pt-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 text-base font-bold tracking-wide uppercase transition-colors ${
                    isActive 
                      ? "text-[#FF6B1E] border-l-2 border-[#FF6B1E] pl-3" 
                      : "text-zinc-400 hover:text-white pl-3"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/8 mt-4 flex flex-col gap-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="group flex w-full items-center justify-center rounded-full bg-[#FF6B1E] py-3.5 text-center text-sm font-bold tracking-widest uppercase text-white transition-all border border-transparent hover:bg-white hover:text-black"
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
