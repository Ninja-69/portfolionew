import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full max-w-[420px] px-6 py-12 text-left border-t border-white/5 mt-10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-baseline">
          <h2 className="text-[18px] font-bold text-white tracking-tight">Adil Siddiqui</h2>
          <span className="text-[10px] text-white/30 uppercase tracking-widest">Last updated: April 23, 2026</span>
        </div>

        <div className="flex flex-col gap-5 text-[15px] leading-[1.6] text-white/80 font-normal">
          <p>
            I was born in Jamshedpur, India. My background is in building and scaling digital products.
          </p>

          <p>
            Currently, I run <a href="https://www.ninjalabs.in/" target="_blank" rel="noopener noreferrer" className="text-white border-b border-white/20 hover:border-white transition-colors">NinjaLabs</a>, an agency where we build software and AI tools. Before this, I founded several other ventures including <strong>Kynnex</strong> and <strong>Nexily</strong>. I've also built standalone apps like <strong>FundedAI</strong> and <strong>HeightX</strong> that have reached a significant user base.
          </p>

          <p>
            I'm interested in building products that work at scale and solve actual problems for people.
          </p>

          <div className="pt-2 text-[14px]">
            You can find me on <a href="https://instagram.com/ninjaxhustlerr" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 underline underline-offset-4 decoration-white/20 transition-all">Instagram</a>, <a href="https://discord.gg/ninja" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 underline underline-offset-4 decoration-white/20 transition-all">Discord</a>, or <a href="https://youtube.com/@ninjaxhustlerr" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 underline underline-offset-4 decoration-white/20 transition-all">YouTube</a>.
          </div>
        </div>
      </div>
    </section>
  );
};
