/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],

  theme: {
    extend: {
      // colors: {
      //   primary: "#000000",
      //   page_background: "#FFCB37",
      //   white: "#ffffff",
      //   lightYellow: "#f7f799",
      //   hoverBackground: "#ddbe45",
      // },
      fontFamily: {
        sans: ["poppins"],
      },
    },
  },
  plugins: [],
};
