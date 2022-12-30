/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "992px" },
      md: { max: "768px" },
      sm: { max: "480px" },
    },
    container: {
      padding: "20px",
    },
    extend: {
      colors: {
        black: "#4d4244",
        red: "#ff0d38",
        darkred: "#d70026",
        gray: "#747474",
        darkgray: "#272727",
      },
      boxShadow: {
        customRed: "0px 0px 30px rgba(255, 13, 56, 0.21)",
      },
    },
  },
  plugins: [],
};
