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
        planetBG: "url(../public/imgs/background/bg-konten.png)",
        heroBG: "url(../public/imgs/background/bg-home.png)",
        homeAboutBG: "url(../public/imgs/background/bg-about1.png)",
        homeAboutBG2: "url(../public/imgs/background/bg-about2.png)",
        homeForumBG: "url(../public/imgs/astroMod/astro-forum3.png)",
        homeAbout2BG: "url(../public/imgs/background/bg-home2.png)",
        contentBG: "url(../public/imgs/background/bg-konten.png)",
        loginBG: "url(../public/imgs/background/bg-login.png)",
      },
    },
    colors: {
      mainColor: "#282F6A",
      secondColor: "#FD841F",
      secondColorHover: "#E14D2A",
      thirdColor: "#50568D",
      textMainColor: "#F6F6F6",
    },
    fontFamily: {
      Poppins: ["Poppins"],
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
