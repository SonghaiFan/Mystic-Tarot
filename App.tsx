import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { GameState, TarotCard, SpreadType, PickedCard } from "./types";
import {
  MAJOR_ARCANA,
  FULL_DECK,
  STATIC_SCRIPTS,
  getCardImageUrl,
  getCardImageFallbackUrl,
} from "./constants";
import { SPREADS } from "./constants/spreads";
import { generateTarotReading, generateSpeech } from "./services/gemini";
import CosmicParticles from "./components/CosmicParticles";
import HeaderBar from "./components/HeaderBar";
import IntroSection from "./components/IntroSection";
import InputSection from "./components/InputSection";
import ShufflingSection from "./components/ShufflingSection";
import PickingSection from "./components/PickingSection";
import ReadingSection from "./components/ReadingSection";

// --- Configuration ---
const BACKGROUND_VOLUME = 0.06;

// --- Ambient Sound Engine ---
class SoundEngine {
  private ctx: AudioContext;
  private audioElement: HTMLAudioElement | null = null;
  private source: MediaElementAudioSourceNode | null = null;
  private gain: GainNode | null = null;

  constructor(ctx: AudioContext) {
    this.ctx = ctx;
  }

  async startDrone() {
    if (this.audioElement) return; // Already playing

    try {
      // Create audio element for background music
      this.audioElement = new Audio("/audio/background.mp3");
      this.audioElement.loop = true;

      // Create Web Audio nodes
      this.source = this.ctx.createMediaElementSource(this.audioElement);
      this.gain = this.ctx.createGain();

      this.gain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.source.connect(this.gain);
      this.gain.connect(this.ctx.destination);

      // Start playing
      await this.audioElement.play();

      // Fade in over 5 seconds
      this.gain.gain.linearRampToValueAtTime(
        BACKGROUND_VOLUME,
        this.ctx.currentTime + 5
      );

      console.log("Background music started");
    } catch (error) {
      console.error("Background music playback failed:", error);
    }
  }

  stop() {
    if (!this.gain || !this.audioElement) return;

    const t = this.ctx.currentTime;
    // Fade out over 2 seconds
    this.gain.gain.linearRampToValueAtTime(0.001, t + 2);

    setTimeout(() => {
      this.audioElement?.pause();
      this.audioElement = null;
      this.source = null;
      this.gain = null;
    }, 2000);
  }
}

const App: React.FC = () => {
  // --- State ---
  const [gameState, setGameState] = useState<GameState>(GameState.INTRO);

  // Input State
  const [question, setQuestion] = useState("");
  const [spread, setSpread] = useState<SpreadType>("SINGLE");
  const [includeMinor, setIncludeMinor] = useState(false); // Toggle for Minor Arcana in 3-card spread

  // Game Data
  const [pickedCards, setPickedCards] = useState<PickedCard[]>([]);
  const [readingText, setReadingText] = useState<string>("");
  const [readingAudioBuffer, setReadingAudioBuffer] =
    useState<AudioBuffer | null>(null);

  // System State
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null);
  const [thinkingKeywordIndex, setThinkingKeywordIndex] = useState(0);

  // --- Refs ---
  const audioContextRef = useRef<AudioContext | null>(null);
  const soundEngineRef = useRef<SoundEngine | null>(null);
  const audioCacheRef = useRef<Map<string, AudioBuffer>>(new Map());
  const voiceSourceRef = useRef<AudioBufferSourceNode | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isThinking) return;
    const interval = setInterval(() => {
      setThinkingKeywordIndex((prev) => prev + 1);
    }, 1500);
    return () => clearInterval(interval);
  }, [isThinking]);

  // --- Computed Deck ---
  const activeDeck = useMemo(() => {
    if (spread === "SINGLE") {
      return MAJOR_ARCANA;
    }
    if (spread === "THREE") {
      return includeMinor ? FULL_DECK : MAJOR_ARCANA;
    }
    return FULL_DECK;
  }, [spread, includeMinor]);

  // --- Audio Initialization ---
  const initAudio = useCallback(() => {
    if (!audioContextRef.current) {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioContextRef.current = ctx;
      soundEngineRef.current = new SoundEngine(ctx);
      console.log("AudioContext created");
    }
    if (audioContextRef.current.state === "suspended") {
      audioContextRef.current.resume().then(() => {
        console.log("AudioContext resumed");
      });
    }
  }, []);

  // --- Playback Logic ---

  const playBuffer = useCallback((buffer: AudioBuffer) => {
    if (!audioContextRef.current) return;

    // Stop previous voice if any
    if (voiceSourceRef.current) {
      try {
        voiceSourceRef.current.stop();
      } catch (e) {}
    }

    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;

    // Voice Gain (louder than drone)
    const gainNode = audioContextRef.current.createGain();
    gainNode.gain.value = 1.0;

    source.connect(gainNode);
    gainNode.connect(audioContextRef.current.destination);

    voiceSourceRef.current = source;
    setIsAudioPlaying(true);
    source.start();
    source.onended = () => setIsAudioPlaying(false);
  }, []);

  const playVoice = useCallback(
    async (
      text: string,
      cacheKey?: string,
      staticKey?: string
    ): Promise<void> => {
      if (!audioContextRef.current) return;

      // 1. Check Cache
      if (cacheKey && audioCacheRef.current.has(cacheKey)) {
        playBuffer(audioCacheRef.current.get(cacheKey)!);
        return;
      }

      // 2. Generate with Gemini (will try local first if staticKey provided)
      try {
        const buffer = await generateSpeech(
          text,
          audioContextRef.current,
          staticKey
        );
        if (buffer) {
          if (cacheKey) audioCacheRef.current.set(cacheKey, buffer);
          playBuffer(buffer);
        } else {
          // Silence on error/timeout (No Fallback)
          console.warn("TTS unavailable. Staying silent.");
        }
      } catch (err) {
        console.error("Voice generation exception", err);
      }
    },
    [playBuffer]
  );

  // Prefetch static scripts silently (tries local first, then Gemini)
  const prefetchStaticAudio = useCallback(async () => {
    if (!audioContextRef.current) return;
    const scripts = [
      { k: "ASK", t: STATIC_SCRIPTS.ASK },
      { k: "SHUFFLE", t: STATIC_SCRIPTS.SHUFFLE },
      { k: "PICK", t: STATIC_SCRIPTS.PICK },
      { k: "REVEAL", t: STATIC_SCRIPTS.REVEAL },
    ];
    for (const s of scripts) {
      if (!audioCacheRef.current.has(s.k)) {
        generateSpeech(s.t, audioContextRef.current, s.k.toLowerCase())
          .then((buf) => {
            if (buf) audioCacheRef.current.set(s.k, buf);
          })
          .catch(() => {
            /* Ignore prefetch errors */
          });
      }
    }
  }, []);

  // --- Flow Handlers ---

  const enterInputPhase = async () => {
    initAudio();

    // Wait a bit for AudioContext to be ready
    await new Promise((resolve) => setTimeout(resolve, 100));

    soundEngineRef.current?.startDrone();
    setGameState(GameState.INPUT);
    prefetchStaticAudio();

    // Play WELCOME first, then ASK after a delay
    await playVoice(STATIC_SCRIPTS.WELCOME, "WELCOME", "welcome");
    setTimeout(() => playVoice(STATIC_SCRIPTS.ASK, "ASK", "ask"), 1500);
  };

  const startRitual = async () => {
    setGameState(GameState.SHUFFLING);
    setPickedCards([]);
    await playVoice(STATIC_SCRIPTS.SHUFFLE, "SHUFFLE", "shuffle");

    // Auto advance after shuffle (5s)
    setTimeout(() => {
      setGameState(GameState.PICKING);
      playVoice(STATIC_SCRIPTS.PICK, "PICK", "pick");
    }, 5000);
  };

  const handleCardSelect = async (card: TarotCard) => {
    if (isThinking || gameState !== GameState.PICKING) return;

    const requiredCards = SPREADS[spread].cardCount;
    if (pickedCards.length >= requiredCards) return;

    // Prevent picking duplicate cards
    if (pickedCards.some((c) => c.id === card.id)) return;

    // Determine Upright vs Reversed (50% chance of reversal now)
    const isReversed = Math.random() > 0.5;

    const newPicked: PickedCard[] = [...pickedCards, { ...card, isReversed }];
    setPickedCards(newPicked);

    // If we have all cards, proceed to reveal
    if (newPicked.length === requiredCards) {
      // Short delay to let the pick animation play
      setTimeout(() => startRevealProcess(newPicked), 1000);
    }
  };

  const startRevealProcess = async (finalCards: PickedCard[]) => {
    // Transition to Reading state immediately so user can flip cards
    setGameState(GameState.READING);
    playVoice(STATIC_SCRIPTS.REVEAL, "REVEAL", "reveal");

    // Start Thinking Process (for the text generation)
    setThinkingKeywordIndex(0);
    setIsThinking(true);

    // 1. Get Text Reading
    const text = await generateTarotReading(finalCards, spread, question);
    setReadingText(text);

    // 2. Get Audio for Reading (Wait for this before showing text)
    let audioBuffer = null;
    if (audioContextRef.current) {
      // Try Gemini TTS
      audioBuffer = await generateSpeech(text, audioContextRef.current);
    }

    // Save audio buffer for replay
    setReadingAudioBuffer(audioBuffer);

    // Stop thinking state
    setIsThinking(false);

    if (audioBuffer) {
      playBuffer(audioBuffer);
    }
    // If audioBuffer is null, we just show the text silently
  };

  const resetRitual = () => {
    if (voiceSourceRef.current) {
      try {
        voiceSourceRef.current.stop();
      } catch (e) {}
    }
    setGameState(GameState.INPUT);
    setPickedCards([]);
    setReadingText("");
    setReadingAudioBuffer(null);
    setQuestion("");
    // Keep drone playing
    playVoice(STATIC_SCRIPTS.ASK, "ASK", "ask");
  };

  // Replay reading audio
  const replayAudio = () => {
    if (readingAudioBuffer && !isAudioPlaying) {
      playBuffer(readingAudioBuffer);
    }
  };

  // Download reading as image
  const downloadReading = async () => {
    try {
      const { toPng } = await import("html-to-image");

      // 创建一个精美的卡牌解读图片
      const container = document.createElement("div");
      container.style.cssText = `
        position: absolute;
        left: 0;
        top: 0;
        background: #0f0f0f;
        color: #e5e5e5;
        padding: 60px 50px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        width: 1000px;
        box-sizing: border-box;
        z-index: -1;
        opacity: 1;
        pointer-events: none;
      `;

      // 顶部标题
      const headerDiv = document.createElement("div");
      headerDiv.style.cssText = `
        text-align: center;
        margin-bottom: 40px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
        padding-bottom: 30px;
      `;

      const titleDiv = document.createElement("div");
      titleDiv.style.cssText = `
        font-size: 28px;
        letter-spacing: 8px;
        color: #fff;
        margin-bottom: 12px;
        font-weight: 300;
      `;
      titleDiv.textContent = "塔罗解读";

      const subtitleDiv = document.createElement("div");
      subtitleDiv.style.cssText = `
        font-size: 10px;
        letter-spacing: 4px;
        color: #666;
        text-transform: uppercase;
      `;
      subtitleDiv.textContent = "TAROT READING";

      headerDiv.appendChild(titleDiv);
      headerDiv.appendChild(subtitleDiv);
      container.appendChild(headerDiv);

      // 问题部分
      if (question) {
        const questionSection = document.createElement("div");
        questionSection.style.cssText = `
          margin-bottom: 40px;
          text-align: center;
        `;

        const questionLabel = document.createElement("div");
        questionLabel.style.cssText = `
          font-size: 10px;
          letter-spacing: 3px;
          color: #666;
          margin-bottom: 12px;
          text-transform: uppercase;
        `;
        questionLabel.textContent = "Your Question";

        const questionText = document.createElement("div");
        questionText.style.cssText = `
          font-size: 16px;
          color: #b8b8b8;
          line-height: 1.8;
          max-width: 700px;
          margin: 0 auto;
        `;
        questionText.textContent = `"${question}"`;

        questionSection.appendChild(questionLabel);
        questionSection.appendChild(questionText);
        container.appendChild(questionSection);
      }

      // 卡牌区域
      const cardsSection = document.createElement("div");
      cardsSection.style.cssText = `
        margin-bottom: 50px;
      `;

      const cardsLabel = document.createElement("div");
      cardsLabel.style.cssText = `
        font-size: 10px;
        letter-spacing: 3px;
        color: #666;
        margin-bottom: 20px;
        text-align: center;
        text-transform: uppercase;
      `;
      cardsLabel.textContent = SPREADS[spread].name;
      cardsSection.appendChild(cardsLabel);

      const cardsContainer = document.createElement("div");
      cardsContainer.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 30px;
        align-items: flex-start;
        flex-wrap: wrap;
      `;

      pickedCards.forEach((card, index) => {
        const cardDiv = document.createElement("div");
        cardDiv.style.cssText = `
          width: ${spread === "SINGLE" ? "280px" : "200px"};
          text-align: center;
        `;

        // 卡牌图片
        const img = document.createElement("img");
        img.src = getCardImageUrl(card.image);
        img.crossOrigin = "anonymous";
        img.onerror = () => {
          img.src = getCardImageFallbackUrl(card.image);
        };
        img.style.cssText = `
          width: 100%;
          height: auto;
          border: 1px solid rgba(255,255,255,0.15);
          filter: grayscale(100%) contrast(1.2) brightness(0.9);
          margin-bottom: 16px;
        `;

        // 卡牌名称
        const nameDiv = document.createElement("div");
        nameDiv.style.cssText = `
          font-size: 14px;
          color: #e5e5e5;
          letter-spacing: 1px;
          margin-bottom: 6px;
        `;
        nameDiv.textContent = card.nameCn;

        // 英文名和逆位标识
        const enNameDiv = document.createElement("div");
        enNameDiv.style.cssText = `
          font-size: 10px;
          color: #888;
          letter-spacing: 1px;
          margin-bottom: 12px;
        `;
        enNameDiv.textContent = card.isReversed
          ? `${card.nameEn} (Reversed)`
          : card.nameEn;

        // 关键词
        const keywordsDiv = document.createElement("div");
        keywordsDiv.style.cssText = `
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          justify-content: center;
        `;

        card.keywords.slice(0, 4).forEach((keyword) => {
          const keywordSpan = document.createElement("span");
          keywordSpan.style.cssText = `
            font-size: 9px;
            color: #999;
            padding: 4px 8px;
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.03);
            letter-spacing: 1px;
          `;
          keywordSpan.textContent = keyword;
          keywordsDiv.appendChild(keywordSpan);
        });

        cardDiv.appendChild(img);
        cardDiv.appendChild(nameDiv);
        cardDiv.appendChild(enNameDiv);
        cardDiv.appendChild(keywordsDiv);
        cardsContainer.appendChild(cardDiv);
      });

      cardsSection.appendChild(cardsContainer);
      container.appendChild(cardsSection);

      // 解读内容部分
      const readingSection = document.createElement("div");
      readingSection.style.cssText = `
        margin-top: 50px;
        padding-top: 40px;
        border-top: 1px solid rgba(255,255,255,0.1);
      `;

      const readingLabel = document.createElement("div");
      readingLabel.style.cssText = `
        font-size: 10px;
        letter-spacing: 3px;
        color: #666;
        margin-bottom: 20px;
        text-align: center;
        text-transform: uppercase;
      `;
      readingLabel.textContent = "Interpretation";

      const textDiv = document.createElement("div");
      textDiv.style.cssText = `
        font-size: 16px;
        line-height: 2.2;
        color: #d0d0d0;
        text-align: justify;
        max-width: 850px;
        margin: 0 auto;
        font-weight: 300;
        text-indent: 2em;
      `;
      textDiv.textContent = readingText;

      readingSection.appendChild(readingLabel);
      readingSection.appendChild(textDiv);
      container.appendChild(readingSection);

      // 底部时间戳
      const footerDiv = document.createElement("div");
      footerDiv.style.cssText = `
        margin-top: 50px;
        text-align: center;
        font-size: 9px;
        color: #444;
        letter-spacing: 2px;
      `;
      const now = new Date();
      footerDiv.textContent = now.toLocaleString("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      container.appendChild(footerDiv);

      document.body.appendChild(container);

      // 等待图片加载
      const images = container.querySelectorAll("img");
      await Promise.all(
        Array.from(images).map(
          (img) =>
            new Promise((resolve) => {
              if (img.complete) resolve(null);
              else {
                img.onload = () => resolve(null);
                img.onerror = () => resolve(null);
              }
            })
        )
      );

      // 等待一小段时间确保渲染完成
      await new Promise((resolve) => setTimeout(resolve, 300));

      // 生成图片
      const dataUrl = await toPng(container, {
        quality: 0.95,
        pixelRatio: 2,
        backgroundColor: "#0a0a0a",
        cacheBust: true,
        style: {
          transform: "scale(1)",
          transformOrigin: "top left",
        },
      });

      // 清理
      document.body.removeChild(container);

      // 下载
      const link = document.createElement("a");
      link.download = `tarot-reading-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("下载失败:", error);
    }
  };

  // --- Render Helpers ---

  // Dynamic Background Opacity: High in Intro, Low otherwise

  // Dynamic Background Opacity: High in Intro, Low otherwise
  const bgOpacity = gameState === GameState.INTRO ? 0.9 : 0.3;

  const renderPhase = () => {
    switch (gameState) {
      case GameState.INTRO:
        return <IntroSection onEnter={enterInputPhase} />;
      case GameState.INPUT:
        return (
          <InputSection
            question={question}
            spread={spread}
            includeMinor={includeMinor}
            onQuestionChange={setQuestion}
            onSpreadChange={setSpread}
            onToggleMinor={() => setIncludeMinor((prev) => !prev)}
            onStartRitual={startRitual}
          />
        );
      case GameState.SHUFFLING:
        return <ShufflingSection />;
      case GameState.PICKING:
        return (
          <PickingSection
            spread={spread}
            activeDeck={activeDeck}
            pickedCards={pickedCards}
            isMobile={isMobile}
            onCardSelect={handleCardSelect}
          />
        );
      case GameState.REVEAL:
      case GameState.READING:
        if (!pickedCards.length) return null;
        return (
          <ReadingSection
            spread={spread}
            isMobile={isMobile}
            pickedCards={pickedCards}
            hoveredCardId={hoveredCardId}
            onCardHover={setHoveredCardId}
            isThinking={isThinking}
            thinkingKeywordIndex={thinkingKeywordIndex}
            question={question}
            readingText={readingText}
            readingAudioBuffer={readingAudioBuffer}
            isAudioPlaying={isAudioPlaying}
            onReplayAudio={replayAudio}
            onDownload={downloadReading}
            onReset={resetRitual}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black text-neutral-200 font-serif select-none cursor-default overflow-hidden">
      {/* Cosmic Particle Background (Persistent) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: bgOpacity }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <CosmicParticles />
      </motion.div>

      {/* Header */}
      <HeaderBar isAudioPlaying={isAudioPlaying} />

      {/* Main Content Area - No Scroll */}
      <main
        className={`absolute inset-0 z-10 perspective-1000 ${
          gameState === GameState.READING || gameState === GameState.REVEAL
            ? "overflow-y-auto"
            : "overflow-hidden"
        }`}
      >
        {/* Inner Container - Full Height Centered */}
        <div
          className={`w-full flex flex-col items-center px-4 ${
            gameState === GameState.READING || gameState === GameState.REVEAL
              ? "min-h-full py-12 justify-start"
              : "h-full justify-center py-24"
          }`}
        >
          <AnimatePresence mode="popLayout">{renderPhase()}</AnimatePresence>
        </div>
      </main>

      {/* Creator Credit */}
      <div className="fixed bottom-4 right-6 z-50 text-[9px] text-neutral-600 font-sans tracking-widest opacity-50 select-none pointer-events-none mix-blend-difference">
        Created by 范松海frank
      </div>
    </div>
  );
};

export default App;
