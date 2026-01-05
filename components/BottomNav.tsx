import React from 'react';
import { motion } from 'framer-motion';

export const BottomNav: React.FC = () => {
  return (
    <motion.div 
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[92%] max-w-[380px]"
    >
      <div className="bg-[#1a1a1a]/70 backdrop-blur-2xl border border-white/10 h-14 rounded-[28px] flex items-center justify-between px-5 shadow-2xl">
        {/* Left Control */}
        <button className="text-white/40 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" /></svg>
        </button>
        
        {/* Central Icons */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#252525] flex items-center justify-center border border-white/5">
             <div className="w-4.5 h-4.5 rounded-[3px] border-2 border-white/40" />
          </div>
          
          <div className="w-9 h-9 rounded-full bg-[#252525] flex items-center justify-center border border-white/5">
             <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8" strokeLinecap="round"/></svg>
          </div>

          <div className="relative group mx-0.5">
            <div className="w-9 h-9 rounded-full bg-[#111] flex items-center justify-center border-2 border-cyan-500/60 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
               <span className="text-white font-serif-italic text-xs">N</span>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold border border-[#1a1a1a] shadow-sm">
              ×
            </div>
          </div>

          <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
             <div className="w-5 h-5 rounded-full border border-black/10" />
          </div>
          
          <div className="w-9 h-9 rounded-full bg-[#252525] flex items-center justify-center border border-white/5">
             <span className="text-white/60 font-serif-italic text-xs">N</span>
          </div>
        </div>

        {/* Right Plus */}
        <button className="text-white/40 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" /></svg>
        </button>
      </div>
    </motion.div>
  );
};