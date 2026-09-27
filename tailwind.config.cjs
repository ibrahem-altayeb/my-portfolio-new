/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fad: "fad .5s linear",
      },
      keyframes: {
        fad: {
          "0%": { transform: " translateX(100px)" },
          "100%": { transform: " translateX(0)" },
        },
      },
      fontFamily: {
        shalimar: ['"Shalimar"', "cursive"],
      },
      container: {
        center: true,
        screens: {
          lg: "1000px",
          xl: "1000px",
          "2xl": "1000px",
        },
      },
    },
  },
  plugins: [],
};
