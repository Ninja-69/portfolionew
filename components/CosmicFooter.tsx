import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  floatDuration: number;
  floatDelay: number;
  twinkleDuration: number;
  twinkleDelay: number;
  dx1: number; dy1: number;
  dx2: number; dy2: number;
}

export const CosmicFooter: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    // 95 stars with distribution favoring the bottom half
    const newStars = Array.from({ length: 95 }).map((_, i) => {
      const isBottomHeavy = Math.random() < 0.7;
      return {
        id: i,
        x: Math.random() * 100,
        y: isBottomHeavy ? Math.random() * 50 + 50 : Math.random() * 50,
        size: Math.random() * 1.5 + 0.8,
        floatDuration: Math.random() * 20 + 25,
        floatDelay: Math.random() * -45,
        twinkleDuration: Math.random() * 3 + 2,
        twinkleDelay: Math.random() * -10,
        dx1: (Math.random() - 0.5) * 40,
        dy1: (Math.random() - 0.5) * 25,
        dx2: (Math.random() - 0.5) * 50,
        dy2: (Math.random() - 0.5) * 35,
      };
    });
    setStars(newStars);
  }, []);

  const starParallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const horizonY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
      {/* 40-Stop Anti-Banding Gradient - Center moved to 80% down */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          background: `radial-gradient(
            ellipse 160% 80% at 50% 70%,
            rgba(230, 250, 252, 1) 0%,
            rgba(220, 245, 248, 0.98) 2%,
            rgba(205, 240, 245, 0.95) 4%,
            rgba(190, 235, 242, 0.92) 6%,
            rgba(178, 230, 240, 0.88) 8%,
            rgba(165, 225, 237, 0.84) 10%,
            rgba(150, 218, 232, 0.78) 12%,
            rgba(135, 212, 228, 0.72) 14%,
            rgba(120, 206, 225, 0.66) 16%,
            rgba(105, 200, 221, 0.6) 18%,
            rgba(90, 194, 218, 0.54) 20%,
            rgba(77, 188, 215, 0.48) 22%,
            rgba(68, 182, 211, 0.44) 24%,
            rgba(58, 176, 207, 0.4) 26%,
            rgba(50, 170, 203, 0.36) 28%,
            rgba(44, 164, 199, 0.33) 30%,
            rgba(38, 156, 194, 0.3) 32%,
            rgba(33, 148, 188, 0.27) 34%,
            rgba(28, 140, 182, 0.24) 36%,
            rgba(24, 132, 176, 0.22) 38%,
            rgba(21, 124, 170, 0.2) 40%,
            rgba(18, 112, 160, 0.18) 42%,
            rgba(16, 100, 150, 0.16) 44%,
            rgba(14, 88, 140, 0.14) 46%,
            rgba(12, 76, 130, 0.12) 48%,
            rgba(10, 64, 120, 0.1) 50%,
            rgba(0, 0, 0, 0) 65%
          )`
        }}
      />

      {/* Floating Particles */}
      <motion.div className="absolute inset-0" style={{ y: starParallaxY }}>
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              '--drift-x-1': `${star.dx1}px`,
              '--drift-y-1': `${star.dy1}px`,
              '--drift-x-2': `${star.dx2}px`,
              '--drift-y-2': `${star.dy2}px`,
              '--float-duration': `${star.floatDuration}s`,
              '--float-delay': `${star.floatDelay}s`,
              '--twinkle-duration': `${star.twinkleDuration}s`,
              '--twinkle-delay': `${star.twinkleDelay}s`,
            } as any}
          />
        ))}
      </motion.div>

      {/* Atmospheric Horizon - Hidden for now
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180vw] h-[120px] z-20"
        style={{ 
          y: horizonY,
          borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
          background: "linear-gradient(to bottom, rgba(10, 10, 10, 0.3), rgba(0, 0, 0, 0.85))",
          backdropFilter: "blur(12px)",
          boxShadow: "0 -2px 15px rgba(77, 208, 225, 0.25)"
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-cyan-400 opacity-20 blur-[1px] rounded-t-full" />
      </motion.div>
      */}
    </div>
  );
};