import { motion } from "framer-motion";

export default function ChiSonoSection() {
  return (
    <section id="chisono" className="py-24 px-5 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl mx-auto glass-panel p-10 md:p-16 rounded-4xl border border-primary/20 relative overflow-hidden"
      >
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-10 bg-primary" />
            <span className="label-tag">La Storia</span>
          </div>

          <h2 className="text-3xl md:text-6xl font-black mb-8 italic uppercase tracking-tight text-foreground leading-none">
            Dal Tecnico <br />
            ad <span className="gradient-text">Ingegneria.</span>
          </h2>

          <div className="text-muted-foreground leading-relaxed font-light text-sm md:text-lg space-y-6">
            <p className="border-l-2 border-primary/50 pl-4">
              "Vengo da un Istituto Tecnico e l'impatto con Ingegneria è stato il momento in cui ho capito cosa volesse dire davvero studiare."
            </p>
            <p>
              Ho dovuto resettare tutto e imparare a ragionare, smettendo di imparare a memoria concetti che non padroneggiavo.
            </p>
            <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
              <p className="font-bold text-foreground text-sm md:text-base italic">
                ❝ È in quella sfida che ho costruito il metodo che uso ancora oggi.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
