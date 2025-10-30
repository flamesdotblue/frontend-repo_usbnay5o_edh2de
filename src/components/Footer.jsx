import { Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold">CAU_STORE</h3>
            <p className="mt-2 max-w-md text-slate-400">
              Refined university merchandise. Minimal design, premium feel. Crafted in deep blue hues for a timeless look.
            </p>
          </div>
          <div>
            <h4 className="text-slate-200 font-medium">Explore</h4>
            <ul className="mt-3 space-y-2 text-slate-400 text-sm">
              <li><a href="#new" className="hover:text-white transition">New Arrivals</a></li>
              <li><a href="#bestsellers" className="hover:text-white transition">Bestsellers</a></li>
              <li><a href="#apparel" className="hover:text-white transition">Apparel</a></li>
              <li><a href="#accessories" className="hover:text-white transition">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-200 font-medium">Follow</h4>
            <div className="mt-3 flex items-center gap-3 text-slate-300">
              <a href="#" aria-label="Instagram" className="hover:text-white transition"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-white transition"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="hover:text-white transition"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CAU_STORE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
