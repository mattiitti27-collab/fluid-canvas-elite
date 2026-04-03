import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, X } from "lucide-react";

export default function FloatingButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[55] flex flex-col items-end gap-3"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <AnimatePresence>
        {open && (
          <>
            <motion.a
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ type: "spring", damping: 15, stiffness: 300 }}
              href="https://wa.me/393345415707"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_#25D366] hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-5 h-5 text-foreground" />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ type: "spring", damping: 15, stiffness: 300, delay: 0.05 }}
              href="mailto:intini.mattia.rl@gmail.com"
              className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-[var(--shadow-glow-primary)] hover:scale-110 transition-transform"
            >
              <Mail className="w-5 h-5 text-primary-foreground" />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg transition-colors ${
          open
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground shadow-[var(--shadow-glow-primary)] animate-bounce-subtle"
        }`}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </div>
  );
}
