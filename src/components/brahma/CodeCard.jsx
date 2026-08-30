const k = "text-[#8be8ff]"; // keyword
const s = "text-[#7ee787]"; // string
const f = "text-[#6fa8ff]"; // func / var
const p = "text-white/40"; // punctuation
const t = "text-white/80"; // default
const c = "text-white/35"; // comment

const lines = [
  [["import", k], [" { ", p], ["Brahma", f], [" } ", p], ["from", k], [" ", t], ['"brahma"', s], [";", p]],
  [],
  [["// runtime + control plane for autonomous agents", c]],
  [["const", k], [" ", t], ["harness", f], [" = ", p], ["new", k], [" ", t], ["Brahma.Harness", f], ["({", p]],
  [["  model", s], [": ", p], ['"claude-opus-4"', s], [",", p]],
  [["  memory", s], [": ", p], ["{ persistent: ", t], ["true", k], [" },", p]],
  [["  tools", s], [": ", p], ["[", p], ["trueforge", f], [", ", p], ["daytona", f], [", ", p], ["deploy", f], ["],", p]],
  [["  verification", s], [": ", p], ["{ environment: ", t], ['"isolated"', s], [" },", p]],
  [["  guardrails", s], [": ", p], ["{ requireApproval: ", t], ["[", p], ['"deploy"', s], ["] },", p]],
  [["  artifacts", s], [": ", p], ["{ immutableAfterVerification: ", t], ["true", k], [" },", p]],
  [["});", p]],
  [],
  [["harness", f], [".", p], ["onTrace", f], ["((", p], ["trace", f], [") => ", t], ["console", f], [".", p], ["log", f], ["(trace));", p]],
  [],
  [["await", k], [" ", t], ["harness", f], [".", p], ["run", f], ["(", p]],
  [["  ", t], ['"Find the production regression, verify a fix, and prepare it for deployment."', s]],
  [[");", p]],
];

export default function CodeCard() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-xs text-white/40">harness.brahma.ts</span>
      </div>
      <pre className="flex-1 overflow-auto p-6 font-mono text-[13px] leading-[1.8] sm:p-10 sm:text-[15px]">
        <code>
          {lines.map((tokens, i) => (
            <div
              key={i}
              className="code-line flex"
              style={{ animationDelay: `${i * 0.18}s` }}
            >
              <span className="mr-4 inline-block w-5 select-none text-right text-white/20">
                {i + 1}
              </span>
              <span>
                {tokens.length === 0 ? (
                  <>&nbsp;</>
                ) : (
                  tokens.map((tk, j) => (
                    <span key={j} className={tk[1]}>
                      {tk[0]}
                    </span>
                  ))
                )}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}