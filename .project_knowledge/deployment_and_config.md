# Deployment & Configuration

## Build System
- **Vite**: Configured in `vite.config.ts`.
- **Port**: 3000.
- **Host**: `0.0.0.0` (accessible on local network).

## Environment Variables
The project is configured to use environment variables via Vite's `loadEnv`:
- `GEMINI_API_KEY`: Defined in the config and mapped to `process.env.GEMINI_API_KEY`.
- *Note*: While defined in the config, the current components do not seem to make active calls to the Gemini API yet.

## Scripts
- `npm run dev`: Starts the Vite development server.
- `npm run build`: Generates the production build in the `dist/` directory.
- `npm run preview`: Locally previews the production build.

## TypeScript Configuration
- `tsconfig.json`: Standard React/Vite TypeScript configuration.
- `App.tsx` and components use `.tsx` extension for React with JSX.
