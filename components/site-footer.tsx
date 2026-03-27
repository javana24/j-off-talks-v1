import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:px-8">
        <p className="text-xs tracking-[0.18em] text-white/60">J OFF TALKS</p>
        <nav className="flex items-center gap-6">
          <Link className="link link-animated text-sm text-white/70 hover:text-[#f6d28e]" href="/">
            Inicio
          </Link>
          <Link
            className="link link-animated text-sm text-white/70 hover:text-[#f6d28e]"
            href="/episodios"
          >
            Episodios
          </Link>
          <Link className="link link-animated text-sm text-white/70 hover:text-[#f6d28e]" href="/sobre">
            Sobre
          </Link>
          <a
            className="link link-animated text-sm text-white/70 hover:text-[#f6d28e]"
            href="https://www.instagram.com/joff.talks/following/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </nav>
        <p className="text-xs text-white/45">© {new Date().getFullYear()} J OFF Talks</p>
      </div>
    </footer>
  );
}
