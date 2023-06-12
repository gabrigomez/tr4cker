/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbit': ['Orbit', 'sans-serif']
      },
      animation: {
        'spin': 'spin 2s linear',
        'ping': 'ping 2s linear',
      }
    },
  },
  plugins: [],
}