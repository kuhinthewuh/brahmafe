import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 700, damping: 35, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 700, damping: 35, mass: 0.4 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-[10px] -mt-[10px] h-5 w-5 rounded-full bg-[#8be8ff]/20 blur-[2px]"
      />
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[60] -ml-[5px] -mt-[5px] h-2.5 w-2.5 rounded-full bg-[#8be8ff] shadow-[0_0_10px_2px_rgba(139,232,255,0.55)]"
      />
    </>
  );
}