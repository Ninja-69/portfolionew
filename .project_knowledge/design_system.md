# Design System & Aesthetics

## Theme: "Cosmic Minimalism"
The project uses a premium dark theme characterized by deep blacks, subtle gradients, and celestial imagery.

## Color Palette
- **Background**: `#000000` (Pure Black).
- **Cards**: `#0d0d0d` (Deep Grey) with `white/5` borders.
- **Accents**: 
    - Radial gradients in the background (cyan/blue tones).
    - Social icons use brand-specific colors (Instagram gradient, YouTube red).
    - Text: Pure white (`#ffffff`) for headings, `white/60` for descriptions.

## Typography
- **Headings**: 'Playfair Display' (Italic) for a sophisticated, editorial look.
- **Body**: 'Inter' for high readability and a modern tech feel.
- **Micro-copy**: Small font sizes (10px - 14px) with tight tracking (`tracking-tight`).

## Effects & Animations
- **Noise Grain**: A fixed SVG filter (`#noiseFilter`) overlay provides a premium "analog" texture.
- **Starfield**:
    - Randomized "stars" with CSS animations (`star-drift`, `star-twinkle`).
    - Parallax movement linked to scroll.
- **Shimmer**: A linear gradient animation used for text highlights.
- **Chromatic Aberration**: A subtle text-shadow effect on hover to simulate lens distortion.
- **Mobile Constraints**: The `max-w-[420px]` constraint ensures the design remains focused and "app-like" on all screen sizes.
