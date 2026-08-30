import { useState } from "react";
import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";
import { Check, FileDiff, Activity, X, ShieldCheck } from "lucide-react";

const checks = ["Issue reproduced", "Candidate generated", "Daytona execute_code: PASS", "Tests 5 / 5 PASS", "Function benchmark 289ms → 2ms", "Artifact verified"];

export default function HumanApproval() {
  const [approved, setApproved] = useState(false);
  return (
    <SectionShell id="approval" max="max-w-3xl">
      <SectionHead
        label="Guardrails"
        title={<>Autonomy stops where you <span className="animate-gradient-text">tell it to.</span></>}
        desc="Brahma allows agents to investigate, reason, modify code and verify their work autonomously. When a run reaches an action protected by policy, execution pauses until a human decides what happens next."
      />
      <FadeUp className="mt-12">
        <div className="liquid-glass rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">Deployment Request</p>
              <p className="mt-1 font-mono text-sm text-white">checkout-service / requestMatcher.ts</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-[11px] font-medium ${approved ? "bg-[#7ee787]/20 text-[#7ee787]" : "bg-[#ffbd2e]/15 text-[#ffbd2e]"}`}>
              {approved ? "APPROVED VIA TERMINAL" : "AWAITING HUMAN APPROVAL"}
            </span>
          </div>
          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {checks.map((c) => (
              <div key={c} className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-3 py-2 text-sm text-white/70">
                <Check className="h-4 w-4 text-[#7ee787]" /> {c}
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-white/10 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Artifact</p>
              <p className="mt-1 font-mono text-sm text-[#8be8ff]">brahma://artifact/7F39A1</p>
            </div>
            <div className="rounded-lg border border-white/10 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/40">Status</p>
              <p className="mt-1 font-mono text-sm text-white/80">{approved ? "Exact verified candidate deployed" : "Production writes before approval: 0"}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:bg-white/10"><FileDiff className="h-4 w-4" /> Review Diff</button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:bg-white/10"><Activity className="h-4 w-4" /> View Trace</button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 hover:bg-white/10"><X className="h-4 w-4" /> Reject</button>
            <button onClick={() => setApproved(true)} className="inline-flex items-center gap-2 rounded-full bg-[#234360] px-4 py-2 text-xs font-medium text-white hover:bg-[#2d5481]"><ShieldCheck className="h-4 w-4" /> Approve via Terminal</button>
          </div>
          <p className="mt-4 text-[11px] text-white/35">Demonstration of the intended human-control experience. Live mission execution and approval occur in the terminal.</p>
        </div>
      </FadeUp>
    </SectionShell>
  );
}