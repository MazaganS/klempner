"use client";

import { motion } from "framer-motion";

const items = [
  { icon: "⭐", label: "4.4 Bewertung", sub: "Google Reviews" },
  { icon: "👥", label: "500+ Kunden", sub: "zufriedene Auftraggeber" },
  { icon: "🕐", label: "24/7 erreichbar", sub: "auch an Feiertagen" },
  { icon: "🚗", label: "Schnelle Anfahrt", sub: "in Ingolstadt & Umgebung" },
  { icon: "💰", label: "Faire Preise", sub: "transparent & ehrlich" },
];

export default function TrustStrip() {
  return (
    <section className="relative bg-[#06090f] border-y border-cyan-500/10 overflow-hidden">
      {/* Glow line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center text-center gap-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="text-2xl mb-1">{item.icon}</span>
              <span className="text-white font-bold text-sm sm:text-base">{item.label}</span>
              <span className="text-slate-500 text-xs">{item.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
