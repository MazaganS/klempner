"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "./ServicesSection";

const reasons = [
  {
    icon: "⚡",
    title: "Schnelle Reaktionszeit",
    desc: "In der Regel innerhalb von 30–60 Minuten bei Ihnen – auch nachts und am Wochenende.",
  },
  {
    icon: "🛠️",
    title: "Profi-Team",
    desc: "Ausgebildete Fachkräfte mit jahrelanger Erfahrung in Rohrreinigung & Klempnerarbeiten.",
  },
  {
    icon: "💬",
    title: "Transparente Preise",
    desc: "Keine versteckten Kosten. Sie erhalten vor Beginn eine klare Kostenaufstellung.",
  },
  {
    icon: "🧼",
    title: "Saubere Arbeit",
    desc: "Wir hinterlassen Ihren Haushalt so sauber wie wir ihn vorgefunden haben.",
  },
  {
    icon: "📍",
    title: "Lokal in Ingolstadt",
    desc: "Ihr regionaler Partner – wir kennen die Region und sind schnell bei Ihnen vor Ort.",
  },
  {
    icon: "🔧",
    title: "Modernste Technik",
    desc: "Hochdruckspülung, Kamerainspektion und präzise Leckortung ohne unnötige Schäden.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="warum-wir" className="py-24 bg-[#06090f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          badge="Warum wir?"
          title="Ihr Vorteil mit A&G"
          sub="Was uns von anderen unterscheidet – und warum Kunden immer wieder auf uns vertrauen."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className="flex gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-cyan-500/30 hover:bg-cyan-500/[0.03] transition-all duration-300"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="text-3xl shrink-0 mt-0.5">{r.icon}</div>
              <div>
                <h3 className="text-white font-bold text-base mb-1">{r.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
