
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F0',
          200: '#F5EFE1',
        },
      },
    },
  },
  plugins: [],
}