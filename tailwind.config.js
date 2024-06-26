/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#ff014f", 
        cardColor: "#141618",
        cardColorHover: "#0a0b0c",    
      },
      boxShadow: {
        shadowOne: "10px 10px 10px #1c1e22, -10px -10px 10px #262a2e",
        shadowTwo: "10px 10px 10px #696969",
        shadowThree: "5px 5px 10px rgba(0.5,0.5,0.5,0.7), -5px -5px 10px rgba(0.5,0.5,0.5,0.7)",
        shadowFour: "5px 5px 10px rgba(0.5,0.5,0.5,0.7)",
      },
    },
  },
  plugins: [],
}

