/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors:{
        amazon:{
          background:"#EAEDED",
          light_blue:"#232F3A",
          yellow:"#febd69",
          DEFAULT:"#131921",
        }
      }
    },
  },
  plugins: [],
}