"use client";

import { motion } from "framer-motion";

export default function ServicesIntro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-16 lg:py-12">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="text-2xl leading-relaxed tracking-[-0.02em] text-[#131316]/85 md:text-3xl">
          We build brands, websites and content systems designed to look sharp,
          communicate clearly and perform with purpose.
        </p>
      </motion.div>
    </section>
  );
}