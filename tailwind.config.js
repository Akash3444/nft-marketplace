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
      'light-gray': '#CCCCCC',
      caption: '#858584',
      white: '#FFFFFF',
      primary: '#A259FF',
    },
    extend: {
      fontFamily: {
        'space-mono': "'Space Mono', monospace",
        'work-sans': "'Work Sans', sans-serif",
      },
      borderRadius: {
        brand: '20px',
      },
      padding: {
        7.5: '30px',
      },
      margin: {
        7.5: '30px',
      },
      gap: {
        7.5: '30px',
      },
      height: {
        11.5: '46px',
      },
      maxWidth: {
        brand: '1049px',
      },
      screens: {
        tablet: '834px',
        desktop: '1280px',
      },
    },
  },
  plugins: [],
};
