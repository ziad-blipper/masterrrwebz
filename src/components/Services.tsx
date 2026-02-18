"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Content Strategy",
    description:
      "We craft magnetic content that positions your brand as the authority in your space. Thought leadership, case studies, and SEO-driven assets that attract and nurture high-intent buyers.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#059669] text-sm font-semibold uppercase tracking-[0.15em] mb-3"
          >
            What We Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900"
          >
            Four channels.{" "}
            <span className="text-gray-400">One unified revenue machine.</span>
          </motion.h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover group p-7 rounded-xl border border-gray-100 bg-white hover:bg-[#ecfdf5] transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-lg bg-[#ecfdf5] border border-[#d1fae5] flex items-center justify-center text-[#059669] mb-5 group-hover:bg-[#d1fae5] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-gray-900 mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                {service.description}
              </p>

              {/* Metric */}
              <div className="flex items-end gap-2.5 pt-5 border-t border-gray-100">
                <span className="text-2xl font-bold text-[#059669]">
                  {service.metric}
                </span>
                <span className="text-gray-400 text-sm pb-0.5">
                  {service.metricLabel}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
