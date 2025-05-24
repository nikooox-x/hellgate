/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        imperial: {
          50: '#000000',  // Black
          100: '#0a0a0a', // Very dark gray
          200: '#141414', // Dark gray
          300: '#1f1f1f', // Medium dark gray
          400: '#ff1a1a', // Bright red
          500: '#ff0000', // Pure red
          600: '#cc0000', // Dark red
          700: '#990000', // Darker red
          800: '#660000', // Very dark red
          900: '#000000', // Black
        },
      },
      fontFamily: {
        sans: ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.red.500), 0 0 20px theme(colors.red.600)',
      },
    },
  },
  plugins: [],
};