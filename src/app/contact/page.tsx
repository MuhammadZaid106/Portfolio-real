import { ArrowUpRight, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import ContactSection from "@/components/sections/home/ContactSection";
import Footer from "@/components/layout/Footer";
import SocialLinks from "@/components/ui/SocialLinks";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Zaid Naeem to discuss your project, request a quote, or just say hello. Available for freelance and contract work.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact | Zaid Naeem",
  },
};

/* ── FAQ data ──────────────────────────────────────────── */
const faqs = [
  {
    q: "How quickly do you respond?",
    a: "I respond to all inquiries within 24 hours on weekdays. For urgent projects, expect same-day responses during business hours.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. I have worked with clients across the US, UK, UAE, and Europe. Remote collaboration is my default mode.",
  },
  {
    q: "What information should I include in my message?",
    a: "Share your project idea, desired timeline, rough budget range, and any references or inspiration. The more context, the better.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, I am comfortable signing NDAs before discussing sensitive project details. Just mention it in your message.",
  },
  {
    q: "Can you work within an existing codebase?",
    a: "Yes. I regularly onboard into existing projects for feature additions, refactoring, or performance improvements.",
  },
  {
    q: "What is your typical project timeline?",
    a: "Landing pages take 3–5 days. Full web apps typically take 2–6 weeks depending on scope. Rush delivery is available.",
  },
];

/* ── Contact Info Cards ────────────────────────────────── */
const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "zaidnaeem106@gmail.com",
    sub: "Replies within 24 hours",
    accent: "#52c48a",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Pakistan — Remote",
    sub: "Available worldwide",
    accent: "#60a5fa",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    label: "Availability",
    value: "Open to Work",
    sub: "Freelance & Contract",
    accent: "#fb923c",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    label: "Response Time",
    value: "within 24 Hours",
    sub: "Mon – Fri",
    accent: "#a78bfa",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-white overflow-hidden">
      {/* ── Hero Banner ─────────────────────────────────────── */}
      <section className="relative w-full bg-[#0d1a12] pt-28 pb-24 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="contact-page-grid"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="#52c48a"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-page-grid)" />
          </svg>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#52c48a]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[#52c48a]/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-12 text-center">
          <FadeIn delay={0.1}>
            <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-4">
              Let&apos;s Connect
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-sans leading-tight mb-6">
              Have a Project in Mind?
              <br />
              <span className="text-[#52c48a]">Let&apos;s Make It Real.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-gray-300 text-sm sm:text-base font-sans leading-relaxed max-w-xl mx-auto">
              Whether you&apos;re starting from scratch, fixing something broken,
              or scaling an existing product — I&apos;d love to hear about it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Contact Info Cards ──────────────────────────────── */}
      <section className="w-full bg-[#f7faf8] py-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {contactInfo.map((item, idx) => (
              <FadeIn key={item.label} delay={idx * 0.08} direction="up">
                <div
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-3 h-full"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{
                      backgroundColor: `${item.accent}18`,
                      color: item.accent,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[#9aada3] text-[10px] font-bold uppercase tracking-widest font-sans mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-[#141f19] font-extrabold font-sans text-base">
                      {item.value}
                    </p>
                    <p className="text-[#5c6c64] text-xs font-sans mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Socials Row */}
          <FadeIn delay={0.4} direction="up">
            <SocialLinks />
          </FadeIn>
        </div>
      </section>

      {/* ── Reused: Contact Form ────────────────────────────── */}
      <ContactSection />

      {/* ── FAQ Section ─────────────────────────────────────── */}
      <section className="w-full bg-[#f7faf8] py-20 border-t border-gray-100 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="text-center mb-12">
            <FadeIn>
              <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">
                FAQ
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans">
                Common Questions
              </h2>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {faqs.map((faq, idx) => (
              <FadeIn key={idx} delay={idx * 0.08} direction="up">
                <div
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#52c48a]/30 hover:shadow-md transition-all duration-300 h-full"
                >
                  <h3 className="text-[#141f19] font-bold font-sans text-sm mb-3 flex items-start gap-2">
                    <span className="shrink-0 w-5 h-5 rounded-md bg-[#52c48a]/10 text-[#52c48a] text-[10px] font-black flex items-center justify-center mt-0.5">
                      Q
                    </span>
                    {faq.q}
                  </h3>
                  <p className="text-[#5c6c64] text-sm font-sans leading-relaxed pl-7">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Bottom CTA */}
          <FadeIn delay={0.5} direction="up" className="mt-12 text-center">
            <p className="text-[#5c6c64] text-sm font-sans mb-4">
              Didn&apos;t find your answer? Just drop me a message.
            </p>
            <a
              href="mailto:zaidnaeem106@gmail.com"
              className="inline-flex items-center gap-2 bg-[#0d1a12] text-white font-bold font-sans text-sm px-6 py-3 rounded-full hover:bg-[#52c48a] hover:text-[#0d1a12] transition-all duration-300 shadow-md"
            >
              Email Me Directly
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Reused: Footer ──────────────────────────────────── */}
      <Footer />
    </main>
  );
}
