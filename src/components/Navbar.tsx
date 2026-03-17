"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between rounded-full border border-[#131316]/8 bg-[#FAF8F2]/85 px-5 py-3 shadow-[0_6px_30px_rgba(0,0,0,0.08)] backdrop-blur-md sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-3 text-[#131316] transition-opacity duration-200 hover:opacity-80"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#131316] text-sm font-semibold text-white">
              B
            </div>
            <span className="text-base font-semibold tracking-[-0.02em]">
              BrandHaus
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    isActive
                      ? "text-sm font-medium text-[#131316]"
                      : "text-sm font-medium text-[#131316]/65 transition hover:text-[#131316]"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-[#131316] px-5 py-2.5 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:opacity-95"
            >
              Work With Us
            </Link>
          </div>

          <div className="md:hidden">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-[#131316]/12 px-4 py-2 text-sm font-medium text-[#131316] transition duration-200 hover:bg-[#131316]/5"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}