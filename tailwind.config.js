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
        shadowThree: "10px 15px 15px -5px rgb(0 0 0 / 0.1), 5px 8px 5px -6px rgb(0 0 0 / 0.1)",
        shadowFour: "5px 5px 8px -1px rgba(1,1,1,0.7)",
        innerShadow1: "inset 5px 5px 8px -1px #ffffff",
      },
      backgroundImage: {
        'projectFiveCover': "url('/src/assets/images/project_five/projectCover.png')",
        'projectFiveMobCover': "url('/src/assets/images/project_five/projectMobCover.png')",
      },
    },
  },
  plugins: [],
}

