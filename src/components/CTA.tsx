"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative bg-[#064e3b] py-20 lg:py-24 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#10b981]/8 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#6ee7b7] text-sm font-semibold uppercase tracking-[0.15em] mb-4">
            Ready to Scale?
          </p>

          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6">
            Stop guessing.{" "}
            <br className="hidden md:block" />
            <span className="italic text-[#6ee7b7]">Start building.</span>
          </h2>

          <p className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Book a 30-minute strategy call. We&apos;ll audit your current pipeline,
            identify the biggest revenue levers, and show you exactly how we&apos;d
            build your revenue infrastructure.
          </p>

          <a
            href="mailto:hello@rillation.com"
            className="inline-block px-8 py-4 bg-white text-[#064e3b] font-bold rounded-full hover:bg-[#d1fae5] transition-all duration-300 text-base"
          >
            Book Your Strategy Call
          </a>

          <p className="mt-6 text-white/30 text-sm">
            No commitment. No pitch deck. Just a real conversation about growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
