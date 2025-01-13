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
      },
      colors: {
        customGray: 'rgba(141, 137, 137, 1)',
        customBlue: '#0e2686',
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse 80% 80% at 100% 50%, rgba(48, 79, 204, 0.8), rgba(255, 255, 255, 0))',
        'secondary-gradient': 'radial-gradient(ellipse 50% 80% at 100% 40%, rgba(48, 79, 204, 0.8), rgba(255, 255, 255, 0))',
      },
    },
  },
  plugins: [],
}
