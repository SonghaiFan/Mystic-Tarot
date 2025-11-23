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
      "我该如何让生活更有意义？",
    ],
  },
  CELTIC: {
    id: "CELTIC",
    name: "Celtic Cross Insight",
    description: "Celtic Cross：10 张牌深入剖析复杂议题、阻力与潜在 Outcome。",
    cardCount: 10,
    layoutType: "absolute",
    cardSize: {
      mobile: "w-24 h-36",
      desktop: "w-28 h-44",
    },
    positions: [
      { x: 35, y: 50, label: "The Issue", labelPosition: "top", zIndex: 5 },
      {
        x: 35,
        y: 50,
        label: "The Obstacle",
        rotation: 90,
        labelPosition: "bottom",
        zIndex: 10,
      },
      { x: 35, y: 10, label: "The Past", labelPosition: "bottom", zIndex: 5 },
      {
        x: 15,
        y: 50,
        label: "The Present",
        labelPosition: "bottom",
        zIndex: 5,
      },
      {
        x: 35,
        y: 85,
        label: "The Near Future",
        labelPosition: "bottom",
        zIndex: 5,
      },
      {
        x: 55,
        y: 50,
        label: "The Far Future",
        labelPosition: "bottom",
        zIndex: 5,
      },
      { x: 80, y: 85, label: "Yourself", labelPosition: "right", zIndex: 5 },
      {
        x: 80,
        y: 60,
        label: "The Environment",
        labelPosition: "right",
        zIndex: 5,
      },
      {
        x: 80,
        y: 35,
        label: "Hopes or Fears",
        labelPosition: "right",
        zIndex: 5,
      },
      { x: 80, y: 10, label: "The Outcome", labelPosition: "right", zIndex: 5 },
    ],
    icon: (isActive) => (
      <div className="relative w-6 h-6">
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-6 border rounded-[1px] ${
            isActive ? "bg-white/80 border-transparent" : "border-white/30"
          }`}
        />
        <div
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-6 border rounded-[1px] rotate-90 ${
            isActive ? "bg-white/80 border-transparent" : "border-white/30"
          }`}
        />
      </div>
    ),
    interpretationInstruction: `
      Spread Type: Celtic Cross (10 Cards). 
      This is a deep, comprehensive reading. You must synthesize the cards using the following structure:
      
      1. **The Heart (Card 1) & The Challenge (Card 2):** This is the core conflict. Analyze how the challenge blocks or enhances the heart.
      2. **The Foundation (Card 3) & The Past (Card 4):** These are the roots. How do subconscious drives (3) and past events (4) shape the present?
      3. **The Crown (Card 5) & The Future (Card 6):** These are the possibilities. Contrast the conscious goal (5) with the likely near future (6).
      4. **The Staff (Cards 7-10):**
         - **Self (7):** The seeker's internal attitude.
         - **Environment (8):** External influences or how others see the situation.
         - **Hopes/Fears (9):** Psychological drivers.
         - **Outcome (10):** The final result if the current path continues.
      
      **Synthesis:** Do not just read card by card. Look for patterns (e.g., many Major Arcana = destiny, many Cups = emotion). Connect the "Outcome" back to the "Heart" to see if the issue is resolved.
      `,
    defaultQuestions: [
      "我该如何突破目前的职业瓶颈？",
      "我该如何改善与某人的关系？",
      "我的人生使命是什么？",
      "这件事的深层原因和最终结果是什么？",
    ],
  },
};
