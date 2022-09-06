/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        800: "800px",
      },
      backgroundImage:{
        'slider':"url('./img/chef-bg.png')"
      }
      
    },
  },
  plugins: [],
}