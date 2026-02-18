"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v.toLocaleString());
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {prefix}{display}{suffix}
    </span>
  );
}

const stats = [
  { value: 50, suffix: "M+", prefix: "$", label: "Pipeline Generated" },
  { value: 500, suffix: "K+", prefix: "", label: "Emails Delivered" },
  { value: 2000, suffix: "+", prefix: "", label: "Meetings Booked" },
  { value: 150, suffix: "+", prefix: "", label: "B2B Clients Served" },
];

export default function Stats() {
  return (
    <section id="results" className="relative py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22c55e]/[0.02] to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#22c55e] text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            The Numbers
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            Results that{" "}
            <span className="italic gradient-text">compound</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl border border-[#1a1a1a] bg-[#0a0a0a]/50"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-3 font-serif">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </div>
              <p className="text-[#666] text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
