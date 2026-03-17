"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-28 pt-14 text-center md:px-10 lg:pb-36">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          Ready to Build Something Exceptional?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#131316]/70">
          We work with ambitious brands that want sharper positioning, stronger
          digital experiences and more intentional creative execution.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#131316] px-7 py-4 text-sm font-medium text-white transition duration-200 hover:scale-[1.02]"
          >
            Start Your Project
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-[#131316]/12 px-7 py-4 text-sm font-medium transition duration-200 hover:bg-[#131316]/5"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}