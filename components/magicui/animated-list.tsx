"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedListProps {
  className?: string;
  children: React.ReactNode;
  delay?: number;
  maxHeight?: string;
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000, maxHeight = "300px" }: AnimatedListProps) => {
    const [index, setIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
      }, delay);

      return () => clearInterval(interval);
    }, [childrenArray.length, delay]);

    const itemsToShow = useMemo(
      () => childrenArray.slice(0, index + 1).reverse(),
      [index, childrenArray],
    );

    return (
      <div className={cn("flex flex-col items-center w-full max-w-md", className)}>
        <div 
          className={cn(
            "overflow-y-auto w-full",
            `max-h-[${maxHeight}]`
          )}
        >
          <AnimatePresence>
            {itemsToShow.map((item, idx) => (
              <AnimatedListItem key={idx}>
                {item}
              </AnimatedListItem>
            ))}
          </AnimatePresence>
        </div>
      </div>
    );
  },
);

AnimatedList.displayName = "AnimatedList";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 },
  };

  return (
    <motion.div 
      {...animations} 
      layout 
      className="w-full mb-3 last:mb-0"
    >
      <div className="bg-white rounded-lg shadow-md p-4 text-left">
        {children}
      </div>
    </motion.div>
  );
}
