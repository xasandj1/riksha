/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        ttinter: "Ttinterface, sans-serif",
      },
      fontWeight: {
        regular: 400,
      },
      colors: {
        primary: "#C95C3F",
        white: "#FFFFFF",
        dark: "#1B1B1B",
        secondary: "#A1DCDC",
        grey: "#B7B7B7",
        lghite: "#F5F5F5",
      },
      backgroundImage:{
        bgbtn:"url('/assets/img/bgbtn.svg')",
      }
    },
  },
  plugins: [],
};
