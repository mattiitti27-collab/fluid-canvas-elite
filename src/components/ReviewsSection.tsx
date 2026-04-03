import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Mi ha aiutato un sacco con analisi 1, prima ero completamente perso. Spiega in modo semplice e senza farti sentire stupido.", author: "Luca R.", stars: 5, accent: "primary" },
  { text: "Fisica spiegata finalmente come si deve. Ho iniziato a capire davvero e non solo a imparare formule a caso.", author: "Giulia M.", stars: 5, accent: "secondary" },
  { text: "Bravo in matematica, soprattutto per le superiori. A volte va veloce ma se chiedi ti rispiega.", author: "Marco T.", stars: 4, accent: "foreground" },
  { text: "Mio figlio aveva grosse difficoltà in chimica e matematica, dopo qualche lezione si è sbloccato e ora va molto meglio.", author: "Sara B. (Mamma)", stars: 5, accent: "accent" },
  { text: "Analisi 1 tosta ma spiegata bene. Non regala niente ma ti fa ragionare.", author: "Andrea F.", stars: 5, accent: "primary" },
  { text: "Ripetizioni serie, niente tempo perso. Se non studi te lo dice ma ti aiuta davvero.", author: "Francesco L.", stars: 5, accent: "foreground" },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 px-5 relative z-10">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-16 text-center italic tracking-tighter uppercase"
        >
          Feedback <span className="text-primary drop-shadow-[0_0_20px_hsla(271,72%,55%,0.8)]">Elite</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between hover:border-primary/30 transition-all"
            >
              <div>
                <div className="flex text-accent mb-4 text-xs gap-1">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} className={`w-3.5 h-3.5 ${si < review.stars ? "fill-accent text-accent" : "text-muted-foreground"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed font-light">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  review.accent === "primary" ? "bg-primary/20 text-primary" :
                  review.accent === "secondary" ? "bg-secondary/20 text-secondary" :
                  review.accent === "accent" ? "bg-accent/20 text-accent" :
                  "bg-foreground/10 text-foreground"
                }`}>
                  {review.author[0]}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {review.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
