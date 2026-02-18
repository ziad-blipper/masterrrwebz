"use client";

import { motion } from "framer-motion";
import AnimatedLines from "./AnimatedLines";

const services = [
  {
    title: "Content Strategy",
    description:
      "We craft magnetic content that positions your brand as the authority in your space. Thought leadership, case studies, and SEO-driven assets that attract and nurture high-intent buyers.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    metric: "3x",
    metricLabel: "organic traffic growth",
  },
  {
    title: "Outbound Email",
    description:
      "Precision-targeted cold email sequences that land in primary inboxes, not spam. We build the infrastructure, write the copy, and optimize deliverability at scale.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    metric: "45%+",
    metricLabel: "open rates",
  },
  {
    title: "LinkedIn DMs",
    description:
      "Personalized outreach that starts real conversations with decision-makers. We turn your LinkedIn into a pipeline generation machine with warm, human messaging that converts.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    metric: "200+",
    metricLabel: "meetings booked / quarter",
  },
  {
    title: "Paid Advertising",
    description:
      "Performance media that fills your pipeline with qualified leads. LinkedIn Ads, Google Ads, and Meta — we build full-funnel campaigns with ruthless ROI focus.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
    metric: "5:1",
    metricLabel: "average ROAS",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <AnimatedLines variant="section" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#22c55e] text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
          >
            Four channels.{" "}
            <span className="text-[#555]">One unified revenue machine.</span>
          </motion.h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-hover group relative p-8 lg:p-10 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] overflow-hidden"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#22c55e]/0 to-[#22c55e]/0 group-hover:from-[#22c55e]/[0.02] group-hover:to-transparent transition-all duration-500 rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#22c55e]/10 border border-[#22c55e]/20 flex items-center justify-center text-[#22c55e] mb-6 group-hover:bg-[#22c55e]/15 transition-colors duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-[#888] leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Metric */}
                <div className="flex items-end gap-3 pt-6 border-t border-[#1a1a1a]">
                  <span className="text-3xl font-bold gradient-text">
                    {service.metric}
                  </span>
                  <span className="text-[#555] text-sm pb-1">
                    {service.metricLabel}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
