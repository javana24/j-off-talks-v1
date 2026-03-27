import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";

const episodeTopics = [
  "Mentalidad de campeon con Ilia Topuria",
  "Escalado de marca con Tengo un Plan",
  "Longevidad y energia con Salva Diaz",
  "Narrativas de actualidad con Worldcast",
];

export default function EpisodiosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <SiteNavbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="mb-8 text-center text-4xl font-semibold tracking-[0.06em] text-white">
          Episodios
        </h1>
        <div className="space-y-4">
          {episodeTopics.map((topic, index) => (
            <article
              key={topic}
              className="card border border-white/10 bg-neutral p-6 text-neutral-content transition-transform duration-200 hover:-translate-y-0.5"
            >
              <p className="mb-2 text-xs tracking-[0.18em] text-[#dcb36d]">EPISODIO {index + 1}</p>
              <h2 className="text-xl text-white">{topic}</h2>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
