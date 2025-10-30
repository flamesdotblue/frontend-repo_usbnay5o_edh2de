import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import MascotFox from "./MascotFox";

// The CAU fox mascot gently roams around within the provided container bounds.
// It never intercepts clicks (pointer-events-none) and occasionally looks around by rotating.
export default function FoxWanderer({ containerRef }) {
  const controls = useAnimation();
  const intervalRef = useRef(null);

  useEffect(() => {
    function nextMove() {
      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width ?? window.innerWidth;
      const h = rect?.height ?? 500;
      const pad = 60; // keep away from edges
      const x = Math.random() * (w - pad * 2) + pad;
      const y = Math.random() * (h - pad * 2) + pad;
      const rotate = (Math.random() - 0.5) * 14; // -7 to 7 deg
      const scale = 0.9 + Math.random() * 0.2; // 0.9 - 1.1

      controls.start({
        x,
        y,
        rotate,
        scale,
        transition: { type: "spring", stiffness: 60, damping: 16, mass: 0.8 },
      });
    }

    nextMove();
    intervalRef.current = setInterval(nextMove, 2600);
    return () => intervalRef.current && clearInterval(intervalRef.current);
  }, [containerRef, controls]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute z-30"
      initial={{ x: 120, y: 120, rotate: 0, scale: 1 }}
      animate={controls}
    >
      <MascotFox className="w-20 h-20 sm:w-24 sm:h-24" />
    </motion.div>
  );
}
