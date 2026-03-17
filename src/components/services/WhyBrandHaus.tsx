"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Bespoke, not template-based",
    text: "Everything is designed around the brand, the audience and the outcome you actually need.",
  },
  {
    title: "Strategy-led creative work",
    text: "Design decisions are backed by clarity, positioning and long-term growth thinking.",
  },
  {
    title: "Performance-focused execution",
    text: "Websites and digital assets are built to be fast, scalable and commercially useful.",
  },
  {
    title: "A joined-up creative partner",
    text: "Branding, web, content and digital support work together under one clear direction.",
  },
];

export default function WhyBrandhaus() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16 lg:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.18em] text-[#131316]/45">
            Why BrandHaus
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            Built to give ambitious brands real creative momentum.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#131316]/70">
            BrandHaus combines strategic thinking, modern execution and refined
            creative direction to help brands build stronger digital foundations.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-[24px] border border-[#131316]/8 bg-white/55 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-xl font-medium tracking-[-0.02em]">
                {reason.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[#131316]/68">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}