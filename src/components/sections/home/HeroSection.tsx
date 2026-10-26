'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Hero_bg.png')" }}
    >
      {/* Layered overlay: strong bottom-to-top gradient + subtle overall dim */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/90 via-black/60 to-black/35" />
      <div className="absolute inset-0 z-0 bg-black/30" />

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 pt-32 pb-16">

        {/* ── Eyebrow badge ── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-2 mb-6 max-w-full">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#52c48a]/30 bg-[#52c48a]/10 backdrop-blur-sm text-[#52c48a] text-[10px] sm:text-xs font-semibold tracking-[0.1em] sm:tracking-[0.18em] uppercase whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-[#52c48a] animate-pulse shrink-0" />
            <span className="hidden sm:inline">Full-Stack Developer · Available for Work</span>
            <span className="inline sm:hidden">Full-Stack Developer</span>
          </span>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1
          {...fadeUp(0.12)}
          className="text-center text-3xl sm:text-5xl md:text-6xl font-medium text-white font-sans tracking-tight leading-[1.2] sm:leading-[1.1] max-w-3xl px-2"
        >
          
          I build{' '}
          <span className="text-[#52c48a] font-semibold">fast, scalable</span>{' '}
          web products for funded startups
        </motion.h1>

        {/* ── Divider line ── */}
        <motion.div {...fadeUp(0.22)} className="mt-6 mb-5 w-12 h-0.5 rounded-full bg-[#52c48a]/60" />

        {/* ── Subtitle ── */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-center text-gray-300/90 text-sm sm:text-lg font-normal font-sans max-w-xl leading-relaxed px-4"
        >
          Specializing in{' '}
          <span className="text-white font-medium">Next.js</span>,{' '}
          <span className="text-white font-medium">TypeScript</span>, and{' '}
          <span className="text-white font-medium">AI-integrated</span> products
          that drive real growth.
        </motion.p>

        {/* ── CTA Buttons ── */}
        <motion.div
          {...fadeUp(0.42)}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          <Button href="/work" variant="primary" showArrow className="w-full sm:w-auto justify-center">
            View My Work
          </Button>
          <Button href="/contact" variant="outline" className="w-full sm:w-auto justify-center">
            Book a Call
          </Button>
        </motion.div>

        {/* ── Social proof / Trust bar ── */}
        <motion.div {...fadeUp(0.55)} className="mt-14 flex items-center gap-8 sm:gap-12 flex-wrap justify-center">
          {[
            { value: '20+', label: 'Projects Shipped' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: '3+', label: 'Years Experience' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-0.5">
              <span className="text-xl sm:text-2xl font-bold text-white font-sans">{stat.value}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 font-sans tracking-wide uppercase">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
