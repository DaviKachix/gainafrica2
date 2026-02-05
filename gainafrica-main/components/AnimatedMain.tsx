"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export default function AnimatedMain({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.main
        key={Math.random()} // ideally use router pathname
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="relative z-0 min-h-screen"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
