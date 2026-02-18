"use client";

import { motion } from "framer-motion";

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
    <section className="bg-[#f9fafb] py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#059669] text-sm font-semibold uppercase tracking-[0.15em] mb-3"
          >
            Why Rillation
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900"
          >
            Built different.{" "}
            <span className="text-gray-400">On purpose.</span>
          </motion.h2>
        </div>

        {/* Reason Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group p-6 rounded-xl bg-white border border-gray-100 hover:border-[#d1fae5] transition-all duration-300"
            >
              {/* Green accent line */}
              <div className="w-8 h-[2px] bg-[#d1fae5] group-hover:w-10 group-hover:bg-[#059669] transition-all duration-300 mb-4" />

              <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-[#059669] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
