"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./ServicesSection";

const reviews = [
  {
    name: "Thomas K.",
    date: "März 2025",
    rating: 5,
    text: "Super schneller Service – das Problem wurde sofort gelöst! Mitten in der Nacht angerufen und innerhalb einer Stunde war jemand da. Absolut empfehlenswert!",
    location: "Ingolstadt",
  },
  {
    name: "Maria S.",
    date: "Februar 2025",
    rating: 5,
    text: "Freundlich, kompetent und zuverlässig. Der Techniker hat alles erklärt und einen fairen Preis gemacht. Genau so stellt man sich einen guten Handwerker vor.",
    location: "Neuburg a.d. Donau",
  },
  {
    name: "Ahmed R.",
    date: "Januar 2025",
    rating: 4,
    text: "24/7 Notdienst hat mir den Tag gerettet! Verstopfter Abfluss kurz vor einer Familienfeier – in unter 45 Minuten war alles wieder frei. Danke!",
    location: "Ingolstadt",
  },
  {
    name: "Petra M.",
    date: "Dezember 2024",
    rating: 5,
    text: "Sehr professionell und sauber gearbeitet. Nach dem Einsatz war alles tiptop aufgeräumt. Der Preis war völlig in Ordnung für die schnelle Hilfe.",
    location: "Pfaffenhofen",
  },
  {
    name: "Klaus W.",
    date: "November 2024",
    rating: 5,
    text: "Schon zweimal genutzt und jedes Mal top! Klare Kommunikation, pünktlich, und das Problem wurde dauerhaft gelöst. Mein Go-to Klempner in der Region.",
    location: "Ingolstadt",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const visible = [
    reviews[(current) % reviews.length],
    reviews[(current + 1) % reviews.length],
    reviews[(current + 2) % reviews.length],
  ];

  return (
    <section id="bewertungen" className="py-24 bg-[#040810] relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          badge="Kundenstimmen"
          title="Was unsere Kunden sagen"
          sub="Über 500 zufriedene Kunden in Ingolstadt und Umgebung."
        />

        {/* Star rating summary */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-6 mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex">
            {[1, 2, 3, 4].map((i) => (
              <StarIcon key={i} filled />
            ))}
            <StarIcon filled={false} half />
          </div>
          <span className="text-white font-bold text-lg">4.4</span>
          <span className="text-slate-500 text-sm">Google Bewertungen</span>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {visible.map((review, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35, delay: i * 0.07 }}
                >
                  {/* Stars */}
                  <div className="flex mb-3">
                    {Array.from({ length: review.rating }).map((_, j) => (
                      <StarIcon key={j} filled />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{review.name}</div>
                      <div className="text-slate-500 text-xs">{review.location} · {review.date}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
              aria-label="Vorherige Bewertung"
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-cyan-400" : "w-1.5 bg-white/20"
                  }`}
                  aria-label={`Gehe zu Bewertung ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all"
              aria-label="Nächste Bewertung"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled, half = false }: { filled: boolean; half?: boolean }) {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill={filled ? "#FBBF24" : "none"} stroke="#FBBF24" strokeWidth={1}>
      {half ? (
        <>
          <defs>
            <linearGradient id="half">
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="50%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </>
      ) : (
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      )}
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
}
