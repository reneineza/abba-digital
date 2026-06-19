import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | ABBA DIGITAL",
    default: "ABBA DIGITAL — Web Development & Digital Marketing Agency",
  },
  description:
    "ABBA DIGITAL is a premium web development and digital marketing agency. We build scalable digital infrastructure and engineer measurable business growth.",
  keywords: [
    "web development",
    "digital marketing",
    "agency",
    "Next.js",
    "performance",
    "SEO",
  ],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "500x500" },
    ],
    apple: [
      { url: "/favicon.png", sizes: "500x500" },
    ],
  },
  openGraph: {
    title: "ABBA DIGITAL",
    description:
      "We build digital infrastructure. We engineer business growth.",
    type: "website",
    images: [{ url: "/logo.png", width: 500, height: 500, alt: "ABBA DIGITAL" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground antialiased font-sans selection:bg-blue-500">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
