"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  cta: string;
  image: string;
  reverse?: boolean;
};

export default function ServicesSection({
  number,
  title,
  description,
  bullets,
  cta,
  image,
  reverse = false,
}: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[28px] border border-[#131316]/8 bg-white/55 shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-sm"
    >
      <div
        className={`grid items-stretch gap-0 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="flex flex-col justify-between p-8 md:p-10 lg:p-14">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-[#131316]/45">
              {number}
            </p>

            <h2 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.03em] md:text-5xl">
              {title}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#131316]/70 md:text-lg">
              {description}
            </p>

            <ul className="mt-8 space-y-3">
              {bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-sm text-[#131316]/75 md:text-base"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5A0A]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-[#131316]/12 px-6 py-3 text-sm font-medium transition duration-200 hover:bg-[#131316] hover:text-white"
            >
              {cta}
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] bg-[#131316]/4">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </motion.section>
  );
}