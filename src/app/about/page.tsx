import { ArrowUpRight, Code2, Rocket, Star, Users } from "lucide-react";
import StatsSection from "@/components/sections/home/StatsSection";
import TechStackSection from "@/components/sections/home/TechStackSection";
import ContactSection from "@/components/sections/home/ContactSection";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "About Zaid — Full-Stack Developer",
  description:
    "Learn about Zaid, a Full-Stack Developer specializing in modern web applications, SaaS products, and AI integrations.",
};

/* ── Timeline data ─────────────────────────────────────────────── */
const timeline = [
  {
    year: "2022",
    title: "Started Web Development",
    desc: "Began learning HTML, CSS, and JavaScript. Built first landing pages and static websites for local clients.",
  },
  {
    year: "2023",
    title: "Mastered React & Next.js",
    desc: "Dived deep into the React ecosystem, TypeScript, and started shipping full-stack applications using Next.js + Node.js.",
  },
  {
    year: "2024",
    title: "Freelancing & Agency Work",
    desc: "Delivered 15+ projects across e-commerce, real estate, SaaS, and travel — working with international clients on Upwork and direct.",
  },
  {
    year: "2025",
    title: "AI-Powered Products",
    desc: "Integrated LLMs and AI capabilities into client platforms using OpenAI, LangChain, and Vercel AI SDK.",
  },
];

/* ── Values data ──────────────────────────────────────────────── */
const values = [
  {
    icon: <Code2 className="w-6 h-6 text-[#52c48a]" />,
    title: "Clean Code",
    desc: "Readable, maintainable, and scalable code that future developers can understand and extend.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#52c48a]" />,
    title: "Ship Fast",
    desc: "Iterate quickly, validate early. I deliver MVPs in days, not months — without cutting corners.",
  },
  {
    icon: <Star className="w-6 h-6 text-[#52c48a]" />,
    title: "Design-Obsessed",
    desc: "Every pixel matters. I build interfaces that feel premium, responsive, and deeply intentional.",
  },
  {
    icon: <Users className="w-6 h-6 text-[#52c48a]" />,
    title: "Collaborative",
    desc: "Transparent communication and proactive updates — you always know where your project stands.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white overflow-hidden">

      {/* ── Hero Banner ──────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#0d1a12] pt-28 pb-24 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#52c48a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        {/* Radial glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#52c48a]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#52c48a]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 flex flex-col items-center text-center gap-8">

          {/* Avatar gradient circle instead of photo */}
          <FadeIn delay={0.1} direction="down">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#52c48a] via-[#2da86e] to-[#0d5c38] flex items-center justify-center shadow-2xl border-4 border-[#52c48a]/30">
              <span className="text-5xl md:text-6xl font-black text-white font-sans select-none">Z</span>
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-full border-2 border-[#52c48a]/30 animate-ping" />
            </div>
          </FadeIn>

          {/* Text */}
          <div className="space-y-5 max-w-3xl">
            <FadeIn delay={0.2}>
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans">
                About Me
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans leading-tight">
                Hi, I&apos;m Zaid —<br />
                <span className="text-[#52c48a]">I Build the Web.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed max-w-xl mx-auto">
                I&apos;m a Full-Stack Developer with 3+ years of experience crafting
                high-performance web products. From pixel-perfect UIs to robust
                backend systems — I turn complex ideas into clean, deployable code
                that businesses rely on.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#52c48a] text-[#0d1a12] font-bold font-sans text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#0d1a12] transition-all duration-300 shadow-md"
              >
                Work With Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Bio Section ──────────────────────────────────────────────── */}
      <section className="w-full bg-white py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Story */}
          <FadeIn direction="right" className="space-y-6">
            <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans">
              My Story
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans leading-tight">
              Passion-Driven.<br />
              <span className="text-[#52c48a]">Results-Oriented.</span>
            </h2>
            <p className="text-[#5c6c64] text-sm leading-relaxed font-sans">
              I started building websites out of curiosity in 2022 and quickly fell in
              love with the craft. What began as a hobby turned into a professional
              career where I have helped startups and enterprises ship products that
              millions of users interact with daily.
            </p>
            <p className="text-[#5c6c64] text-sm leading-relaxed font-sans">
              I specialize in the modern JavaScript ecosystem — React, Next.js, Node.js,
              TypeScript — and I have a growing focus on AI-powered product development
              using OpenAI, LangChain, and Vercel AI SDK. I care deeply about clean code,
              great UX, and products that actually work.
            </p>
            <p className="text-[#5c6c64] text-sm leading-relaxed font-sans">
              When I&apos;m not coding, I&apos;m exploring new frameworks, contributing to
              open-source projects, or helping early-stage founders validate their ideas
              technically.
            </p>
          </FadeIn>

          {/* Right: Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v, idx) => (
              <FadeIn key={v.title} delay={idx * 0.1} direction="up">
                <div
                  className="p-6 rounded-2xl bg-[#f5f8f6] border border-gray-100 hover:border-[#52c48a]/30 hover:shadow-md transition-all duration-300 space-y-3 h-full"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#52c48a]/10 flex items-center justify-center">
                    {v.icon}
                  </div>
                  <h3 className="text-[#141f19] font-bold font-sans">{v.title}</h3>
                  <p className="text-[#5c6c64] text-xs font-sans leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ─────────────────────────────────────────── */}
      <section className="w-full bg-[#f7faf8] py-20 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">
                Journey
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans">
                How I Got Here
              </h2>
            </FadeIn>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#52c48a]/20 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#52c48a] border-4 border-white shadow-md z-10" />

                  {/* Content card */}
                  <FadeIn 
                    direction={idx % 2 === 0 ? "right" : "left"} 
                    className={`ml-16 md:ml-0 md:w-5/12 w-[calc(100%-4rem)]`}
                    delay={idx * 0.15}
                  >
                    <div
                      className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#52c48a]/30 transition-all duration-300"
                    >
                      <span className="inline-block text-[#52c48a] text-xs font-bold tracking-widest uppercase font-sans mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-[#141f19] font-bold font-sans text-base mb-2">
                        {item.title}
                      </h3>
                      <p className="text-[#5c6c64] text-xs font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </FadeIn>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reused: Stats ─────────────────────────────────────────────── */}
      <StatsSection />

      {/* ── Reused: Tech Stack ────────────────────────────────────────── */}
      <TechStackSection />

      {/* ── Reused: Contact Form ──────────────────────────────────────── */}
      <ContactSection />

      {/* ── Reused: Footer ────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
