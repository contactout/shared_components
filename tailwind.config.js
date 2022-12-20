/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/components/**/*.tsx', './stories/*'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter'],
      },
      boxShadow: {
        input: '0 0 0 3px #6552FF33',
        'input-error': '0 0 0 3px #E0282833',
      },
      colors: {
        white: '#FFFFFF',
        gray: {
          25: '#FCFCFC',
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D1D1D6',
          400: '#A0A0AB',
          500: '#70707B',
          600: '#51525C',
          700: '#3F3F46',
          800: '#26272B',
          900: '#18181B',
        },
        primary: {
          25: '#F8F7FF',
          50: '#F0EEFF',
          100: '#E0DCFF',
          200: '#D1CBFF',
          300: '#B8AFFF',
          400: '#988BFF',
          500: '#8170FF',
          600: '#6552FF',
          700: '#3222B1',
          800: '#1F1280',
          900: '#11075C',
        },
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
      },
    },
  },
  plugins: [],
}