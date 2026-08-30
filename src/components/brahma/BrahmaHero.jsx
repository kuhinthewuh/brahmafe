import FadeUp from "./FadeUp";
import PrimaryButton from "./PrimaryButton";
import DotGrid from "./DotGrid";

export default function BrahmaHero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 py-44"
      style={{ background: "linear-gradient(to bottom, #000000 0%, #040913 40%)" }}
    >
      <DotGrid baseColor="#16223a" activeColor="#6fa8ff" gap={30} dotSize={2.4} />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 30% 18%, rgba(35,67,96,0.55), transparent 70%), radial-gradient(50% 50% at 82% 72%, rgba(20,80,90,0.35), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32"
        style={{ background: "linear-gradient(to bottom, #000000, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{ background: "linear-gradient(to bottom, transparent, #040913)" }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <FadeUp>
          <h1 className="font-serif text-5xl font-normal leading-[1.02] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl">
            Autonomous agents, woven into{" "}
            <span className="animate-gradient-text">your stack.</span>
          </h1>
        </FadeUp>
        <FadeUp delay={0.12}>
          <p className="mt-8 max-w-2xl text-lg text-white/60">
            Brahma is the runtime and control plane for autonomous agents that
            touch real systems. Give your agent persistent memory, production
            tools, isolated verification and human-controlled deployment, all
            inside one observable execution harness.
          </p>
        </FadeUp>
        <FadeUp delay={0.18}>
          <p className="mt-3 text-sm text-[#8be8ff]/80">
            From issue detection to verified production deployment.
          </p>
        </FadeUp>
        <FadeUp delay={0.24} className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <PrimaryButton as="a" href="#demo" className="bg-[#234360] text-white hover:bg-[#2d5481]">
            Watch Brahma Fix Production
          </PrimaryButton>
          <PrimaryButton as="a" href="#features" className="border border-white/20 bg-transparent text-white hover:bg-white/10">
            Explore the Harness
          </PrimaryButton>
        </FadeUp>
      </div>
    </section>
  );
}