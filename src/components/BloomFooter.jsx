import React from "react";

const COLS = [
  {
    title: "The Garden",
    links: ["Molecular Anatomy", "Synthesis Collection", "Botanical Index", "Field Notes"],
  },
  {
    title: "Studio",
    links: ["Our Ethos", "Atelier", "Sourcing", "Journal"],
  },
  {
    title: "Connect",
    links: ["Contact", "Stockists", "Press", "Careers"],
  },
];

export default function BloomFooter() {
  return (
    <footer className="relative bg-[#F7F8F2] text-[#1A1D1A]">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h2 className="font-display text-4xl font-light leading-none tracking-tight sm:text-5xl">
              Florescent
              <br />
              <span className="italic text-[#6B7F62]">Chronology</span>
            </h2>
            <p className="mt-6 max-w-xs font-body text-[15px] leading-relaxed text-[#1A1D1A]/60">
              A living organism interface. Grown, not coded — each scroll a slow
              act of cultivation.
            </p>
          </div>

          {COLS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="sm:justify-self-end">
              <h3 className="font-body text-[11px] uppercase tracking-[0.28em] text-[#1A1D1A]/45">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="font-display text-xl font-light tracking-tight text-[#1A1D1A]/80 transition-colors duration-300 hover:text-[#D97C5E] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97C5E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F7F8F2]"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[#1A1D1A]/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-body text-xs tracking-wide text-[#1A1D1A]/45">
            © {new Date().getFullYear()} Florescent Chronology. Cultivated with care.
          </p>
          <div className="flex gap-6 font-body text-xs tracking-wide text-[#1A1D1A]/45">
            <a href="#" className="transition-colors hover:text-[#1A1D1A]">Privacy</a>
            <a href="#" className="transition-colors hover:text-[#1A1D1A]">Terms</a>
            <a href="#" className="transition-colors hover:text-[#1A1D1A]">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}