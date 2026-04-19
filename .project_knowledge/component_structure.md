# Component Structure

The application follows a modular React component structure:

## Root Components
- `App.tsx`: The main layout container. Manages the global scroll progress and orchestrates the rendering of sections.
- `index.tsx`: The React entry point.

## UI Components (`components/`)
- `Header.tsx`:
    - Displays the profile image.
    - Contains `SocialBadge` sub-components for Instagram, Discord, and YouTube links.
- `Hero.tsx`:
    - Features a typing effect with cycling phrases ("app companies", "tech startups", etc.).
    - Includes a call-to-action button ("about me").
- `PortfolioCards.tsx`:
    - Displays a list of `Card` components representing projects (10x Studio, Ninja App Studio, HeightX).
    - Supports both links and custom click handlers.
- `Gallery.tsx`:
    - A 2-column grid of images from the `assets/` folder.
    - Features a grayscale-to-color transition on hover.
- `CosmicFooter.tsx`:
    - Provides the fixed background layer.
    - Generates 95 dynamic "stars" with randomized positions, sizes, and drift/twinkle animations.
- `BottomNav.tsx`: (Currently commented out in `App.tsx`)
    - A floating navigation bar with icons for Home, Portfolio, etc.

## Layout Logic
- The `App` component uses `framer-motion`'s `useScroll` and `useTransform` to create a subtle parallax effect on the main content as the user scrolls.
