import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const requirements = [
  { label: "Requisito 1", text: "Media Eccellente (>8 o >27)" },
  { label: "Requisito 2", text: "Abilità comunicative Elite" },
  { label: "Requisito 3", text: "Padronanza Digital" },
];

export default function HiringSection() {
  return (
    <section className="py-32 relative overflow-hidden z-10">
      <div className="section-container text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-7xl font-black italic uppercase mb-16 tracking-tighter drop-shadow-2xl"
        >
          Entra nel <span className="text-primary">Team.</span>
        </motion.h2>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 filter grayscale opacity-30 pointer-events-none">
            {requirements.map((req) => (
              <div key={req.label} className="glass-panel p-8 rounded-3xl">
                <h4 className="font-bold text-primary mb-3 italic tracking-widest uppercase text-sm">{req.label}</h4>
                <p className="text-lg font-bold text-foreground">{req.text}</p>
              </div>
            ))}
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <Lock className="w-16 h-16 text-destructive drop-shadow-[0_0_50px_hsla(0,100%,60%,0.8)]" />
            <div className="text-foreground font-black text-2xl md:text-4xl uppercase tracking-widest border-4 border-foreground px-8 py-2 bg-background animate-pulse">
              STATUS: CHIUSO
            </div>
          </div>
        </div>

        <p className="mt-12 text-muted-foreground text-xs tracking-[0.3em] uppercase">
          Candidature momentaneamente chiuse
        </p>
      </div>
    </section>
  );
}
