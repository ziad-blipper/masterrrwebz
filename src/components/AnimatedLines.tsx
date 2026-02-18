"use client";

import { motion } from "framer-motion";

interface AnimatedLinesProps {
  variant?: "hero" | "section" | "full";
  className?: string;
}

export default function AnimatedLines({ variant = "hero", className = "" }: AnimatedLinesProps) {
  if (variant === "hero") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {/* Flowing curved lines */}
        <svg
          className="absolute inset-0 w-full h-full line-glow"
          viewBox="0 0 1440 900"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Line 1 - sweeping curve */}
          <motion.path
            d="M-100 300 C200 100, 600 500, 900 200 S1400 400, 1600 150"
            stroke="url(#green-gradient-1)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Line 2 - wider arc */}
          <motion.path
            d="M-50 500 C300 300, 500 700, 800 400 S1200 600, 1500 350"
            stroke="url(#green-gradient-2)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.8 }}
          />
          {/* Line 3 - tight curve */}
          <motion.path
            d="M100 700 C400 500, 700 800, 1000 500 S1300 700, 1600 500"
            stroke="url(#green-gradient-1)"
            strokeWidth="0.6"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.4 }}
            transition={{ duration: 3.5, ease: "easeInOut", delay: 1 }}
          />
          {/* Line 4 - diagonal sweep */}
          <motion.path
            d="M-200 800 C200 600, 600 900, 1000 600 S1400 800, 1700 500"
            stroke="url(#green-gradient-2)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 4, ease: "easeInOut", delay: 1.2 }}
          />
          {/* Line 5 - top accent */}
          <motion.path
            d="M300 50 C500 200, 800 -50, 1100 150 S1400 50, 1600 200"
            stroke="url(#green-gradient-1)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1.5 }}
          />

          <defs>
            <linearGradient id="green-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
              <stop offset="30%" stopColor="#22c55e" stopOpacity="0.6" />
              <stop offset="70%" stopColor="#4ade80" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="green-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#166534" stopOpacity="0" />
              <stop offset="40%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#4ade80" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#166534" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#22c55e]/5 rounded-full blur-[120px] glow-orb" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#166534]/8 rounded-full blur-[100px] glow-orb" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#22c55e]/3 rounded-full blur-[150px] glow-orb" style={{ animationDelay: "1s" }} />
      </div>
    );
  }

  if (variant === "section") {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <svg
          className="absolute inset-0 w-full h-full line-glow"
          viewBox="0 0 1440 400"
          fill="none"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M-100 200 C200 50, 500 350, 800 150 S1200 300, 1600 100"
            stroke="url(#section-gradient)"
            strokeWidth="0.8"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path
            d="M0 350 C300 200, 600 400, 900 250 S1300 350, 1500 200"
            stroke="url(#section-gradient)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
          <defs>
            <linearGradient id="section-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
              <stop offset="50%" stopColor="#22c55e" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }

  // full variant - for between sections
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 200"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.line
          x1="0" y1="100" x2="1440" y2="100"
          stroke="#22c55e"
          strokeWidth="0.3"
          strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </svg>
    </div>
  );
}
