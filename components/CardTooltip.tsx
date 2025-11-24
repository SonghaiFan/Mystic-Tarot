import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "motion/react";

interface CardTooltipProps {
  x: number;
  y: number;
  isRevealed?: boolean;
}

const CardTooltip: React.FC<CardTooltipProps> = ({
  x,
  y,
  isRevealed = true,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x, y });

  useLayoutEffect(() => {
    if (tooltipRef.current) {
      const rect = tooltipRef.current.getBoundingClientRect();
      let newX = x;
      let newY = y;
      const padding = 10;

      // Check right edge
      if (newX + rect.width > window.innerWidth - padding) {
        newX = x - rect.width - 30; // Flip to left
      }

      // Check bottom edge
      if (newY + rect.height > window.innerHeight - padding) {
        newY = window.innerHeight - rect.height - padding;
      }

      // Check left edge
      if (newX < padding) {
        newX = padding;
      }

      // Check top edge
      if (newY < padding) {
        newY = padding;
      }

      setPos({ x: newX, y: newY });
    }
  }, [x, y, isRevealed]);

  return (
    <motion.div
      ref={tooltipRef}
      initial={{ opacity: 0, scale: 0.9, x: 10, y: 10 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="bg-black/80 border border-white/10 rounded px-3 py-2 backdrop-blur-sm shadow-xl whitespace-nowrap"
    >
      <p className="text-[10px] text-white/80 tracking-[0.2em] uppercase font-light">
        {!isRevealed ? "Click to Reveal" : "Click to Inspect"}
      </p>
    </motion.div>
  );
};

export default CardTooltip;
