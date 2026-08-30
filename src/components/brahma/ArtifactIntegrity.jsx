import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";

const steps = [
  "Candidate generated",
  "Daytona sandboxed",
  "Verified — tests + benchmark",
  "Approved via terminal",
  "Exact verified artifact deployed",
  "Production health re-measured",
];

export default function ArtifactIntegrity() {
  return (
    <SectionShell id="artifact" max="max-w-md">
      <SectionHead
        label="Artifact Integrity"
        title={<>What you approved is <span className="animate-gradient-text">what gets shipped.</span></>}
        desc="Many autonomous systems verify one version of a solution and later generate or modify another version before deployment. Brahma binds verification, approval and deployment to the same immutable artifact."
      />
      <div className="mt-12 flex flex-col items-center">
        {steps.map((s, i) => (
          <FadeUp key={s} delay={i * 0.05} className="flex w-full flex-col items-center">
            <div className="liquid-glass flex w-full items-center gap-3 rounded-xl px-4 py-3">
              <span className="font-mono text-xs text-[#8be8ff]/70">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm text-white/80">{s}</span>
              <span className="ml-auto font-mono text-[11px] text-[#8be8ff]">7F39A1</span>
            </div>
            {i < steps.length - 1 && (
              <span className="h-6 w-px bg-gradient-to-b from-[#8be8ff]/60 to-transparent" />
            )}
          </FadeUp>
        ))}
        <FadeUp delay={0.3} className="mt-6 w-full rounded-lg border border-white/10 px-4 py-2 text-center font-mono text-xs text-white/50">
          SHA256&nbsp;&nbsp;7f39a1…e2c4b9
        </FadeUp>
        <FadeUp delay={0.35}>
          <p className="mt-4 text-center text-sm text-white/45">No silent regeneration between verification and deployment.</p>
        </FadeUp>
      </div>
    </SectionShell>
  );
}