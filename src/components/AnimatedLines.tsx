"use client";

import { motion } from "framer-motion";

interface AnimatedLinesProps {
  variant?: "hero" | "section" | "full";
  className?: string;
}

export default function AnimatedLines({ variant = "hero", className = "" }: AnimatedLinesProps) {
  if (variant === "section") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d1fae5] to-transparent" />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d1fae5]/50 to-transparent"
      />
    </div>
  );
}
