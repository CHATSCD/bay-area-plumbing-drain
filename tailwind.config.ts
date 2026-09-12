import type { Config } from 'tailwindcss'

/**
 * Brand: royal blue (trust / authority) + polished brass (premium, high-contrast CTAs).
 * Brass buttons sit on royal-blue backgrounds, so CTA contrast stays strong on mobile.
 */
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#eff4ff',
          100: '#dbe5ff',
          200: '#bfd0ff',
          300: '#93aeff',
          400: '#6081fc',
          500: '#3b5af5',
          600: '#2539e9',
          700: '#1c2bd6',
          800: '#1a25ae',
          900: '#1b2789',
          950: '#0f1745',
        },
        brass: {
          50: '#fdf9ed',
          100: '#f9efcd',
          200: '#f2dd97',
          300: '#e9c661',
          400: '#e0b034',
          500: '#c9991f',
          600: '#a87617',
          700: '#855715',
          800: '#6f4618',
          900: '#5e3a19',
          950: '#361e0a',
        },
      },
      fontFamily: {
        // System stack only: zero font requests, instant first paint on 4G.
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        cta: '0 14px 30px -12px rgba(201, 153, 31, 0.65)',
        card: '0 1px 2px rgba(15, 23, 69, 0.06), 0 8px 24px -18px rgba(15, 23, 69, 0.35)',
      },
    },
  },
  plugins: [],
}

export default config
