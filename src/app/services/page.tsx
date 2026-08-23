import { ArrowUpRight, CheckCircle2, Zap, Globe, ShoppingCart, Brain, BarChart2, Smartphone } from "lucide-react";
import ServicesCarousel from "@/components/sections/home/ServicesCarousel";
import ContactSection from "@/components/sections/home/ContactSection";
import Footer from "@/components/layout/Footer";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Services — Zaid",
  description:
    "Explore professional web development services by Zaid — from SaaS dashboards to e-commerce, AI integrations, and full-stack product engineering.",
};

/* ── Core Services ─────────────────────────────────────── */
const coreServices = [
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Web Application Development",
    price: "From $800",
    desc: "End-to-end web app development using Next.js, TypeScript, and modern architecture. From landing pages to complex multi-page platforms.",
    features: ["Next.js 15+ App Router", "TypeScript + Zod validation", "REST / GraphQL APIs", "Auth (Clerk, NextAuth)", "Responsive & accessible"],
    accent: "#52c48a",
  },
  {
    icon: <ShoppingCart className="w-7 h-7" />,
    title: "E-Commerce Storefronts",
    price: "From $1,200",
    desc: "High-converting, blazing-fast online stores. Custom product catalogs, cart systems, checkout flows, and payment integrations.",
    features: ["Custom product catalog", "Cart & checkout logic", "Stripe / payment integration", "Order management", "Admin dashboard"],
    accent: "#60a5fa",
  },
  {
    icon: <BarChart2 className="w-7 h-7" />,
    title: "SaaS & Dashboard Products",
    price: "From $2,000",
    desc: "Scalable SaaS foundations — auth, subscriptions, user management, analytics dashboards, and team workspaces.",
    features: ["Multi-tenant architecture", "Subscription billing (Stripe)", "Role-based access control", "Analytics & reporting", "API-first design"],
    accent: "#fb923c",
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "AI & LLM Integrations",
    price: "From $1,500",
    desc: "Embed AI capabilities into your product — chatbots, document Q&A, content generation, and intelligent automation.",
    features: ["OpenAI / Claude integration", "LangChain pipelines", "Vector DB (Pinecone)", "Streaming responses", "Vercel AI SDK"],
    accent: "#a78bfa",
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "React Native Mobile Apps",
    price: "From $2,500",
    desc: "Cross-platform iOS & Android apps using React Native and Expo. Native performance with a single JavaScript codebase.",
    features: ["Expo managed workflow", "Push notifications", "Offline support", "App Store deployment", "Shared web/mobile code"],
    accent: "#f472b6",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Performance & SEO Audit",
    price: "From $400",
    desc: "Deep technical audit of your existing site — Core Web Vitals, bundle analysis, accessibility, and SEO improvements.",
    features: ["Lighthouse audit report", "Core Web Vitals fix", "Bundle optimization", "SEO meta & schema", "A11y improvements"],
    accent: "#facc15",
  },
];

/* ── Engagement Models ─────────────────────────────────── */
const models = [
  {
    title: "Fixed Project",
    badge: "Most Popular",
    badgeBg: "#52c48a",
    desc: "Defined scope, fixed timeline, fixed price. Best for well-scoped products and MVPs.",
    points: ["Milestone-based payments", "Weekly progress updates", "Final delivery + handover", "30-day bug fix warranty"],
  },
  {
    title: "Retainer",
    badge: "Best Value",
    badgeBg: "#60a5fa",
    desc: "Ongoing development partnership. Monthly hours committed to your product roadmap.",
    points: ["Priority response time", "Feature development", "Bug fixes & maintenance", "Monthly review call"],
  },
  {
    title: "Consulting",
    badge: "Flexible",
    badgeBg: "#fb923c",
    desc: "Hourly or daily rate for architecture advice, code reviews, and technical guidance.",
    points: ["Architecture review", "Code audit & feedback", "Tech stack selection", "No minimum commitment"],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white overflow-hidden">

      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative w-full bg-[#0d1a12] pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#52c48a" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#52c48a]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-4">
              Services
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans leading-tight mb-6">
              Everything You Need<br />
              <span className="text-[#52c48a]">To Ship Great Software.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto mb-8">
              From a simple landing page to a full-stack AI-powered SaaS — I handle the
              entire technical side so you can focus on what matters: your business.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#52c48a] text-[#0d1a12] font-bold font-sans text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#0d1a12] transition-all duration-300 shadow-md"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Core Services Grid ──────────────────────────────── */}
      <section className="w-full bg-[#f7faf8] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">
                Core Services
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans">
                What I Build
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {coreServices.map((svc, idx) => (
              <FadeIn key={svc.title} delay={idx * 0.08} direction="up">
                <div
                  className="group bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5 h-full"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: `${svc.accent}22`, color: svc.accent }}
                  >
                    {svc.icon}
                  </div>

                  {/* Title + Price */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[#141f19] font-extrabold font-sans text-lg leading-tight">
                      {svc.title}
                    </h3>
                    <span
                      className="shrink-0 text-xs font-bold font-sans px-2.5 py-1 rounded-full whitespace-nowrap mt-0.5"
                      style={{ backgroundColor: `${svc.accent}15`, color: svc.accent }}
                    >
                      {svc.price}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[#5c6c64] text-sm font-sans leading-relaxed flex-1">
                    {svc.desc}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-xs font-sans text-[#5c6c64]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: svc.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-bold font-sans transition-colors group/cta w-fit"
                    style={{ color: svc.accent }}
                  >
                    Get a Quote
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reused: Industry carousel ───────────────────────── */}
      <ServicesCarousel />

      {/* ── Engagement Models ───────────────────────────────── */}
      <section className="w-full bg-[#0d1a12] py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center mb-14">
            <FadeIn>
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">
                How We Work
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans">
                Pick Your Engagement Model
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((m, idx) => (
              <FadeIn key={m.title} delay={idx * 0.1} direction="up">
                <div
                  className="relative bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#52c48a]/40 hover:bg-white/8 transition-all duration-300 group h-full flex flex-col"
                >
                  {/* Badge */}
                  <span
                    className="absolute -top-3 left-6 text-[10px] font-black uppercase tracking-widest font-sans px-3 py-1 rounded-full"
                    style={{ backgroundColor: m.badgeBg, color: "#0d1a12" }}
                  >
                    {m.badge}
                  </span>

                  <h3 className="text-white font-extrabold font-sans text-2xl mb-3 mt-2">
                    {m.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-sans leading-relaxed mb-6">
                    {m.desc}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm font-sans text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#52c48a] shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 w-full justify-center bg-white/10 hover:bg-[#52c48a] hover:text-[#0d1a12] text-white font-bold font-sans text-sm py-3 rounded-xl transition-all duration-300"
                  >
                    Get Started
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guarantee Strip ─────────────────────────────────── */}
      <section className="w-full bg-[#52c48a] py-10 overflow-hidden">
        <FadeIn direction="up">
          <div className="mx-auto max-w-5xl px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h3 className="text-[#0d1a12] font-extrabold font-sans text-2xl sm:text-3xl">
                30-Day Quality Guarantee
              </h3>
              <p className="text-[#0d1a12]/70 text-sm font-sans mt-1">
                Every project includes 30 days of post-launch bug fixes at no extra charge.
              </p>
            </div>
            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0d1a12] text-[#52c48a] font-bold font-sans text-sm px-6 py-3 rounded-full hover:bg-white hover:text-[#0d1a12] transition-all duration-300 shadow-md"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Reused: Contact Form ────────────────────────────── */}
      <ContactSection />

      {/* ── Reused: Footer ──────────────────────────────────── */}
      <Footer />
    </main>
  );
}
