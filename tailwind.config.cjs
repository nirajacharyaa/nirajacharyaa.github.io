/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000300",
        primaryGreen: "#00df9a",
        ghiu: "#fdfc65",
      },
      boxShadow: {
        inner: "0px -150px 60px -40px rgba(0,0,0,1) inset",
      },
      fontFamily: {
        nabla: ["Nabla", "sans-serif"],
        gothamm: ["Gotham-Medium", "sans-serif"],
        gothamb: ["Gotham-Bold"],
        gothaml: ["Gotham-Light"],
      },
      dropShadow: {
        pahelo: ["0px 0px 5px #fef08a", "0px 0px 20px #000"],
      },
    },
  },
  plugins: [],
};
