const links = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Harness", href: "#features" },
  { label: "How It Works", href: "#how" },
  { label: "Demo", href: "#demo" },
  { label: "Traces", href: "#traces" },
  { label: "Docs", href: "#architecture" },
];

import { Link } from "react-router-dom";

export default function BrahmaNav() {
  return (
    <nav className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <div className="liquid-glass flex items-center gap-2 rounded-full py-2 pl-4 pr-2">
        <Link
          to="/"
          className="text-base tracking-tight text-white"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Brahma<sup className="text-[0.5em]">®</sup>
        </Link>
        <span className="mx-2 hidden items-center gap-0.5 text-[11px] text-white/60 lg:flex">
          {links.map((l) => (
            l.href.startsWith("/") ? (
              <Link
                key={l.label}
                to={l.href}
                className="rounded-full px-2.5 py-1 hover:text-white"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="rounded-full px-2.5 py-1 hover:text-white"
              >
                {l.label}
              </a>
            )
          ))}
        </span>
        <a
          href="#demo"
          className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-medium text-white hover:bg-white/10"
        >
          Watch Demo
        </a>
      </div>
    </nav>
  );
}