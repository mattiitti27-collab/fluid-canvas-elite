import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Atom, FileText, BarChart3 } from "lucide-react";

type RepartoId = "superiori" | "universita" | "test" | "corsi";

const reparti: { id: RepartoId; title: string; subtitle: string; icon: typeof GraduationCap; color: string; }[] = [
  { id: "superiori", title: "Superiori", subtitle: "Technical & Sci", icon: GraduationCap, color: "primary" },
  { id: "universita", title: "Università", subtitle: "STEM & Eng.", icon: Atom, color: "secondary" },
  { id: "test", title: "Test", subtitle: "TOLC & Public", icon: FileText, color: "accent" },
  { id: "corsi", title: "Skills", subtitle: "Excel & Office", icon: BarChart3, color: "success" },
];

const subjects: Record<RepartoId, { name: string; highlighted?: boolean }[]> = {
  superiori: [
    { name: "Matematica" }, { name: "Fisica" }, { name: "Chimica" },
    { name: "Informatica", highlighted: true }, { name: "Meccatronica" },
    { name: "Economia" }, { name: "Elettronica" }, { name: "Altro - Superiori" },
  ],
  universita: [
    { name: "Analisi 1" }, { name: "Algebra" }, { name: "Fisica 1" },
    { name: "Informatica", highlighted: true }, { name: "Chimica" },
    { name: "Statistica" }, { name: "Altro / Specifico" },
  ],
  test: [
    { name: "TOLC-I / E" }, { name: "TOLC-MED" },
    { name: "Polizia" }, { name: "Concorsi" }, { name: "Altro" },
  ],
  corsi: [
    { name: "Excel" }, { name: "Office" }, { name: "PowerPoint" }, { name: "Altro" },
  ],
};

const colorMap: Record<string, { bg: string; border: string; text: string; hover: string }> = {
  primary: { bg: "bg-primary/20", border: "border-primary/50", text: "text-primary", hover: "hover:bg-primary hover:text-primary-foreground" },
  secondary: { bg: "bg-secondary/20", border: "border-secondary/50", text: "text-secondary", hover: "hover:bg-secondary hover:text-secondary-foreground" },
  accent: { bg: "bg-accent/20", border: "border-accent/50", text: "text-accent", hover: "hover:bg-accent hover:text-accent-foreground" },
  success: { bg: "bg-success/20", border: "border-success/50", text: "text-success", hover: "hover:bg-success hover:text-background" },
};

export default function RepartiSection() {
  const [active, setActive] = useState<RepartoId | null>(null);

  return (
    <section id="reparti" className="py-24 px-4 relative z-10">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-16 text-center italic uppercase tracking-tight text-foreground"
        >
          Reparti <span className="text-primary drop-shadow-[0_0_20px_hsla(271,72%,55%,0.5)]">Attivi</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {reparti.map((r, i) => {
            const colors = colorMap[r.color];
            return (
              <motion.button
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onClick={() => setActive(active === r.id ? null : r.id)}
                className={`glass-panel p-5 md:p-8 rounded-3xl text-left relative overflow-hidden h-72 transition-all group ${active === r.id ? `border-2 ${colors.border}` : ""}`}
              >
                <div className={`absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110 ${colors.text}`}>
                  <r.icon className="w-16 h-16 md:w-20 md:h-20" />
                </div>
                <div className="relative z-10 h-full flex flex-col justify-end">
                  <div className={`w-8 h-1 mb-3 ${r.color === "primary" ? "bg-primary" : r.color === "secondary" ? "bg-secondary" : r.color === "accent" ? "bg-accent" : "bg-success"}`} />
                  <h3 className={`text-lg md:text-2xl font-black uppercase italic group-hover:${colors.text} transition-colors`}>
                    {r.title}
                  </h3>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase mt-2">
                    {r.subtitle}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {active && (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-20 overflow-hidden"
            >
              <h4 className={`text-center font-bold uppercase tracking-[0.3em] mb-8 text-sm ${colorMap[reparti.find(r => r.id === active)!.color].text}`}>
                Modulo {reparti.find(r => r.id === active)!.title} Attivo
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {subjects[active].map((s) => {
                  const color = reparti.find(r => r.id === active)!.color;
                  const colors = colorMap[color];
                  return (
                    <motion.div
                      key={s.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`glass-panel p-5 rounded-xl text-center cursor-pointer transition-all font-bold uppercase tracking-wider text-sm md:text-base ${
                        s.highlighted ? `border-2 ${colors.border} ${colors.text} shadow-lg` : `border-l-4 ${colors.border}`
                      } ${colors.hover}`}
                    >
                      {s.name}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
