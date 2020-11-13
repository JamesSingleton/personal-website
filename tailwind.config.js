// tailwind.config.js
module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '196': '49.6055rem'
      }
    }
  }
}