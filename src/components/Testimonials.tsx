"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Rillation didn't just generate leads — they built an entire revenue system that runs while we sleep. Our pipeline tripled in 90 days.",
    author: "Sarah Chen",
    role: "VP of Growth",
    company: "ScaleOps",
  },
  {
    quote:
      "We tried 3 agencies before Rillation. The difference? They actually understand B2B sales cycles. Every touchpoint is intentional.",
    author: "Marcus Rivera",
    role: "CEO",
    company: "DataBridge",
  },
  {
    quote:
      "Their outbound engine books us 50+ qualified meetings per month. The ROI is absurd. Best investment we've made in growth.",
    author: "Alex Thompson",
    role: "Head of Revenue",
    company: "NexGen AI",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#22c55e] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Client Voices
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Don&apos;t take our word for it
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-hover relative p-8 lg:p-10 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a] group"
            >
              {/* Quote mark */}
              <div className="text-[#22c55e]/20 text-6xl font-serif leading-none mb-4">
                &ldquo;
              </div>

              <p className="text-[#ccc] leading-relaxed text-lg mb-8 font-light">
                {testimonial.quote}
              </p>

              <div className="pt-6 border-t border-[#1a1a1a]">
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-[#666] text-sm">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
