/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 2s linear',
        'spin-forever': 'spin 2s linear infinite',
        'ping': 'ping 2s linear',
        'updown': 'updown 2.5s linear infinite',
      },
      fontFamily: {
        'orbit': ['Orbit', 'sans-serif']
      },
      keyframes: {
        updown: {
          '0%': {
            transform: 'translateY(-4px)',
          },
          '50%': {
            transform: 'translateY(3px)',
          },
          '100%': {
            transform: 'translateY(-4px)',
          }
        }
      },
    },
    
  },
  plugins: [],
}