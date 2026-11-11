import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayData } from './config/birthdayData';
import FloatingMusicPlayer from './components/FloatingMusicPlayer';
import FloatingSparkles from './components/FloatingSparkles';
import NavigationControls from './components/NavigationControls';
import CustomizeModal from './components/CustomizeModal';

// 8 Curated Personal Screens
import Screen1Welcome from './screens/Screen1Welcome';
import Screen2Intro from './screens/Screen2Intro';
import Screen3Envelope from './screens/Screen3Envelope';
import Screen4Timeline from './screens/Screen4Timeline';
import Screen6MemoryGallery from './screens/Screen6MemoryGallery';
import Screen8Cake from './screens/Screen8Cake';
import Screen9Letter from './screens/Screen9Letter';
import Screen10FinalSurprise from './screens/Screen10FinalSurprise';

import { sound } from './utils/soundEffects';

const TOTAL_SCREENS = 8;

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 30 : -30,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.28 },
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 30 : -30,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 280, damping: 28 },
      opacity: { duration: 0.2 },
    },
  }),
};

export default function App() {
  const [config, setConfig] = useState(birthdayData);
  const [currentScreen, setCurrentScreen] = useState(1);
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (currentScreen < TOTAL_SCREENS) {
      sound.playPop();
      setDirection(1);
      setCurrentScreen((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentScreen > 1) {
      sound.playPop();
      setDirection(-1);
      setCurrentScreen((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    sound.playCelebrationHarp();
    setDirection(-1);
    setCurrentScreen(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 1:
        return <Screen1Welcome config={config} onNext={handleNext} />;
      case 2:
        return <Screen2Intro config={config} />;
      case 3:
        return <Screen3Envelope config={config} />;
      case 4:
        return <Screen4Timeline config={config} />;
      case 5:
        return <Screen6MemoryGallery config={config} />;
      case 6:
        return <Screen8Cake config={config} />;
      case 7:
        return <Screen9Letter config={config} />;
      case 8:
        return <Screen10FinalSurprise config={config} onRestart={handleRestart} />;
      default:
        return <Screen1Welcome config={config} onNext={handleNext} />;
    }
  };

  return (
    <div className="relative min-h-screen text-slate-800 font-sans flex flex-col justify-between overflow-x-hidden selection:bg-pink-200">
      {/* Ambient background particles & dreamy glows */}
      <FloatingSparkles />

      {/* Floating Music Player in top-right */}
      <FloatingMusicPlayer />

      {/* Main Single-Screen Viewport Container with responsive spacing */}
      <main className="flex-1 flex items-start sm:items-center justify-center relative z-10 w-full px-2 sm:px-4 pt-12 sm:pt-16 pb-20 sm:pb-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentScreen}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full flex justify-center"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Step Navigation Controls (Back / Step Dots / Next) */}
      <NavigationControls
        currentScreen={currentScreen}
        totalScreens={TOTAL_SCREENS}
        onNext={handleNext}
        onBack={handleBack}
      />

      {/* Quick Customize Modal helper */}
      <CustomizeModal config={config} onUpdateConfig={setConfig} />
    </div>
  );
}
