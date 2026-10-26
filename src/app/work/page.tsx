import Image from "next/image";
import { ArrowUpRight, ExternalLink, CheckCircle2 } from "lucide-react";
import ContactSection from "@/components/sections/home/ContactSection";
import Footer from "@/components/layout/Footer";
import projects, { Project } from "@/data/projects";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Work & Portfolio",
  description:
    "Explore Zaid Naeem's live-deployed web projects across e-commerce, real estate, travel, and SaaS — built with Next.js, React, TypeScript, and more.",
  alternates: { canonical: "/work" },
  openGraph: {
    url: "/work",
    title: "Work & Portfolio | Zaid Naeem",
  },
};

/* ── Category colour map ─────────────────────────────────── */
const catColor: Record<string, string> = {
  "E-Commerce": "#4ade80",
  "Travel & Booking": "#60a5fa",
  "Real Estate Portal": "#fb923c",
  "Creative Portfolio": "#a78bfa",
};

/* ── Inline Project Card ─────────────────────────────────── */
function WorkCard({ project }: { project: Project }) {
  const accent = catColor[project.category] ?? "#52c48a";

  return (
    <div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
      {/* Cover image */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#141f19] font-bold font-sans text-sm px-5 py-2.5 rounded-full hover:bg-[#52c48a] hover:text-white transition-all duration-300 shadow-lg"
          >
            Visit Live Site
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        {/* Category badge */}
        <span
          className="absolute top-4 left-4 z-20 text-[10px] font-black uppercase tracking-widest font-sans px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${accent}22`, color: accent, border: `1px solid ${accent}44` }}
        >
          {project.category}
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex-1">
          <h3 className="text-[#141f19] font-extrabold text-xl font-sans mb-2 group-hover:text-[#52c48a] transition-colors">
            {project.title}
          </h3>
          <p className="text-[#5c6c64] text-sm font-sans leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {["Next.js", "TypeScript", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-bold font-sans px-2.5 py-1 rounded-md bg-[#f5f8f6] text-[#5c6c64] border border-gray-100"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action */}
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-bold font-sans text-[#141f19] hover:text-[#52c48a] transition-colors group/link w-fit"
        >
          Launch Project
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white overflow-hidden">

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative w-full bg-[#0d1a12] pt-28 pb-24 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="work-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#52c48a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#work-grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#52c48a]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-4">
              Portfolio
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans leading-tight mb-6">
              Work That Speaks{" "}
              <span className="text-[#52c48a]">For Itself.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto mb-8">
              Every project below is a live, deployed product — not a mockup. Built with
              real requirements, real constraints, and shipped to real users.
            </p>
          </FadeIn>

          {/* Quick stats */}
          <FadeIn delay={0.4} direction="up" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { n: "5+", label: "Live Deployments" },
              { n: "100%", label: "Vercel Hosted" },
              { n: "3+", label: "Industries Covered" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[#52c48a] text-2xl font-black font-sans">{s.n}</p>
                <p className="text-gray-400 text-xs font-sans uppercase tracking-wider">{s.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Projects Grid ────────────────────────────────────────── */}
      <section className="w-full bg-[#f7faf8] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <FadeIn className="space-y-2">
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans">
                All Projects
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans leading-tight">
                Live Deployments
              </h2>
            </FadeIn>
            <FadeIn delay={0.1} direction="left">
              <p className="text-[#5c6c64] text-sm font-sans max-w-xs leading-relaxed">
                Real code. Real challenges. Real outcomes.
              </p>
            </FadeIn>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <FadeIn key={project.id} delay={idx * 0.1} direction="up">
                <WorkCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Section ──────────────────────────────────────── */}
      <section className="w-full bg-white py-20 border-t border-gray-100 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">
                How I Work
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans">
                From Brief to Browser
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Deep-dive into your goals, users, and constraints. No assumptions.",
              },
              {
                step: "02",
                title: "Architecture",
                desc: "Tech stack selection, project scaffolding, and database schema design.",
              },
              {
                step: "03",
                title: "Build & Ship",
                desc: "Iterative development with real-time updates. Deployed continuously.",
              },
              {
                step: "04",
                title: "Support",
                desc: "Post-launch monitoring, bug fixes, and feature expansions on-demand.",
              },
            ].map((item, idx) => (
              <FadeIn key={item.step} delay={idx * 0.1} direction="up">
                <div
                  className="relative p-7 rounded-2xl bg-[#f7faf8] border border-gray-100 hover:border-[#52c48a]/30 hover:shadow-md transition-all duration-300 group h-full"
                >
                  <span className="text-[#52c48a]/20 text-5xl font-black font-mono absolute top-4 right-5 select-none group-hover:text-[#52c48a]/40 transition-colors">
                    {item.step}
                  </span>
                  <h3 className="text-[#141f19] font-bold font-sans text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#5c6c64] text-sm font-sans leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's Included ──────────────────────────────────────── */}
      <section className="w-full bg-[#0d1a12] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeIn className="space-y-4" direction="right">
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans">
                Every Project
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans leading-tight">
                What You Always Get
              </h2>
              <p className="text-gray-400 text-sm font-sans leading-relaxed">
                No compromises. Every engagement includes full production readiness,
                documented codebase, and deployment on your preferred infrastructure.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Mobile-first responsive design",
                "TypeScript strict-mode codebase",
                "Vercel / cloud deployment",
                "SEO-optimized pages",
                "Lighthouse score 90+",
                "Clean git history",
                "Handover documentation",
                "30-day post-launch support",
              ].map((item, idx) => (
                <FadeIn key={item} delay={idx * 0.05} direction="left">
                  <div className="flex items-center gap-3 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-[#52c48a] shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reused: Contact ──────────────────────────────────────── */}
      <ContactSection />

      {/* ── Reused: Footer ───────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
