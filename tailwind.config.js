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
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
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
  },
  plugins: [],
}

