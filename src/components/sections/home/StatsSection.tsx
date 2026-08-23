'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

// ── Animated counter hook ─────────────────────────────────────────────────────
function useCounter(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ── Stats data ────────────────────────────────────────────────────────────────
const stats = [
  { label: 'Projects Shipped', value: 20, suffix: '+', unit: '' },
  { label: 'Avg. Delivery Time', value: 14, suffix: '', unit: 'DAYS' },
  { label: 'Top Talent', value: 3, suffix: '%', unit: 'TOP' },
  { label: 'Years Experience', value: 3, suffix: '+', unit: 'YEARS' },
];

// ── Platform logos (text-based SVG style) ─────────────────────────────────────
const platforms = [
  'Google',
  'Clutch',
  'DesignRush',
  'GoodFirms',
  'Trustpilot',
  'Upwork',
  'LinkedIn', 
  'Fiverr',
]; 
const allPlatforms = [...platforms, ...platforms];

// ── Individual animated stat ──────────────────────────────────────────────────
function StatItem({
  stat,
  start,
  index,
}: {
  stat: (typeof stats)[0];
  start: boolean;
  index: number;
}) {
  const count = useCounter(stat.value, 1800, start);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center sm:items-start gap-1 px-6 sm:px-10 border-b sm:border-b-0 sm:border-r border-white/10 last:border-0 py-6 sm:py-0"
    >
      <span className="text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-white/40 font-sans">
        {stat.label}
      </span>
      <div className="flex items-end gap-1.5 leading-none">
        {stat.unit === 'TOP' && (
          <span className="text-[#52c48a] text-3xl sm:text-5xl font-bold font-sans">
            TOP
          </span>
        )}
        <span className="text-[#52c48a] text-4xl sm:text-6xl font-bold font-sans tabular-nums">
          {count}
          {stat.suffix}
        </span>
        {stat.unit && stat.unit !== 'TOP' && (
          <span className="text-[#52c48a]/70 text-base font-bold font-sans mb-1">
            {stat.unit}
          </span>
        )}
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      className="w-full bg-[#0d1a12] py-16 sm:py-20 overflow-hidden"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-white text-2xl sm:text-3xl font-bold font-sans mb-12 tracking-tight"
      >
        Built On Trust —{' '}
        <span className="text-[#52c48a]">Backed By Proof</span>
      </motion.h2>

      {/* Stats row */}
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch justify-center sm:divide-x divide-white/10 mb-14">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} start={inView} index={i} />
        ))}
      </div>

      {/* Platform marquee */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_12%,white_88%,transparent)]">
        <motion.div
          className="flex items-center gap-12 shrink-0 pr-12"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, ease: 'linear', repeat: Infinity }}
        >
          {allPlatforms.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex items-center gap-2 shrink-0 select-none"
            >
              <span className="text-white/30 text-lg font-bold font-sans tracking-tight hover:text-[#52c48a] transition-colors duration-300 cursor-default whitespace-nowrap">
                {name}
              </span>
              {/* Dot separator */}
              <span className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
