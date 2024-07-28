/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      primary: "#1BB275",
      secondary: "#102C5B",
      white: "#ffffff",
      black: "#333333",
      grey: "#F6F6F6",
      "grey-100": "#737373",
      light: "#DDDDDDB5",
      lightGrey: "#F3F6FD",
      blue: "#23A6F0",
      red: "#E74040",
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
