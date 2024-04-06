/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "solid-pink": {
          50: "#fcf5f4",
          100: "#faeae9",
          200: "#f5d6d7",
          300: "#ecb5b6",
          400: "#e18b8f",
          500: "#d26169",
          600: "#bc4250",
          700: "#9d3342",
          800: "#8e3040",
          900: "#722938",
          950: "#3f121a",
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
