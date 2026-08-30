import DotGrid from "./DotGrid";

const items = [
  "MEMORY",
  "TOOLS",
  "TRACES",
  "AUTONOMY",
  "GUARDRAILS",
  "REASONING",
  "ORCHESTRATION",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-[#040913] py-6">
      <div className="pointer-events-none absolute inset-0 z-0">
        <DotGrid baseColor="#16223a" activeColor="#6fa8ff" gap={30} dotSize={2} />
      </div>
      <div className="relative z-10 marquee-track flex w-max gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-serif text-3xl text-white/25">{t}</span>
            <span className="text-white/15">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}