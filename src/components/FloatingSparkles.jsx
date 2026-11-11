import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function FloatingSparkles() {
  // Generate random stable decorative elements
  const elements = useMemo(() => {
    const items = [];
    const types = ['✨', '💖', '🌸', '⭐', '💫', '🧁'];
    for (let i = 0; i < 24; i++) {
      items.push({
        id: i,
        symbol: types[i % types.length],
        x: Math.random() * 95,
        y: Math.random() * 95,
        size: Math.random() * 14 + 12,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.35 + 0.15,
      });
    }
    return items;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft gradient blur spheres in corners */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-200/35 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-200/35 rounded-full blur-3xl animate-float-reverse" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl animate-float-slow" />

      {/* Floating particles */}
      {elements.map((item) => (
        <motion.div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            fontSize: `${item.size}px`,
            opacity: item.opacity,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, (item.id % 2 === 0 ? 15 : -15), 0],
            rotate: [0, item.id % 2 === 0 ? 25 : -25, 0],
            opacity: [item.opacity, item.opacity + 0.25, item.opacity],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  );
}
