import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioCards } from './components/PortfolioCards';
import { Gallery } from './components/Gallery';
import { CosmicFooter } from './components/CosmicFooter';
import { BottomNav } from './components/BottomNav';

function App() {
  const { scrollYProgress } = useScroll();
  const mainY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-black pb-[100px]">
      <motion.main
        style={{ y: mainY }}
        className="relative z-10 w-full max-w-[420px] flex flex-col items-center"
      >
        <Header />
        <Hero />
        <PortfolioCards />
        <Gallery />
      </motion.main>

      <CosmicFooter />
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;