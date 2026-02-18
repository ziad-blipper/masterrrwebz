"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-[#064e3b] overflow-hidden">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#10b981]/10 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[#a7f3d0] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6ee7b7] animate-pulse" />
              Strategic Revenue Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white max-w-4xl"
          >
            We Build the{" "}
            <span className="italic text-[#6ee7b7]">Revenue Engine</span>
            <br />
            Your B2B Deserves
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-white/65 max-w-2xl leading-relaxed"
          >
            Rillation is your strategic execution partner — building revenue
            infrastructure through content, outbound, LinkedIn, and paid ads
            that actually converts pipeline into closed deals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="px-7 py-3.5 bg-white text-[#064e3b] font-semibold rounded-full hover:bg-[#d1fae5] transition-all duration-300 text-sm"
            >
              Build My Revenue Engine
            </a>
            <a
              href="#process"
              className="px-7 py-3.5 border border-white/20 text-white font-medium rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/30 text-xs uppercase tracking-[0.2em]">Scroll</span>
              <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
