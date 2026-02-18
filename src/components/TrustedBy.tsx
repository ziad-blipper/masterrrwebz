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
    <section className="bg-white py-14 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-xs uppercase tracking-[0.2em] mb-8"
        >
          Trusted by forward-thinking B2B teams
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-gray-300 hover:text-gray-400 transition-colors duration-300 text-lg font-semibold tracking-wide"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
