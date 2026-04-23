import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-[92%] max-w-[400px] mx-auto px-7 py-10 text-left bg-[#050505]/90 backdrop-blur-md border border-white/5 rounded-[24px] mb-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <h2 className="text-[20px] font-bold text-white tracking-tight">Adil Siddiqui</h2>
          <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Last updated: April 23, 2026</span>
        </div>

        <div className="flex flex-col gap-6 text-[15px] leading-[1.8] text-white/90 font-normal">
          <p>
            I was born in Jamshedpur, India. My background is in building and scaling digital products.
          </p>

          <p>
            Currently, I run <a href="https://www.ninjalabs.in/" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/20 hover:border-white transition-colors font-medium">NinjaLabs</a>, an agency where we build software and AI tools. Before this, I founded several other ventures including <strong>Kynnex</strong> and <strong>Nexily</strong>. I've also built standalone apps like <strong>FundedAI</strong> and <strong>HeightX</strong> that have reached a significant user base.
          </p>

          <p>
            I'm interested in building products that work at scale and solve actual problems for people.
          </p>

          <div className="pt-4 flex flex-row flex-wrap gap-x-6 gap-y-3">
            <a href="https://instagram.com/ninjaxhustlerr" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a href="https://discord.gg/ninja" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="12" r="1" />
                <circle cx="15" cy="12" r="1" />
                <path d="M9 12c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2M8.5 14.5c.5.5 1.5.5 2 0M13.5 14.5c.5.5 1.5.5 2 0M12 2c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 20.6 0 14 5.4 2 12 2z" />
              </svg>
              Discord
            </a>
            <a href="https://linkedin.com/in/adilsiddiqui" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
