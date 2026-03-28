/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FFFBEB',
          dark: '#FEF3C7',
        },
        neo: {
          DEFAULT: '#60A5FA',
          dark: '#2563EB',
        },
      },
      boxShadow: {
        brutal: '4px 4px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
      },
      keyframes: {
        // Cow walks left → right (matches the direction the emoji faces)
        walkAcross: {
          '0%':   { transform: 'translateX(-80px)' },
          '100%': { transform: 'translateX(110vw)' },
        },
        // Gentle vertical bob — applied to inner wrapper so it compounds with walkAcross
        walkBob: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
        // Clouds drift right → left
        cloudDrift: {
          '0%':   { transform: 'translateX(110vw)' },
          '100%': { transform: 'translateX(-220px)' },
        },
        // Section fade-in on scroll
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Sticky CTA slides up from bottom
        slideUp: {
          '0%':   { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-up': 'slideUp 0.35s ease-out forwards',
      },
    },
  },
  plugins: [],
}
