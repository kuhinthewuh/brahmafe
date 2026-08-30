import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";
import { Wrench, AlertTriangle, Database, Server, ShieldCheck } from "lucide-react";

const cases = [
  { icon: Wrench, t: "Production Engineering", b: "Detect a regression, investigate the codebase, generate a fix, verify it and request deployment approval." },
  { icon: AlertTriangle, t: "Incident Response", b: "Investigate alerts, inspect logs, correlate system state and execute approved remediation." },
  { icon: Database, t: "Data Operations", b: "Inspect pipelines, diagnose failures, repair workflows and validate the resulting data." },
  { icon: Server, t: "Infrastructure Automation", b: "Plan infrastructure changes, validate the execution plan and pause before protected operations." },
  { icon: ShieldCheck, t: "Security Engineering", b: "Investigate findings, inspect affected systems and prepare auditable remediation." },
];

export default function UseCases() {
  return (
    <SectionShell id="use-cases" max="max-w-5xl">
      <SectionHead
        label="Use Cases"
        title={<>Give autonomous agents <span className="animate-gradient-text">real responsibility.</span></>}
      />
      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((c, i) => {
          const Icon = c.icon;
          return (
            <FadeUp key={c.t} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-[#6fa8ff]/30">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#6fa8ff]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#234360]/40 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-serif text-2xl text-white">{c.t}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55">{c.b}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </SectionShell>
  );
}