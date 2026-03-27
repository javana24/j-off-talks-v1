import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

const roadmapBlocks = [
  {
    title: "Temporada 01 en produccion",
    description:
      "Estamos cerrando narrativa, formato visual y calendario para una primera temporada de alto impacto.",
    status: "PROXIMAMENTE",
  },
  {
    title: "Selecciones editoriales",
    description:
      "Los perfiles publicados en la home son referentes de tono y tematica, no confirmaciones oficiales.",
    status: "EN CURADORIA",
  },
  {
    title: "Lista de espera",
    description:
      "Abriremos registro para acceso anticipado cuando se publique el primer episodio oficial.",
    status: "ACTIVO",
  },
];

export default function EpisodiosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <SiteNavbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs tracking-[0.24em] text-[#d9af68]">ESTADO DEL PODCAST</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[0.06em] text-white">Episodios</h1>
          <p className="mt-4 text-white/70">
            El proyecto esta en fase de produccion. Esta pagina comunica el avance real para
            evitar expectativas incorrectas.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {roadmapBlocks.map((block) => (
            <article
              key={block.title}
              className="card border border-white/10 bg-black/45 p-6 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#a87733]/45"
            >
              <div className="mb-3 inline-flex w-fit rounded-full border border-[#9a6d2f] bg-black/70 px-3 py-1 text-[11px] tracking-[0.15em] text-[#f1c97f]">
                {block.status}
              </div>
              <h2 className="text-xl text-white">{block.title}</h2>
              <p className="mt-3 text-sm text-white/80">{block.description}</p>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
