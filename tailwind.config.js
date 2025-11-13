/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#fdfdf6',
          100: '#f8f6e7',
          200: '#eee8c8',
          300: '#e1d39b',
          400: '#d5bc6d',
          500: '#cda24e',
          600: '#b07b3a',
          700: '#8b5b30',
          800: '#6e472b',
          900: '#593b25',
          950: '#3e2a18',
        },
      },
    },
  },
  plugins: [],
}

