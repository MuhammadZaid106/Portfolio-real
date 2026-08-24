"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, X, ArrowRight } from "lucide-react";

interface BookingWidgetProps {
  buttonLabel?: string;
  heading?: string;
  subtext?: string;
  bookingUrl: string;
  iconType?: "calendar" | "message";
}

export default function BookingWidget({
  buttonLabel = "Schedule Call",
  heading = "Let's Work Together",
  subtext = "Book a free 30-min discovery call to discuss your project.",
  bookingUrl,
  iconType = "calendar",
}: BookingWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Detect mobile width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle click outside to close (desktop only)
  useEffect(() => {
    if (isMobile || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, isMobile]);

  // Prevent scroll when bottom sheet is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, isMobile]);

  // Select toggle button icon
  const Icon = iconType === "message" ? MessageCircle : Calendar;

  // Animation variants
  const desktopVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const mobileVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 30,
      },
    },
    exit: {
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={widgetRef} className="fixed z-50 bottom-6 right-6 font-sans">
      {/* Backdrop overlay for mobile bottom sheet */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40"
          />
        )}
      </AnimatePresence>

      {/* Floating Card Popup / Bottom Sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={isMobile ? mobileVariants : desktopVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`
              fixed z-50 bg-white dark:bg-[#0d1511] border border-gray-150 dark:border-[#52c48a]/20 shadow-2xl
              ${
                isMobile
                  ? "bottom-0 left-0 right-0 w-full rounded-t-3xl p-6 pb-8 border-x-0 border-b-0"
                  : "bottom-24 right-0 w-[360px] rounded-2xl p-6 border"
              }
            `}
          >
            {/* Header info */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#52c48a]/10 dark:bg-[#52c48a]/20 text-[#52c48a] rounded-xl">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-50 leading-tight">
                    {heading}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-semibold text-[#52c48a] bg-[#52c48a]/10 dark:bg-[#52c48a]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#52c48a] animate-pulse" />
                    Available Now
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Close booking widget"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Subtext info */}
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
              {subtext}
            </p>

            {/* CTA action button */}
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="
                group w-full inline-flex items-center justify-center gap-2 
                bg-[#141f19] hover:bg-[#52c48a] dark:bg-[#52c48a] dark:hover:bg-[#43b078] 
                text-white dark:text-[#141f19] hover:text-[#141f19]
                text-sm font-bold py-3.5 px-5 rounded-xl transition-all duration-300 
                shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#52c48a]/50
              "
            >
              <span>{buttonLabel}</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button with Pulse Background */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close widget" : "Open booking widget"}
        className={`
          relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer
          transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-[#52c48a]/50
          ${
            isOpen
              ? "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rotate-90"
              : "bg-[#141f19] dark:bg-[#52c48a] text-white dark:text-[#141f19]"
          }
        `}
        whileTap={{ scale: 0.92 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Absolute pulse background when widget is closed */}
        <AnimatePresence>
          {!isOpen && (
            <motion.span
              className="absolute -inset-1.5 rounded-full border-2 border-[#52c48a]/30 dark:border-white/30"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close-icon"
              initial={{ rotate: -95, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 95, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open-icon"
              initial={{ rotate: 95, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -95, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
