import React from "react";
import { motion } from "motion/react";
import { PickedCard } from "../types";

interface CardTooltipProps {
  card: PickedCard;
  x: number;
  y: number;
  isRevealed?: boolean;
}

const CardTooltip: React.FC<CardTooltipProps> = ({
  card,
  x,
  y,
  isRevealed = true,
}) => {
  // Simple boundary detection could be added here,
  // but for now we'll just position it to the bottom-right of the cursor.

  if (!isRevealed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 10, y: 10 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{
          position: "fixed",
          left: x,
          top: y,
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className="bg-black/90 border border-white/20 px-4 py-3 rounded backdrop-blur-md shadow-2xl whitespace-nowrap"
      >
        <p className="text-xs text-white tracking-widest uppercase">
          Click to Reveal
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 10, y: 10 }}
      animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      style={{
        position: "fixed",
        left: x,
        top: y,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      className="w-64 bg-black/90 border border-white/20 p-4 rounded backdrop-blur-md shadow-2xl"
    >
      <h3 className="text-white text-sm font-bold text-center mb-1 tracking-widest">
        {card.nameCn}
      </h3>
      <p className="text-xs text-neutral-400 text-center mb-3 font-serif italic">
        {card.nameEn} {card.isReversed ? "(Reversed)" : ""}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5 mb-3">
        {card.keywords.slice(0, 4).map((keyword) => (
          <span
            key={keyword}
            className="text-[10px] px-2 py-1 bg-white/10 border border-white/5 rounded text-neutral-300 tracking-wider"
          >
            {keyword}
          </span>
        ))}
      </div>
      {(card.positive || card.negative) && (
        <p className="text-xs text-neutral-400 text-center leading-relaxed border-t border-white/10 pt-3 mt-1">
          {card.isReversed ? card.negative : card.positive}
        </p>
      )}
    </motion.div>
  );
};

export default CardTooltip;
