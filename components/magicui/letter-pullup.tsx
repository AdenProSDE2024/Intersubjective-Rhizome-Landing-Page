"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterPullupProps {
  className?: string;
  words: string;
  delay?: number;
}

export default function LetterPullup({
  className,
  words,
  delay = 0.05,
}: LetterPullupProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delay,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h1
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
            "font-display text-center text-4xl font-bold tracking-[-0.02em] text-blue-600 drop-shadow-sm dark:text-blue-400 md:text-5xl md:leading-[5rem]",
            className,
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h1>
      ))}
    </div>
  );
}
