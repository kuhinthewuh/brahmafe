import { motion } from "framer-motion";
import { Brain, Workflow, FlaskConical, ShieldCheck, Fingerprint, Activity } from "lucide-react";
import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";

const cards = [
  {
    icon: Brain,
    title: "Persistent Memory",
    body: "Agents retain the decisions, context and state that matter across tool calls and sessions. A production incident does not restart because the model received a new prompt.",
    tags: ["context", "decisions", "state", "history"],
  },
  {
    icon: Workflow,
    title: "Tool Orchestration",
    body: "Connect agents to developer tools, APIs, databases and infrastructure. Brahma determines when tools are available while recording every invocation inside the run trace.",
  },
  {
    icon: FlaskConical,
    title: "Isolated Verification",
    body: "Before production changes are allowed, TrueForge executes the candidate inside a Daytona sandbox using execute_code. Brahma then verifies tests and the function benchmark before the mission can proceed.",
  },
  {
    icon: ShieldCheck,
    title: "Human Approval",
    body: "Define actions that autonomous agents cannot cross alone. Deployment, destructive infrastructure operations and other high-impact actions can pause until a human explicitly approves them.",
  },
  {
    icon: Fingerprint,
    title: "Artifact Integrity",
    body: "The exact artifact that passes verification is the artifact presented for approval and deployment. Brahma prevents silent regeneration between testing and production.",
  },
  {
    icon: Activity,
    title: "Full Observability",
    body: "Every reasoning step, tool call, artifact, verification result and approval event is captured as a replayable execution trace.",
  },
];

export default function BrahmaFeatures() {
  return (
    <SectionShell id="features" max="max-w-5xl">
      <SectionHead
        label="What is Brahma"
        title={<>One control plane. Every layer an <span className="animate-gradient-text">autonomous agent</span> needs.</>}
        desc="An LLM can reason. Brahma gives it the infrastructure required to safely act. Brahma manages the agent's memory, tool access, execution loop, verification environments, approval boundaries, artifacts and traces while the underlying model focuses on solving the goal."
      />

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => {
          const Icon = c.icon;
          return (
            <FadeUp key={c.title} delay={i * 0.06}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors hover:border-[#6fa8ff]/30">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#6fa8ff]/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#234360]/40 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 font-serif text-2xl text-white">{c.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-white/55">{c.body}</p>
                {c.tags && (
                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-white/60"
                        animate={{ opacity: [0.55, 1, 0.55] }}
                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: c.tags.indexOf(tag) * 0.25 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                )}
              </div>
            </FadeUp>
          );
        })}
      </div>
    </SectionShell>
  );
}