/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,html}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-gray-100': '#f5f5f5',
        'dark-gray-800': '#1a202c',
        'hot-pink': '#ff69b4',
        'kelly-green': '#4cbb17',
      },
      fontFamily: {
        manrope: ['manrope', 'sans-serif'],
        synthetique: ['synthetique', 'sans-serif'],
      },
    },
    aspectRatio: {
      '16/9': 16 / 9,
      '4/3': 4 / 3,
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
