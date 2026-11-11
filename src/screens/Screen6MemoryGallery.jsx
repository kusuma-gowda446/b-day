import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Screen6MemoryGallery({ config }) {
  const photos = config.screen5?.photos || config.screen6?.photos || [];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const handleOpenPhoto = (index) => {
    sound.playPop();
    setSelectedIndex(index);
  };

  const handleClosePhoto = () => {
    setSelectedIndex(null);
  };

  const handleNextPhoto = useCallback(() => {
    if (selectedIndex !== null) {
      sound.playPop();
      setSelectedIndex((prev) => (prev + 1) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  const handlePrevPhoto = useCallback(() => {
    if (selectedIndex !== null) {
      sound.playPop();
      setSelectedIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  // Keyboard navigation: Escape to close, Left/Right arrows to navigate
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') {
        handleClosePhoto();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNextPhoto, handlePrevPhoto]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextPhoto();
      } else {
        handlePrevPhoto();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-5xl mx-auto px-4 py-4 sm:py-6">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-purple-100/80 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-2"
      >
        <Camera className="w-3.5 h-3.5 text-purple-500" />
        <span>{config.screen5?.tag || "Chapter 4 • Scrapbook of Memories"}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-editorial text-3xl sm:text-5xl text-slate-800 tracking-tight text-center mb-1"
      >
        {config.screen5?.heading || "Our Memory Gallery 📸"}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-sans text-xs sm:text-sm text-slate-500 text-center mb-6 max-w-lg"
      >
        Real snapshots of laughter, walks, talks, and moments that became core memories.
      </motion.p>

      {/* Seamless Scrapbook Collage Grid (Clean photos without cards, labels, or captions) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full mb-4">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id || idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => handleOpenPhoto(idx)}
            className="cursor-pointer relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group aspect-[4/3] bg-slate-100 select-none"
          >
            <img
              src={photo.image}
              alt="Memory"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />

            {/* Subtle aesthetic hover indicator */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-slate-800 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-4 h-4 text-rose-500" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-slate-400 text-center">
        ✨ Tap any photograph to view full size
      </p>

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClosePhoto}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/90 backdrop-blur-md select-none"
          >
            {/* Close Button */}
            <button
              onClick={handleClosePhoto}
              className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/25 text-white transition-colors"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Photo Counter */}
            <div className="absolute top-5 left-5 z-50 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-md">
              {selectedIndex + 1} / {photos.length}
            </div>

            {/* Prev Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevPhoto();
              }}
              className="absolute left-2 sm:left-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextPhoto();
              }}
              className="absolute right-2 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-all hover:scale-110"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Center Content Container: Original Aspect Ratio Preserved */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[92vh] w-full flex items-center justify-center"
            >
              <img
                src={selectedPhoto.image}
                alt="Full memory"
                className="max-h-[85vh] sm:max-h-[88vh] max-w-[92vw] object-contain rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
