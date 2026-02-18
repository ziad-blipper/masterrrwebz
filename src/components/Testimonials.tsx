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
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#059669] text-sm font-semibold uppercase tracking-[0.15em] mb-3">
            Client Voices
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-gray-900">
            Don&apos;t take our word for it
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover p-7 rounded-xl border border-gray-100 bg-white group"
            >
              {/* Quote mark */}
              <div className="text-[#d1fae5] text-5xl font-serif leading-none mb-3">
                &ldquo;
              </div>

              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {testimonial.quote}
              </p>

              <div className="pt-5 border-t border-gray-100">
                <p className="text-gray-900 font-semibold text-sm">{testimonial.author}</p>
                <p className="text-gray-400 text-xs mt-0.5">
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
