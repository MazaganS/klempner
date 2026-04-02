"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function StickyPhone() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6 sm:hidden"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <a
            href="tel:+4984112345678"
            className="flex items-center gap-3 w-full max-w-sm px-6 py-4 rounded-2xl bg-cyan-500 text-black font-bold text-lg shadow-[0_8px_30px_rgba(6,182,212,0.5)] active:scale-95 transition-transform"
          >
            <motion.svg
              className="w-6 h-6 shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </motion.svg>
            <div>
              <div className="text-xs font-medium opacity-70 leading-none mb-0.5">Jetzt anrufen</div>
              <div className="text-base font-black leading-none">+49 841 123 456 78</div>
            </div>
            <div className="ml-auto">
              <span className="inline-flex items-center gap-1 text-xs font-semibold bg-black/20 px-2 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-black/60 rounded-full animate-pulse" />
                24/7
              </span>
            </div>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
