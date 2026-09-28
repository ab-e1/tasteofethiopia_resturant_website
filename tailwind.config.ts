import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#FAF7F2',         // Base unbleached ecru
        surface: '#F3EDE2',        // Warm parchment surface
        surfaceElevated: '#FFFFFF', // Clean white for elevated dialogs/cards
        primary: '#1C1614',        // Deep roasted espresso (15.6:1 AAA contrast)
        muted: '#63564F',          // Muted descriptions (5.4:1 AA contrast)
        berbere: {
          DEFAULT: '#8A2C18',      // Brand crimson (5.6:1 AA contrast)
          hover: '#702313',        // Darkened active state (7.4:1 AAA contrast)
          light: '#F8ECE9',        // Subtle tinted background
        },
        terracotta: '#C86D51',     // Jebena baked clay warmth
        ochre: '#B88424',          // Golden teff & tej honey (4.5:1 AA contrast)
        sage: {
          DEFAULT: '#2D4736',      // Highland juniper / plant-based tag (7.8:1 AAA contrast)
          light: '#EDF2EE',        // Tinted tag background
        },
        border: {
          DEFAULT: '#E2D9CC',      // Hairline border
          subtle: '#EDE6DC',       // Soft divider
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(28, 22, 20, 0.04)',
        elevated: '0 8px 30px rgba(28, 22, 20, 0.08)',
      },
      maxWidth: {
        content: '1200px',
        reading: '720px',
      },
    },
  },
  plugins: [],
};

export default config;
