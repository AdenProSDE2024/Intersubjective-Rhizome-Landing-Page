"use client";

import { motion } from "framer-motion";

export default function AnimatedSubtitle() {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="mt-6 text-lg text-black text-center font-semibold italic bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg px-4 py-2 shadow-sm"
    >
      Advancing the future of decentralized technologies via co-research
    </motion.p>
  );
}