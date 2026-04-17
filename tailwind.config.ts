import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Page background — true black
        page: '#0a0a0a',
        // Surface — slightly lifted from page
        surface: '#111111',
        // Borders
        'border-dim': 'rgba(255,255,255,0.08)',
        'border-soft': 'rgba(255,255,255,0.14)',
        // Text
        'text-primary': '#f0ede8',    // warm off-white — not pure white
        'text-secondary': '#888882',  // mid-gray for body
        'text-tertiary': '#4a4a48',   // very dim — captions, footnotes
        // Accent
        'accent-warm': '#c8b89a',     // warm parchment — links, highlights
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '560px',
        wide: '720px',
        stack: '680px',
      },
      // Card tilt angles for the hero stack
      rotate: {
        '-12': '-12deg',
        '-6': '-6deg',
        '-3': '-3deg',
        '3': '3deg',
        '6': '6deg',
        '9': '9deg',
      },
      transitionDuration: {
        '400': '400ms',
      },
      // Vertical spacing scale — generous
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '28': '7rem',
        '36': '9rem',
        '44': '11rem',
        '52': '13rem',
        '72': '18rem',
        '80': '20rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};

export default config;
