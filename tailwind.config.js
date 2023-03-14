/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      dark: '#2B2B2B',
      'dark-gray': '#3B3B3B',
      caption: '#858584',
      white: '#FFFFFF',
      primary: '#A259FF',
    },
    extend: {
      fontFamily: {
        'space-mono': "'Space Mono', monospace",
        'work-sans': "'Work Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
