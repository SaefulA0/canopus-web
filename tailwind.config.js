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
        heroBG: "url(../public/imgs/background/bg-home.png)",
        homeAboutBG: "url(../public/imgs/background/bg-home2.png)",
        homeForumBG: "url(../public/imgs/astroMod/astro-forum3.png)",
      },
    },
    colors: {
      mainColor: "#282F6A",
      secondColor: "#FF9636",
      thirdColor: "#50568D",
      textMainColor: "#F6F6F6",
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
