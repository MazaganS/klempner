"use client";

import { motion } from "framer-motion";

export default function UrgencyBlock() {
  return (
    <section className="py-24 bg-[#06090f] relative overflow-hidden">
      {/* Pulsing glow background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-[700px] h-[300px] rounded-full bg-cyan-500/10 blur-[80px]" />
      </motion.div>

      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        {/* Warning icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-orange-500/30 bg-orange-500/10 mb-6"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Rohr verstopft?{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
            Warten verschlimmert das Problem.
          </span>
        </motion.h2>

        <motion.p
          className="text-slate-400 text-lg mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Jede Stunde Verzögerung kann zu größeren Schäden führen. Rufen Sie jetzt an – wir sind in wenigen Minuten bei Ihnen.
        </motion.p>

        <motion.a
          href="tel:+4984112345678"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xl shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:shadow-[0_0_70px_rgba(6,182,212,0.8)] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            📞
          </motion.span>
          Jetzt sofort anrufen
        </motion.a>

        {/* Trust micro-signals */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-slate-500">
          <span>✓ Kostenlose Erstberatung</span>
          <span>✓ Kein Anfahrtszuschlag nachts</span>
          <span>✓ Direkt & transparent</span>
        </div>
      </div>
    </section>
  );
}
