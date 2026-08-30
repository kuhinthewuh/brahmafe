import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";

const flow = ["Incident", "Brahma", "TrueForge", "Worker", "Checkpoint", "Daytona", "Approval", "Deploy", "Monitor"];

const stages = [
  { n: "01", t: "Production performance incident", b: "A service performance incident enters Brahma as a signal." },
  { n: "02", t: "Brahma starts a TrueForge live session", b: "Brahma opens a real TrueForge live session and Mother enters INVESTIGATING." },
  { n: "03", t: "TrueForge worker is created", b: "A temporary TrueForge worker is spawned to carry out the mission." },
  { n: "04", t: "Controlled chaos fault is injected", b: "Brahma injects a controlled chaos fault. The worker fails, but checkpoint state is preserved." },
  { n: "05", t: "Replacement worker continues", b: "A replacement worker continues from preserved mission state. Confirmed state lost remains 0." },
  { n: "06", t: "Agent investigates via MCP tools", b: "The agent inspects the code using get_alert, get_recent_deploy and get_current_code." },
  { n: "07", t: "TrueForge runs the candidate in Daytona", b: "TrueForge invokes execute_code in a real Daytona sandbox; the agent calls propose_remediation." },
  { n: "08", t: "Verification and human approval", b: "Tests and the function benchmark must pass. The mission enters AWAITING_APPROVAL until approved via terminal." },
  { n: "09", t: "The exact verified artifact is deployed", b: "Brahma deploys the exact already-verified candidate and re-measures service health. Mission COMPLETED." },
];

export default function ControlLoop() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <SectionShell id="demo" max="max-w-3xl">
      <SectionHead
        label="The Control Loop"
        title={<>From production incident to <span className="animate-gradient-text">verified fix.</span></>}
        desc="Brahma coordinates the entire lifecycle of an autonomous engineering agent while keeping production behind a controlled boundary."
      />

      <FadeUp className="mt-12 flex flex-wrap items-center justify-center gap-2">
        {flow.map((f, i) => (
          <span key={f} className="flex items-center gap-2">
            <span className="liquid-glass rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.15em] text-white/70">{f}</span>
            {i < flow.length - 1 && <span className="text-[#8be8ff]/50">→</span>}
          </span>
        ))}
      </FadeUp>

      <div ref={ref} className="relative mx-auto mt-16 max-w-2xl">
        <div className="absolute left-[15px] top-0 h-full w-px bg-white/10" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-[15px] top-0 h-full w-px origin-top bg-gradient-to-b from-[#8be8ff] to-[#6fa8ff]"
        />
        <div className="flex flex-col gap-8">
          {stages.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.04} className="relative pl-12">
              <span className="absolute left-[8px] top-2 h-4 w-4 rounded-full border-2 border-[#8be8ff] bg-[#040913]">
                <span className="absolute inset-0 animate-ping rounded-full bg-[#8be8ff]/40" />
              </span>
              <div className="liquid-glass rounded-2xl p-6">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-serif text-3xl text-[#8be8ff]/60">{s.n}</span>
                  <h3 className="font-serif text-xl text-white">{s.t}</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/55">{s.b}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}