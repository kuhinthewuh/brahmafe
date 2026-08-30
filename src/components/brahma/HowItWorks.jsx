import SectionShell from "./SectionShell";
import SectionHead from "./SectionHead";
import FadeUp from "./FadeUp";

const steps = [
  { n: "01", title: "Define the harness", body: "Choose the model, memory behavior, tools, verification environments and actions that require approval." },
  { n: "02", title: "Give it a goal", body: "Give the agent an outcome such as 'diagnose this regression and prepare a verified fix.' Brahma manages the execution loop while the model determines how to solve it." },
  { n: "03", title: "Watch and control execution", body: "Every tool call, generated artifact, verification result and decision appears in the live trace. Brahma automatically stops the run when a configured approval boundary is reached." },
  { n: "04", title: "Deploy what was verified", body: "Once approved, Brahma releases the exact verified artifact and can continue the run to validate production afterward." },
];

export default function HowItWorks() {
  return (
    <SectionShell id="how" max="max-w-6xl">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-24 md:self-start">
          <SectionHead
            center={false}
            label="How it works"
            title={<>From prompt to <span className="animate-gradient-text">production agent.</span></>}
            desc="Four moves to turn an LLM into a production-safe autonomous worker."
          />
        </div>
        <div className="flex flex-col">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.05}>
              <div className="group relative border-t border-white/10 py-10 transition-colors last:border-b hover:bg-white/[0.02]">
                <div className="flex items-baseline gap-6">
                  <span className="font-serif text-5xl text-white/15 transition-colors group-hover:text-[#6fa8ff]/40">{s.n}</span>
                  <div>
                    <h3 className="font-serif text-3xl text-white">{s.title}</h3>
                    <p className="mt-3 max-w-md text-white/55">{s.body}</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}