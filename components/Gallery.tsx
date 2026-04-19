import React from 'react';

const images = [
  "assets/gallery_car.jpg",
  "assets/gallery_street.jpg",
  "assets/gallery_cockpit.jpg",
  "assets/gallery_watch_2.jpg",
  "assets/gallery_skyscraper.jpg",
  "assets/gallery_books.jpg",
];

export const Gallery: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 gap-2 px-5 mt-4 mb-20 max-w-[520px] mx-auto">
      {images.map((src, index) => (
        <div
          key={index}
          className="aspect-[4/3] bg-[#0d0d0d] overflow-hidden border border-white/5"
        >
          <img
            src={src}
            alt={`Gallery Item ${index}`}
            className="w-full h-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
};