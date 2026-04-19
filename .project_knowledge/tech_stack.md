# Technology Stack

## Core
- **React 19**: Modern UI library for building the interface.
- **TypeScript**: Used for type safety and better developer experience.
- **Vite**: Fast build tool and dev server.

## Styling & UI
- **Tailwind CSS**: Utility-first CSS framework (loaded via CDN in `index.html`).
- **Framer Motion**: Production-ready motion library for React (used for scroll animations and transitions).
- **Google Fonts**: Uses 'Inter' (Sans) and 'Playfair Display' (Serif Italic) for a premium typographic feel.

## Assets
- Static images (JPG/PNG) stored in the `assets/` directory.
- SVGs used for icons (Social badges, 10x Studio logo).

## External Dependencies (via CDN/ESM)
- `react`, `react-dom`, `framer-motion` are mapped via `importmap` in `index.html` to `esm.sh`.
