import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";
import { Play, MousePointerClick, Package, GitCompare } from "lucide-react";

const events = [
  { time: "14:03:18", who: "Brahma", msg: "TrueForge live session created" },
  { time: "14:03:19", who: "Mission", msg: "INVESTIGATING" },
  { time: "14:03:21", who: "TrueForge", msg: "Worker spawned" },
  { time: "14:03:23", who: "MCP", msg: "get_alert" },
  { time: "14:03:25", who: "MCP", msg: "get_recent_deploy" },
  { time: "14:03:27", who: "MCP", msg: "get_current_code" },
  { time: "14:03:30", who: "Brahma", msg: "Chaos fault injected — malformed_tool_response" },
  { time: "14:03:31", who: "Worker", msg: "FAILED" },
  { time: "14:03:31", who: "Brahma", msg: "CHECKPOINT PRESERVED" },
  { time: "14:03:33", who: "TrueForge", msg: "Replacement worker" },
  { time: "14:03:34", who: "Mission", msg: "Continues — confirmed state lost: 0" },
  { time: "14:03:36", who: "MCP", msg: "get_current_code" },
  { time: "14:03:38", who: "MCP", msg: "exec (Daytona execute_code)" },
  { time: "14:03:40", who: "MCP", msg: "propose_remediation" },
  { time: "14:03:41", who: "Mission", msg: "VERIFYING" },
  { time: "14:03:42", who: "Brahma", msg: "Daytona sandbox verified — tests 5 / 5 PASS" },
  { time: "14:03:43", who: "Brahma", msg: "Function benchmark 289ms → 2ms" },
  { time: "14:03:44", who: "Mission", msg: "AWAITING_APPROVAL" },
  { time: "14:04:05", who: "Human", msg: "Approved via terminal" },
  { time: "14:04:09", who: "Mission", msg: "DEPLOYING — exact verified candidate" },
  { time: "14:04:18", who: "Monitor", msg: "Service p95 1,140ms → 93ms — COMPLETED" },
];

const controls = [
  { icon: Play, label: "Replay Run" },
  { icon: MousePointerClick, label: "Inspect Tool Call" },
  { icon: Package, label: "View Artifact" },
  { icon: GitCompare, label: "Compare Before / After" },
];

export default function ObservabilityTrace() {
  return (
    <SectionShell id="traces" max="max-w-3xl">
      <SectionHead
        label="Full Observability"
        title={<>See everything the agent <span className="animate-gradient-text">did.</span></>}
        desc="Brahma turns every autonomous run into a structured timeline that developers can inspect, audit and replay."
      />
      <FadeUp className="mt-12">
        <div className="liquid-glass overflow-hidden rounded-2xl">
          <div className="flex flex-wrap gap-2 border-b border-white/10 p-4">
            {controls.map((c) => (
              <button key={c.label} className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-[11px] text-white/70 hover:bg-white/10">
                <c.icon className="h-3.5 w-3.5" /> {c.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <div className="absolute left-[7.4rem] top-0 h-full w-px bg-white/10" />
            <div className="divide-y divide-white/5">
              {events.map((e, i) => (
                <FadeUp key={i} delay={i * 0.03} className="flex items-center gap-4 px-4 py-3">
                  <span className="w-24 font-mono text-xs text-white/40">{e.time}</span>
                  <span className="relative z-10 h-2.5 w-2.5 shrink-0 rounded-full bg-[#8be8ff] shadow-[0_0_8px_rgba(139,232,255,0.6)]" />
                  <span className="w-24 shrink-0 font-mono text-xs text-[#8be8ff]/80">{e.who}</span>
                  <span className="text-sm text-white/75">{e.msg}</span>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>
    </SectionShell>
  );
}