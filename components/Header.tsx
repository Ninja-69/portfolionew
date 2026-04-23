import React from 'react';
import { motion } from 'framer-motion';

interface SocialBadgeProps {
  icon: React.ReactNode;
  text: string;
  iconBg: string;
  href: string;
  index: number;
}

const SocialBadge: React.FC<SocialBadgeProps> = ({
  icon,
  text,
  iconBg,
  href,
  index
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 * index }}
    className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-[#161616] border border-white/10 whitespace-nowrap hover:bg-[#202020] transition-colors shadow-lg flex-shrink-0"
  >
    <div className={`w-5 h-5 flex items-center justify-center rounded-[5px] text-white shadow-sm overflow-hidden flex-shrink-0 ${iconBg}`}>
      {icon}
    </div>
    <span className="text-[10px] font-semibold text-white tracking-tight">
      {text}
    </span>
  </motion.a>
);

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full pt-10 pb-6">
      {/* Profile Image - Circular */}
      <div className="relative mb-6">
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden border-2 border-white/5 shadow-2xl">
          <img
            src="assets/profile_ninja.jpg"
            alt="Adil Siddiqui - Ninja Entrepreneur"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Social Section - Forced Single Line */}
      <div className="flex flex-row flex-nowrap justify-center items-center gap-1 px-4 w-full overflow-hidden">
        <SocialBadge
          index={0}
          text="@ninjaxhustlerr"
          iconBg="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
          href="https://instagram.com/ninjaxhustlerr"
          icon={
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          }
        />
        <SocialBadge
          index={1}
          text="discord.gg/ninja"
          iconBg="bg-[#5865F2]"
          href="https://discord.gg/ninja"
          icon={
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 127.14 96.36">
              <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.71,32.65-1.82,56.6.48,80.1a105.73,105.73,0,0,0,32.22,16.26,76.3,76.3,0,0,0,7.34-11.97,69.59,69.59,0,0,1-11.75-5.61c.42-.31.84-.63,1.24-.96,25.61,11.85,53.25,11.85,78.53,0,.41.33.82.65,1.24.96a70.13,70.13,0,0,1-11.77,5.63,76.12,76.12,0,0,0,7.36,11.95,105.75,105.75,0,0,0,32.27-16.26C130.29,50.77,126,27.1,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z" />
            </svg>
          }
        />
        <SocialBadge
          index={2}
          text="Adil Siddiqui"
          iconBg="bg-[#0077B5]"
          href="https://linkedin.com/in/adilsiddiqui"
          icon={
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          }
        />
      </div>
    </div>
  );
};