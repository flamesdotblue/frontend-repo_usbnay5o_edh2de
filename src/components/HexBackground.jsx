import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Interactive hexagonal background built with SVG and parallax layers
export default function HexBackground() {
  const ref = useRef(null);
  const [cursor, setCursor] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    function handleMove(e) {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setCursor({ x, y });
    }
    const el = ref.current;
    if (el) el.addEventListener("mousemove", handleMove);
    return () => el && el.removeEventListener("mousemove", handleMove);
  }, []);

  const spotlight = {
    background: `radial-gradient(600px 300px at ${cursor.x * 100}% ${cursor.y * 100}%, rgba(56,189,248,0.18), transparent 60%)`,
  };

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Layer 1: subtle spotlight following cursor */}
      <div className="absolute inset-0 transition-[background] duration-150" style={spotlight} />

      {/* Layer 2: parallax hex grid outlines */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{ transform: "translateZ(0)" }}
        animate={{
          x: (cursor.x - 0.5) * 15,
          y: (cursor.y - 0.5) * 10,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 20, mass: 0.6 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="none">
          <defs>
            <pattern id="hex" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="translate(30,0)">
              <path d="M30,0 L60,15 L60,37 L30,52 L0,37 L0,15 Z" fill="none" stroke="rgba(148,163,184,0.18)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="1200" height="700" fill="url(#hex)" />
        </svg>
      </motion.div>

      {/* Layer 3: floating soft dots for depth */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        animate={{
          x: (0.5 - cursor.x) * 10,
          y: (0.5 - cursor.y) * 12,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 18, mass: 0.7 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 1200 700" preserveAspectRatio="none">
          <g fill="rgba(59,130,246,0.15)">
            <circle cx="150" cy="120" r="2" />
            <circle cx="340" cy="260" r="2" />
            <circle cx="520" cy="90" r="2" />
            <circle cx="880" cy="180" r="2" />
            <circle cx="1040" cy="300" r="2" />
            <circle cx="720" cy="410" r="2" />
            <circle cx="260" cy="460" r="2" />
            <circle cx="540" cy="560" r="2" />
            <circle cx="980" cy="520" r="2" />
          </g>
        </svg>
      </motion.div>

      {/* Gradient vignette top/bottom (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/20 to-slate-950/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />
    </div>
  );
}
