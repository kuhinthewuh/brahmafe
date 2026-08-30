import FadeUp from "./FadeUp";

export default function SectionHead({ label, title, desc, center = true, className = "" }) {
  return (
    <FadeUp className={`${center ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#8be8ff]/70">
          {label}
        </p>
      )}
      <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {desc && (
        <p className={`mt-6 max-w-2xl text-lg text-white/60 ${center ? "mx-auto" : ""}`}>
          {desc}
        </p>
      )}
    </FadeUp>
  );
}