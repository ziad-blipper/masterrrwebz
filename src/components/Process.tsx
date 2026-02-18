"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit & Discovery",
    description:
      "We reverse-engineer your current revenue operations — what's working, what's leaking, and where the untapped opportunity lives. No fluff, just forensic analysis.",
  },
  {
    number: "02",
    title: "Strategy & Architecture",
    description:
      "We design a multi-channel revenue blueprint tailored to your ICP, deal cycle, and growth targets. Every channel, message, and touchpoint is mapped before we build.",
  },
  {
    number: "03",
    title: "Build & Execute",
    description:
      "We deploy your revenue infrastructure across content, outbound, LinkedIn, and ads — simultaneously. Our team operates as an embedded extension of yours.",
  },
  {
    number: "04",
    title: "Optimize & Scale",
    description:
      "We obsess over the data. A/B tests, sequence iterations, audience refinements, creative rotations. Every week, your machine gets sharper and your pipeline gets fatter.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#22c55e] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            A system, <span className="text-[#555]">not a service.</span>
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#22c55e]/40 via-[#22c55e]/20 to-transparent hidden lg:block" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative group"
              >
                <div className="lg:grid lg:grid-cols-[80px_1fr] lg:gap-12 p-8 lg:py-12 rounded-2xl hover:bg-[#0d0d0d] transition-colors duration-500">
                  {/* Step Number */}
                  <div className="flex-shrink-0 mb-6 lg:mb-0">
                    <div className="relative">
                      <span className="text-5xl font-serif font-bold text-[#1a1a1a] group-hover:text-[#22c55e]/20 transition-colors duration-500">
                        {step.number}
                      </span>
                      {/* Glowing dot on the line */}
                      <div className="hidden lg:block absolute top-1/2 left-[0px] -translate-y-1/2 -translate-x-[21px]">
                        <div className="w-3 h-3 rounded-full bg-[#22c55e]/30 group-hover:bg-[#22c55e] transition-colors duration-500">
                          <div className="absolute inset-0 rounded-full bg-[#22c55e] opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:pt-2">
                    <h3 className="text-2xl md:text-3xl font-serif text-white mb-4 group-hover:text-[#22c55e] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-[#777] leading-relaxed max-w-2xl text-lg">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {i < steps.length - 1 && (
                  <div className="mx-8 border-b border-[#151515]" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
