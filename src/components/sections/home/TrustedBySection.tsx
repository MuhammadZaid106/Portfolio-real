'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ─── Inline SVG brand logos ───────────────────────────────────────────────────
const BrandLogos = [
  {
    name: 'Vercel',
    svg: (
      <svg viewBox="0 0 4438 4438" fill="currentColor" className="h-6 w-auto">
        <path d="M2219 0L4438 4438H0L2219 0Z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    svg: (
      <svg viewBox="0 0 98 96" fill="currentColor" className="h-7 w-auto">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M49 0C21.9 0 0 22 0 49.2c0 21.8 13.9 40.2 33.3 46.7 2.4.5 3.3-1.1 3.3-2.4v-8.5c-13.6 3-16.5-6.6-16.5-6.6-2.2-5.7-5.5-7.2-5.5-7.2-4.5-3.1.3-3 .3-3 4.9.3 7.5 5.1 7.5 5.1 4.4 7.6 11.6 5.4 14.4 4.1.4-3.2 1.7-5.4 3.1-6.6-11-1.3-22.5-5.5-22.5-24.5 0-5.4 1.9-9.9 5-13.3-.5-1.3-2.2-6.3.5-13.1 0 0 4.1-1.3 13.5 5.1a46.3 46.3 0 0 1 24.6 0c9.3-6.4 13.4-5.1 13.4-5.1 2.7 6.8 1 11.8.5 13.1 3.1 3.4 5 7.9 5 13.3 0 19-11.5 23.2-22.6 24.5 1.8 1.5 3.3 4.6 3.3 9.3v13.8c0 1.3.9 2.9 3.4 2.4A49.2 49.2 0 0 0 98 49.2C98 22 76.1 0 49 0Z"
        />
      </svg>
    ),
  },
  {
    name: 'Stripe',
    svg: (
      <svg viewBox="0 0 60 25" fill="currentColor" className="h-5 w-auto">
        <path d="M59.6 13.1c0-4.6-2.2-8.2-6.5-8.2-4.3 0-6.9 3.6-6.9 8.2 0 5.4 3.1 8.1 7.5 8.1 2.1 0 3.8-.5 5-1.3V16c-1.1.6-2.5.9-4.1.9-1.6 0-3.1-.6-3.3-2.5h8.2c.1-.3.1-1.3.1-1.3zm-8.3-1.7c0-1.9 1.1-2.6 2.2-2.6 1 0 2 .7 2 2.6H51.3zm-9-6.5c-1.6 0-2.7.8-3.3 1.3l-.2-1.1h-3.6V25l4.1-.9V19.6c.6.4 1.5 1 3 1 3 0 5.8-2.4 5.8-8.3-.1-5.4-2.9-7.4-5.8-7.4zm-1 11.2c-1 0-1.6-.4-2-.9V10c.4-.5 1.1-.9 2-.9 1.5 0 2.5 1.7 2.5 3.9 0 2.4-1 3.9-2.5 3.9zm-12.7-12l4.1-.9V0l-4.1.9V4.1zM24.2 5.1H20V22h4.1V5.1zm-7.6 1.3l-.3-1.3h-3.5V22h4.1v-9.1c1-1.3 2.7-1.1 3.2-.9V5.1c-.6-.2-2.6-.5-3.5 1.3zm-8.8-.3L7.5 5H4.1L0 22h4.1l.7-3h4.3l.7 3h4.2L9.8 6.1zM5.5 15l1.5-6.7L8.6 15H5.5z" />
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 38 57" fill="currentColor" className="h-8 w-auto">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" opacity=".6" />
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" opacity=".4" />
        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" opacity=".6" />
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" opacity=".4" />
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" opacity=".5" />
      </svg>
    ),
  },
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-7 w-auto">
        <path d="M6.0 6.5c1.3 1 3.5.9 7.8.6l67.4-4c8.1-.7 10.2-.1 15.2 3.5l7.5 5.3c2.4 1.7 3.3 2.1 3.3 4.6V89c0 4.6-1.7 7.2-7.7 7.7l-78.3 4.7c-4.4.3-6.5-.4-8.7-3.1L2.3 88.6c-2.4-3-3.3-5.2-3.3-8.2V14c0-3.7 1.7-6.8 7-7.5zm69 11.5L28.4 21.6c-2.4.2-3.2 1.5-3.2 3.4v60.7c0 2.2.9 3 3.5 2.8l56.6-3.4c2.4-.1 3.2-1.5 3.2-3.4V21.4c0-2.1-1.1-3.4-3.5-3.4zM33.6 33.7c-.3-2.5 1.5-4 3.8-4.2l30.4-1.9c3.5-.3 4.5 1.4 4.5 3.9v4.3c0 2.5-1.4 4-3.8 4.2L34.8 42c-2.6.2-4.2-.9-4.2-3.4l3-4.9zm0 18.7l34.9-2.2V55c0 2-1 3-3.4 3.2L34 60.3c-2 .1-3.4-1-3.4-3.2v-4.7zm0 16.5L68.5 67v4.4c0 1.8-1 2.8-3.4 3L33.6 76c-2 .1-3.4-1.1-3.4-3.1v-4.1l3.4.1z" />
      </svg>
    ),
  },
  {
    name: 'Linear',
    svg: (
      <svg viewBox="0 0 100 100" fill="currentColor" className="h-6 w-auto">
        <path d="M1.3 61a50 50 0 0 0 72.9 33.8L1.3 27.2V61ZM0 46.2v-4.1C0 21.8 14 5.5 32.7.4L0 46.2ZM35.1.1l64.8 64.8A50 50 0 0 0 35.1.1ZM99.6 55.7L44.2.3C73.4.8 97.4 24.8 99.6 55.7ZM80.3 94.7 5.2 19.6a50 50 0 0 1 75.1 75.1Z" />
      </svg>
    ),
  },
  {
    name: 'OpenAI',
    svg: (
      <svg viewBox="0 0 320 320" fill="currentColor" className="h-7 w-auto">
        <path d="M297.1 134.6a79.3 79.3 0 0 0-6.8-65.1 80.2 80.2 0 0 0-86.4-38.5A79.3 79.3 0 0 0 144 9.4 80.2 80.2 0 0 0 67.5 57a79.3 79.3 0 0 0-53 38.3 80.2 80.2 0 0 0 9.9 94.1 79.3 79.3 0 0 0 6.8 65.1 80.2 80.2 0 0 0 86.4 38.5A79.3 79.3 0 0 0 176 310.6 80.2 80.2 0 0 0 252.4 263a79.3 79.3 0 0 0 53-38.3 80.2 80.2 0 0 0-8.3-90zm-109 152.8c-13.7 0-26.9-4.8-37.3-13.5l1.8-1 62-35.8 6.4-3.7v71.5A66.5 66.5 0 0 1 188 287.4zm-142-61.3a66.2 66.2 0 0 1-7.9-44.5l1.8 1.1 62 35.8 6.3 3.6-63.9 37-1.8-1 1.5-2c-.7-.6-1.5-1.2-2.1-1.7L46 226zm-9.4-141.5A66.5 66.5 0 0 1 74.7 50l-.1 71.7L11 156.6l-1.7 1a66.2 66.2 0 0 1 27.3-73.1zm155.2 33.4L128 82.1l6.4-3.7A66.4 66.4 0 0 1 197.6 92l-1.8 1-62.1 35.8-6.3 3.7zm55.8 32.1-64-36.8 64-37 6.3 3.7 63.9 36.9V197l-.1 6.2-70.1-43.2zm-65 37.6-6.3 3.6-6.3-3.7L100.6 160v-7.4l63.9-36.8 6.4 3.7 63.8 36.8v7.4l-63.9 36.9zm77.4 61.3-62.1-35.8-1.7-1a66.5 66.5 0 0 1 63.7-14.1l1.8 1.1-1.7 71.2z" />
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 109 124" fill="currentColor" className="h-7 w-auto">
        <path d="M94.5 10.4c-.1-.7-.7-1.1-1.2-1.1s-8.4-.6-8.4-.6-5.6-5.5-6.2-6.1c-.6-.6-1.8-.4-2.2-.3 0 0-1.1.3-2.9.9C72 1.6 70.4.2 68.5.2c-7.5 0-11.1 9.4-12.2 14.2-2.9.9-5 1.5-5.2 1.6-1.6.5-1.7.6-1.9 2.1-.1 1.1-4.2 32.4-4.2 32.4L80 57.5l18.9-4.8s-4.3-41.5-4.4-42.3zM72.6 14.4c-1.4.4-2.9.9-4.5 1.4v-.9c0-2.7-.4-4.9-.9-6.7 2.2.4 3.7 2.8 5.4 6.2zm-7 2.2c-3 .9-6.3 1.9-9.5 2.9.9-3.5 2.6-7 5.7-8.5.5 1.3 1.2 3.5 1.4 6 .8-.1 1.6-.3 2.4-.4zm-4.2-10.8c.5 0 1 .2 1.4.5-2.9 1.4-5.9 4.9-7.2 11.8l-5.4 1.7c1.4-5.3 4.9-14 11.2-14z" opacity=".9" />
        <path d="M93.3 9.3c-.5 0-8.4-.6-8.4-.6s-5.6-5.5-6.2-6.1c-.2-.2-.5-.3-.8-.3l-4.1 83.2L106.6 79s-12.7-69-13.3-69.7z" opacity=".8" />
        <path d="M64.2 36.8l-3.6 10.8s-3.2-1.7-7-1.7c-5.7 0-5.9 3.5-5.9 4.4 0 4.9 12.8 6.7 12.8 18.2 0 9-5.7 14.8-13.4 14.8-9.2 0-13.9-5.8-13.9-5.8l2.5-8.1s4.8 4.1 8.9 4.1c2.7 0 3.8-2.1 3.8-3.6 0-6.3-10.5-6.6-10.5-17.2 0-8.8 6.4-17.4 19.2-17.4 4.9 0 7.1 1.5 7.1 1.5z" />
      </svg>
    ),
  },
  {
    name: 'Supabase',
    svg: (
      <svg viewBox="0 0 109 113" fill="none" className="h-7 w-auto">
        <path d="M63.7 110.2c-2.4 3-7.1 1.4-7.3-2.4l-1-67.3h45.2c8.2 0 12.8 9.5 7.6 15.8L63.7 110.2Z" fill="currentColor" />
        <path d="M63.7 110.2c-2.4 3-7.1 1.4-7.3-2.4l-1-67.3h45.2c8.2 0 12.8 9.5 7.6 15.8L63.7 110.2Z" fill="currentColor" fillOpacity=".2" />
        <path d="M45.3 2.8c2.4-3 7.1-1.4 7.3 2.4l.7 67.3H8.4C.2 72.5-4.4 63 .8 56.6L45.3 2.8Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    svg: (
      <svg viewBox="0 0 180 180" fill="currentColor" className="h-7 w-auto">
        <mask id="a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" />
        </mask>
        <g mask="url(#a)">
          <circle cx="90" cy="90" r="90" />
          <path d="M149.5 169L69 54H54v71.9h13.4V73.2L138.5 183a90.7 90.7 0 0 0 11-14Z" fill="url(#b)" />
          <rect x="113" y="54" width="13" height="72" fill="url(#c)" />
        </g>
        <defs>
          <linearGradient id="b" x1="109" y1="116.5" x2="144.5" y2="167" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="c" x1="113" y1="54" x2="113.2" y2="106.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

// Duplicate for seamless infinite scroll
const allLogos = [...BrandLogos, ...BrandLogos];

export default function TrustedBySection() {
  return (
    <section className="w-full bg-[#f0f5f2] border-y border-[#141f19]/8 py-10 overflow-hidden">
      {/* Label */}
      <p className="text-center text-3xl font-semibold tracking-[0.2em] uppercase text-[#3b413e] mb-8 font-sans">
        Technologies &amp; Tools I work with
      </p>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
        <motion.div
          className="flex items-center gap-16 shrink-0 pr-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {allLogos.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex items-center gap-2.5 text-[#3a4d42]/50 hover:text-[#141f19] transition-colors duration-300 shrink-0 select-none"
              title={logo.name}
            >
              {logo.svg}
              <span className="text-4xl cursor-pointer font-semibold font-sans hidden sm:block whitespace-nowrap">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
