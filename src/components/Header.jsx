"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll state for glassmorphic effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/50 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity duration-200 shrink-0"
          aria-label="ABBA DIGITAL — Home"
        >
          <Image
            src="/logo.png"
            alt="ABBA DIGITAL"
            width={160}
            height={160}
            priority
            className="h-10 w-auto invert" // Invert filter makes the black logo white
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs tracking-[0.15em] uppercase font-medium text-muted hover:text-white transition-colors duration-200 py-2"
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="header-active-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          
          <Link
            href="/contact"
            className="relative overflow-hidden rounded-full bg-accent text-white text-xs tracking-[0.15em] uppercase font-semibold px-6 py-2.5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:bg-accent-hover group"
          >
            <span className="relative z-10">Contact Us</span>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2 text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center"
              >
                <Image
                  src="/logo.png"
                  alt="ABBA DIGITAL"
                  width={160}
                  height={160}
                  priority
                  className="h-10 w-auto invert"
                />
              </Link>
              <button
                className="p-2 text-white"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 px-6 py-12 grow overflow-y-auto">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-2xl font-bold uppercase tracking-widest ${
                        isActive ? "text-accent drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-full bg-accent text-white text-sm tracking-[0.2em] uppercase font-bold py-4 text-center shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
