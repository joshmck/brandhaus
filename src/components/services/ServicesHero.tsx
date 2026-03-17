"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-16 pt-36 md:px-10 lg:px-16 lg:pb-24 lg:pt-44">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.18em] text-[#131316]/55">
          Services
        </p>
        <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-7xl">
          Services Built for Ambitious Brands
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-[#131316]/70">
          BrandHaus helps businesses grow through strategic branding, modern
          websites, search visibility, premium content and digital support built
          to perform in the real world.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-[#131316] px-7 py-4 text-sm font-medium text-white transition duration-200 hover:scale-[1.02]"
          >
            Work With Us
          </Link>
          <Link
            href="/work"
            className="rounded-full border border-[#131316]/15 px-7 py-4 text-sm font-medium text-[#131316] transition duration-200 hover:bg-[#131316]/5"
          >
            View Our Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}