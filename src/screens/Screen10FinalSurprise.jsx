import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, RefreshCw, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

export default function Screen10FinalSurprise({ config, onRestart }) {
  useEffect(() => {
    sound.playCelebrationHarp();
    triggerMegaConfetti();
  }, []);

  const triggerMegaConfetti = () => {
    const count = 180;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      try {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      } catch (e) {}
    }

    fire(0.25, {
      spread: 30,
      startVelocity: 55,
      colors: ['#f472b6', '#fbbf24', '#f43f5e']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#a855f7', '#38bdf8', '#fbcfe8']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#fde047', '#fb7185']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const finalConfig = config.screen8 || config.screen10 || {};

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-3 sm:px-4 py-3 sm:py-6 w-full">
      <div className="washi-tape" />

      {/* Floating Celebration Emojis */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="text-4xl sm:text-6xl mb-2 sm:mb-3 select-none"
      >
        🎂🎉✨
      </motion.div>

      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100/80 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
        <span>{finalConfig.tag || "Chapter 7 • The Grand Finale"}</span>
      </motion.div>

      {/* Grand Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-editorial text-3xl sm:text-5xl md:text-6xl text-slate-800 tracking-tight leading-tight mb-2 sm:mb-3"
      >
        HAPPY BIRTHDAY{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 font-semibold italic">
          {config.friendName || "BUDDY"}
        </span>
        !
      </motion.h1>

      {/* The Final Line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-serif italic text-lg sm:text-2xl md:text-3xl text-rose-600 mb-3 sm:mb-4 max-w-lg leading-relaxed font-semibold px-2"
      >
        "{finalConfig.finalQuote || "Once a senior, forever my favourite person to look up to. ❤️"}"
      </motion.p>

      {/* Warm Toast */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="font-sans text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed mb-6 sm:mb-8 px-2"
      >
        {finalConfig.toast || "Here's to celebrating you today, tomorrow, and through all the incredible adventures yet to come! 🥂✨"}
      </motion.p>

      {/* Buttons: Stack on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full max-w-xs sm:max-w-sm"
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={triggerMegaConfetti}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-pink-300/40 hover:shadow-pink-400/60 transition-all"
        >
          <PartyPopper className="w-4 h-4" />
          <span>More Confetti! 🎊</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          onClick={onRestart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs sm:text-sm border border-pink-200 shadow-md transition-all"
        >
          <RefreshCw className="w-4 h-4 text-rose-500" />
          <span>{finalConfig.restartText || "Replay The Experience 🔁"}</span>
        </motion.button>
      </motion.div>

      <p className="text-[11px] text-slate-400 mt-6 sm:mt-8 flex items-center justify-center gap-1">
        <span>Handcrafted with all the love by</span>
        <span className="font-semibold text-slate-600">{config.senderName || "Your Kiddo"}</span>
        <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
      </p>
    </div>
  );
}
