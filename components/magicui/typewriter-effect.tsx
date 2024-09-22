"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn("text-center", className)}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, idx) => {
        return (
          <motion.span
            key={`${word}-${idx}`}
            className={cn("inline-block", word.className)}
            variants={childVariants}
          >
            {word.text}&nbsp;
          </motion.span>
        );
      })}
      <motion.span
        className={cn(
          "inline-block h-4 w-[1px] animate-blink bg-black",
          cursorClassName
        )}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
      />
    </motion.div>
  );
};