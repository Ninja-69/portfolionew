import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[420px] px-6 py-10 text-left border-t border-white/5 mt-2 bg-black/40 backdrop-blur-sm rounded-2xl mb-20 shadow-2xl">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-baseline mb-2">
          <h2 className="text-[26px] font-serif-italic text-white tracking-tight">Adil Siddiqui</h2>
          <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">Last updated: April 23, 2026</span>
        </div>

        <div className="flex flex-col gap-5 text-[15px] leading-[1.7] text-white font-normal">
          <p className="text-white/90">
            I was born in Jamshedpur, India. My background is in building and scaling digital products.
          </p>

          <p className="text-white/90">
            Currently, I run <a href="https://www.ninjalabs.in/" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/40 hover:border-white transition-colors font-medium">NinjaLabs</a>, an agency where we build software and AI tools. Before this, I founded several other ventures including <strong>Kynnex</strong> and <strong>Nexily</strong>. I've also built standalone apps like <strong>FundedAI</strong> and <strong>HeightX</strong> that have reached a significant user base.
          </p>

          <p className="text-white/90">
            I'm interested in building products that work at scale and solve actual problems for people.
          </p>

          <div className="pt-2 text-[14px] flex flex-wrap gap-4">
            <a href="https://instagram.com/ninjaxhustlerr" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 underline underline-offset-4 decoration-white/40 transition-all font-medium">Instagram</a>
            <a href="https://discord.gg/ninja" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 underline underline-offset-4 decoration-white/40 transition-all font-medium">Discord</a>
            <a href="https://youtube.com/@ninjaxhustlerr" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 underline underline-offset-4 decoration-white/40 transition-all font-medium">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
};
