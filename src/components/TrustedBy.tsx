"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "TechVault",
  "ScaleOps",
  "DataBridge",
  "NexGen",
  "CloudFirst",
];

export default function TrustedBy() {
  return (
    <section className="relative py-20 border-y border-[#151515]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#555] text-sm uppercase tracking-[0.2em] mb-12"
        >
          Trusted by forward-thinking B2B teams
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-[#333] hover:text-[#555] transition-colors duration-300 text-xl font-semibold tracking-wide"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
