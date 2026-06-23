import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata = {
  title: "ABBA Digital | Elite Web & Mobile Infrastructure",
  description: "ABBA Digital is an elite, full-service digital solutions firm operating at the intersection of technical craftsmanship and high-performance business growth.",
  metadataBase: new URL("http://localhost:3000"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
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
