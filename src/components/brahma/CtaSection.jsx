import FadeUp from "./FadeUp";
import PrimaryButton from "./PrimaryButton";
import DotGrid from "./DotGrid";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

export default function CtaSection() {
  return (
    <section id="cta" className="relative w-full overflow-hidden" style={{ background: "#040913" }}>
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={VIDEO_SRC}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, #000000 0%, rgba(4,9,19,0.55) 12%, rgba(4,9,19,0.35) 40%, rgba(4,9,19,0.85) 100%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] opacity-40">
        <DotGrid baseColor="#0a1830" activeColor="#8be8ff" gap={34} dotSize={2.2} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-32 text-center">
        <FadeUp>
          <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-white/60">The Harness</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl">
            Autonomous agents are ready to act. Give them a harness.
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
            Brahma gives production agents memory, tools, verification, traceability and human-controlled boundaries so they can safely operate inside real systems.
          </p>
        </FadeUp>
        <FadeUp delay={0.3} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton as="a" href="#demo" className="bg-[#234360] text-white hover:bg-[#2d5481]">Start Building</PrimaryButton>
          <PrimaryButton as="a" href="#demo" className="border border-white/20 bg-transparent text-white hover:bg-white/10">Watch the Production Demo</PrimaryButton>
        </FadeUp>
        <FadeUp delay={0.4}>
          <p className="mt-10 text-sm text-white/55">Bring Claude, GPT, Gemini, or your own model.</p>
        </FadeUp>
      </div>
    </section>
  );
}