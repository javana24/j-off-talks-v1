"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/episodios", label: "Episodios" },
  { href: "/sobre", label: "Sobre J OFF" },
];

export function SiteNavbar() {
  return (
    <header className="navbar sticky top-0 z-40 border-b border-white/10 bg-black/75 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between py-4">
        <Link className="flex items-center gap-3" href="/">
          <span className="text-sm tracking-[0.28em] text-white/80">J OFF TALKS</span>
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <Link
                href={item.href}
                className="rounded-full border border-white/20 bg-black/55 px-3 py-2 text-xs tracking-[0.16em] text-white/80 transition-colors duration-200 hover:border-[#c99850] hover:text-[#f6d28e] sm:px-4 sm:text-sm"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </header>
  );
}
