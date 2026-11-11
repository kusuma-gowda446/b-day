import React, { useState } from 'react';
import { Volume2, VolumeX, Music2 } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function FloatingMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    sound.toggleMusic((playing) => {
      setIsPlaying(playing);
    });
  };

  return (
    <div className="fixed top-3 sm:top-4 right-3 sm:right-4 z-50">
      <button
        onClick={handleToggle}
        aria-label="Toggle background music"
        className={`group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-rose-500 text-white shadow-rose-300/40 ring-2 ring-rose-300'
            : 'bg-white/90 text-slate-700 hover:bg-white hover:text-rose-600 shadow-pink-200/50 border border-pink-100'
        } backdrop-blur-md`}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-0.5 h-3">
              <span className="w-1 bg-white rounded-full h-full animate-[bounce_0.8s_ease-in-out_infinite]" />
              <span className="w-1 bg-white rounded-full h-2/3 animate-[bounce_0.6s_ease-in-out_infinite_0.2s]" />
              <span className="w-1 bg-white rounded-full h-full animate-[bounce_0.9s_ease-in-out_infinite_0.4s]" />
            </div>
            <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-medium tracking-wide hidden xs:inline sm:inline">Music</span>
          </>
        ) : (
          <>
            <Music2 className="w-3.5 h-3.5 text-rose-400 group-hover:scale-110 transition-transform" />
            <span className="text-[11px] sm:text-xs font-medium tracking-wide">Music 🎵</span>
          </>
        )}
      </button>
    </div>
  );
}
