import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/soundEffects';

export default function Screen3Envelope({ config }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenEnvelope = () => {
    if (!isOpen) {
      sound.playPop();
      sound.playChime(659.25, 0.7);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.5 },
          colors: ['#f472b6', '#fda4af', '#fbbf24', '#fbcfe8']
        });
      } catch (e) {}
    }
    setIsOpen(!isOpen);
  };

  const letterText = config.screen3?.letterMessage || `Some people enter our lives as seniors but slowly become family. You're that one person for me. ❤️

From being someone I could learn from to becoming someone I can share everything with, you've played so many beautiful roles in my life. You've been my guide, mentor, best friend, and one person I know I can always look up to.

I honestly feel lucky to have someone like you in my life. I hope life gives you all the happiness, success, peace, and love you genuinely deserve.

Thank you for being you and for being such an important part of my journey.

Happy Birthday! Never stop being the wonderful person you are. ❤️`;

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto px-3 sm:px-4 py-2 sm:py-6 w-full">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-100/80 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-2"
      >
        <Mail className="w-3.5 h-3.5 text-rose-500" />
        <span>{config.screen3?.tag || "Chapter 2 • Incoming Delivery"}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="font-editorial text-2xl sm:text-4xl md:text-5xl text-slate-800 tracking-tight mb-2"
      >
        {config.screen3?.heading || "You've Got a Special Letter! 💌"}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-sans text-xs sm:text-sm text-slate-500 mb-4 px-2"
      >
        {isOpen ? "A personal letter from the heart:" : (config.screen3?.subheading || "Tap the wax seal to break it open and read what's inside...")}
      </motion.p>

      {/* Interactive Pink Envelope */}
      <div className="relative w-full max-w-xs sm:max-w-sm my-2 flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleOpenEnvelope}
          className="cursor-pointer relative w-full h-36 xs:h-40 sm:h-48 rounded-2xl bg-gradient-to-br from-pink-300 via-rose-300 to-pink-400 p-1 shadow-xl flex items-center justify-center border-2 border-white/80 overflow-hidden select-none group"
        >
          {/* Inner pocket lines */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-pink-200/90 to-rose-200/90 flex flex-col items-center justify-center p-3 text-center">
            <span className="font-editorial text-[10px] sm:text-xs tracking-widest text-rose-800 font-bold uppercase mb-1">
              {config.screen3?.envelopeText || "TO MY FAVOURITE SENIOR & BUDDY"}
            </span>
            <span className="font-handwriting text-xl sm:text-2xl text-rose-700 font-semibold">
              For You, Buddy ✨
            </span>
          </div>

          {/* Scalable decorative fold svg */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,0 50,55 100,0" fill="#f472b6" />
            <polygon points="0,100 50,50 100,100" fill="#fb7185" />
          </svg>

          {/* Wax Seal */}
          <motion.div
            animate={{ scale: isOpen ? 0.9 : [1, 1.06, 1] }}
            transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
            className={`absolute z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold shadow-xl border-2 border-rose-300 transition-colors ${
              isOpen ? 'bg-rose-800 text-white' : 'bg-rose-600 text-amber-200 hover:bg-rose-500'
            }`}
          >
            {isOpen ? '💌' : '💖'}
          </motion.div>
        </motion.div>

        {/* Revealed Personal Letter Sheet */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.92 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-4 w-full bg-[#fdfbf7] p-5 sm:p-7 rounded-3xl shadow-xl border border-amber-200/80 text-left relative max-h-[52vh] sm:max-h-[58vh] overflow-y-auto"
            >
              <div className="washi-tape-gold" />

              <div className="flex items-center justify-between border-b border-pink-100 pb-2.5 mb-3.5">
                <span className="font-handwriting text-xl sm:text-2xl text-rose-600 font-bold">
                  For My Buddy ❤️
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-sans">
                  Special Delivery
                </span>
              </div>

              {/* Exact Letter Content */}
              <div className="font-sans text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line space-y-2.5">
                {letterText}
              </div>

              <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-[11px] sm:text-xs">
                <span className="font-handwriting text-lg sm:text-xl text-rose-600 font-bold">
                  Your Kiddo ❤️
                </span>
                <span className="text-slate-400 font-medium">
                  Click Next for our story →
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isOpen && (
        <motion.p
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xs text-rose-500 font-medium mt-3 cursor-pointer"
          onClick={handleOpenEnvelope}
        >
          👆 Tap the seal to break open your letter!
        </motion.p>
      )}
    </div>
  );
}
