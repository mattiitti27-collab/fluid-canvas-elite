import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-6 text-center pt-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 mb-8 px-5 py-2 border border-primary/50 rounded-full bg-background/60 backdrop-blur-md text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] shadow-[var(--shadow-glow-primary)] cursor-default"
      >
        <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block mr-2" />
        Tutoring 2.0
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="z-10 font-display font-black text-[2.8rem] md:text-8xl mb-6 tracking-tight leading-[1.1] drop-shadow-2xl text-foreground"
      >
        Metodo, non <br />
        <span className="gradient-text">semplici ripetizioni.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-3xl md:text-6xl text-muted-foreground mb-12 font-script transform -rotate-2"
      >
        "Da studenti per studenti"
      </motion.p>

      <motion.a
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        href="#reparti"
        className="relative z-10 group px-10 py-5 overflow-hidden rounded-xl transition-all hover:scale-105 shadow-[var(--shadow-glow-primary)]"
      >
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-purple-600 to-secondary opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="relative z-10 font-black uppercase tracking-[0.15em] text-primary-foreground text-sm md:text-lg flex items-center gap-4">
          Esplora il Futuro
          <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
        </span>
      </motion.a>
    </header>
  );
}
