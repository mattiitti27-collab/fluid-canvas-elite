import { Phone, Calendar, MapPin } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="relative z-10 border-t border-border bg-background/95 backdrop-blur-md">
      <div className="section-container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black tracking-tighter mb-4 font-display">
              Ripetiamo<span className="text-primary">.</span>
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground mb-4">
              Elite Tutoring & Metodo
            </p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Da studenti per studenti — perché chi ha appena superato quell'esame sa esattamente come aiutarti.
            </p>
          </div>

          {/* Contatti */}
          <div>
            <h4 className="label-tag mb-6">Contatti</h4>
            <div className="space-y-4">
              <a
                href="https://wa.me/393345415707"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span>+39 334 541 5707 / WhatsApp <span className="text-primary text-[9px] font-bold">(risposta rapida)</span></span>
              </a>
              <a
                href="https://calendly.com/intini-mattia-rl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Calendar className="w-4 h-4 text-secondary group-hover:scale-110 transition-transform" />
                <span>Prenota su Calendly</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Torino, Italia</span>
              </div>
            </div>
          </div>

          {/* Dati Legali */}
          <div>
            <h4 className="label-tag mb-6">Dati Legali</h4>
            <div className="glass-panel p-6 rounded-2xl space-y-3">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Titolare</p>
                <p className="text-sm text-foreground font-medium">Mattia Intini</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Qualifica</p>
                <p className="text-sm text-foreground font-medium">Libero Professionista</p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground font-bold">P.IVA</p>
                <p className="text-sm text-foreground font-medium font-mono">13419790012</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase font-black italic text-muted-foreground">
            RIPETIAMO ELITE TUTORING <span className="text-primary mx-2">•</span> © 2026 <span className="text-primary mx-2">•</span> ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
