"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    text: "We start by understanding the brand, audience and commercial goal.",
  },
  {
    title: "Define",
    text: "We shape the strategy, structure and direction before execution begins.",
  },
  {
    title: "Design",
    text: "We build the visual and digital system with clarity, precision and intent.",
  },
  {
    title: "Deliver",
    text: "We launch polished work that is built to perform and evolve with you.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-sm uppercase tracking-[0.18em] text-[#131316]/45">
          Process
        </p>
        <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          A clear process, built for better outcomes.
        </h2>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.6,
              delay: i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[24px] border border-[#131316]/8 bg-white/45 p-7"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-[#131316]/40">
              0{i + 1}
            </p>
            <h3 className="mt-4 text-2xl font-medium tracking-[-0.02em]">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[#131316]/68">
              {step.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}