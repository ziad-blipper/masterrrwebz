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
    <section id="process" className="bg-white py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#059669] text-sm font-semibold uppercase tracking-[0.15em] mb-3"
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900"
          >
            A system, <span className="text-gray-400">not a service.</span>
          </motion.h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[28px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-[#d1fae5] via-[#a7f3d0] to-[#d1fae5] hidden lg:block" />

          <div className="space-y-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <div className="lg:grid lg:grid-cols-[60px_1fr] lg:gap-8 p-6 lg:py-8 rounded-xl hover:bg-[#ecfdf5] transition-colors duration-300">
                  {/* Step Number */}
                  <div className="flex-shrink-0 mb-4 lg:mb-0">
                    <div className="relative">
                      <span className="text-3xl font-serif font-bold text-gray-200 group-hover:text-[#059669]/30 transition-colors duration-300">
                        {step.number}
                      </span>
                      {/* Dot on the line */}
                      <div className="hidden lg:block absolute top-1/2 left-[0px] -translate-y-1/2 -translate-x-[13px]">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#d1fae5] group-hover:bg-[#059669] transition-colors duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2 group-hover:text-[#059669] transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {i < steps.length - 1 && (
                  <div className="mx-6 border-b border-gray-100" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
