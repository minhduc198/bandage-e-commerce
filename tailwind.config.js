/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#1BB275",
      secondary: "#102C5B",
      white: "#ffffff",
      "black-50": "#252B42",
      black: "#333333",
      grey: "#F6F6F6",
      "grey-100": "#737373",
      "grey-90": "#BDBDBD",
      "grey-80": "#D0D0D0",
      "grey-50": "#EBEBEB",

      light: "#DDDDDDB5",
      lightGrey: "#F3F6FD",
      blue: "#23A6F0",
      red: "#E74040",
      "blue-100": "#2A7CC7",
      "blue-50": "#B2E3FF",
      green: "#2DC071",
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "15.5px",
        sm: "24px",
        md: "80px",
        lg: "100px",
        xl: "150px",
        "2xl": "195px",
      },
    },
    screens: {
      sm: "415px",
      // => @media (min-width: 415px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
