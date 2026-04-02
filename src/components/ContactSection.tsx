"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-[#040810] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Wir sind für Sie da
          </h2>
          <p className="text-slate-400 text-lg">
            24 Stunden am Tag, 7 Tage die Woche – auch an Feiertagen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Phone CTA */}
          <motion.a
            href="tel:+4984112345678"
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-600/10 border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300">
              <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="text-slate-400 text-sm mb-1">Jetzt anrufen</div>
            <div className="text-white font-black text-2xl mb-2 group-hover:text-cyan-300 transition-colors">
              +49 841 123 456 78
            </div>
            <div className="text-cyan-400 text-sm font-medium">24/7 Notdienst</div>
          </motion.a>

          {/* WhatsApp CTA */}
          <motion.a
            href="https://wa.me/4984112345678"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-600/5 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-[0_0_40px_rgba(34,197,94,0.1)] text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
          >
            <div className="w-16 h-16 rounded-2xl bg-green-500/15 border border-green-500/20 flex items-center justify-center mx-auto mb-5 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition-all duration-300">
              <WhatsAppIcon className="w-8 h-8 text-green-400" />
            </div>
            <div className="text-slate-400 text-sm mb-1">WhatsApp Nachricht</div>
            <div className="text-white font-black text-2xl mb-2 group-hover:text-green-300 transition-colors">
              WhatsApp Chat
            </div>
            <div className="text-green-400 text-sm font-medium">Schnelle Antwort garantiert</div>
          </motion.a>
        </div>

        {/* Info row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Servicegebiet", val: "Ingolstadt & Umgebung (50km)" },
            { label: "Reaktionszeit", val: "Ø 30–60 Minuten" },
            { label: "Verfügbarkeit", val: "24/7 inkl. Feiertage" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-center"
            >
              <div className="text-slate-500 text-xs mb-1">{item.label}</div>
              <div className="text-white text-sm font-semibold">{item.val}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
