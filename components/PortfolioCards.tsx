import React from 'react';

interface CardProps {
  title: string;
  description: string;
  logo: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ title, description, logo, href, onClick }) => {
  const content = (
    <div
      className="w-full p-3 bg-[#0d0d0d] flex flex-row items-center gap-[18px] transition-all duration-300 hover:bg-[#121212] cursor-pointer"
      onClick={!href ? onClick : undefined}
    >
      {/* Icon Container - Sharp 90 degree edges as requested */}
      <div className="w-[54px] h-[54px] min-w-[54px] bg-[#000000] flex items-center justify-center overflow-hidden border border-white/[0.04]">
        {logo}
      </div>

      {/* Text Content - Cloned from image typography with high precision */}
      <div className="flex flex-col gap-0.5 text-left pr-1">
        <h3 className="text-[17px] font-bold text-white tracking-[-0.03em] leading-tight">
          {title}
        </h3>
        <p className="text-[14px] font-normal text-white/60 leading-[1.3] tracking-tight">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-[93%] max-w-[420px] mx-auto mb-2 overflow-hidden">
      {href ? (
        <a href={href} target={href.startsWith('#') ? undefined : "_blank"} rel={href.startsWith('#') ? undefined : "noopener noreferrer"} className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export const PortfolioCards: React.FC = () => {
  return (
    <div className="w-full flex flex-col mt-4 gap-0.5">
      <Card
        title="FundedAI"
        description="Powering the next generation of traders with AI-driven chart analysis for stocks, crypto, and forex."
        href="https://play.google.com/store/apps/details?id=in.funded.ai"
        logo={
          <img
            src="assets/funded_ai_logo.png"
            alt="FundedAI Logo"
            className="w-full h-full object-cover"
          />
        }
      />
      <Card
        title="Ninja App Studio"
        description="Build your software startup idea in 20 days no matter how complex it is."
        href="https://www.ninjalabs.in/"
        logo={
          <span className="font-serif text-[42px] font-normal text-white select-none leading-none -mt-1">N</span>
        }
      />
      <Card
        title="HeightX"
        description="Unlock your true potential with the advanced height increase and height maxxing app using AI to grow taller."
        href="https://play.google.com/store/apps/details?id=com.heightx.app&hl=en_GB"
        logo={
          <img
            src="assets/heightx_logo.png"
            alt="HeightX - Product by Adil Siddiqui"
            className="w-full h-full object-cover"
          />
        }
      />
    </div>
  );
};