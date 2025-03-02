/** @type {import('tailwindcss').Config} */
    export default {
      content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
      theme: {
        extend: {
          fontFamily: {
            inter: ['Inter', 'sans-serif'],
            manrope: ['Manrope', 'sans-serif'],
          },
          colors: {
            'italian-green': '#009246',
            'italian-white': '#ffffff',
            'italian-red': '#ce2b37',
            'gold': '#d4af37',
            'terracotta': '#c84a31',
            'dark-blue': '#1a2a3a',
          },
          animation: {
            'float': 'float 6s ease-in-out infinite',
            'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-20px)' },
            }
          }
        },
      },
      plugins: [],
    };
