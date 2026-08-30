import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CodeCard from "./CodeCard";

export default function CodeZoom() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Grow to fill the screen, then zoom out just slightly so the border reads.
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.62, 1],
    [0.72, 1, 0.93, 0.93]
  );
  const headingOpacity = useTransform(scrollYProgress, [0.02, 0.18], [1, 0]);

  return (
    <section ref={ref} className="relative h-[260vh] bg-[#040913]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <motion.h2
          style={{ opacity: headingOpacity }}
          className="absolute top-[4vh] z-20 px-6 text-center font-serif text-3xl text-white/80 sm:text-4xl"
        >
          One file. The whole harness.
        </motion.h2>

        <motion.div style={{ scale }} className="h-screen w-screen">
          <CodeCard />
        </motion.div>
      </div>
    </section>
  );
}