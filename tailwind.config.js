/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-red": "#642022",
        "standart-red": "#ab0917",
        "red": "#e5010a",

        "sec-black": "#2b2a29",
        "sec-purple": "#b18f91",
        "sec-white": "#fefefe",

        /*where is gray-1 ???*/
        "gray-2": "#4f4f4f",
        "gray-3": "#828282",
        "gray-4": "#bdbdbd",

        "black": "#000000",
        "black-2": "#101010",
        "black-3": "#191919",
      },
    },
  },
  plugins: [],
}
