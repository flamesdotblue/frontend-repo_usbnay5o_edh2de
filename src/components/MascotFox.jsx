import { motion } from "framer-motion";

export default function MascotFox({ className = "w-24 h-24" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
          <defs>
            <linearGradient id="foxBody" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FF9A3E" />
              <stop offset="100%" stopColor="#E2552D" />
            </linearGradient>
            <linearGradient id="foxInner" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFD7B3" />
              <stop offset="100%" stopColor="#F2B392" />
            </linearGradient>
          </defs>
          {/* Face */}
          <path d="M60 20c-9 0-22 10-28 16-4 4-7 9-7 15 0 16 16 33 35 33s35-17 35-33c0-6-3-11-7-15-6-6-19-16-28-16z" fill="url(#foxBody)" />
          {/* Cheeks */}
          <path d="M35 58c6 10 14 15 25 15s19-5 25-15c-8-6-18-9-25-9s-17 3-25 9z" fill="url(#foxInner)" />
          {/* Ears */}
          <path d="M35 36L18 28c-2 8 0 16 5 22l12-14z" fill="#E2552D" />
          <path d="M85 36l17-8c2 8 0 16-5 22L85 36z" fill="#E2552D" />
          <path d="M33 38l-8-5c-1 5 0 9 3 12l5-7z" fill="#FFC9A3" />
          <path d="M87 38l8-5c1 5 0 9-3 12l-5-7z" fill="#FFC9A3" />
          {/* Eyes */}
          <circle cx="50" cy="60" r="3" fill="#1f2937" />
          <circle cx="70" cy="60" r="3" fill="#1f2937" />
          {/* Nose */}
          <circle cx="60" cy="66" r="3.5" fill="#0f172a" />
          {/* Muzzle divider */}
          <path d="M60 66v6" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
          {/* Subtle outer glow ring */}
          <circle cx="60" cy="60" r="50" fill="none" stroke="url(#foxBody)" strokeOpacity="0.25" />
        </svg>
      </motion.div>
      <div className="mt-2 text-center text-xs text-slate-300">CAU Fox Mascot</div>
    </motion.div>
  );
}
