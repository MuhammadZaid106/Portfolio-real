import Link from "next/link";
import { ArrowRight, HelpCircle, ArrowLeft } from "lucide-react";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "404 - Page Not Found | Zaid Portfolio",
  description: "The page you are looking for does not exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white overflow-hidden">
      {/* ── 404 Hero Banner ─────────────────────────────────── */}
      <section className="relative w-full bg-[#0d1a12] pt-32 pb-24 flex-grow flex items-center justify-center overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="notfound-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#52c48a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#notfound-grid)" />
          </svg>
        </div>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#52c48a]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center flex flex-col items-center">
          {/* Animated/Glowing 404 Indicator */}
          <div className="relative mb-6">
            <h1 className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tighter select-none font-sans leading-none">
              404
            </h1>
            <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#52c48a]/20 border border-[#52c48a]/40 flex items-center justify-center animate-bounce">
              <HelpCircle className="w-4 h-4 text-[#52c48a]" />
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-sans mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
          </p>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#52c48a] text-[#0d1a12] font-bold font-sans text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#0d1a12] transition-all duration-300 shadow-md w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-4 h-4" />
              Return Home
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-bold font-sans text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#0d1a12] border border-white/10 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Browse Work
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Helpful Links Grid */}
          <div className="mt-12 border-t border-white/10 pt-8 w-full max-w-md">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-widest font-sans mb-4">
              Or visit
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "Services", href: "/services" },
                { name: "About Me", href: "/about" },
                { name: "Contact", href: "/contact" },
                { name: "Project Quote", href: "/contact#contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-[#52c48a] text-sm font-sans flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 border border-white/5 hover:border-[#52c48a]/20 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
