import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useMemo } from "react";
import MascotFox from "./MascotFox";

// A floating fox mascot that glides across the viewport as you scroll.
// It ignores pointer events so it never breaks interaction with content underneath.
export default function FoxScroller() {
  const { scrollYProgress } = useScroll();

  // Smooth the progress for a silky motion
  const progress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, mass: 0.6 });

  // Map scroll progress to a wide horizontal sweep
  // Starts slightly off-screen left, ends off-screen right
  const x = useTransform(progress, [0, 1], [-200, 1600]);
  // Subtle vertical drift for a playful path
  const y = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [40, -10, 30, -20, 10]);
  // A gentle yaw as it travels
  const rotate = useTransform(progress, [0, 1], [-6, 6]);
  // Slight scale shift to simulate depth
  const scale = useTransform(progress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  // Slight glow via drop shadow is already in MascotFox. We wrap it in a container for positioning.
  const style = useMemo(() => ({ x, y, rotate, scale }), [x, y, rotate, scale]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-[18%] z-40"
      style={style}
    >
      <MascotFox className="w-20 h-20 md:w-24 md:h-24" />
    </motion.div>
  );
}
