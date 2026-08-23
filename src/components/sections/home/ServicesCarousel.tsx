'use client';

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import services from '@/data/services';
import ServiceCard from './ServiceCard';

const SCROLL_AMOUNT = 300;

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    return () => el.removeEventListener('scroll', updateArrows);
  }, [updateArrows]);

  const scrollBy = (dir: 'left' | 'right') => {
    trackRef.current?.scrollBy({
      left: dir === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-12">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-[#52c48a] text-xs font-bold tracking-[0.2em] uppercase mb-2 font-sans">
              What I Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#141f19] font-sans leading-tight">
              Solutions for every industry
            </h2>
          </div>
          <p className="text-[#5c6c64] text-sm font-sans max-w-xs leading-relaxed">
            From startups to scale-ups — I deliver web products that are fast, beautiful, and purpose-built.
          </p>
        </motion.div>

        {/* ── Carousel wrapper ── */}
        <div className="relative group/carousel">

          {/* Left arrow */}
          <button
            onClick={() => scrollBy('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
            className={`absolute -left-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100
              transition-all duration-300 hover:bg-[#52c48a] hover:text-white hover:border-[#52c48a]
              disabled:opacity-0 disabled:pointer-events-none`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollBy('right')}
            disabled={!canScrollRight}
            aria-label="Scroll right"
            className={`absolute -right-4 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-white shadow-lg border border-gray-100
              transition-all duration-300 hover:bg-[#52c48a] hover:text-white hover:border-[#52c48a]
              disabled:opacity-0 disabled:pointer-events-none`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Edge fade masks */}
          <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrollable track */}
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-3 px-1
              scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
