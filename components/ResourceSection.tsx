import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResourceSectionProps {
  onBack: () => void;
  onNavigateToMentorship: () => void;
}

interface ConfettiParticle {
  id: number;
  x: number;
  color: string;
  size: number;
  delay: number;
  duration: number;
}

export const ResourceSection: React.FC<ResourceSectionProps> = ({ onBack, onNavigateToMentorship }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState(1);
  
  // Quiz states
  const [experience, setExperience] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [instagram, setInstagram] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [fileContents, setFileContents] = useState<Record<string, string>>({});
  
  // File viewer modal states
  const [selectedFile, setSelectedFile] = useState<{ id: string; title: string } | null>(null);
  const [copied, setCopied] = useState(false);

  // Fetch JSON files on mount (unlocked state is false by default on refresh)
  useEffect(() => {
    setIsUnlocked(false);

    // Fetch the combined files JSON
    fetch('/unlocked_files.json')
      .then((res) => res.json())
      .then((data) => setFileContents(data))
      .catch((err) => console.error('Error loading files:', err));
  }, []);

  const handleUnlockClick = () => {
    if (isUnlocked) return;
    setModalStep(1);
    setExperience('');
    setName('');
    setCountry('');
    setInstagram('');
    setIsModalOpen(true);
  };

  const handleStep1Continue = () => {
    if (experience) {
      setModalStep(2);
    }
  };

  // Generate confetti particles
  const triggerConfetti = () => {
    const colors = ['#cca352', '#ffffff', '#e11d48', '#3b82f6', '#10b981'];
    const particles = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 6,
      delay: Math.random() * 0.5,
      duration: Math.random() * 2 + 1.5
    }));
    setConfetti(particles);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !country || !instagram) return;
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      
      // Trigger particles and congratulations overlay
      triggerConfetti();
      setShowCongratulations(true);
      
      // Unlock files
      setIsUnlocked(true);
      
      // Hide congratulations overlay after 4 seconds and return to the main resource section
      setTimeout(() => {
        setShowCongratulations(false);
      }, 4000);
    }, 2000);
  };

  const openFileViewer = (id: string, title: string) => {
    if (!isUnlocked) {
      handleUnlockClick();
      return;
    }
    window.open('https://drive.google.com/file/d/15P3Hhimx6uePTkkdY93UzGEdpQ0XwKTZ/view?usp=sharing', '_blank');
  };

  const handleCopy = () => {
    if (selectedFile && fileContents[selectedFile.id]) {
      navigator.clipboard.writeText(fileContents[selectedFile.id]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="w-full flex flex-col items-center min-h-[90vh] py-6 relative">
      {/* CSS Injection for Confetti & Fonts */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes confettiFall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes shineEffect {
          0% { left: -75%; }
          100% { left: 125%; }
        }
        @keyframes rotateBeam {
          100% { transform: rotate(360deg); }
        }
        .confetti-particle {
          position: fixed;
          top: -20px;
          will-change: transform, opacity;
          animation: confettiFall var(--fall-duration) linear infinite;
          animation-delay: var(--fall-delay);
          z-index: 100;
        }
        .btn-shine-overlay {
          position: absolute;
          top: 0;
          left: -75%;
          width: 55%;
          height: 100%;
          background: linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent);
          transform: skewX(-20deg);
          pointer-events: none;
        }
        .btn-glow-trigger:hover .btn-shine-overlay {
          animation: shineEffect 0.75s ease-in-out;
        }
      `}} />

      {/* Back to Home Button */}
      <button
        onClick={onBack}
        className="self-start mb-10 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to portfolio
      </button>

      {/* Main Container */}
      <div className="w-full max-w-[650px] mx-auto flex flex-col px-4 text-left">
        {/* Header Block */}
        <span className="text-[#cca352] text-[11px] sm:text-[12px] tracking-[0.25em] font-semibold mb-3 uppercase">
          Free Resource
        </span>
        <h1 className="text-[32px] sm:text-[44px] md:text-[50px] font-bold text-white leading-[1.1] mb-6 tracking-tight font-sans">
          How I Build $5k Client Sites in a Day
        </h1>
        <p className="text-white/85 text-[14px] sm:text-[16px] leading-[1.5] font-light mb-4">
          One skill folder. Drop it into your IDE or Claude Code to build a proper startup from scratch.
        </p>
        <p className="text-white/50 text-[13px] sm:text-[14px] leading-[1.5] font-light mb-8">
          No opt-in. No course. This is the exact folder used in the video: the Antigravity SDK prompt.
        </p>

        {/* VSL Video Preview Card */}
        <div className="w-full mb-10 flex flex-col items-start">
          <a
            href="https://youtu.be/72PcLYHT5x0"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-[#050505] border border-white/10 rounded-none overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:border-white/20 transition-all duration-300 cursor-pointer block relative group"
          >
            {/* The Thumbnail Image - Full width, sharp corners */}
            <img
              src="assets/video_thumbnail.png"
              alt="VSL Video Thumbnail"
              className="w-full h-auto object-cover block"
            />

            {/* Hover Gold Border Outline */}
            <div className="absolute inset-0 border-2 border-[#cca352]/0 group-hover:border-[#cca352]/50 transition-all duration-300 pointer-events-none" />

            {/* Play Button Overlay (Fades in on hover with premium styling) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/35 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.5)] opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6 fill-current ml-1 text-black" viewBox="0 0 24 24">
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </div>
            </div>

            {/* VSL Video Controller Bar Overlay (Absolute bottom) */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end px-3 pb-2 opacity-90 group-hover:opacity-100 transition-opacity">
              {/* Progress Bar */}
              <div className="w-full h-1 bg-white/20 rounded-full mb-2 overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-[45%] bg-red-600" />
                <div className="absolute left-[45%] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-red-600 scale-0 group-hover:scale-100 transition-transform" />
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center text-white/90 text-[11px]">
                <div className="flex items-center gap-3">
                  {/* Play/Pause */}
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {/* Volume */}
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                  {/* Duration Time */}
                  <span className="font-sans font-light tracking-wide text-white/70">2:54 / 6:28</span>
                </div>
                
                <div className="flex items-center gap-3">
                  {/* HD Badge */}
                  <span className="text-[9px] font-black border border-white/60 px-0.5 rounded leading-none scale-90">HD</span>
                  {/* Fullscreen */}
                  <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://youtu.be/72PcLYHT5x0"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-white/50 hover:text-white transition-colors text-[13px] flex items-center gap-1.5 font-light"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go back to the video
          </a>
        </div>

        {/* Unlocking Files Header */}
        <h3 className="text-[18px] font-bold text-white mb-6">Files Included:</h3>

        {/* Locked / Unlocked Items list */}
        <div className="flex flex-col gap-3.5 mb-8">
        {/* Antigravity Card */}
        <div
          onClick={() => openFileViewer('antigravity', 'Antigravity SDK Folder')}
          className="w-full p-5 sm:p-6 bg-[#0f0f11] border border-white/[0.06] rounded-[16px] flex flex-row items-center gap-5 transition-all duration-300 hover:bg-[#131315] hover:border-white/10 cursor-pointer text-left mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
        >
          {/* Number on Left */}
          <span className="text-[18px] sm:text-[20px] font-bold text-[#cca352] w-6 shrink-0">
            01
          </span>

          {/* Text block in Middle */}
          <div className="flex-1 flex flex-col gap-1 pr-4">
            <h4 className="text-[15px] sm:text-[16px] font-bold text-white tracking-tight leading-snug">
              Antigravity SDK Folder
            </h4>
            <p className="text-[12px] sm:text-[13px] text-white/50 leading-relaxed font-light">
              The complete setup folder to design, implement, and debug autonomous AI agents using the Google Antigravity SDK.
            </p>
          </div>

          {/* Locked / Unlocked state on Right */}
          <div className="flex items-center gap-1.5 shrink-0 self-center">
            {isUnlocked ? (
              <>
                <svg className="w-3.5 h-3.5 text-[#cca352]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                </svg>
                <span className="text-[12px] font-medium text-[#cca352] tracking-tight">Unlocked</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[12px] font-medium text-white/40 tracking-tight">Locked</span>
              </>
            )}
          </div>
        </div>
      </div>

        {/* CTA Unlock Button */}
        {!isUnlocked && (
          <div className="w-full flex flex-col items-center mb-16">
            <div className="relative p-[1.5px] overflow-hidden rounded-[12px] w-fit shadow-[0_4px_30px_rgba(204,163,82,0.15)] group btn-glow-trigger">
              {/* Border Flow Conic-Gradient Glow Beam */}
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_60%,#cca352_70%,#cca352_80%,transparent_90%)] animate-[rotateBeam_4s_linear_infinite] pointer-events-none" />

              <button
                onClick={handleUnlockClick}
                className="relative overflow-hidden bg-[#09090b] hover:bg-[#101013] text-white font-extrabold text-[15px] sm:text-[16px] rounded-[11px] px-10 py-4 border border-white/5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer w-fit"
              >
                <span>Unlock folder. It's free.</span>
                
                {/* Noise Texture Overlay */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.08] pointer-events-none mix-blend-overlay">
                  <filter id="noiseFilter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>

                {/* Shimmer flare line */}
                <div className="btn-shine-overlay" />
              </button>
            </div>
            <span className="text-white/35 text-[11px] mt-4 uppercase tracking-wider font-light">
              Drop your details to get instant access
            </span>
          </div>
        )}

        {isUnlocked && (
          <div className="w-full p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center mb-16 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[13px] font-medium text-green-400">The folder is unlocked. Click the card above to download.</span>
          </div>
        )}

        {/* Links From The Video */}
        <h3 className="text-[16px] font-bold text-white/40 uppercase tracking-widest mb-6">Links From The Video</h3>
        <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-16">
          {[
            {
              title: 'Watch the video',
              desc: 'Full walkthrough on YouTube',
              href: 'https://youtu.be/72PcLYHT5x0',
              external: true,
              icon: (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current mr-1 sm:mr-2 text-white/60 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )
            },
            {
              title: 'Instagram',
              desc: '@ninjaxhustlerr',
              href: 'https://www.instagram.com/ninjaxhustlerr/',
              external: true,
              icon: (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-current stroke-2 mr-1 sm:mr-2 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01" />
                </svg>
              )
            },
            {
              title: 'Apply for WAC',
              desc: 'Mentorship + weekly LIVE calls',
              href: '#mentorship',
              external: false,
              icon: (
                <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-none stroke-current stroke-[2.5] ml-1 sm:ml-1.5 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              )
            }
          ].map((link, idx) => {
            const btnClass = "w-full py-3.5 sm:py-4.5 rounded-[12px] border border-white/5 bg-[#0a0a0c] hover:bg-[#111114] hover:border-white/15 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center text-[10px] sm:text-[13px] font-semibold text-white/80 hover:text-white transition-all text-center cursor-pointer group shadow-[0_4px_15px_rgba(0,0,0,0.3)] px-1 sm:px-3";

            return (
              <div key={idx} className="flex flex-col items-center w-full">
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={btnClass}
                >
                  {link.href.startsWith('https://youtu.be') || link.href.includes('instagram') ? link.icon : null}
                  <span>{link.title}</span>
                  {!link.href.startsWith('https://youtu.be') && !link.href.includes('instagram') ? link.icon : null}
                </a>
                <span className="text-[9px] sm:text-[12px] text-white/40 mt-2 text-center block font-light leading-normal">
                  {link.desc}
                </span>
              </div>
            );
          })}
        </div>

        {/* Web Agency Club Card Banner */}
        <div className="w-full bg-gradient-to-b from-[#101012] to-[#08080a] border border-white/5 rounded-[24px] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 shadow-[0_15px_30px_rgba(0,0,0,0.5)] mb-12 text-left">
          <div className="flex-1 flex flex-col">
            <span className="text-[#cca352] text-[10px] sm:text-[11px] tracking-[0.2em] font-bold uppercase mb-2">
              Web Agency Club
            </span>
            <h4 className="text-[20px] sm:text-[24px] font-black text-white leading-tight mb-3">
              Want the rest of it?
            </h4>
            <p className="text-white/75 text-[12px] sm:text-[13px] leading-relaxed font-light mb-6">
              This page is one video. The club is the whole roadmap, the community, and weekly LIVE calls with me.
            </p>
            <button
              onClick={onNavigateToMentorship}
              className="bg-white text-black font-bold py-3 px-6 rounded-[12px] text-[13px] w-fit hover:bg-white/90 transition-all cursor-pointer"
            >
              See What's Inside
            </button>
          </div>

          <div className="w-full sm:w-[200px] aspect-video sm:aspect-square bg-white/5 border border-white/10 rounded-xl relative overflow-hidden shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("assets/profile_ninja.jpg")' }} />
            <button
              onClick={onNavigateToMentorship}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
            >
              <svg className="w-4.5 h-4.5 fill-current ml-0.5" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full text-center mt-auto pt-16">
        <p className="text-white/20 text-[10px] tracking-wide uppercase font-light">
          ©2026 Adil Siddiqui. All Rights Reserved.
        </p>
      </footer>

      {/* Confetti Particles Render */}
      {showCongratulations && confetti.map((p) => (
        <div
          key={p.id}
          className="confetti-particle"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            '--fall-duration': `${p.duration}s`,
            '--fall-delay': `${p.delay}s`
          } as any}
        />
      ))}

      {/* Congratulations Fullscreen Overlay */}
      <AnimatePresence>
        {showCongratulations && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md text-center p-6"
          >
            <motion.div
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="flex flex-col items-center max-w-[400px]"
            >
              {/* Giant Gold Icon */}
              <div className="w-20 h-20 rounded-full bg-[#cca352]/10 border border-[#cca352]/20 flex items-center justify-center mb-8">
                <svg className="w-10 h-10 text-[#cca352]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>

              <h2 className="text-[28px] sm:text-[34px] font-black text-white leading-tight mb-4 tracking-tight">
                Congratulations!
              </h2>
              
              <p className="text-white/70 text-[14px] leading-relaxed mb-8 font-light">
                Your Antigravity SDK prompt has been unlocked successfully. You can now copy it directly.
              </p>

              <div className="w-full h-[1px] bg-white/10 mb-8" />

              <p className="text-[#cca352] text-[11px] uppercase tracking-widest font-bold mb-4">
                Exclusive Opportunity
              </p>

              <button
                onClick={() => {
                  setShowCongratulations(false);
                  onNavigateToMentorship();
                }}
                className="w-full bg-white hover:bg-white/90 text-black font-extrabold py-4 rounded-xl text-[14px] tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
              >
                Apply for 1-on-1 Mentorship
                <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
              <button
                onClick={() => setShowCongratulations(false)}
                className="text-white/40 hover:text-white/60 transition-colors text-[12px] mt-4 cursor-pointer"
              >
                Go to prompt downloads
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Two-Step Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#0b0b0c] border border-white/10 rounded-[28px] w-full max-w-[430px] p-6 sm:p-8 flex flex-col relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-left"
            >
              {/* Close Button */}
              {!isSubmitting && (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  /* Loading State */
                  <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-12 h-12 rounded-full border-2 border-white/5 border-t-[#cca352] animate-spin mb-5" />
                    <h4 className="text-white text-md font-bold mb-1">Setting up files</h4>
                    <p className="text-white/40 text-xs">Unlocking your prompt...</p>
                  </motion.div>
                ) : modalStep === 1 ? (
                  /* Step 1: Website experience */
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col text-left"
                  >
                    <span className="text-[#cca352] text-[10px] tracking-[0.2em] font-bold uppercase mb-2">
                      Quick One
                    </span>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-white tracking-tight mb-6 leading-tight">
                      Where are you at with building client websites?
                    </h3>

                    <div className="flex flex-col gap-3 mb-6">
                      {[
                        { title: 'Just getting started', desc: "Haven't landed a client yet" },
                        { title: 'Building sites already', desc: 'Want to speed things up' },
                        { title: 'Already using AI', desc: 'Want to tighten the process' },
                        { title: 'Just exploring', desc: "Seeing what's possible" }
                      ].map((opt) => (
                        <button
                          key={opt.title}
                          onClick={() => setExperience(opt.title)}
                          className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                            experience === opt.title
                              ? 'bg-white/10 border-white/30 text-white'
                              : 'bg-white/[0.01] border-white/5 text-white/70 hover:bg-white/[0.04]'
                          }`}
                        >
                          <div className="flex flex-col">
                            <span className="text-[13px] font-bold">{opt.title}</span>
                            <span className="text-[11px] text-white/40 mt-0.5 font-light">{opt.desc}</span>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-2 ${
                            experience === opt.title ? 'border-white bg-white' : 'border-white/20'
                          }`}>
                            {experience === opt.title && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                          </div>
                        </button>
                      ))}
                    </div>

                    <button
                      disabled={!experience}
                      onClick={handleStep1Continue}
                      className={`w-full py-3.5 rounded-xl font-bold text-[14px] transition-all flex items-center justify-center cursor-pointer ${
                        experience
                          ? 'bg-white text-black hover:bg-white/90'
                          : 'bg-white/5 text-white/20 cursor-not-allowed'
                      }`}
                    >
                      Continue
                    </button>
                  </motion.div>
                ) : (
                  /* Step 2: Contact Details */
                  <motion.form
                    key="step-2"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex flex-col text-left"
                  >
                    <span className="text-[#cca352] text-[10px] tracking-[0.2em] font-bold uppercase mb-2">
                      Last Step
                    </span>
                    <h3 className="text-[22px] sm:text-[24px] font-black text-white tracking-tight mb-1 leading-tight">
                      Just a few details
                    </h3>
                    <p className="text-[12px] text-white/40 mb-6 leading-relaxed">
                      That's it. The prompt unlocks straight away.
                    </p>

                    <div className="flex flex-col gap-4 mb-8">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium text-white/40 ml-1">Your Name</label>
                        <input
                          type="text"
                          required
                          placeholder="First name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#cca352] focus:ring-1 focus:ring-[#cca352] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium text-white/40 ml-1">Country</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Australia"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#cca352] focus:ring-1 focus:ring-[#cca352] transition-colors"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-medium text-white/40 ml-1">Instagram Handle</label>
                        <input
                          type="text"
                          required
                          placeholder="@yourhandle"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                          className="w-full bg-[#121214] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-[#cca352] focus:ring-1 focus:ring-[#cca352] transition-colors"
                        />
                        <span className="text-[10px] text-white/30 ml-1">Make sure it's correct so we can find you.</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setModalStep(1)}
                        className="px-4 py-3.5 rounded-xl border border-white/10 text-[13px] text-white/60 hover:text-white hover:bg-white/5 transition-all cursor-pointer font-medium"
                      >
                        Back
                      </button>

                      <button
                        type="submit"
                        disabled={!name || !country || !instagram}
                        className={`flex-1 py-3.5 rounded-xl font-bold text-[14px] transition-all flex items-center justify-center cursor-pointer ${
                          name && country && instagram
                            ? 'bg-white text-black hover:bg-white/95'
                            : 'bg-white/5 text-white/20 cursor-not-allowed'
                        }`}
                      >
                        Get the files
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* File Viewer Modal */}
      <AnimatePresence>
        {selectedFile && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#0b0b0c] border border-white/10 rounded-[28px] w-full max-w-[650px] max-h-[85vh] flex flex-col relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
            >
              {/* Header */}
              <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/30 backdrop-blur-sm">
                <div className="flex flex-col">
                  <span className="text-[#cca352] text-[10px] tracking-widest font-bold uppercase">Prompt File</span>
                  <h3 className="text-[18px] sm:text-[20px] font-bold text-white tracking-tight mt-0.5">{selectedFile.title}</h3>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[12px] font-medium text-white/80 hover:text-white hover:bg-white/10 flex items-center gap-1.5 transition-all cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-green-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                          <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                        </svg>
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>

                  {/* Close button */}
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 font-mono text-[11px] sm:text-[13px] text-white/70 leading-relaxed bg-[#050506] text-left select-text whitespace-pre-wrap selection:bg-[#cca352]/20 selection:text-[#cca352]">
                {fileContents[selectedFile.id] || 'Loading file prompt...'}
              </div>

              {/* Banner at bottom */}
              <div className="p-4 border-t border-white/5 bg-black/40 text-center flex flex-col sm:flex-row items-center justify-between gap-3 px-6">
                <span className="text-[11px] text-white/40">Ready to build? Put this directly into your IDE context or AI prompt.</span>
                <button
                  onClick={() => {
                    setSelectedFile(null);
                    onNavigateToMentorship();
                  }}
                  className="text-[11px] font-bold text-[#cca352] hover:text-[#cca352]/80 transition-colors uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  Apply for WAC Mentorship
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
