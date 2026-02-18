"use client";

import { motion } from "framer-motion";
import AnimatedLines from "./AnimatedLines";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedLines variant="hero" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#22c55e]/20 bg-[#22c55e]/5 text-[#4ade80] text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Strategic Revenue Partner
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight max-w-5xl"
          >
            We Build the{" "}
            <span className="gradient-text italic">Revenue Engine</span>
            <br />
            Your B2B Deserves
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg md:text-xl text-[#a1a1aa] max-w-2xl leading-relaxed font-light"
          >
            Rillation is your strategic execution partner — building revenue
            infrastructure through content, outbound, LinkedIn, and paid ads
            that actually converts pipeline into closed deals.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-[#22c55e] text-black font-semibold rounded-full hover:bg-[#4ade80] transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] text-base"
            >
              Build My Revenue Engine
            </a>
            <a
              href="#process"
              className="px-8 py-4 border border-[#333] text-white font-medium rounded-full hover:border-[#22c55e]/40 hover:bg-[#22c55e]/5 transition-all duration-300 text-base"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-20"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-[#555] text-xs uppercase tracking-[0.2em]">Scroll</span>
              <div className="w-[1px] h-8 bg-gradient-to-b from-[#22c55e]/50 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060606] to-transparent" />
    </section>
  );
}
