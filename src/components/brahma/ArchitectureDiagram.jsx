import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";

const inner = ["Planner", "Trace Engine", "Guardrails", "Verification Enforcement", "Artifact Registry"];
const mcp = ["get_alert", "get_recent_deploy", "get_current_code"];

function Arrow() {
  return <span className="text-2xl text-[#8be8ff]/50">↓</span>;
}

export default function ArchitectureDiagram() {
  return (
    <SectionShell id="architecture" max="max-w-3xl">
      <SectionHead
        label="Architecture"
        title={<>Brahma sits between the agent and the <span className="animate-gradient-text">real world.</span></>}
      />
      <FadeUp className="mt-12 flex flex-col items-center gap-4">
        <div className="liquid-glass w-full rounded-2xl p-5 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">Incident / Demo Service</p>
          <p className="mt-2 font-mono text-sm text-white/80">Production performance incident</p>
        </div>
        <Arrow />
        <div className="liquid-glass w-full rounded-2xl p-6">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#8be8ff]/70">Brahma Orchestrator</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {inner.map((c) => (
              <span key={c} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/75">{c}</span>
            ))}
          </div>
        </div>
        <Arrow />
        <div className="liquid-glass w-full rounded-2xl p-6">
          <p className="text-center text-[11px] uppercase tracking-[0.3em] text-[#8be8ff]/70">TrueForge Live Mother Session</p>
          <p className="mt-3 text-center text-[11px] uppercase tracking-[0.2em] text-white/40">MCP Tools</p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {mcp.map((c) => (
              <span key={c} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/75">{c}</span>
            ))}
          </div>
        </div>
        <Arrow />
        <div className="grid w-full gap-3 sm:grid-cols-2">
          <div className="liquid-glass rounded-2xl p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">TrueForge → Daytona execute_code</p>
            <ul className="mt-3 space-y-1.5 text-xs text-white/70">
              <li>Tests: 5 / 5 PASS</li>
              <li>Function benchmark: 289ms → 2ms</li>
              <li>Candidate: VERIFIED</li>
              <li>Production modified: NO</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-[#ffbd2e]/30 bg-[#ffbd2e]/[0.06] p-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#ffbd2e]/80">Human Approval Boundary</p>
            <ul className="mt-3 space-y-1.5 text-xs text-white/70">
              <li>AWAITING_APPROVAL</li>
              <li>Approved via terminal</li>
              <li>Deploy exact verified candidate</li>
              <li>Re-measure service health</li>
              <li>MISSION COMPLETE</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 w-full rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">Brahma Development — separate from runtime</p>
          <p className="mt-2 text-xs text-white/55">GitHub PR → Qodo review → finding → fix → Qodo re-review → merge</p>
        </div>
        <p className="mt-2 max-w-xl text-center text-sm text-white/50">Bring the model you already use. Brahma controls how it remembers, acts and interacts with your infrastructure.</p>
      </FadeUp>
    </SectionShell>
  );
}