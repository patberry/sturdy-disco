/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ad-red': '#E63946',
        'ad-black': '#1A1A1A',
        'ad-yellow': '#FFD60A',
        'ad-beige': '#FAF8F3',
      },
    },
  },
  plugins: [],
}
