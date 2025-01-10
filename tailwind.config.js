/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        incompleeta: ['incompleeta', 'sans-serif'],
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      }
    }
  },
  plugins: [],
}