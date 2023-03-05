/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend:{
      colors:{
        "nav-blue-active":"#475568",
        "nav-blue-inactive":"#dee0e5",
        "nav-blue":"#f9fafb"
      }
    },
    minHeight:{
      "1/4":"25%"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}