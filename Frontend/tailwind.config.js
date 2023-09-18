/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#6DEED8",
          200: "#48EACF",
          300: "#24E5C5",
          400: "#F87171",
          500: "#13A48C",
          600: "#11927D",
          700: "#0F806D",
        },
        secondary: {
          100: "#B2FBCB",
          200: "#9FF9BE",
          300: "#8BF8B1",
          400: "#71F79F",
          500: "#51F58B",
          600: "#2BF371",
          700: "#18F264",
        },
        tertiary: {
          100: "#78E2DF",
          200: "#68DFDB",
          300: "#57DBD7",
          400: "#3DD6D0",
          500: "#35D4CF",
          600: "#2BCAC5",
          700: "#27B9B4",
        },
        quaternary: {
          100: "#7775A9",
          200: "#6A68A1",
          300: "#58568A",
          400: "#414066",
          500: "#383758",
          600: "#302F4B",
          700: "#28273E",
        },
        quinary: {
          100: "#365953",
          200: "#2E4D47",
          300: "#26403C",
          400: "#1B2D2A",
          500: "#172624",
          600: "#0F1A18",
          700: "#080D0C",
        },
        whiteish: {
          DEFAULT: "#F9F9F9",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
        extrabod: 800,
      },
      fontSize: {
        body: ["1rem", { lineHeight: "1.5rem" }],
        h1: ["2.25rem", { lineHeight: "3rem" }],
        h2: ["1.87rem", { lineHeight: "2.5rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        h4: ["1.25rem", { lineHeight: "1.75rem" }],
        h5: ["1.125rem", { lineHeight: "1.5rem" }],
        h6: ["1rem", { lineHeight: "1.25rem" }],
        navigation: ["1.125rem", { lineHeight: "1rem" }],
        button: ["1rem", { lineHeight: "1rem" }],
        caption: ["0.875rem", { lineHeight: "0.75rem" }],
      },
      animation: {
        slideInRight: "slideInRight 0.5s ease-in-out",
      },
      keyframes: {
        slideInRight: {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      screens: {
        nav: "900px",
      },
    },
  },
  plugins: [],
};
