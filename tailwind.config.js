/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#12141D",
        darkBlack: "#1E2029",
        red: "#FF664F",
        green: "#04AA69",
        violet: "#855AFF",
        primaryWhite: "#FFFFFF",
        gray: "#696B76",
        darkGray: "#272932",
        lightGray: "#87888D",
      },
    },
  },
  plugins: [],
};
