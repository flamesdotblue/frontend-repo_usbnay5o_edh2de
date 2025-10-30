import { ShoppingBag, Search, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2"
          >
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-400 to-cyan-400 grid place-items-center shadow-inner shadow-blue-500/30">
              <ShoppingBag className="h-5 w-5 text-slate-900" />
            </div>
            <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-blue-100 via-white to-blue-200 bg-clip-text text-transparent">
              CAU_STORE
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm text-slate-300">
              <a href="#new" className="hover:text-white transition-colors">New Arrivals</a>
              <a href="#bestsellers" className="hover:text-white transition-colors">Bestsellers</a>
              <a href="#apparel" className="hover:text-white transition-colors">Apparel</a>
              <a href="#accessories" className="hover:text-white transition-colors">Accessories</a>
            </nav>
            <div className="hidden lg:flex items-center gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-56 rounded-lg bg-slate-800/80 text-slate-100 placeholder:text-slate-400 border border-slate-700/80 py-2 pl-9 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500/60 focus:border-blue-500/60 transition"
                />
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              </div>
              <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 text-white px-4 py-2 shadow-lg shadow-blue-900/30 hover:shadow-blue-800/40 transition">
                <Star className="h-4 w-4" />
                <span>Join Premium</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
