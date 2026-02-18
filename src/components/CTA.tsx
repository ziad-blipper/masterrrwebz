"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#22c55e]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#22c55e]/[0.06] rounded-full blur-[80px]" />
      </div>

      {/* Decorative lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none line-glow"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M-100 300 C200 100, 500 500, 800 250 S1200 400, 1600 200"
          stroke="url(#cta-line)"
          strokeWidth="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
        />
        <motion.path
          d="M-50 400 C300 250, 600 500, 900 300 S1300 450, 1550 250"
          stroke="url(#cta-line)"
          strokeWidth="0.4"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3, delay: 0.3 }}
        />
        <defs>
          <linearGradient id="cta-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#22c55e] text-sm font-semibold uppercase tracking-[0.2em] mb-6">
            Ready to Scale?
          </p>

          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8">
            Stop guessing.{" "}
            <br className="hidden md:block" />
            <span className="italic gradient-text">Start building.</span>
          </h2>

          <p className="text-[#888] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Book a 30-minute strategy call. We&apos;ll audit your current pipeline,
            identify the biggest revenue levers, and show you exactly how we&apos;d
            build your revenue infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hello@rillation.com"
              className="px-10 py-5 bg-[#22c55e] text-black font-bold rounded-full hover:bg-[#4ade80] transition-all duration-300 hover:shadow-[0_0_60px_rgba(34,197,94,0.3)] text-lg"
            >
              Book Your Strategy Call
            </a>
          </div>

          <p className="mt-8 text-[#444] text-sm">
            No commitment. No pitch deck. Just a real conversation about growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
