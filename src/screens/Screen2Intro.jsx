import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function Screen2Intro({ config }) {
  const lines = config.screen2?.lines || [
    "It's funny how someone who was once just a senior in college slowly became one of the closest people in my life.",
    "Somewhere between all the conversations, random moments and unexpected memories, you became more than just a senior.",
    "You became a friend I could count on, a mentor I could learn from, and someone who feels like family.",
    "I'm genuinely grateful to have you in my life, and today I hope you feel just how special you are to the people around you.",
    "You deserve all the happiness in the world!"
  ];

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto px-4 py-6">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100/80 border border-purple-200/80 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-5"
      >
        <Sparkles className="w-3.5 h-3.5 text-purple-500" />
        <span>{config.screen2?.tag || "Chapter 1 • Celebration Mode"}</span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="font-editorial text-3xl sm:text-5xl md:text-6xl text-slate-800 tracking-tight leading-tight mb-6"
      >
        Today is all about celebrating{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 font-semibold italic">
          you! ❤️
        </span>
      </motion.h2>

      {/* Meaningful & Emotional Lines Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-panel p-6 sm:p-9 rounded-3xl border border-white/90 shadow-xl max-w-xl text-left space-y-4 mb-4 relative"
      >
        <div className="washi-tape" />

        <div className="space-y-3.5">
          {lines.map((line, idx) => (
            <motion.p
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + idx * 0.1 }}
              className={`font-sans text-sm sm:text-base leading-relaxed ${
                idx === 0
                  ? 'font-serif italic text-base sm:text-lg text-slate-700 font-medium'
                  : idx === lines.length - 1
                  ? 'font-semibold text-rose-600 text-base sm:text-lg pt-1'
                  : 'text-slate-600'
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="pt-4 border-t border-pink-100/80 flex items-center justify-between text-xs text-slate-400">
          <span className="flex items-center gap-1.5 text-rose-500 font-medium">
            <Heart className="w-3.5 h-3.5 fill-rose-500" />
            <span>Senior • Mentor • Family</span>
          </span>
          <span className="font-handwriting text-base text-slate-500">From the heart</span>
        </div>
      </motion.div>
    </div>
  );
}
