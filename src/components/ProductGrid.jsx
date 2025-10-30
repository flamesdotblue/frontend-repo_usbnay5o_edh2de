import { motion, useMotionValue, useSpring } from "framer-motion";
import { Star, Truck, Shield } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Signature Hoodie",
    price: "$68",
    tag: "New",
    tone: "from-slate-700 via-slate-800 to-slate-900",
  },
  {
    id: 2,
    name: "Heritage Tee",
    price: "$38",
    tag: "Classic",
    tone: "from-blue-800 via-slate-900 to-indigo-900",
  },
  {
    id: 3,
    name: "Emblem Cap",
    price: "$32",
    tag: "Limited",
    tone: "from-slate-800 via-blue-900 to-slate-950",
  },
  {
    id: 4,
    name: "Canvas Tote",
    price: "$28",
    tag: "Eco",
    tone: "from-indigo-900 via-slate-900 to-slate-950",
  },
];

function TiltCard({ children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const ry = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const tiltX = (py - 0.5) * -8; // rotateX
    const tiltY = (px - 0.5) * 8; // rotateY
    x.set(tiltX);
    y.set(tiltY);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
      className="[perspective:900px]"
    >
      {children}
    </motion.div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="relative bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_500px_at_50%_-50%,rgba(37,99,235,0.15),transparent)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Featured Pieces</h2>
            <p className="mt-2 text-slate-400">Understated silhouettes built for everyday wear.</p>
          </div>
          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <div className="inline-flex items-center gap-2 text-sm"><Truck className="h-4 w-4" /> Free shipping $75+</div>
            <div className="inline-flex items-center gap-2 text-sm"><Shield className="h-4 w-4" /> Quality guarantee</div>
            <div className="inline-flex items-center gap-2 text-sm"><Star className="h-4 w-4" /> 4.9/5 rated</div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, idx) => (
            <TiltCard key={p.id}>
              <motion.article
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm"
              >
                <div className={`relative h-56 w-full bg-gradient-to-br ${p.tone} flex items-center justify-center`}>
                  <div className="absolute right-3 top-3 rounded-full bg-slate-900/70 border border-slate-700 px-2 py-0.5 text-xxs text-slate-200 uppercase tracking-wide">
                    {p.tag}
                  </div>
                  <motion.div
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    className="h-28 w-28 rounded-xl bg-gradient-to-br from-blue-500/40 to-indigo-400/30 border border-white/10 grid place-items-center shadow-inner"
                    style={{ transform: "translateZ(40px)" }}
                  >
                    <span className="text-2xl font-extrabold tracking-widest text-blue-100">CAU</span>
                  </motion.div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-white">{p.name}</h3>
                    <span className="text-sm text-blue-300">{p.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">Ultra-soft cotton blend. Tailored fit.</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button className="inline-flex items-center justify-center rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white px-3 py-2 text-sm transition">
                      Add to Cart
                    </button>
                    <button className="text-sm text-slate-300 hover:text-white transition">View details</button>
                  </div>
                </div>
              </motion.article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
