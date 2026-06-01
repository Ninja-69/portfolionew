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
          text="@AdilSiddiquiHQ"
          iconBg="bg-black border border-white/10"
          href="https://x.com/AdilSiddiquiHQ"
          icon={
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          }
        />
        <SocialBadge
          index={1}
          text="AdilSiddiquiHQ"
          iconBg="bg-[#181717] border border-white/10"
          href="https://github.com/AdilSiddiquiHQ"
          icon={
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          }
        />
        <SocialBadge
          index={2}
          text="Adil Siddiqui"
          iconBg="bg-[#0077B5]"
          href="https://www.linkedin.com/in/adilsiddiquihq"
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