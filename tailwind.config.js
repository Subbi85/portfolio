/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        }
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s',
      },
      fontFamily:{
        signature:['Great Vibes'],
        body:['Railway']
      },
      rotate:{
        '10': '10deg'
      },
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)"
      },
    
    },
    variants: {
      extend: {
        dropShadow: ['hover'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.drop-shadow-red-500': {
          filter: 'drop-shadow(0 4px 6px #ef4444)',
        },
        '.drop-shadow-blue-500': {
          filter: 'drop-shadow(0 4px 6px #1e40af)',
        },
        '.drop-shadow-yellow-400': {
          filter: 'drop-shadow(0 4px 6px #facc15)',
        },
        '.drop-shadow-purple-400': {
          filter: 'drop-shadow(0 4px 6px #c084fc)',
        },
        '.drop-shadow-red-400': {
          filter: 'drop-shadow(0 4px 6px #f87171)',
        },
        '.drop-shadow-orange-400': {
          filter: 'drop-shadow(0 4px 6px #fb923c)',
        },
        '.drop-shadow-blue-400': {
          filter: 'drop-shadow(0 4px 6px #9333ea)',
        },
        '.drop-shadow-purple-600': {
          filter: 'drop-shadow(0 4px 6px #9333ea)',
        },
        '.drop-shadow-sky-500': {
          filter: 'drop-shadow(0 4px 6px #0ea5e9)',
        },






      }, ['responsive', 'hover']);
    }
  ],
}

