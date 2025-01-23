/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-black': '#010101'
      }
    },
  },
  plugins: [],
}
