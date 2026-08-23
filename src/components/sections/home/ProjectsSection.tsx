'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import projects, { Project } from '@/data/projects';

const SCROLL_AMOUNT = 350;

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex-shrink-0 w-[290px] sm:w-[360px] md:w-[420px] bg-[#f5f8f6] border border-gray-200/50 rounded-2xl p-5 md:p-6 flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
      {/* Header Info */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg sm:text-xl font-bold text-[#141f19] font-sans">
          {project.title}
        </h3>
        <span className="text-xs sm:text-sm text-[#5c6c64] font-semibold bg-white/80 px-2.5 py-1 rounded-full border border-gray-100 font-sans uppercase tracking-wider">
          {project.category}
        </span>
      </div>

      {/* Screen Shot Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-gray-200/30 group cursor-pointer">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 250px, (max-width: 768px) 310px, 370px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        {/* Hover details overlay */}
        <div className="absolute inset-0 bg-[#070d0a]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center z-10">
          <p className="text-white text-xs sm:text-sm font-sans leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>

      {/* Action / Link Button */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 w-full bg-[#141f19] text-white py-3 rounded-xl font-sans font-semibold text-sm hover:bg-[#52c48a] transition-all duration-300 group"
      >
        <span>Launch Project</span>
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </div>
  );
}

export default function ProjectsSection() {
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
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-2"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141f19] font-sans leading-tight">
              <span className="text-[#52c48a]">Deployments:</span>
              <br />A Proven Track Record
            </h2>
          </motion.div>

          {/* Right Header Details and Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col sm:items-end gap-4"
          >
            <p className="text-[#5c6c64] text-sm font-sans max-w-[200px] leading-relaxed sm:text-right">
              Real code. Real challenges. Real live deployments.
            </p>
            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scrollBy('left')}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#141f19] text-white hover:bg-[#52c48a] disabled:bg-[#141f19]/25 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy('right')}
                disabled={!canScrollRight}
                aria-label="Scroll right"
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#141f19] text-white hover:bg-[#52c48a] disabled:bg-[#141f19]/25 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Track */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-1
              scrollbar-hide [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
