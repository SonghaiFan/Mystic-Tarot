import React from "react";
import { SpreadType } from "../types";

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
    name: "One Card Oracle",
    description: "适合日常能量扫描、需要快速方向感或是是/否提问。",
    cardCount: 1,
    layoutType: "flex",
    labels: ["Insight"],
    cardSize: {
      mobile: "w-64 h-96",
      desktop: "w-80 h-[480px]",
    },
    icon: (isActive) => (
      <div
        className={`w-4 h-6 border rounded-[1px] ${
          isActive ? "bg-white/80 border-transparent" : "border-white/30"
        }`}
      />
    ),
    interpretationInstruction:
      "Spread Type: Single Card Oracle (Direct Guidance). Focus entirely on the essence of this single card.",
    defaultQuestions: [
      "我如何从目前的状况中获益？",
      "今天采取什么样的态度最有用？",
      "我能从这个问题中学到什么？",
      "处理这种情况的最佳方式是什么？",
    ],
  },
  THREE: {
    id: "THREE",
    name: "Past · Present · Future",
    description: "Past · Present · Future：梳理事件的起因、现状与走向。",
    cardCount: 3,
    layoutType: "flex",
    labels: ["Past", "Present", "Future"],
    cardSize: {
      mobile: "w-28 h-44",
      desktop: "w-56 h-80",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5">
        <div
          className={`w-3 h-5 border rounded-[1px] translate-y-1 ${
            isActive ? "bg-white/40 border-transparent" : "border-white/30"
          }`}
        />
        <div
          className={`w-3 h-5 border rounded-[1px] -translate-y-1 z-10 ${
            isActive ? "bg-white/90 border-transparent" : "border-white/50"
          }`}
        />
        <div
          className={`w-3 h-5 border rounded-[1px] translate-y-1 ${
            isActive ? "bg-white/40 border-transparent" : "border-white/30"
          }`}
        />
      </div>
    ),
    interpretationInstruction:
      "Spread Type: Three Card Spread (Past / Present / Future). Use this time flow to structure your answer.",
    defaultQuestions: [
      "这段关系的发展趋势是怎样的？",
      "这个周末我的健康状况如何？",
      "下个月我的财务状况需要注意什么？",
      "这一周我的工作运势如何？",
    ],
  },
  FOUR: {
    id: "FOUR",
    name: "Four Card Clarity",
    description:
      "Situation · Cons · Pro · Answer. 获得对现状、阻碍、助力及结果的清晰指引。",
    cardCount: 4,
    layoutType: "flex",
    labels: ["Situation", "Cons", "Pro", "Answer"],
    cardSize: {
      mobile: "w-24 h-36",
      desktop: "w-36 h-54",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`w-2 h-4 border rounded-[1px] ${
              isActive ? "bg-white/80 border-transparent" : "border-white/30"
            }`}
          />
        ))}
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Four Card Clarity Spread.
      Analyze the cards in this specific sequence:
      1. **The Situation:** Insight into the current situation and the seeker's relationship to the question.
      2. **Cons (Obstacles):** What is working against the seeker? Challenges or hindrances.
      3. **Pro (Helpful Influences):** What is working in the seeker's favor? Positive effects or benefits.
      4. **The Answer (Outcome):** The likely outcome of the query based on current trends.
      
      Synthesize the "Cons" and "Pro" to provide balanced advice on how to navigate from the "Situation" to the best possible "Answer".
    `,
    defaultQuestions: [
      "未来三个月我的新恋情会如何发展？",
      "未来半年我的职业生涯需要注意什么？",
      "未来一年我的财务状况如何？",
      "我在灵性成长方面需要探索什么？",
      "我该如何让生活更有意义？",
    ],
  },
  FIVE: {
    id: "FIVE",
    name: "Five Dimensions",
    description:
      "Romance · Finance · Mental · Career · Spirit. 全面扫描生活的五个核心维度。",
    cardCount: 5,
    layoutType: "flex",
    labels: ["Romance", "Finance", "Mental", "Career", "Spirit"],
    cardSize: {
      mobile: "w-20 h-32",
      desktop: "w-32 h-48",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-1.5 h-3 border rounded-[1px] ${
              isActive ? "bg-white/80 border-transparent" : "border-white/30"
            }`}
          />
        ))}
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Five Dimensions Spread.
      This spread covers five key aspects of life. Analyze each card in its specific domain:
      
      1. **Romance (Heart):** Emotional state, relationships, and matters of the heart.
      2. **Finance (Pentacles):** Financial security, assets, material comfort, and prosperity.
      3. **Mental (Swords):** Mental state, clarity of thought, decision-making ability, and worries.
      4. **Career (Wands):** Work effectiveness, workplace relationships, and career progress.
      5. **Spirit (Yin Yang):** Spiritual connection, personal growth, and alignment with your higher path.
      
      Synthesize these five dimensions to provide a holistic view of the seeker's current life state.
    `,
    defaultQuestions: [
      "下个月我的生活重心应该放在哪里？",
      "我目前的整体能量状态如何？",
      "我在各个生活领域需要注意什么？",
      "如何平衡我的物质生活与精神追求？",
    ],
  },
  FIVE_INSIGHT: {
    id: "FIVE_INSIGHT",
    name: "Five Card Insight",
    description:
      "Past · Present · Hidden · Advice · Outcome. 揭示潜意识影响与未来指引。",
    cardCount: 5,
    layoutType: "flex",
    labels: ["Past", "Present", "Hidden", "Advice", "Outcome"],
    cardSize: {
      mobile: "w-20 h-32",
      desktop: "w-32 h-48",
    },
    icon: (isActive) => (
      <div className="flex gap-0.5 items-end">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`w-1.5 ${i === 2 ? "h-4" : "h-3"} border rounded-[1px] ${
              isActive ? "bg-white/80 border-transparent" : "border-white/30"
            }`}
          />
        ))}
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Five Card Insight Spread.
      This spread reveals the trajectory of a situation, including hidden influences and advice.
      
      1. **Past:** How past issues, origins, or emotional shaping affect the present situation.
      2. **Present:** The significant event or psychological influence currently making the biggest impression.
      3. **What's Hidden:** Unconscious driving forces, unknown aspects, or things hidden from others/self. Can be positive or negative.
      4. **Advice:** Direction for overcoming negative hidden influences or capitalizing on positive ones. Action required.
      5. **Outcome:** The most likely possibility, dependent on acknowledging hidden influences and following the advice.
      
      Focus on the "Hidden" card as the pivot point that connects the current state to the advice and outcome.
    `,
    defaultQuestions: [
      "我该如何处理当前面临的困境？",
      "这件事背后的隐性影响是什么？",
      "我需要采取什么行动来达成目标？",
      "这段关系未来的走向如何？",
    ],
  },
  RELATIONSHIP: {
    id: "RELATIONSHIP",
    name: "Relationship Mirror",
    description: "You · Them · Us. 深度解析双方心态、阻碍与关系走向。",
    cardCount: 11,
    layoutType: "absolute",
    positions: [
      // Left Column (You) - Bottom to Top
      { x: 20, y: 80, label: "You Now", labelPosition: "bottom" },
      { x: 20, y: 60, label: "Your Weakness", labelPosition: "left" },
      { x: 20, y: 40, label: "Your Strength", labelPosition: "left" },
      { x: 20, y: 20, label: "Your View", labelPosition: "top" },

      // Right Column (Them) - Bottom to Top
      { x: 80, y: 80, label: "Them Now", labelPosition: "bottom" },
      { x: 80, y: 60, label: "Their Weakness", labelPosition: "right" },
      { x: 80, y: 40, label: "Their Strength", labelPosition: "right" },
      { x: 80, y: 20, label: "Their View", labelPosition: "top" },

      // Center Column (Relationship) - Bottom to Top
      { x: 50, y: 60, label: "Relationship Present", labelPosition: "bottom" },
      { x: 50, y: 40, label: "Near Future", labelPosition: "right" },
      { x: 50, y: 20, label: "Outcome", labelPosition: "top" },
    ],
    cardSize: {
      mobile: "w-14 h-20",
      desktop: "w-20 h-32",
    },
    icon: (isActive) => (
      <div className="relative w-8 h-5">
        <div
          className={`absolute left-1 bottom-0 w-1 h-5 rounded-[1px] ${
            isActive ? "bg-white/80" : "bg-white/30"
          }`}
        />
        <div
          className={`absolute right-1 bottom-0 w-1 h-5 rounded-[1px] ${
            isActive ? "bg-white/80" : "bg-white/30"
          }`}
        />
        <div
          className={`absolute left-1/2 -translate-x-1/2 bottom-1 w-1 h-3 rounded-[1px] ${
            isActive ? "bg-white/80" : "bg-white/30"
          }`}
        />
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Mister Tarot's Relationship Spread.
      This spread explores the underlying agendas, needs, and desires of two people in a relationship (or potential one).
      
      **Left Column (The Seeker / You):**
      1. **You Now:** Your current state, emotional condition, and readiness.
      2. **Your Weakness:** Distracting influences, personality issues, or blocks (e.g., criticism, neglect).
      3. **Your Strength:** Positive, nurturing qualities you bring (e.g., communication, respect).
      4. **Your View:** Your thoughts and feelings about the partnership.

      **Right Column (The Partner / Them):**
      5. **Them Now:** Their current state and readiness.
      6. **Their Weakness:** Their blocks or negative influences.
      7. **Their Strength:** Their positive contributions.
      8. **Their View:** Their thoughts and feelings about the partnership.

      **Center Column (The Relationship):**
      9. **Relationship Present:** The current stage/energy of the bond itself.
      10. **Near Future:** The next step or development in the relationship.
      11. **Outcome:** The likely result or energy of the partnership by the end of the timeframe.

      Compare parallel cards (e.g., Your View vs. Their View) to find alignment or conflict.
    `,
    defaultQuestions: [
      "我们这段关系的未来走向如何？",
      "对方目前对这段关系的真实想法是什么？",
      "我们需要克服哪些阻碍才能更进一步？",
      "我和他/她之间有发展的可能吗？",
    ],
  },
};
