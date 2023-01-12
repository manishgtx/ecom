/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}'
],
  theme: {
    extend: {
      fontFamily: {
        cabin: "'Cabin', sans-serif",
      }
    },
  },
  plugins: [],
}
