import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const phrases = [
    "app companies.",
    "tech startups.",
    "AI products.",
    "SaaS ventures.",
    "digital brands."
  ];

  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        // Typing
        setText(currentPhrase.substring(0, text.length + 1));
        setSpeed(100); // Constant typing speed

        if (text === currentPhrase) {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), 2000);
          setSpeed(2000);
        }
      } else {
        // Deleting
        setText(currentPhrase.substring(0, text.length - 1));
        setSpeed(50); // Faster deletion

        if (text === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, speed, phrases]);

  return (
    <div className="flex flex-col items-center text-center w-full px-6 mb-4">
      <h1 className="font-serif-italic text-[34px] text-white leading-[1.1] mb-5 tracking-tight whitespace-nowrap flex flex-row items-baseline gap-2 justify-center">
        <span className="shrink-0">I build</span>
        <span className="text-white relative inline-block min-w-[10px]">
          {text}
          <span className="absolute -right-1 top-0 bottom-0 w-[2px] bg-white animate-pulse" />
        </span>
      </h1>

      <button className="px-5 py-1.5 bg-[#1a1a1a] rounded-full text-[12px] font-medium text-white/90 border border-white/5 hover:bg-[#222] transition-colors mt-2">
        featured
      </button>
    </div>
  );
};