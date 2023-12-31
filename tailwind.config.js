/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      keyframes: {
        stickySlideDown: {
          '0%': { transform: 'translateY(-100%);' },
          '100%': { transform: 'translateY(0%);' },
        },
      },
      animation: {
        slideDown: 'stickySlideDown 0.65s cubic-bezier(0.23, 1, 0.32, 1) both',
      },
      cursor: {
        close: 'url(/assets/images/close.png) 16 16, default',
      },
      backgroundPosition: {
        leftCenter: 'left center',
      },
      boxShadow: {
        mainMenu: '3px 3px 15px 0 rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        titillium: '"Titillium Web", sans-serif',
        Flaticon: ['Flaticon'],
        raleway: '"Raleway", sans-serif',
        josefin: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        white: {
          0: '#ffffff',
          1: '#e3e2e2',
          100: '#FFFFFF17',
        },
        black: {
          0: '#2a2a2a',
          1: '#2f2f2f',
          2: '#555555',
          3: '#1a1a1a',
          4: '#050505',
          5: '#323232',
          overlay: 'rgba(0, 0, 0, 0.7)',
        },
        gray: {
          0: '#B6B6B6',
          1: 'rgba(255, 255, 255, 0.4)',
          2: '#444444',
          3: '#ffffff1a',
          4: '#9397a7',
          5: '#A3A3A3',
          6: '#9f9e9e',
          7: '#e0e0e0',
          8: '#f4f4f4',
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        blue: {
          100: '#ebf8ff',
          200: '#bee3f8',
          300: '#90cdf4',
          400: '#63b3ed',
          500: '#4299e1',
          600: '#3182ce',
          700: '#2b6cb0',
          800: '#2c5282',
          900: '#2a4365',
        },
        orange: {
          0: '#EA831A',
        },
      },
      flex: {
        1: '1 0 33.33%',
      },
      backgroundImage: {
        countup: 'url(/images/about-us/c-up.jpg)',
        slidePattern: 'url(/images/bg1-studio.jpg)',
      },
    },
  },
  plugins: [],
};
