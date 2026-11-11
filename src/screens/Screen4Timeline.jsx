import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

export default function Screen4Timeline({ config }) {
  const [activeChapter, setActiveChapter] = useState(0);
  const chapters = config.screen4?.chapters || [];
  const current = chapters[activeChapter] || chapters[0];

  const handleSelectChapter = (idx) => {
    sound.playPop();
    setActiveChapter(idx);
    if (chapters[idx]?.isRasgullaSpecial) {
      triggerRasgullaCelebration();
    }
  };

  const handleNextChapter = () => {
    if (activeChapter < chapters.length - 1) {
      const nextIdx = activeChapter + 1;
      sound.playPop();
      setActiveChapter(nextIdx);
      if (chapters[nextIdx]?.isRasgullaSpecial) {
        triggerRasgullaCelebration();
      }
    }
  };

  const handlePrevChapter = () => {
    if (activeChapter > 0) {
      sound.playPop();
      setActiveChapter(activeChapter - 1);
    }
  };

  const triggerRasgullaCelebration = () => {
    sound.playCelebrationHarp();
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
        colors: ['#f59e0b', '#fbbf24', '#f472b6', '#ffffff']
      });
    } catch (e) {}
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto px-3 sm:px-4 py-2 sm:py-6 w-full">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100/80 text-amber-800 text-xs font-semibold tracking-wider uppercase mb-2"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span>{config.screen4?.tag || "Chapter 3 • Our Real Journey"}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-editorial text-2xl sm:text-4xl md:text-5xl text-slate-800 tracking-tight text-center mb-1"
      >
        {config.screen4?.heading || "Our Story 📖"}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-sans text-xs sm:text-sm text-slate-500 text-center mb-4 max-w-md px-2"
      >
        {config.screen4?.subheading || "From a casual college introduction to an irreplaceable bond."}
      </motion.p>

      {/* Chapter Selector Tabs with smooth horizontal scroll */}
      <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 mb-4 w-full overflow-x-auto pb-2 scrollbar-none px-1">
        {chapters.map((ch, idx) => {
          const isActive = idx === activeChapter;
          return (
            <button
              key={ch.id}
              onClick={() => handleSelectChapter(idx)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                isActive
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-200 ring-2 ring-rose-300 scale-105'
                  : 'bg-white/80 hover:bg-white text-slate-600 border border-pink-100'
              }`}
            >
              <span>{ch.icon}</span>
              <span className="inline sm:inline">{ch.chapterNum}</span>
            </button>
          );
        })}
      </div>

      {/* Active Chapter Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeChapter}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className={`glass-panel p-4 sm:p-7 rounded-3xl border shadow-xl w-full max-w-2xl text-left relative max-h-[50vh] sm:max-h-[58vh] overflow-y-auto ${
            current.isRasgullaSpecial
              ? 'border-amber-300 ring-2 ring-amber-200/60 bg-gradient-to-br from-amber-50/90 via-white to-pink-50/90'
              : 'border-white/90'
          }`}
        >
          {current.isRasgullaSpecial ? (
            <div className="washi-tape-gold" />
          ) : (
            <div className="washi-tape" />
          )}

          {/* Special Rasgulla Banner */}
          {current.isRasgullaSpecial && (
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mb-3 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-amber-200 via-rose-100 to-amber-200 border border-amber-300 text-amber-900 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-sm text-center"
            >
              <span>🍬</span>
              <span className="tracking-wide">⭐ THAT ONE RASGULLA! ⭐</span>
              <span>😂</span>
            </motion.div>
          )}

          {/* Chapter Header */}
          <div className="flex items-center justify-between border-b border-pink-100 pb-2.5 mb-3.5">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl">{current.icon}</span>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
                  {current.chapterNum}
                </span>
                <h3 className="font-serif text-lg sm:text-2xl font-bold text-slate-800 leading-snug">
                  {current.title}
                </h3>
              </div>
            </div>
            <span className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-pink-50 text-pink-700 font-medium whitespace-nowrap">
              {activeChapter + 1} / {chapters.length}
            </span>
          </div>

          {/* Chapter Text */}
          <div className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-2.5 mb-5">
            {current.text}
          </div>

          {/* Intra-chapter Navigation */}
          <div className="flex items-center justify-between pt-2.5 border-t border-pink-100/70 text-xs">
            <button
              disabled={activeChapter === 0}
              onClick={handlePrevChapter}
              className={`flex items-center gap-1 font-medium ${
                activeChapter === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:text-rose-500'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Prev</span>
            </button>

            <button
              disabled={activeChapter === chapters.length - 1}
              onClick={handleNextChapter}
              className={`flex items-center gap-1 font-semibold ${
                activeChapter === chapters.length - 1
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-rose-600 hover:text-rose-700'
              }`}
            >
              <span>Next Chapter</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
