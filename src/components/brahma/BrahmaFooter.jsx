import DotGrid from "./DotGrid";

export default function BrahmaFooter() {
  return (
    <footer className="relative z-20 overflow-hidden border-t border-white/10 bg-[#040913] px-6 py-12">
      <div className="pointer-events-none absolute inset-0 z-0">
        <DotGrid baseColor="#16223a" activeColor="#6fa8ff" gap={30} dotSize={2} />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <span
          className="text-base tracking-tight text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Brahma<sup className="text-[0.5em]">®</sup>
        </span>
        <div className="flex items-center gap-6 text-xs text-white/40">
          <a href="#top" className="hover:text-white">
            Harness
          </a>
          <a href="#cta" className="hover:text-white">
            Memory
          </a>
          <a href="#cta" className="hover:text-white">
            Tools
          </a>
          <a href="#cta" className="hover:text-white">
            Traces
          </a>
        </div>
        <p className="text-xs text-white/30">
          © {new Date().getFullYear()} Brahma
        </p>
      </div>
    </footer>
  );
}