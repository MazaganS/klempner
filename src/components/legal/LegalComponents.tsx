"use client";

import { useEffect, ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

/* ─────────────────────────────────────────────
   Scroll Progress Bar (fixed at top)
───────────────────────────────────────────── */
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-cyan-400 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

/* ─────────────────────────────────────────────
   Sticky Back Button
───────────────────────────────────────────── */
export function StickyBackButton() {
  return (
    <motion.div
      className="fixed top-6 left-4 md:left-8 z-40"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      <Link
        href="/"
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.1] text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all text-sm font-medium"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
        Zurück zur Startseite
      </Link>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Table of Contents
───────────────────────────────────────────── */
export interface TocItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TocItem[] }) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <motion.nav
      className="hidden lg:block sticky top-28 self-start w-56 shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl">
        <p className="text-xs uppercase tracking-widest text-slate-500 mb-4 font-semibold">Inhalt</p>
        <ul className="space-y-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="block w-full text-left px-3 py-1.5 rounded-lg text-sm text-slate-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}

/* ─────────────────────────────────────────────
   LegalContainer — outer page wrapper
───────────────────────────────────────────── */
export function LegalContainer({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#040810] text-white relative">
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full" />
      </div>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   LegalSection — glassmorphism card per section
───────────────────────────────────────────── */
export function LegalSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl hover:bg-white/[0.05] transition-colors duration-300"
    >
      {children}
    </motion.section>
  );
}

/* ─────────────────────────────────────────────
   LegalTitle
───────────────────────────────────────────── */
export function LegalTitle({
  children,
  level = 2,
}: {
  children: ReactNode;
  level?: 1 | 2 | 3;
}) {
  const classes: Record<number, string> = {
    1: "text-3xl md:text-4xl font-black text-white mb-2",
    2: "text-xl font-bold text-cyan-400 mb-4",
    3: "text-base font-semibold text-slate-200 mt-5 mb-2",
  };

  if (level === 1) return <h1 className={classes[1]}>{children}</h1>;
  if (level === 2) return <h2 className={classes[2]}>{children}</h2>;
  return <h3 className={classes[3]}>{children}</h3>;
}

/* ─────────────────────────────────────────────
   LegalParagraph
───────────────────────────────────────────── */
export function LegalParagraph({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-slate-400 leading-relaxed text-sm ${className}`}>
      {children}
    </p>
  );
}
