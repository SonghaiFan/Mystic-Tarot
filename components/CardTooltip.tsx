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
        className="bg-black/90 border border-white/20 px-3 py-2 rounded backdrop-blur-md shadow-2xl whitespace-nowrap"
      >
        <p className="text-[10px] text-white tracking-widest uppercase">
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
      className="w-48 bg-black/90 border border-white/20 p-3 rounded backdrop-blur-md shadow-2xl"
    >
      <h3 className="text-white text-xs font-bold text-center mb-1 tracking-widest">
        {card.nameCn}
      </h3>
      <p className="text-[10px] text-neutral-400 text-center mb-2 font-serif italic">
        {card.nameEn} {card.isReversed ? "(Reversed)" : ""}
      </p>
      <div className="flex flex-wrap justify-center gap-1 mb-2">
        {card.keywords.slice(0, 4).map((keyword) => (
          <span
            key={keyword}
            className="text-[8px] px-1.5 py-0.5 bg-white/10 border border-white/5 rounded text-neutral-300 tracking-wider"
          >
            {keyword}
          </span>
        ))}
      </div>
      {(card.positive || card.negative) && (
        <p className="text-[9px] text-neutral-400 text-center leading-relaxed border-t border-white/10 pt-2 mt-1">
          {card.isReversed ? card.negative : card.positive}
        </p>
      )}
    </motion.div>
  );
};

export default CardTooltip;
