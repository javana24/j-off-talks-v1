import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

export default function SobrePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <SiteNavbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-xs tracking-[0.2em] text-[#dcb36d]">MANIFIESTO</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[0.06em] text-white sm:text-5xl">
          Autoridad, criterio y accion
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75">
          Ahora mismo estoy enfocado en fortalecer salud mental y salud fisica como base de alto
          rendimiento. La disciplina es un valor central en mi vida: estructura mis decisiones, mi
          trabajo diario y el tipo de conversaciones que quiero construir en J OFF Talks.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
