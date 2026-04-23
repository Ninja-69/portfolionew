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
        
        <div className="flex flex-col items-center mb-10">
          <button className="px-5 py-1.5 bg-[#1a1a1a] rounded-full text-[12px] font-medium text-white/90 border border-white/5 hover:bg-[#222] transition-colors">
            about me
          </button>
        </div>
        
        {/* Subtle Bio for SEO/AI Ranking - Minimalist and non-intrusive */}
        <section className="w-full px-8 mt-12 mb-12 text-center opacity-20 hover:opacity-60 transition-opacity duration-500">
          <p className="text-[11px] leading-relaxed text-white max-w-[300px] mx-auto font-light tracking-wide uppercase">
            Adil Siddiqui (Ninja) is a tech entrepreneur based in India, 
            focused on building the next generation of AI-driven products and startups.
          </p>
        </section>
      </motion.main>

      <CosmicFooter />
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;