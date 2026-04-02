"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#040810]"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,180,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Radial glow center */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ y }}
      >
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </motion.div>

      {/* 3D Pipe SVG animation */}
      <PipeAnimation />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        style={{ opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          24/7 Notdienst – Sofort erreichbar
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
          24/7 Rohrreinigung{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Notdienst
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-200">
            Schnell. Sauber. Zuverlässig.
          </span>
        </h1>

        <p className="text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          In wenigen Minuten bei Ihnen vor Ort – professionelle Hilfe bei
          verstopften Rohren &amp; Notfällen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="tel:+4984112345678"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.7)] transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <PhoneIcon className="relative w-5 h-5" />
            <span className="relative">Jetzt anrufen</span>
          </motion.a>

          <motion.a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border border-cyan-500/40 text-cyan-400 font-semibold text-lg hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Soforthilfe anfragen</span>
            <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Quick trust signals */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {["Keine Wartezeit", "Festpreisgarantie", "Ingolstadt & Umgebung"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <CheckIcon className="w-4 h-4 text-cyan-500" />
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#040810] to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-cyan-500/50" />
      </motion.div>
    </section>
  );
}

function PipeAnimation() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated SVG pipe system */}
      <svg
        className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden lg:block"
        viewBox="0 0 500 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pipe lines */}
        <path
          d="M 500 100 L 350 100 L 350 300 L 150 300 L 150 500 L 300 500 L 300 700"
          stroke="url(#pipeGrad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 400 0 L 400 200 L 200 200 L 200 400 L 450 400 L 450 600"
          stroke="url(#pipeGrad2)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />
        {/* Pipe joints */}
        {[
          [350, 100], [350, 300], [150, 300], [150, 500], [300, 500],
          [400, 200], [200, 200], [200, 400],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="12" fill="none" stroke="#06b6d4" strokeWidth="3" opacity="0.8" />
        ))}
        {/* Water flow dots */}
        <WaterDot path="M 500 100 L 350 100 L 350 300 L 150 300 L 150 500 L 300 500 L 300 700" dur="4s" />
        <WaterDot path="M 400 0 L 400 200 L 200 200 L 200 400 L 450 400 L 450 600" dur="3s" delay="1.5s" />

        <defs>
          <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="pipeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left side decoration */}
      <svg
        className="absolute left-0 bottom-0 w-1/3 h-2/3 opacity-10 hidden lg:block"
        viewBox="0 0 300 500"
        fill="none"
      >
        <path
          d="M 0 200 L 100 200 L 100 100 L 250 100 L 250 300 L 50 300 L 50 500"
          stroke="#06b6d4"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// SVG animateMotion helper (inline SVG animation)
function WaterDot({ path, dur, delay = "0s" }: { path: string; dur: string; delay?: string }) {
  return (
    <circle r="5" fill="#22d3ee">
      <animateMotion dur={dur} begin={delay} repeatCount="indefinite" path={path} />
    </circle>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
