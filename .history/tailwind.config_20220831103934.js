/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        800: "800px",
        580:"400px",
        620:"620px",
        122:"122px",
        60:"60px",
        94:"94px",
        1200:"1200px",
        80:"80px",
        238:"238px",
        330:"330px",
        '40%':"40%"

      },
      backgroundImage:{
        'slider':"url('./img/chef-bg.png')",
        'sliderPizza':"url('./img/hero_pizza.png')"
      },
      opacity:{
        0.3:"0.3"
      },
      fontFamily: {
        'rubik':['Rubik, sans-serif']
      }
      
    },
  },
  plugins: [],
}