import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="text-center">
        <p className="text-[#e5e5e5] text-[120px] md:text-[180px] font-bold leading-none select-none"
           style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          404
        </p>
        <div className="-mt-4 md:-mt-8">
          <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-black mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Page Not Found
          </h1>
          <p className="text-[#666666] text-sm mb-10">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="bg-black text-white text-xs tracking-[0.2em] uppercase font-semibold px-8 py-4 hover:bg-[#111] transition-colors duration-200 inline-block"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
