"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Rohrreinigung",
    desc: "Professionelle Reinigung verstopfter Rohrleitungen mit modernster Technik.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Kanalreinigung",
    desc: "Gründliche Kanalspülung und Beseitigung von Ablagerungen im Abwassersystem.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Notdienst 24/7",
    desc: "Rund um die Uhr erreichbar – auch an Wochenenden und Feiertagen.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
    title: "Leckortung",
    desc: "Präzise Erkennung von Leckagen ohne unnötige Baumaßnahmen.",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: "Abflussreinigung",
    desc: "Schnelle Entstopfung von Waschbecken, Dusche, Badewanne und WC.",
  },
];

export default function ServicesSection() {
  return (
    <section id="leistungen" className="py-24 bg-[#040810] relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          badge="Unsere Leistungen"
          title="Was wir für Sie tun"
          sub="Von der Entstopfung bis zur Leckortung – wir lösen jedes Rohrproblem schnell und professionell."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-500/40 transition-all duration-500 hover:bg-cyan-500/[0.04] cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-transparent" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300">
                {s.icon}
              </div>

              <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-100 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ badge, title, sub }: { badge: string; title: string; sub: string }) {
  return (
    <motion.div
      className="text-center max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 mb-4">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">{title}</h2>
      <p className="text-slate-400 text-lg">{sub}</p>
    </motion.div>
  );
}

export { SectionHeader };
