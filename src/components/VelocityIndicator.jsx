import React, { forwardRef } from "react";

const VelocityIndicator = forwardRef(function VelocityIndicator(_props, ref) {
  return (
    <div
      className="pointer-events-none fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 sm:block"
      aria-hidden="true"
    >
      <div className="relative h-[46vh] w-px overflow-hidden bg-black/10">
        <div
          ref={ref}
          className="absolute inset-0 origin-bottom scale-y-0"
          style={{
            background: "linear-gradient(to top, #6B7F62, #D97C5E)",
            boxShadow: "0 0 10px rgba(107,127,98,0.55)",
            willChange: "transform",
          }}
        />
      </div>
      <div className="mt-3 text-[9px] uppercase tracking-[0.3em] text-[#1A1D1A]/40 [writing-mode:vertical-rl]">
        Bloom
      </div>
    </div>
  );
});

export default VelocityIndicator;