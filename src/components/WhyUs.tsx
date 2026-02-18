"use client";

import { motion } from "framer-motion";
import AnimatedLines from "./AnimatedLines";

const reasons = [
  {
    title: "Execution, Not Advice",
    description:
      "We don't hand you a strategy deck and disappear. We build, launch, and optimize every channel — acting as your embedded revenue team.",
  },
  {
    title: "Multi-Channel by Default",
    description:
      "Your buyers aren't in one place. We orchestrate content, outbound, LinkedIn, and ads into a unified system that surrounds your ICP.",
  },
  {
    title: "Infrastructure, Not Campaigns",
    description:
      "Campaigns end. Infrastructure compounds. We build systems that generate pipeline predictably, month after month.",
  },
  {
    title: "Revenue-Obsessed",
    description:
      "We don't optimize for vanity metrics. Every action we take is measured against pipeline generated and revenue closed.",
  },
  {
    title: "Speed to Market",
    description:
      "We go from kickoff to live campaigns in 14 days. No 90-day onboarding. No endless workshops. Just velocity.",
  },
  {
    title: "Radical Transparency",
    description:
      "Real-time dashboards. Weekly war rooms. You see every metric, every test, every result. No black boxes.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-32">
      <AnimatedLines variant="section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#22c55e] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Why Rillation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            Built different.{" "}
            <span className="text-[#555]">On purpose.</span>
          </motion.h2>
        </div>

        {/* Reason Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-[#1a1a1a] hover:border-[#22c55e]/20 bg-[#0a0a0a] transition-all duration-500"
            >
              {/* Green accent line */}
              <div className="w-8 h-[2px] bg-[#22c55e]/40 group-hover:w-12 group-hover:bg-[#22c55e] transition-all duration-500 mb-6" />

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#22c55e] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-[#777] leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
