"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowUpRight } from "lucide-react";
import { techCategories, techStack, TechItem } from "@/data/techStack";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiVuedotjs,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiFastapi,
  SiNestjs,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiSupabase,
  SiPrisma,
  SiDrizzle,
  SiFirebase,
  SiDocker,
  SiVercel,
  SiGithubactions,
  SiNginx,
  SiLinux,
  SiGit,
  SiExpo,
  SiFlutter,
  SiAndroid,
  SiApple,
  SiTensorflow,
} from "react-icons/si";
import {
  FaServer,
  FaCode,
  FaExchangeAlt,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";

// ── Icon Mapping helper ──────────────────────────────────────────────────────
const iconMap: Record<string, React.ReactNode> = {
  // Frontend
  React: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
  "Next.js": <SiNextdotjs className="w-8 h-8 text-[#000000]" />,
  TypeScript: <SiTypescript className="w-8 h-8 text-[#3178c6]" />,
  "Tailwind CSS": <SiTailwindcss className="w-8 h-8 text-[#06b6d4]" />,
  "Framer Motion": <SiFramer className="w-8 h-8 text-[#0055FF]" />,
  "Vue.js": <SiVuedotjs className="w-8 h-8 text-[#42b883]" />,
  HTML5: <SiHtml5 className="w-8 h-8 text-[#e34f26]" />,

  // Backend
  "Node.js": <SiNodedotjs className="w-8 h-8 text-[#339933]" />,
  Express: <SiExpress className="w-8 h-8 text-[#000000]" />,
  Python: <SiPython className="w-8 h-8 text-[#3572A5]" />,
  FastAPI: <SiFastapi className="w-8 h-8 text-[#009688]" />,
  NestJS: <SiNestjs className="w-8 h-8 text-[#e0234e]" />,
  GraphQL: <SiGraphql className="w-8 h-8 text-[#e535ab]" />,
  "REST APIs": <FaServer className="w-8 h-8 text-[#ff6f00]" />,
  tRPC: <FaExchangeAlt className="w-8 h-8 text-[#398ccb]" />,

  // Database
  PostgreSQL: <SiPostgresql className="w-8 h-8 text-[#336791]" />,
  MongoDB: <SiMongodb className="w-8 h-8 text-[#47a248]" />,
  MySQL: <SiMysql className="w-8 h-8 text-[#00758f]" />,
  Redis: <SiRedis className="w-8 h-8 text-[#dc382d]" />,
  Supabase: <SiSupabase className="w-8 h-8 text-[#3ecf8e]" />,
  Prisma: <SiPrisma className="w-8 h-8 text-[#0c3249]" />,
  Drizzle: <SiDrizzle className="w-8 h-8 text-[#c5f74f]" />,
  Firebase: <SiFirebase className="w-8 h-8 text-[#FFCA28]" />,

  // DevOps
  Docker: <SiDocker className="w-8 h-8 text-[#2496ed]" />,
  Vercel: <SiVercel className="w-8 h-8 text-[#000000]" />,
  "GitHub Actions": <SiGithubactions className="w-8 h-8 text-[#2088ff]" />,
  Nginx: <SiNginx className="w-8 h-8 text-[#009639]" />,
  Linux: <SiLinux className="w-8 h-8 text-[#FCC624]" />,
  Git: <SiGit className="w-8 h-8 text-[#f05032]" />,
  "CI/CD": <FaCode className="w-8 h-8 text-[#555555]" />,

  // Mobile
  "React Native": <SiReact className="w-8 h-8 text-[#61DAFB]" />,
  Expo: <SiExpo className="w-8 h-8 text-[#000020]" />,
  Flutter: <SiFlutter className="w-8 h-8 text-[#027DFD]" />,
  "iOS (Swift)": <SiApple className="w-8 h-8 text-[#F05138]" />,
  Android: <SiAndroid className="w-8 h-8 text-[#3DDC84]" />,
  PWA: <FaMobileAlt className="w-8 h-8 text-[#5a0fc8]" />,

  // AI
  LangChain: <FaBrain className="w-8 h-8 text-[#1c3a5e]" />,
  "Hugging Face": <FaBrain className="w-8 h-8 text-[#FFD21E]" />,
  TensorFlow: <SiTensorflow className="w-8 h-8 text-[#FF6F00]" />,
};

// ── Single Tech Card ──────────────────────────────────────────────────────────
function TechCard({ tech, index }: { tech: TechItem; index: number }) {
  const icon = iconMap[tech.name] || (
    <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center font-bold text-xs">
      {tech.abbr}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.96 }}
      transition={{
        duration: 0.25,
        delay: index * 0.03,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white border border-gray-150 shadow-sm hover:shadow-md hover:border-[#52c48a]/40 transition-all duration-300 cursor-pointer text-center"
    >
      {/* Centered Large Icon */}
      <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      {/* Name and Angle Bracket link */}
      <div>
        <p className="text-gray-900 text-sm font-semibold font-sans leading-tight flex items-center justify-center gap-1 group-hover:text-[#52c48a] transition-colors">
          {tech.name}
          <span className="text-gray-400 group-hover:text-[#52c48a] group-hover:translate-x-0.5 transition-all text-xs font-bold font-mono"></span>
        </p>
        {tech.tag && (
          <p className="text-gray-400 text-[10px] font-sans mt-1 tracking-wide uppercase">
            {tech.tag}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ── Main Section ──────────────────────────────────────────────────────────────
export default function TechStackSection() {
  const [active, setActive] = useState(techCategories[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    const activeItems = techStack[active] ?? [];
    if (!searchQuery.trim()) return activeItems;
    return activeItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [active, searchQuery]);

  return (
    <section className="w-full bg-[#f8faf9] py-20 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* ── Header Area ── */}
        <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-12">
          {/* Left Title details */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans leading-tight">
              Yes. I Have Expertise{" "}
              <span className="text-[#52c48a]">In Every Stack.</span>
            </h2>
            <p className="text-[#5c6c64] text-sm font-sans mt-2 max-w-md leading-relaxed">
              Deep experience across frontend, backend, databases, DevOps, and mobile technologies.
            </p>
          </div>

          {/* Right Search Stack & Full Stack action button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Search Input */}
            <div className="relative flex items-center min-w-[240px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                placeholder="Search Stack"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-full pl-10 pr-4 py-2.5 text-sm font-sans text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#52c48a] focus:ring-1 focus:ring-[#52c48a] transition-all"
              />
            </div>

            {/* My Services CTA button */}
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-[#172b21] hover:bg-[#52c48a] hover:text-[#172b21] text-white text-xs font-bold uppercase tracking-wider font-sans px-5 py-3 rounded-full transition-all duration-300 shadow-sm shrink-0"
            >
              <span>My Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── Category Tabs row ── */}
        <div className="flex items-center gap-2.5 flex-wrap mb-10">
          {techCategories.map((cat) => {
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActive(cat.id);
                  setSearchQuery(""); // Clear search on tab switch
                }}
                className={`relative inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold font-sans transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#52c48a] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#52c48a]/40 hover:text-gray-900"
                }`}
              >
                {!isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#52c48a] shrink-0" />
                )}
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Tech Stack Cards Grid ── */}
        <div className="min-h-[220px]">
          <AnimatePresence mode="wait">
            {filteredItems.length > 0 ? (
              <motion.div
                key={active}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              >
                {filteredItems.map((tech, i) => (
                  <TechCard key={tech.name} tech={tech} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-12 text-center text-gray-400 font-sans"
              >
                <p>No technologies match your search in this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
