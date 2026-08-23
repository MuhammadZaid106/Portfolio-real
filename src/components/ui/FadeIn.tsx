"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

const directionMap = {
  up:    { y: 40, x: 0 },
  down:  { y: -40, x: 0 },
  left:  { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none:  { x: 0, y: 0 },
};

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance,
  once = true,
}: FadeInProps) {
  const d = directionMap[direction];
  const initial = {
    opacity: 0,
    y: distance !== undefined ? (direction === "up" ? distance : direction === "down" ? -distance : 0) : d.y,
    x: distance !== undefined ? (direction === "left" ? distance : direction === "right" ? -distance : 0) : d.x,
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}


