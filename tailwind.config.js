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
        15: '60px',
        18: '72px',
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
      fontSize: {
        h1: ['67px', '110%'],
        h2: ['51px', '110%'],
        h3: ['38px', '120%'],
        h4: ['28px', '140%'],
        h5: ['22px', '160%'],
        base: ['16px', '140%'],
        caption: ['12px', '110%'],
      },
      spacing: {
        7.5: '30px',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
