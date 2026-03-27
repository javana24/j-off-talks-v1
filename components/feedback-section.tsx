"use client";

import { FormEvent, useState } from "react";

export function FeedbackSection() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) {
      return;
    }
    setSent(true);
    setMessage("");
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
      <div className="card border border-white/10 bg-black/45 p-6 sm:p-8">
        <p className="text-xs tracking-[0.24em] text-[#d9af68]">MEJORA CONTINUA</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[0.04em] text-white">
          Que deberiamos mejorar
        </h2>
        <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
          Este proyecto esta creciendo. Si ves algo mejorable en diseno, contenido o experiencia,
          dejalo aqui y lo incorporamos en las siguientes iteraciones.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Escribe aqui tu sugerencia..."
            className="textarea min-h-32 w-full border border-white/15 bg-black/60 text-white placeholder:text-white/35 focus:border-[#c3924e] focus:outline-none"
          />
          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              className="btn rounded-full border border-[#9a6d2f] bg-black px-6 text-[#f1c97f] hover:bg-[#1a1308]"
            >
              Enviar sugerencia
            </button>
            {sent ? <p className="text-sm text-[#f1c97f]">Recibido. Gracias por aportar.</p> : null}
          </div>
        </form>
      </div>
    </section>
  );
}
