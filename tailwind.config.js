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
          DEFAULT: '#FAFAF7',
          dark: '#EDE8DC',
        },
        neo: {
          DEFAULT: '#BFDBFE',
          dark: '#1d4ed8',
        },
      },
      boxShadow: {
        brutal: '0 2px 10px rgba(0,0,0,0.08)',
        'brutal-lg': '0 4px 20px rgba(0,0,0,0.10)',
        'brutal-sm': '0 1px 4px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
