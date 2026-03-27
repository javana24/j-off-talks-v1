"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { featuredGuests } from "@/lib/guests";

export function FeaturedGuests() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 space-y-4 text-center">
        <p className="text-xs tracking-[0.24em] text-[#d9af68]">INVITADOS DESTACADOS</p>
        <h2 className="text-3xl font-semibold tracking-[0.05em] text-white sm:text-4xl">
          Mentes que lideran su industria
        </h2>
      </div>

      <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuredGuests.map((guest, index) => {
          const isLarge = index === 0 || index === 1;
          return (
            <motion.article
              key={guest.id}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.36, delay: index * 0.05, ease: "easeOut" }}
              whileHover={reduceMotion ? {} : { y: -4, scale: 1.01 }}
              className={`card group overflow-hidden border border-white/10 bg-neutral text-neutral-content transition-shadow duration-200 hover:shadow-[0_10px_40px_rgba(212,163,91,0.2)] ${
                isLarge ? "md:row-span-2" : ""
              }`}
            >
              <figure className="relative h-full w-full">
                <Image
                  src={guest.imageUrl}
                  alt={guest.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/5" />
              </figure>
              <div className="card-body absolute inset-x-0 bottom-0 z-10 p-4">
                <div className="badge border border-[#9a6d2f] bg-black/70 text-[#f1c97f]">
                  {guest.category}
                </div>
                <h3 className="card-title mt-2 text-lg text-white">{guest.name}</h3>
                <p className="text-sm text-white/75">{guest.description}</p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
