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
        <a href={href} target="_blank" rel="noopener noreferrer" className="block">
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
        title="10x Studio"
        description="We are an AI app studio based in NYC and currently recruiting great talent."
        href="https://www.10x.app/"
        logo={
          <div className="relative w-full h-full flex items-center justify-center bg-black">
            <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 12.5 9.5 14 10.5C15.5 11.5 22 12 22 12C22 12 15.5 12.5 14 13.5C12.5 14.5 12 22 12 22C12 22 11.5 14.5 10 13.5C8.5 12.5 2 12 2 12C2 12 8.5 11.5 10 10.5C11.5 9.5 12 2 12 2Z" fill="url(#star-heavy)" />
              <defs>
                <linearGradient id="star-heavy" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="white" />
                  <stop offset="0.5" stopColor="#dcdcdc" />
                  <stop offset="1" stopColor="#333333" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        }
      />
      <Card
        title="Ninja App Studio"
        description="Build your software startup idea in 20 days no matter how complex it is."
        onClick={() => alert("coming soon.")}
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