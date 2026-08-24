'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import testimonials from '@/data/testimonials';

const VISIBLE = 3; // cards shown at once on desktop

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const canPrev = startIndex > 0;
  const canNext = startIndex + VISIBLE < testimonials.length;

  const prev = useCallback(() => {
    if (!canPrev) return;
    setDirection(-1);
    setStartIndex((i) => i - 1);
  }, [canPrev]);

  const next = useCallback(() => {
    if (!canNext) return;
    setDirection(1);
    setStartIndex((i) => i + 1);
  }, [canNext]);

  const visible = testimonials.slice(startIndex, startIndex + VISIBLE);

  return (
    <section className="w-full bg-[#f0f5f2] py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* ── Header row ── */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-14">
          {/* Left: title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141f19] font-sans leading-tight">
              I Let Them Talk.
              <br />
              <span className="text-[#52c48a]">Here&apos;s What They Said.</span>
            </h2>
          </motion.div>

          {/* Right: subtitle + arrows */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:items-end gap-4"
          >
            <p className="text-[#5c6c64] text-sm font-sans max-w-[220px] leading-relaxed sm:text-right">
              Hear directly from the people who trusted me with their product.
            </p>
            {/* Arrow buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                disabled={!canPrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#52c48a] text-white
                  hover:bg-[#3dae76] active:scale-95 transition-all duration-200
                  disabled:bg-[#52c48a]/30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                disabled={!canNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#52c48a] text-white
                  hover:bg-[#3dae76] active:scale-95 transition-all duration-200
                  disabled:bg-[#52c48a]/30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((t, i) => (
              <motion.div
                key={t.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction * -60, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Full-bleed portrait */}
                <Image
                  src={t.imageUrl}
                  alt={t.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Top gradient for "Watch Video" area */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/85 z-10" />

                {/* Watch Video pill */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold font-sans px-3 py-1.5 rounded-full border border-white/20">
                    <span className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-white ml-0.5" />
                    Watch Video
                  </span>
                </div>

                {/* Bottom content overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                  {/* Quote icon */}
                  <Quote className="w-5 h-5 text-[#52c48a] mb-2 opacity-80" />

                  {/* Quote text */}
                  <p className="text-white/90 text-sm font-sans leading-relaxed line-clamp-3 mb-3">
                    {t.quote}
                  </p>

                  {/* Divider */}
                  <div className="w-8 h-px bg-[#52c48a]/60 mb-3" />

                  {/* Name + role */}
                  <p className="text-white font-bold text-sm font-sans">{t.name}</p>
                  <p className="text-white/60 text-xs font-sans">
                    {t.role} · {t.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Dot indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: testimonials.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > startIndex ? 1 : -1); setStartIndex(i); }}
              aria-label={`Go to slide ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${
                i === startIndex
                  ? 'w-6 h-2 bg-[#52c48a]'
                  : 'w-2 h-2 bg-[#52c48a]/30 hover:bg-[#52c48a]/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
