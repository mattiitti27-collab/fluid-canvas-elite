import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, Calendar, Zap, ExternalLink } from "lucide-react";

type Tab = "form" | "calendly";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState<Tab>("form");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setSubmitting(true);
    const formData = new FormData(formRef.current);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwmTq73CrKn-ZB-qBibz6pW8zASyrNqc3QuzwGGkkrGg6SuZ2TprnMOCRPTg0dWqH-zCg/exec",
        { method: "POST", body: formData }
      );
      setSubmitted(true);
      formRef.current.reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert("Errore di rete. Riprova o scrivici su WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-area" className="py-24 px-4 relative z-10">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-3 italic uppercase tracking-tighter">
            Come vuoi <span className="text-primary">procedere?</span>
          </h2>
          <p className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase">
            Scegli il percorso che preferisci
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          <button
            onClick={() => setActiveTab("form")}
            className={`glass-panel p-7 rounded-3xl text-left transition-all duration-300 group relative overflow-hidden ${
              activeTab === "form" ? "border-2 border-primary/60" : "border border-border"
            }`}
          >
            <div className="relative z-10 flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow-primary)] group-hover:scale-110 transition-transform">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="label-tag mb-1">Opzione A</p>
                <h3 className="text-lg font-black uppercase italic tracking-tight text-foreground mb-1.5">
                  Chiedi Informazioni
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Compila il form, ti ricontatto su WhatsApp entro <span className="text-foreground font-bold">15 minuti</span>.
                </p>
              </div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab("calendly")}
            className={`glass-panel p-7 rounded-3xl text-left transition-all duration-300 group relative overflow-hidden ${
              activeTab === "calendly" ? "border-2 border-secondary/60" : "border border-border"
            }`}
          >
            <div className="absolute top-4 right-4 bg-secondary/20 border border-secondary/40 text-secondary text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-2.5 h-2.5" />
              Instant
            </div>
            <div className="relative z-10 flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-glow-cyan)] group-hover:scale-110 transition-transform">
                <Calendar className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.25em] text-secondary mb-1">Opzione B</p>
                <h3 className="text-lg font-black uppercase italic tracking-tight text-foreground mb-1.5">
                  Prenota & Paga
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed">
                  Scegli giorno, ora e paga subito online. <span className="text-foreground font-bold">Tutto in 2 minuti.</span>
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Form Panel */}
        {activeTab === "form" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-8 md:p-14 rounded-4xl relative shadow-[0_20px_100px_rgba(0,0,0,1)] border-t border-primary/20"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[var(--shadow-glow-primary)]" />

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-success/50 animate-glow-breath">
                  <span className="text-4xl">✓</span>
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-4">Inviato!</h3>
                <p className="text-muted-foreground text-sm">Ti contatteremo su WhatsApp a breve.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="nome"
                    placeholder="Nome completo"
                    required
                    className="w-full p-5 rounded-2xl placeholder-muted-foreground font-medium bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Cellulare"
                    required
                    className="w-full p-5 rounded-2xl placeholder-muted-foreground font-medium bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors"
                  />
                </div>

                <div className="relative">
                  <select
                    name="tipo_richiesta"
                    className="w-full p-5 rounded-2xl bg-background/80 appearance-none cursor-pointer font-medium border border-border focus:border-primary text-foreground outline-none transition-colors"
                  >
                    <option value="">Seleziona la tua esigenza</option>
                    <option value="Superiori">Richiesta info - Scuole Superiori</option>
                    <option value="Universita">Richiesta info - Università</option>
                    <option value="TestAmmissione">Preparazione Test/Concorsi</option>
                    <option value="Corsi">Corsi di Formazione & Office</option>
                    <option value="Prenotazione">Prenota una lezione di prova</option>
                  </select>
                </div>

                <textarea
                  name="messaggio"
                  placeholder="Descrivi brevemente l'argomento..."
                  className="w-full p-5 rounded-2xl h-40 resize-none placeholder-muted-foreground font-medium bg-background/50 border border-border focus:border-primary text-foreground outline-none transition-colors"
                />

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-primary-foreground hover:bg-foreground hover:text-background transition-all shadow-[var(--shadow-glow-primary)] hover:shadow-[0_0_60px_hsla(0,0%,100%,0.8)] relative overflow-hidden group text-sm disabled:opacity-50"
                >
                  <span className="flex items-center justify-center gap-3">
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {submitting ? "Invio..." : "Invia Richiesta"}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        )}

        {/* Calendly Panel */}
        {activeTab === "calendly" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel rounded-4xl relative shadow-[0_20px_100px_rgba(0,0,0,1)] border-t border-secondary/20 overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent shadow-[var(--shadow-glow-cyan)]" />
            <div className="p-8 pb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Calendar className="w-4 h-4 text-secondary" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] font-black text-secondary">Calendario Live</p>
                <p className="text-[10px] text-muted-foreground font-light">Scegli data e ora · paga subito online</p>
              </div>
            </div>
            <div className="flex items-center justify-center p-12 min-h-[400px]">
              <div className="text-center">
                <p className="text-muted-foreground text-sm mb-4">Calendario Calendly</p>
                <a
                  href="https://calendly.com/intini-mattia-rl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] border border-secondary/30 text-secondary px-6 py-3 rounded-xl hover:bg-secondary/10 transition-all"
                >
                  <ExternalLink className="w-3 h-3" />
                  Apri Calendly
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
