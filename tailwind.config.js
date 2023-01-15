/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBG: "url(../public/background/bg-home.png)",
      },
    },
    colors: {
      mainColor: "#282F6A",
      secondColor: "#FF9636",
      thirdColor: "#50568D",
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
