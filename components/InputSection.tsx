import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";
import { SpreadType } from "../types";
import { SILKY_EASE } from "../constants/ui";
import { SPREADS } from "../constants/spreads";

interface InputSectionProps {
  question: string;
  spread: SpreadType;
  includeMinor: boolean;
  onQuestionChange: (value: string) => void;
  onSpreadChange: (spread: SpreadType) => void;
  onToggleMinor: () => void;
  onStartRitual: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({
  question,
  spread,
  includeMinor,
  onQuestionChange,
  onSpreadChange,
  onToggleMinor,
  onStartRitual,
}) => (
  <motion.div
    key="input"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20, transition: { duration: 0.8 } }}
    transition={{ duration: 1, ease: SILKY_EASE }}
    className="w-full max-w-lg flex flex-col gap-12 items-center mt-10"
  >
    {/* Question Input */}
    <div className="w-full space-y-4">
      <label className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase block text-center">
        What is your query?
      </label>
      <input
        type="text"
        name="tarot-query"
        autoComplete="off"
        data-lpignore="true"
        value={question}
        onChange={(e) => onQuestionChange(e.target.value)}
        placeholder="Ask the universe..."
        className="w-full bg-transparent border-b border-white/20 py-4 text-center text-xl md:text-2xl text-white placeholder:text-white/10 focus:outline-none focus:border-white/60 transition-colors font-serif"
      />
    </div>

    {/* Spread Selection */}
    <div className="w-full space-y-6">
      <label className="text-[10px] tracking-[0.3em] text-neutral-500 uppercase block text-center">
        Choose your Path
      </label>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.values(SPREADS).map((s) => (
          <button
            key={s.id}
            onClick={() => onSpreadChange(s.id)}
            className={`relative p-4 border transition-all duration-500 flex flex-col items-center gap-4 group ${
              spread === s.id
                ? "border-white/60 bg-white/5"
                : "border-white/10 hover:border-white/30"
            }`}
          >
            <div className="flex gap-1 items-center justify-center h-8 w-8 relative">
              {s.icon(spread === s.id)}
            </div>
            <span
              className={`text-[10px] tracking-widest uppercase transition-colors ${
                spread === s.id ? "text-white" : "text-white/40"
              }`}
            >
              {s.name.split(" ")[0]}
            </span>

            {/* Selection Indicator */}
            <AnimatePresence>
              {spread === s.id && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute top-2 right-2 text-white/60"
                >
                  <Check size={12} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
      <div className="h-8 text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={spread}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-xs text-white/40 font-light tracking-wide"
          >
            {SPREADS[spread].description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>

    {/* Minor Arcana Toggle (Only for 3-card spread) */}
    <AnimatePresence>
      {spread === "THREE" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
        >
          <button
            onClick={onToggleMinor}
            className="w-full flex items-center justify-center gap-3 py-2 cursor-pointer group"
          >
            <div
              className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                includeMinor ? "border-white bg-white/20" : "border-neutral-600"
              }`}
            >
              {includeMinor && <Check size={10} className="text-white" />}
            </div>
            <span
              className={`text-[10px] tracking-widest transition-colors ${
                includeMinor
                  ? "text-neutral-300"
                  : "text-neutral-600 group-hover:text-neutral-400"
              }`}
            >
              INCLUDE MINOR ARCANA (包含小阿尔克那)
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>

    <motion.button
      onClick={onStartRitual}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-xs tracking-[0.3em] text-white transition-all"
    >
      BEGIN RITUAL
    </motion.button>
  </motion.div>
);

export default InputSection;
