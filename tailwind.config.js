/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary : '#ffe2d5',
        secondary : {
          100 : '#e2e2d5' ,
          200 : '#888883'
        }
      },
      fontFamily : {
        body : ['Nunito']
      }
    },
  },
  plugins: [],
}
