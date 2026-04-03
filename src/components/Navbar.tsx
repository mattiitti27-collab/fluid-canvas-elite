import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";

const navLinks = [
  { label: "Metodo", href: "#metodo" },
  { label: "Chi Sono", href: "#chisono" },
  { label: "Reparti", href: "#reparti" },
  { label: "Contatti", href: "#contact-area" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 py-4 bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg">
      <div className="section-container flex justify-between items-center">
        <a href="#" className="text-2xl md:text-3xl font-black tracking-tighter relative font-display">
          Ripetiamo<span className="text-primary">.</span>
          <sup className="text-[9px] text-muted-foreground font-sans mt-1 ml-0.5">©</sup>
        </a>

        <div className="hidden md:flex gap-10 text-xs font-bold tracking-widest text-muted-foreground uppercase">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 z-50">
          <a
            href="#contact-area"
            className="hidden md:block bg-foreground text-background px-6 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:shadow-[var(--shadow-glow-primary)] transform hover:-translate-y-0.5"
          >
            Contattaci
          </a>
          <a
            href="#contact-area"
            className="hidden md:flex items-center gap-1.5 bg-secondary/10 border border-secondary/40 text-secondary px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-secondary hover:text-secondary-foreground transition-all shadow-[var(--shadow-glow-cyan)] hover:shadow-[0_0_60px_hsla(186,100%,50%,0.5)] transform hover:-translate-y-0.5"
          >
            <Calendar className="w-3 h-3" />
            Prenota
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-foreground text-2xl p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background/95 backdrop-blur-3xl z-[100] flex flex-col items-center justify-center gap-8 md:hidden"
            style={{ height: "100dvh" }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-foreground p-4 hover:rotate-90 transition-all duration-500"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-8 text-center w-full px-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-black tracking-[0.2em] text-muted-foreground hover:text-foreground hover:scale-110 transition-all duration-300 uppercase"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact-area"
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black tracking-[0.2em] text-secondary/60 hover:text-secondary hover:scale-110 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                PRENOTA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
