"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[68vh] overflow-hidden sm:min-h-[78vh]">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-30"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-a-crowd-at-a-concert-1579/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/55 to-black/80" />

      <div className="relative mx-auto flex min-h-[68vh] max-w-7xl flex-col items-center justify-start gap-8 px-4 pt-24 text-center sm:min-h-[78vh] sm:justify-center sm:px-6 sm:pt-0 lg:px-8">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.52, ease: "easeOut" }}
          className="space-y-6"
        >
          <Image
            src="/logo-joff.png"
            alt="J OFF Talks Logo"
            width={116}
            height={116}
            priority
            className="mx-auto drop-shadow-[0_0_28px_rgba(240,196,119,0.55)]"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="mx-auto inline-flex rounded-full border border-[#b28643]/55 bg-black/65 px-4 py-2 text-xs tracking-[0.2em] text-[#f4d08b]">
            PODCAST DE ALTO IMPACTO
          </p>
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/12 bg-black/45 px-6 py-5 backdrop-blur-sm">
            <h1 className="text-4xl leading-tight font-semibold tracking-[0.06em] text-white sm:text-5xl lg:text-6xl">
              J OFF Talks
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/85 sm:text-lg">
              Conversaciones cinematograficas con atletas, creadores y visionarios que mueven
              cultura, negocio y rendimiento humano.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
