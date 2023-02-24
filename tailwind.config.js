/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gpt-dark": "#202123",
        "gpt-gray-1": "#343541",
        "gpt-gray-2": "#40414f",
        "gpt-gray-3": "#3e3f4b",
        "gpt-nav-hover": "#FFFFFF19",
        "gpt-white-1": "#ececf1",
        "gpt-white-2": "#f7f7f8",
        "gpt-white-hover": "#d9d9e3",
        "gpt-cta-1": "#10a37f",
        "gpt-cta-hover": "#1a7f64",
        "gpt-notice": "#fae69e",
        "overlay-black": "rgba(0, 0, 0, 0.8)",
      },
      width: {
        215: "215px",
        357: "357px",
        557: "557px",
      },
      minWidth: {
        155: "155px",
        190: "190px",
        215: "215px",
        240: "240px",
        256: "256px",
        327: "327px",
      },
      height: {
        300: "300px",
        557: "557px",
      },
      inset: {
        45: "45%",
        65: "65px",
      },
      spacing: {
        65: "65px",
      },
      flex: {
        2: "2 2 0%",
      },
      lineHeight: {
        70: "70px",
      },
      zIndex: {
        "-5": "-5",
        0: "0",
      },
    },
    // screens: {
    //   lg: { max: "1800px" },
    //   md: { max: "990px" },
    //   sm: { max: "600px" },
    //   xs: { max: "400px" },
    //   minmd: "1700px",
    //   minlg: "2100px",
    // },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
