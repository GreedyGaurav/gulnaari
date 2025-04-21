/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fbe6e7',
          200: '#f5c7cb',
          300: '#eda0a7',
          400: '#e5727d',
          500: '#d94453',
          600: '#c62a39',
          700: '#a4212d',
          800: '#881f29',
          900: '#731e26',
          950: '#400d12',
        },
        gold: {
          50: '#fbf7ef',
          100: '#f6edda',
          200: '#edd7b5',
          300: '#e3bc86',
          400: '#d9a15b',
          500: '#d08b3c',
          600: '#bd7331',
          700: '#9d592a',
          800: '#804828',
          900: '#6b3c25',
          950: '#3b1f12',
        },
        ivory: {
          50: '#fefcf8',
          100: '#fdf9f1',
          200: '#fbf1df',
          300: '#f8e8ca',
          400: '#f3d7a5',
          500: '#eec282',
          600: '#e4a254',
          700: '#d88232',
          800: '#b2652b',
          900: '#915427',
          950: '#4e2912',
        },
      },
    },
  },
  plugins: [],
};