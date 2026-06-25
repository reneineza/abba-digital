import { Syne, Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ABBA Digital | Elite Web & Mobile Infrastructure",
  description: "ABBA Digital is an elite, full-service digital solutions firm operating at the intersection of technical craftsmanship and high-performance business growth.",
  metadataBase: new URL("https://abbadigital.com"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0D0D0D] text-white selection:bg-[#FF6B1E] selection:text-white font-sans">
        <CustomCursor />
        <Header />
        <main className="grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
