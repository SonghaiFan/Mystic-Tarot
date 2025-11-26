import {
  Sparkles,
  Library,
  ArrowLeft,
  Maximize2,
  Minimize2,
} from "lucide-react";
import React, { useState } from "react";
import AudioVisualizer from "./AudioVisualizer";
import { GameState } from "../types";

interface HeaderBarProps {
  gameState: GameState;
  isAudioPlaying: boolean;
  onLibraryClick: () => void;
  onHomeClick: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({
  gameState,
  isAudioPlaying,
  onLibraryClick,
  onHomeClick,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
      setIsFullscreen(false);
    }
  };
  const getStateLabel = () => {
    switch (gameState) {
      case GameState.LIBRARY:
        return "牌库";
      case GameState.INPUT:
        return "步骤 1 · 提问与牌阵";
      case GameState.SHUFFLING:
        return "步骤 2 · 洗牌";
      case GameState.PICKING:
        return "步骤 3 · 抽牌";
      case GameState.REVEAL:
      case GameState.READING:
        return "步骤 4 · 解读";
      case GameState.INTRO:
        return "";
      default:
        return "";
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-12 md:h-24 px-6 md:px-8 flex justify-between items-center z-40 pointer-events-none bg-linear-to-b from-black/80 to-transparent">
      {/* Left: Logo / Home */}
      <div className="flex items-center gap-6 pointer-events-auto">
        <button onClick={onHomeClick} className="flex flex-col gap-1 group">
          <div className="flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
            <Sparkles size={14} />
            <h1 className="text-xs font-cinzel tracking-[0.4em] font-bold">
              MYSTIC塔罗
            </h1>
          </div>
          <div className="w-full h-px bg-white/10 group-hover:bg-white/30 transition-colors" />
        </button>

        {/* State Breadcrumb */}
        {gameState !== GameState.INTRO && (
          <div className="hidden md:flex items-center gap-2 text-neutral-500 text-[10px] tracking-widest uppercase animate-in fade-in slide-in-from-left-4">
            <span className="w-px h-4 bg-white/10" />
            <span>{getStateLabel()}</span>
          </div>
        )}
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-6 pointer-events-auto">
        <AudioVisualizer isPlaying={isAudioPlaying} />
        <div className="w-px h-4 bg-white/10 hidden md:block" />
        <button
          onClick={onLibraryClick}
          className={`text-white/50 hover:text-white transition-colors flex items-center gap-2 ${
            gameState === GameState.LIBRARY ? "text-white" : ""
          }`}
          title={
            gameState === GameState.LIBRARY ? "Close Library" : "Open Library"
          }
        >
          {gameState === GameState.LIBRARY ? (
            <ArrowLeft size={16} />
          ) : (
            <Library size={16} />
          )}
          <span className="text-[10px] uppercase tracking-widest hidden md:inline">
            {gameState === GameState.LIBRARY ? "Back" : "Library"}
          </span>
        </button>
        {/* Fullscreen Button */}
        <button
          onClick={handleFullscreen}
          className="text-white/50 hover:text-white transition-colors flex items-center gap-2"
          title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
        >
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          <span className="text-[10px] uppercase tracking-widest hidden md:inline">
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;
