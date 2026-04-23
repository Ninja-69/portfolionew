import React from 'react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-[92%] max-w-[400px] mx-auto mb-24 text-left">
      {/* Main Contact Card */}
      <div className="bg-[#050505]/90 backdrop-blur-md border border-white/5 rounded-[24px] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] font-bold text-green-500 uppercase tracking-wider">Available for new projects</span>
        </div>

        <h3 className="text-[20px] font-bold text-white mb-6">Start a conversation</h3>

        {/* Benefits List */}
        <div className="flex flex-col gap-3 mb-8">
          {[
            "Expert software engineering and AI strategy.",
            "Collaborative approach with direct communication.",
            "Result-driven development and execution."
          ].map((text, i) => (
            <div key={i} className="flex items-start gap-3">
              <svg className="w-4 h-4 mt-1 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[14px] text-white/70">{text}</span>
            </div>
          ))}
        </div>

        {/* Contact Quick Info */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 pb-8 border-b border-white/5">
          <a href="mailto:dnp.adil999@gmail.com" className="flex items-center gap-2 text-[13px] text-white/50 hover:text-white transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            dnp.adil999@gmail.com
          </a>
          <div className="flex items-center gap-2 text-[13px] text-white/50">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Discord: ninja
          </div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-white/40 ml-1">Your name</label>
            <input type="text" placeholder="Adil Siddiqui" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-white/40 ml-1">Email</label>
            <input type="email" placeholder="adil@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-white/40 ml-1">Company</label>
            <input type="text" placeholder="NinjaLabs" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-white/40 ml-1">Project type</label>
            <select className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white focus:outline-none focus:border-white/20 appearance-none transition-colors">
              <option>Software Development</option>
              <option>AI Implementation</option>
              <option>MVP Build (20 Days)</option>
              <option>Other</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-white/40 ml-1">Tell me about your project</label>
            <textarea rows={4} placeholder="Describe your vision, goals, and timeline..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/20 focus:outline-none focus:border-white/20 transition-colors resize-none" />
          </div>

          <label className="flex items-center gap-3 cursor-pointer group mt-2">
            <input type="checkbox" className="hidden" />
            <div className="w-5 h-5 rounded-md border-2 border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
              <svg className="w-3.5 h-3.5 text-white opacity-0 group-hover:opacity-20 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-[13px] text-white/50">Please send an NDA</span>
          </label>

          <button type="submit" className="w-full mt-4 bg-white text-black font-bold py-4 rounded-xl text-[14px] flex items-center justify-center gap-2 hover:bg-white/90 transition-colors">
            Send message
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};
