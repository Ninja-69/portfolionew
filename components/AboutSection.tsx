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
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              Instagram
            </a>
            <a href="https://discord.gg/ninja" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              Discord
            </a>
            <a href="https://www.linkedin.com/in/adil-siddiqui-227474355" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/60 hover:text-white transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
