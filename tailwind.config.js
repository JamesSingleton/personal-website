// tailwind.config.js
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}