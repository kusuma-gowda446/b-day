import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wind, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

export default function Screen8Cake({ config }) {
  const [candles, setCandles] = useState([true, true, true, true, true]);
  const [blownOut, setBlownOut] = useState(false);

  const handleCandleClick = (idx) => {
    sound.playBlowOut();
    const updated = [...candles];
    updated[idx] = !updated[idx];
    setCandles(updated);

    if (updated.every((c) => !c)) {
      triggerCakeCelebration();
    }
  };

  const handleBlowAll = () => {
    sound.playBlowOut();
    setCandles([false, false, false, false, false]);
    triggerCakeCelebration();
  };

  const triggerCakeCelebration = () => {
    setBlownOut(true);
    sound.playCelebrationHarp();
    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#fbbf24', '#f472b6', '#a855f7', '#38bdf8', '#fde047']
      });
    } catch (e) {}
  };

  const handleRelight = () => {
    sound.playChime(440, 0.4);
    setCandles([true, true, true, true, true]);
    setBlownOut(false);
  };

  const cakeConfig = config.screen6 || config.screen8 || {};

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto px-3 sm:px-4 py-2 sm:py-6 text-center w-full">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-2"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-500" />
        <span>{cakeConfig.tag || "Chapter 5 • The Main Ritual"}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-editorial text-2xl sm:text-4xl md:text-5xl text-slate-800 tracking-tight mb-1"
      >
        {cakeConfig.heading || "Make a Wish, Buddy! 🎂"}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-sans text-xs sm:text-sm text-slate-500 mb-5 max-w-md px-2"
      >
        {blownOut
          ? "Your wish has been registered into the universe! ✨"
          : (cakeConfig.subheading || "Tap each candle flame or click the button below to blow them out!")}
      </motion.p>

      {/* Birthday Cake Illustration (Fully Responsive Scale) */}
      <div className="relative my-2 select-none flex flex-col items-center max-w-full">
        {/* Row of 5 Candles */}
        <div className="flex items-end justify-center gap-3 sm:gap-5 z-10 -mb-2">
          {candles.map((isLit, idx) => (
            <div
              key={idx}
              onClick={() => handleCandleClick(idx)}
              className="cursor-pointer group flex flex-col items-center"
              title={isLit ? "Click candle to blow out" : "Click to relight"}
            >
              {/* Flame or Smoke */}
              <div className="h-8 sm:h-9 flex items-center justify-center">
                {isLit ? (
                  <div className="relative">
                    <div className="w-3 h-5 sm:w-3.5 sm:h-6 bg-gradient-to-t from-amber-500 via-yellow-400 to-amber-200 rounded-full candle-flame" />
                    <div className="absolute inset-0 bg-amber-400/50 rounded-full blur-sm animate-pulse" />
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 0, y: -14 }}
                    transition={{ duration: 1 }}
                    className="text-xs text-slate-400 select-none"
                  >
                    💨
                  </motion.div>
                )}
              </div>

              {/* Wick */}
              <div className="w-0.5 h-1.5 sm:h-2 bg-slate-700" />

              {/* Candle Body */}
              <div
                className={`w-3 sm:w-4 h-10 sm:h-12 rounded-t-sm shadow-sm transition-all duration-300 ${
                  idx % 2 === 0
                    ? 'bg-gradient-to-b from-pink-300 via-rose-300 to-pink-400'
                    : 'bg-gradient-to-b from-purple-300 via-indigo-300 to-purple-400'
                }`}
              >
                <div className="w-full h-1.5 sm:h-2 bg-white/40 my-1.5 rotate-12" />
              </div>
            </div>
          ))}
        </div>

        {/* Cake Top Tier */}
        <div className="w-40 xs:w-48 sm:w-56 h-12 sm:h-14 rounded-t-2xl bg-gradient-to-r from-pink-200 via-rose-100 to-pink-200 border-2 border-white/80 shadow-md relative overflow-hidden flex items-center justify-center">
          <div className="absolute -top-1 inset-x-0 flex justify-around text-rose-300 text-sm sm:text-base">
            <span>🍓</span>
            <span>✨</span>
            <span>🍓</span>
            <span>✨</span>
            <span>🍓</span>
          </div>
          <span className="font-handwriting text-xl sm:text-2xl text-rose-600 font-bold mt-2.5">
            {config.friendName || "Buddy"}
          </span>
        </div>

        {/* Cake Bottom Tier */}
        <div className="w-52 xs:w-64 sm:w-72 h-13 sm:h-16 rounded-b-2xl bg-gradient-to-r from-amber-100 via-pink-100 to-amber-100 border-2 border-white/90 shadow-lg relative flex items-center justify-center">
          <div className="flex gap-1.5 sm:gap-2">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-sm" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-pink-300 shadow-sm" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-300 shadow-sm" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-pink-300 shadow-sm" />
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white shadow-sm" />
          </div>
        </div>

        {/* Cake Stand Plate */}
        <div className="w-56 xs:w-72 sm:w-80 h-2.5 sm:h-3 rounded-full bg-gradient-to-r from-slate-200 via-white to-slate-200 shadow-md mt-1" />
      </div>

      {/* Wish Prompt & Action Controls */}
      <div className="mt-5 sm:mt-6 w-full max-w-sm">
        {blownOut ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-pink-100 via-purple-50 to-pink-100 border border-pink-200"
          >
            <p className="font-handwriting text-xl sm:text-2xl text-rose-600 font-bold mb-1">
              ✨ May all your wishes come true! ✨
            </p>
            <p className="text-xs text-slate-600 mb-2.5">
              Hold that wish in your heart. This year is going to be your greatest chapter yet!
            </p>
            <button
              onClick={handleRelight}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-rose-500" />
              <span>Relight Candles</span>
            </button>
          </motion.div>
        ) : (
          <div className="space-y-3">
            <p className="font-serif italic text-xs sm:text-sm text-slate-600 px-2">
              "{cakeConfig.wishPrompt || "Close your eyes, make your biggest wish, and let this year be your greatest one yet! ✨"}"
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleBlowAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Wind className="w-4 h-4" />
              <span>Blow Out All Candles 💨</span>
            </motion.button>
          </div>
        )}
      </div>
    </div>
  );
}
