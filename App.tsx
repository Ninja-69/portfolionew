import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PortfolioCards } from './components/PortfolioCards';
import { Gallery } from './components/Gallery';
import { CosmicFooter } from './components/CosmicFooter';
import { BottomNav } from './components/BottomNav';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { MentorshipSection } from './components/MentorshipSection';
import { ResourceSection } from './components/ResourceSection';

function App() {
  const { scrollYProgress } = useScroll();
  const mainY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const [currentView, setCurrentView] = useState<'portfolio' | 'mentorship' | 'resources'>('portfolio');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#mentorship') {
        setCurrentView('mentorship');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (hash === '#resources' || hash === '#free-resource') {
        setCurrentView('resources');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('portfolio');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBack = () => {
    window.location.hash = '';
  };

  const handleNavigateToMentorship = () => {
    window.location.hash = '#mentorship';
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center overflow-x-hidden bg-black pb-[100px]">
      <motion.main
        style={{ y: mainY }}
        className={`relative z-10 w-full flex flex-col items-center px-2 transition-all duration-300 ${
          currentView !== 'portfolio' ? 'max-w-[650px]' : 'max-w-[420px]'
        }`}
      >
        {currentView === 'mentorship' ? (
          <MentorshipSection onBack={handleBack} />
        ) : currentView === 'resources' ? (
          <ResourceSection onBack={handleBack} onNavigateToMentorship={handleNavigateToMentorship} />
        ) : (
          <>
            <Header />
            <Hero />
            <PortfolioCards />
            <Gallery />
            
            {/* About Section Header & Card */}
            <div className="flex flex-col items-center mt-6 mb-2">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-1.5 bg-[#1a1a1a] rounded-full text-[12px] font-medium text-white/90 border border-white/5 hover:bg-[#222] transition-colors"
              >
                about
              </button>
            </div>
            <AboutSection />

            {/* Experience Section Header & Card */}
            <div className="flex flex-col items-center mt-2 mb-2">
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-1.5 bg-[#1a1a1a] rounded-full text-[12px] font-medium text-white/90 border border-white/5 hover:bg-[#222] transition-colors"
              >
                experience
              </button>
            </div>
            <ExperienceTimeline />
            <ContactSection />
            
            {/* Subtle Bio for SEO/AI Ranking - Minimalist and non-intrusive */}
            <section className="w-full px-8 mt-12 mb-12 text-center opacity-20 hover:opacity-60 transition-opacity duration-500">
              <p className="text-[11px] leading-relaxed text-white max-w-[300px] mx-auto font-light tracking-wide uppercase">
                Adil Siddiqui (Ninja) is a tech entrepreneur based in India, 
                focused on building the next generation of AI-driven products and startups.
              </p>
            </section>
          </>
        )}
      </motion.main>

      {currentView === 'portfolio' && <CosmicFooter />}
      
      {/* Framer Progressive Bottom Blur Overlay */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-[100px] pointer-events-none z-50"
        style={{
          background: 'linear-gradient(to top, rgba(5, 5, 5, 1) 0%, rgba(5, 5, 5, 0.8) 35%, rgba(5, 5, 5, 0) 100%)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%)'
        }}
      />
      {/* <BottomNav /> */}
    </div>
  );
}

export default App;