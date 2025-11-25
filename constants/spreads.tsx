import React from "react";
import { SpreadType, CardPoolType } from "../types";

export interface SpreadPosition {
  x: number | string; // Percentage (0-100) or specific unit (e.g. "50px")
  y: number | string; // Percentage (0-100) or specific unit (e.g. "50px")
  label: string;
  rotation?: number; // Degrees
  labelPosition?: "top" | "bottom" | "left" | "right";
  zIndex?: number;
}

export interface SpreadDefinition {
  id: SpreadType;
  name: string;
  description: string;
  cardCount: number;
  layoutType: "flex" | "absolute";
  positions?: SpreadPosition[]; // For absolute layouts
  labels?: string[]; // For flex layouts
  cardPools?: CardPoolType[]; // Specific pool for each position. Defaults to FULL if undefined.
  cardSize: {
    mobile: string; // Tailwind classes
    desktop: string; // Tailwind classes
  };
  icon: (isActive: boolean) => React.ReactNode;
  interpretationInstruction: string;
  defaultQuestions?: string[];
}

export const SPREADS: Record<SpreadType, SpreadDefinition> = {
  SINGLE: {
    id: "SINGLE",
    name: "One Card Draw",
    description:
      "Instant Insight. 最简单直接的指引。\n书中建议避免单纯的“是/否”提问，而是用“我需要注意什么...”来获得更深层的当下指引。",
    cardCount: 1,
    layoutType: "flex",
    labels: ["Insight"],
    cardSize: {
      mobile: "w-64 aspect-[300/519]",
      desktop: "w-80 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div
        className={`w-3 h-5 border rounded-[1px] transition-all duration-300 ${
          isActive
            ? "bg-white/90 border-transparent shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            : "border-white/40"
        }`}
      />
    ),
    interpretationInstruction:
      "Spread Type: One Card Draw. Focus on the 'appropriateness' of the card drawn. It indicates the circumstances you need to know about the issue right now.",
    defaultQuestions: [
      "What should I be aware of regarding [topic]?",
      "关于这件事，我需要留意什么?",
      "What attitude will be most useful to adopt today?",
      "今天采取什么样的态度最有用?",
      "What can I learn from this problem?",
      "How can I make this day more rewarding?",
    ],
  },
  THREE: {
    id: "THREE",
    name: "Past · Present · Future",
    description:
      "Classic Trinity. 经典的“过去、现在、未来”牌阵。\n书中也建议可灵活定义为“身体/心智/灵魂”或“早上/下午/晚上”来解读特定的一天。",
    cardCount: 3,
    layoutType: "flex",
    labels: ["Past", "Present", "Future"],
    cardSize: {
      mobile: "w-28 aspect-[300/519]",
      desktop: "w-56 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5 items-center">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`w-2 h-3.5 border rounded-[1px] transition-all duration-300 ${
              isActive ? "bg-white/90 border-transparent" : "border-white/40"
            } ${i === 1 ? "-translate-y-0.5" : "translate-y-0.5"}`}
          />
        ))}
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Three Card Spread. Read from left to right: 1. Recent Past (Influences), 2. Present (Current happenings), 3. Near Future (How it unfolds). Can also be interpreted as Body / Mind / Spirit.",
    defaultQuestions: [
      "What do I need to know about [topic]?",
      "What do I need to know about my health this weekend?",
      "What do I need to know about my work during this week ahead?",
      "关于这段关系，我需要了解什么?",
    ],
  },
  FOUR: {
    id: "FOUR",
    name: "Simple Four Card",
    description:
      "Situation · Cons · Pro · Answer. \n非常清晰的逻辑结构：现状、阻碍（Cons）、助力（Pro）以及最终的答案。",
    cardCount: 4,
    layoutType: "flex",
    labels: ["Situation", "Cons", "Pro", "Answer"],
    cardSize: {
      mobile: "w-24 aspect-[300/519]",
      desktop: "w-36 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5 items-center">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-1.5 h-3 border rounded-[1px] transition-all duration-300 ${
              isActive ? "bg-white/90 border-transparent" : "border-white/40"
            }`}
          />
        ))}
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Simple Four Card Spread.
      1. **Situation:** Insight into the current deal/relationship.
      2. **Cons (Against):** Obstacles, challenges, or what is hindering you.
      3. **Pro (Helpful):** Benefits, positive influences, or what is helping you.
      4. **Answer:** The outcome of the query based on these factors.
    `,
    defaultQuestions: [
      "What do I need to know about my new love affair?",
      "未来三个月我的新恋情会如何发展?",
      "What do I need to know about my financial situation?",
      "What can I do to gain more meaning in my life?",
    ],
  },
  FIVE: {
    id: "FIVE",
    name: "Five Card Spread",
    description:
      "Hidden Influences. 此牌阵的特色在于中间的“Hidden”牌，揭示了潜意识中你未察觉的驱动力，并提供具体建议。",
    cardCount: 5,
    layoutType: "flex",
    labels: ["Past", "Present", "Hidden", "Advice", "Outcome"],
    cardSize: {
      mobile: "w-20 aspect-[300/519]",
      desktop: "w-32 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5 items-end">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-1.5 border rounded-[1px] transition-all duration-300 ${
              isActive ? "bg-white/90 border-transparent" : "border-white/40"
            } ${i === 2 ? "h-2.5" : "h-3"}`}
          />
        ))}
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Five Card Spread.
      1. **Past:** Emotional/Intellectual shaping.
      2. **Present:** Significant current psychological influence.
      3. **What's Hidden:** Unconscious driving forces or unknown aspects (Crucial Card).
      4. **Advice:** Action required to turn life around or capitalize on the hidden aspect.
      5. **Outcome:** Likely possibility dependent on following the advice.
    `,
    defaultQuestions: [
      "What do I need to know about my current situation?",
      "这件事背后有什么我没看到的隐性影响?",
      "我应该采取什么行动来改善现状?",
    ],
  },
  TIMELINE: {
    id: "TIMELINE",
    name: "Timeline Spread",
    description:
      "Chronological Progression. 五张牌代表五个连续的时间节点（如未来5天、5周或5个月）。\n适合查看事情随时间的演变趋势。",
    cardCount: 5,
    layoutType: "flex",
    labels: ["Time 1", "Time 2", "Time 3", "Time 4", "Time 5"],
    cardSize: {
      mobile: "w-20 aspect-[300/519]",
      desktop: "w-32 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5 items-center justify-center">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-1 h-3 border rounded-[1px] transition-all duration-300 ${
              isActive ? "bg-white/90 border-transparent" : "border-white/40"
            } ${isActive ? "ml-0.5" : ""}`}
          />
        ))}
        <div
          className={`absolute w-full h-[1px] bg-white/20 top-1/2 left-0 -z-10`}
        />
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Timeline Spread. Each card represents a sequential unit of time (Day 1, Day 2... or Month 1, Month 2...). Read them as a story of progression, looking for peaks, dips, and the final culmination.",
    defaultQuestions: [
      "What should I be aware of over the next 5 days?",
      "未来五个月我的工作情况会如何变化?",
      "What can I expect during the next five meetings?",
    ],
  },
  DIMENSION: {
    id: "DIMENSION",
    name: "Five Dimensions",
    description:
      "Life Audit. 全面扫描生活的五个维度。\n特色：必须将牌分为五组（圣杯、钱币、宝剑、权杖、大阿卡纳）分别抽取，对应情感、财务、思维、事业和灵性。",
    cardCount: 5,
    layoutType: "flex",
    labels: [
      "Romance (Cups)",
      "Finances (Pents)",
      "Mental (Swords)",
      "Career (Wands)",
      "Spiritual (Major)",
    ],
    cardPools: [
      "SUIT_CUPS",
      "SUIT_PENTACLES",
      "SUIT_SWORDS",
      "SUIT_WANDS",
      "MAJOR",
    ],
    cardSize: {
      mobile: "w-20 aspect-[300/519]",
      desktop: "w-32 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="relative w-6 h-6">
        {[0, 1, 2, 3, 4].map((i) => {
          const angle = i * 72;
          return (
            <div
              key={i}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-2 border rounded-[1px] transition-all duration-300 ${
                isActive ? "bg-white/90 border-transparent" : "border-white/40"
              }`}
              style={{
                transform: `rotate(${angle}deg) translateY(-8px)`,
              }}
            />
          );
        })}
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Mister Tarot's Five Dimensions.
      1. **Relationships (Cups):** Emotional health and heart matters.
      2. **Finances (Pentacles):** Concept of prosperity/poverty and assets.
      3. **Mental (Swords):** Decision making and clarity of thought.
      4. **Career (Wands):** Work effectiveness and energy.
      5. **Spiritual (Major Arcana):** Spiritual progress and higher self guidance.
    `,
    defaultQuestions: [
      "What should I be aware of about my life during the next month?",
      "我下个月的生活重心应该放在哪里?",
      "全面扫描我目前的能量状态。",
    ],
  },
  CELTIC: {
    id: "CELTIC",
    name: "Celtic Cross",
    description:
      "Mister Tarot's Variation. 经典的凯尔特十字变体。\n此版本调整了部分位置含义：顶部代表过去，左侧代表现在，底部代表近期未来，右侧代表远期未来。",
    cardCount: 10,
    layoutType: "absolute",
    positions: [
      // The Cross (Mister Tarot Geometry)
      { x: 35, y: 50, label: "1. Issue", zIndex: 10 },
      { x: 35, y: 50, label: "2. Obstacle", rotation: 90, zIndex: 20 },
      // Geometry based on Page 17 Diagram
      { x: 35, y: 20, label: "3. Past" }, // Top
      { x: 10, y: 50, label: "4. Present" }, // Left
      { x: 35, y: 80, label: "5. Near Future" }, // Bottom
      { x: 60, y: 50, label: "6. Far Future" }, // Right
      // The Staff
      { x: 85, y: 85, label: "7. Yourself" },
      { x: 85, y: 65, label: "8. Environment" },
      { x: 85, y: 45, label: "9. Hopes/Fears" },
      { x: 85, y: 25, label: "10. Outcome" },
    ],
    cardSize: {
      mobile: "w-12 aspect-[300/519]",
      desktop: "w-16 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-1 items-center">
        <div className="relative w-4 h-4">
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-3 rounded-[0.5px] ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
          />
          <div
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1 rounded-[0.5px] ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
          />
        </div>
        <div className="flex flex-col gap-px">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-[0.5px] ${
                isActive ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Mister Tarot's Celtic Cross (Modified).
      1. **Issue:** The main topic.
      2. **Obstacle:** What blocks you (crossing card).
      3. **Past:** Immediate past (Top position).
      4. **Present:** Current circumstances (Left position).
      5. **Near Future:** Middle of time frame (Bottom position).
      6. **Far Future:** End of time frame (Right position).
      7-10 follow standard Staff positions (Self, Environment, Hopes/Fears, Outcome).
    `,
    defaultQuestions: [
      "What should I be aware of regarding [complex situation]?",
      "我未来一年的职业发展全貌是怎样的?",
      "What is the outcome of my current path?",
    ],
  },
  RELATIONSHIP: {
    id: "RELATIONSHIP",
    name: "Relationship Spread",
    description:
      "You · Them · Us. 深入探索双方的潜意识、阻碍与优势。\n左列代表你，右列代表对方，中列代表关系本身的过去、未来与结果。",
    cardCount: 11,
    layoutType: "absolute",
    positions: [
      // Left Column (You)
      { x: 20, y: 80, label: "1. You Now" },
      { x: 20, y: 60, label: "2. Your Weakness" },
      { x: 20, y: 40, label: "3. Your Strength" },
      { x: 20, y: 20, label: "4. Your View" },

      // Right Column (Them)
      { x: 80, y: 80, label: "5. Them Now" },
      { x: 80, y: 60, label: "6. Their Weakness" },
      { x: 80, y: 40, label: "7. Their Strength" },
      { x: 80, y: 20, label: "8. Their View" },

      // Center Column (Relationship)
      { x: 50, y: 60, label: "9. Relationship Now" },
      { x: 50, y: 40, label: "10. Near Future" },
      { x: 50, y: 20, label: "11. Outcome" },
    ],
    cardSize: {
      mobile: "w-14 aspect-[300/519]",
      desktop: "w-20 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5 justify-center items-end h-5">
        <div className="flex flex-col gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-0.5 h-1 rounded-[0.5px] ${
                isActive ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-0.5 justify-center pb-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-0.5 h-1 rounded-[0.5px] ${
                isActive ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-col gap-0.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-0.5 h-1 rounded-[0.5px] ${
                isActive ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Relationship Spread. Compare parallel cards (e.g. Your View vs Their View). Weakness cards show hindrances; Strength cards show nurturing qualities. The Center column shows the entity of the relationship itself.",
    defaultQuestions: [
      "What should we be aware of regarding our relationship?",
      "对方目前对这段关系最真实的看法是什么?",
      "我们未来的关系走向如何?",
    ],
  },
  COURT: {
    id: "COURT",
    name: "Court Card Behavior",
    description:
      "Psychological Mirror. 探索你在特定情境下的行为模式。\n结构：当[小阿卡纳]情况发生时，我变成了[宫廷牌]的人格，因为[大阿卡纳]的原因。",
    cardCount: 3,
    layoutType: "flex",
    labels: ["Situation (Pip)", "Persona (Court)", "Cause (Major)"],
    cardPools: ["MINOR_PIP", "COURT", "MAJOR"],
    cardSize: {
      mobile: "w-24 aspect-[300/519]",
      desktop: "w-36 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex gap-1 items-end">
        <div
          className={`w-1 h-2  transition-all duration-300 ${
            isActive ? "bg-white/90" : "bg-white/30"
          }`}
        />
        <div
          className={`w-1 h-2.5 transition-all duration-300 ${
            isActive ? "bg-white/90" : "bg-white/30"
          }`}
        />
        <div
          className={`w-1 h-3 transition-all duration-300 ${
            isActive ? "bg-white/90" : "bg-white/30"
          }`}
        />
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Court Card Behavior. Format: 'When [Card 1 Situation] arises, I become [Card 2 Persona] because of [Card 3 Cause].' Focus on the psychological shift.",
    defaultQuestions: [
      "Tell me about the way I deal with situations in daily life.",
      "我在面对压力时会变成什么样?",
      "为什么我在这种情况下会这样反应?",
    ],
  },
  ACTION_PLAN: {
    id: "ACTION_PLAN",
    name: "Action Plan",
    description:
      "Yearly Strategy. 针对未来12个月的行动计划。\n每张牌代表一个季度（3个月）的行动重心与建议。",
    cardCount: 4,
    layoutType: "flex",
    labels: [
      "Q1 (Month 1-3)",
      "Q2 (Month 4-6)",
      "Q3 (Month 7-9)",
      "Q4 (Month 10-12)",
    ],
    cardSize: {
      mobile: "w-24 aspect-[300/519]",
      desktop: "w-36 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="grid grid-cols-2 gap-0.5 w-4 h-5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-[1px] transition-all duration-300 ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Action Plan. Each card covers a 3-month period. Interpret as specific advice/actions to take during that quarter to achieve your yearly goal.",
    defaultQuestions: [
      "未来一年我该如何达成我的目标?",
      "What is my action plan for the next 12 months?",
    ],
  },
  KICKING_GOALS: {
    id: "KICKING_GOALS",
    name: "Kicking Goals",
    description:
      "Goal Achievement. 深入分析实现目标过程中的心理与行动要素。\n包括：专注点、隐藏因素、行动、挑战、助力、灵感与结果。",
    cardCount: 7,
    layoutType: "absolute",
    positions: [
      // Column 1
      { x: 20, y: 25, label: "1. Focus", labelPosition: "top" },
      { x: 20, y: 55, label: "2. Hidden", labelPosition: "bottom" },
      // Column 2
      { x: 50, y: 25, label: "3. Action", labelPosition: "top" },
      { x: 50, y: 55, label: "4. Challenge", labelPosition: "bottom" },
      // Column 3
      { x: 80, y: 25, label: "5. Helpful", labelPosition: "top" },
      { x: 80, y: 55, label: "6. Inspiration", labelPosition: "bottom" },
      // Footer
      { x: 50, y: 85, label: "7. Outcome", labelPosition: "bottom" },
    ],
    cardSize: {
      mobile: "w-14 aspect-[300/519]",
      desktop: "w-20 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="flex flex-col items-center gap-0.5 w-5">
        <div className="flex justify-between w-full">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-1 h-1.5 rounded-[0.5px] ${
                isActive ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between w-full">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-1 h-1.5 rounded-[0.5px] ${
                isActive ? "bg-white/90" : "bg-white/30"
              }`}
            />
          ))}
        </div>
        <div
          className={`w-1 h-1.5 rounded-[0.5px] ${
            isActive ? "bg-white/90" : "bg-white/30"
          }`}
        />
      </div>
    ),
    interpretationInstruction: `
    Spread Type: Kicking Goals. Focus on Card 2 (Hidden) and Card 6 (Inspiration) as the internal drivers. Card 3 and 4 are the external friction. Card 7 is the result after one year.
      1. **The Focus:** Present level of focus.
      2. **What is Hidden:** Self-knowledge needed (Unconscious drivers).
      3. **The Action:** What to do to stay true to goal.
      4. **The Challenge:** What to avoid.
      5. **The Helpful Influence:** Decision making aid.
      6. **The Inspiration:** Motivation source.
      7. **The Outcome:** Expected result after one year.
    `,
    defaultQuestions: [
      "What do I need to know to achieve my goal?",
      "我如何才能建立成功的副业?",
    ],
  },
  YEARLY: {
    id: "YEARLY",
    name: "Yearly Wheel",
    description:
      "12 Month Forecast. 环形牌阵，预测未来一年的逐月运势。\n中间三张牌分别代表：年度趋势、挑战与助力。",
    cardCount: 15,
    layoutType: "absolute",
    positions: [
      // Center
      { x: 50, y: 50, label: "Trend" },
      { x: 35, y: 50, label: "Challenge" },
      { x: 65, y: 50, label: "Helpful" },
      // Clockwise from Top (Jan/Month 1)
      { x: 50, y: 15, label: "Month 1" },
      { x: 67, y: 20, label: "Month 2" },
      { x: 80, y: 35, label: "Month 3" },
      { x: 85, y: 50, label: "Month 4" },
      { x: 80, y: 65, label: "Month 5" },
      { x: 67, y: 80, label: "Month 6" },
      { x: 50, y: 85, label: "Month 7" },
      { x: 33, y: 80, label: "Month 8" },
      { x: 20, y: 65, label: "Month 9" },
      { x: 15, y: 50, label: "Month 10" },
      { x: 20, y: 35, label: "Month 11" },
      { x: 33, y: 20, label: "Month 12" },
    ],
    cardSize: {
      mobile: "w-8 aspect-[300/519]",
      desktop: "w-12 aspect-[300/519]",
    },
    icon: (isActive) => (
      <div className="relative w-6 h-6 rounded-full border border-white/20">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-1 flex gap-px`}
        >
          <div
            className={`w-0.5 h-full ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
          />
          <div
            className={`w-0.5 h-full ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
          />
          <div
            className={`w-0.5 h-full ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
          />
        </div>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 rounded-full ${
              isActive ? "bg-white/90" : "bg-white/30"
            }`}
            style={{
              top: "50%",
              left: "50%",
              transform: `rotate(${
                i * 45
              }deg) translate(8px) translate(-50%, -50%)`,
            }}
          />
        ))}
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Yearly Wheel. Center 3 cards set the theme. Outer ring is the monthly progression. Look for patterns in suits across the months to see seasonal energy shifts.",
    defaultQuestions: [
      "我的年度运势如何?",
      "What does the year ahead hold for me?",
    ],
  },
};
