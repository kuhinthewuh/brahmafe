import DotGrid from "./DotGrid";

export default function SectionShell({ id, children, className = "", max = "max-w-6xl" }) {
  return (
    <section id={id} className={`relative overflow-hidden bg-[#040913] px-6 py-32 ${className}`}>
      <div className="pointer-events-none absolute inset-0 z-0">
        <DotGrid baseColor="#16223a" activeColor="#6fa8ff" gap={32} dotSize={2.2} />
      </div>
      <div className={`relative z-10 mx-auto ${max}`}>{children}</div>
    </section>
  );
}