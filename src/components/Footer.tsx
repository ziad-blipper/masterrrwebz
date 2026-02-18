"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#151515]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#166534] flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Rillation<span className="text-[#22c55e]">.</span>
              </span>
            </div>
            <p className="text-[#666] leading-relaxed max-w-md mb-8">
              Strategic execution partner building revenue infrastructure for
              B2B organizations. We turn outbound into pipeline and pipeline into
              revenue.
            </p>
            <a
              href="mailto:hello@rillation.com"
              className="text-[#22c55e] hover:text-[#4ade80] transition-colors"
            >
              hello@rillation.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-4">
              {["Content Strategy", "Outbound Email", "LinkedIn DMs", "Paid Advertising"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#services"
                      className="text-[#666] hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-4">
              {["About", "Process", "Results", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-[#666] hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#111]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#444] text-sm">
            &copy; {new Date().getFullYear()} Rillation Revenue. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[#444] hover:text-white transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-[#444] hover:text-white transition-colors text-sm">
              Terms
            </a>
          </div>
        </div>
      </div>

      {/* Big brand watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative overflow-hidden py-8"
      >
        <div className="text-center">
          <span className="text-[#0e0e0e] text-[8rem] md:text-[12rem] lg:text-[16rem] font-serif font-bold leading-none select-none">
            RILLATION
          </span>
        </div>
      </motion.div>
    </footer>
  );
}
