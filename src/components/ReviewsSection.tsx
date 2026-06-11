import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { text: "Ragazzo molto preparato, chiaro nelle spiegazioni, sempre disponibile e puntuale. Riesce a rendere comprensibili anche gli argomenti più difficili, adattando il metodo di studio alle esigenze dello studente. Grazie alla sua competenza, i miglioramenti si vedono già dopo poche lezioni. Assolutamente consigliato per chi ha bisogno di supporto nelle materie scientifiche al liceo.", author: "Majli Boscolo", stars: 5, accent: "primary" },
  { text: "Ragazzo molto preparato. Insegna molto bene ed ha un buon metodo di studio. Molto gentile e disponibile e maturo.", author: "Ogert Olti Shkambi", stars: 5, accent: "secondary" },
  { text: "Ragazzo molto preparato. Insegna un buon metodo di studio. Molto gentile e disponibile.", author: "Daniela Marangon", stars: 5, accent: "accent" },
  { text: "Mio figlio sta frequentando queste lezioni di ripetizione da qualche tempo e l'esperienza è stata davvero molto positiva. Fin da subito si è trovato a suo agio, grazie a un ambiente accogliente e a un approccio didattico attento e personalizzato. Consiglio vivamente questo servizio a chiunque cerchi un supporto serio ed efficace per i propri figli.", author: "Tiziana Cavallari", stars: 5, accent: "foreground" },
  { text: "Mio figlio sta prendendo lezioni da un po' di tempo e si trova davvero bene, riesce a capire la materia con facilità. È una persona davvero seria e mette il ragazzo a suo agio. Lo consiglio vivamente.", author: "Delfina Donato", stars: 5, accent: "primary" },
  { text: "Mi sono trovato benissimo con Mattia, ragazzo super disponibile, in gamba e preparato. Mi ha seguito per recuperare le lacune che avevo in matematica, ottenendo risultati davvero positivi. Consigliatissimo!", author: "Luca Marcer", stars: 5, accent: "secondary" },
  { text: "Mattia molto preparato e disponibile, mio figlio si è trovato bene, lo consiglio!", author: "Franco Marina", stars: 5, accent: "accent" },
  { text: "Mattia è un ragazzo molto preparato e competente. Ha dato ripetizioni di fisica a mio figlio in modo molto professionale ed estremamente proficuo! Lo consiglio vivamente.", author: "Floriana Scalisi", stars: 5, accent: "foreground" },
  { text: "Mattia è un ragazzo molto preparato, sempre puntuale e disponibile. Lo consiglio vivamente.", author: "Andrea Lovato", stars: 5, accent: "primary" },
  { text: "Mattia è un ragazzo molto preparato, che ha instaurato con mio figlio un'ottima relazione che facilita lo studio. Quello che apprezzo molto è anche l'essere sempre positivo e capace di infondere fiducia e sicurezza. Assolutamente consigliato!", author: "Elena Rota", stars: 5, accent: "secondary" },
  { text: "Mattia è molto paziente, molto preparato e affidabile. Lo consiglio a pieni voti.", author: "Romina Fiorentino", stars: 5, accent: "accent" },
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
