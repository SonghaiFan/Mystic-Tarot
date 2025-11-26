import React from "react";
import { motion } from "motion/react";

const ShufflingSection: React.FC<{ cardCount: number }> = ({ cardCount }) => (
  <motion.div
    key="shuffling"
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
    exit={{ opacity: 0, transition: { duration: 0.5 } }}
  >
    {Array.from({ length: cardCount }, (_, i) => (
      <motion.div
        key={i}
        className="absolute w-48 h-80 md:w-64 md:h-96 rounded-sm shadow-2xl origin-bottom overflow-hidden"
        initial={{ y: 0, rotate: 0, scale: 1 }}
        animate={{
          y: [0, -40, 0],
          rotate: [0, i === 1 ? 5 : i === 2 ? -5 : 0, 0],
          x: [0, i === 1 ? 40 : i === 2 ? -40 : 0, 0],
          zIndex: [i, 10, i],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.2,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-neutral-950 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "6px 6px",
            }}
          ></div>
          <div className="absolute inset-1 border-[0.5px] border-white/5" />
          <div className="w-3 h-3 border border-white/10 rotate-45" />
        </div>
      </motion.div>
    ))}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.85 }}
      className="absolute bottom-16 text-center space-y-2 px-6"
    >
      <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
        {`Step 2 / 4 · 洗牌中（稍后抽取 ${cardCount} 张牌）`}
      </p>
      <p className="text-[11px] text-neutral-500">
        保持呼吸，准备点击任意漂浮的卡牌。
      </p>
    </motion.div>
  </motion.div>
);

export default ShufflingSection;
