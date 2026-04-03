import { motion } from "framer-motion";
import { Brain, Cpu, Zap } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "Logica Applicata",
    desc: "Eliminiamo lo studio a memoria. Ricostruiamo le formule partendo dal ragionamento puro.",
    accent: "primary",
  },
  {
    icon: Cpu,
    title: "Hub Digitale",
    desc: "Tablet grafici e lavagne condivise in tempo reale: visualizza i concetti astratti.",
    accent: "secondary",
  },
  {
    icon: Zap,
    title: "Mindset",
    desc: "Strategie per superare l'ansia da prestazione e gestire il Time Management.",
    accent: "foreground",
  },
];

export default function MetodoSection() {
  return (
    <section id="metodo" className="py-24 px-5 md:px-6 relative z-10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic tracking-tight">
            Il Metodo <span className="text-primary drop-shadow-[0_0_20px_hsla(271,72%,55%,0.6)] uppercase">E-Lite</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground font-light tracking-widest text-xs uppercase">
            Non studiamo di più, studiamo in modo diverso.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel p-10 rounded-3xl group flex flex-col items-center text-center hover:border-primary/30 transition-all"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 border shadow-lg group-hover:scale-110 transition-transform ${
                card.accent === "primary" ? "bg-primary/10 border-primary/20" :
                card.accent === "secondary" ? "bg-secondary/10 border-secondary/20" :
                "bg-foreground/5 border-foreground/10"
              }`}>
                <card.icon className={`w-10 h-10 ${
                  card.accent === "primary" ? "text-primary" :
                  card.accent === "secondary" ? "text-secondary" :
                  "text-foreground"
                }`} />
              </div>
              <h3 className="text-xl font-black mb-4 italic uppercase tracking-wider">
                {card.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
