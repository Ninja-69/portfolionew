# Project Overview: Ninja Portfolio Clone

## Purpose
The "Ninja Portfolio Clone" is a high-fidelity, minimalist, dark-themed portfolio website. It is designed to showcase projects, social links, and a gallery in a premium, mobile-optimized format. This project is specifically integrated with **AI Studio**, providing a customizable landing page for developers and creators.

## Key Features
- **Responsive Design**: Optimized for a narrow, mobile-centric view (`max-w-[420px]`).
- **Cosmic Aesthetic**: A deep black background with a dynamic starfield, noise grain, and parallax effects.
- **Interactive Elements**:
    - Typing effect in the Hero section.
    - Hover effects on gallery images (grayscale to color).
    - Premium "shimmer" and "chromatic aberration" UI details.
    - Smooth scroll-linked animations using Framer Motion.
- **Modular Components**: Clean separation of concerns with React components for Header, Hero, Portfolio, and Gallery.

## High-Level Architecture
- **Frontend**: React 19 SPA.
- **Build Tool**: Vite.
- **Entry Point**: `index.tsx` mounts the `App` component into `index.html`.
- **Global Styles**: Defined in `index.html` (Tailwind CDN + Internal CSS).
- **Integration**: Designed to run within an iframe or standalone environment, supporting external API keys (Gemini).
