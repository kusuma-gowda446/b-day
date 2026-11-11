import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

export default function Screen1Welcome({ config, onNext }) {
  const handleBegin = () => {
    sound.playPop();
    sound.playChime(659.25, 0.8);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#f472b6', '#fbbf24', '#fbcfe8', '#c084fc']
      });
    } catch (e) {}
    onNext();
  };

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto px-3 sm:px-4 py-2 sm:py-6">
      {/* Decorative top badge */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring' }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-pink-100/90 border border-pink-200/80 text-pink-700 text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm"
      >
        <Sparkles className="w-3.5 h-3.5 text-pink-500 animate-spin" style={{ animationDuration: '6s' }} />
        <span>{config.screen1?.tag || "A Little Surprise For You 💌"}</span>
      </motion.div>

      {/* Animated Greeting & Friend Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-editorial text-3xl sm:text-5xl md:text-6xl text-slate-800 tracking-tight leading-tight mb-2"
      >
        {config.screen1?.title || "Happy Birthday,"}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 font-semibold italic">
          {config.friendName || "Buddy"}!
        </span>
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-serif italic text-base sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-md px-2"
      >
        "{config.screen1?.subtitle || "A personalized digital storybook created just for you."}"
      </motion.p>

      {/* Animated Center Birthday Illustration */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 160 }}
        className="relative my-2 sm:my-4"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 sm:w-40 sm:h-40 mx-auto rounded-3xl bg-gradient-to-tr from-pink-200 via-rose-100 to-amber-100 border-2 border-white/90 shadow-xl flex items-center justify-center text-5xl sm:text-7xl select-none relative"
        >
          {config.screen1?.illustration || "🎁"}

          <motion.span
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-2 -right-2 text-xl sm:text-2xl"
          >
            🎈
          </motion.span>
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, delay: 0.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-1 -left-1 text-xl sm:text-2xl"
          >
            ✨
          </motion.span>
        </motion.div>

        <div className="absolute inset-0 rounded-full bg-pink-300/30 blur-2xl pointer-events-none" />
      </motion.div>

      {/* CTA Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-6 sm:mt-8 w-full max-w-xs"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleBegin}
          className="w-full py-3.5 sm:py-4 px-8 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-semibold text-base sm:text-lg shadow-xl shadow-pink-300/40 hover:shadow-pink-400/60 transition-all flex items-center justify-center gap-2 mx-auto"
        >
          <span>{config.screen1?.buttonText || "Let's Begin 💗"}</span>
          <Heart className="w-4 h-4 text-white fill-white" />
        </motion.button>

        <p className="text-[11px] sm:text-xs text-slate-400 mt-4 font-sans">
          {config.screen1?.note || "Tip: Turn on the music at top-right for the best experience!"}
        </p>
      </motion.div>
    </div>
  );
}
