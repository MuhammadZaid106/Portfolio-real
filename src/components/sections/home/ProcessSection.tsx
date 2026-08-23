"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Tell Me What You Need",
    description:
      "One quick conversation. Tell me about your product, tech stack, and goals.",
  },
  {
    number: "02",
    title: "Get A Proposal Within 24 Hours",
    description:
      "I design the architecture, map out timelines, and define the scope of work.",
  },
  {
    number: "03",
    title: "Start Shipping Immediately",
    description:
      "I onboard directly into your Slack/GitHub workflow and begin building from day one.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative w-full bg-[#070d0a] py-24 sm:py-32 overflow-hidden text-center">
      {/* Custom high-tech grid network SVG background */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#52c48a"
                strokeWidth="0.5"
                strokeOpacity="0.15"
              />
            </pattern>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#52c48a" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#070d0a" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Radial light glow */}
          <rect width="100%" height="100%" fill="url(#glow)" />
          {/* Grid pattern */}
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Decorative tech lines */}
          <path
            d="M -100 100 Q 300 300 800 150 T 1800 250"
            fill="none"
            stroke="#52c48a"
            strokeWidth="1"
            strokeDasharray="5,5"
            strokeOpacity="0.3"
          />
          <path
            d="M 100 500 Q 600 350 1100 450 T 2100 200"
            fill="none"
            stroke="#52c48a"
            strokeWidth="1"
            strokeDasharray="3,3"
            strokeOpacity="0.2"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans tracking-tight"
          >
            Three Steps. That&apos;s All It Takes.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#52c48a] text-lg sm:text-xl font-bold font-sans mt-3"
          >
            Simple Process. Serious Results.
          </motion.p>
        </div>

        {/* Steps Grid with Connecting Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start max-w-5xl mx-auto mb-16">
          {/* Horizontal line connector (Desktop only) */}
          <div className="hidden md:block absolute top-[28px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-[#52c48a]/30 to-transparent z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center group"
            >
              {/* Number Badge */}
              <div className="w-14 h-14 rounded-full bg-[#52c48a] text-[#070d0a] font-extrabold font-mono text-lg flex items-center justify-center shadow-lg shadow-[#52c48a]/20 border-4 border-[#070d0a] transition-transform duration-300 group-hover:scale-110">
                {step.number}
              </div>

              {/* Content */}
              <div className="mt-6 space-y-3 px-4">
                <h3 className="text-white text-lg sm:text-xl font-bold font-sans tracking-tight group-hover:text-[#52c48a] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm font-sans leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex justify-center"
        >
          <a href="/contact">
            <Button
              variant="outline"
              size="lg"
              showArrow
              className="bg-white text-[#070d0a] border-white hover:bg-[#52c48a] hover:text-white hover:border-[#52c48a] shadow-lg"
            >
              Schedule A Call Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
