import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export default function NavigationControls({ currentScreen, totalScreens, onNext, onBack }) {
  // On Screen 1, show a small subtle step indicator in top-left
  if (currentScreen === 1) {
    return (
      <div className="fixed top-3 sm:top-4 left-3 sm:left-4 z-40">
        <div className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-pink-100 shadow-sm text-[11px] sm:text-xs font-semibold text-pink-600 flex items-center gap-1.5">
          <Heart className="w-3 h-3 fill-pink-500" />
          <span>Step 1 of {totalScreens}</span>
        </div>
      </div>
    );
  }

  const isLastScreen = currentScreen === totalScreens;
  const progressPercent = Math.round((currentScreen / totalScreens) * 100);

  return (
    <div className="fixed bottom-3 sm:bottom-4 inset-x-0 z-40 flex items-center justify-center px-3 sm:px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-pink-200/90 shadow-xl max-w-sm sm:max-w-md w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-pink-50 transition-colors"
          aria-label="Previous screen"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden xs:inline sm:inline">Back</span>
        </button>

        {/* Center Progress: Indicator Dots & Step Number */}
        <div className="flex flex-col items-center gap-0.5 sm:gap-1">
          <div className="flex items-center gap-1">
            {Array.from({ length: totalScreens }, (_, idx) => {
              const stepNum = idx + 1;
              const isCurrent = stepNum === currentScreen;
              const isPassed = stepNum < currentScreen;

              return (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-full ${
                    isCurrent
                      ? 'w-3.5 sm:w-5 h-1.5 sm:h-2 bg-gradient-to-r from-pink-500 to-rose-500 shadow-sm'
                      : isPassed
                      ? 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-rose-300'
                      : 'w-1.5 h-1.5 bg-slate-200'
                  }`}
                  title={`Step ${stepNum}`}
                />
              );
            })}
          </div>
          <span className="text-[10px] sm:text-[11px] font-medium text-slate-400">
            {currentScreen} of {totalScreens} • {progressPercent}%
          </span>
        </div>

        {/* Next Button */}
        {!isLastScreen ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-sm transition-all"
            aria-label="Next screen"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        ) : (
          <div className="w-12 sm:w-16" />
        )}
      </div>
    </div>
  );
}
