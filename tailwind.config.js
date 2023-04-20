/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-red": "var(--dark-red)",
        "standart-red": "var(--standart-red)",
        "red": "var(--red)",

        "sec-black": "var(--sec-black)",
        "sec-purple": "var(--sec-purple)",
        "sec-white": "var(--sec-white)",

        /*where is gray-1 ???*/
        "gray-2": "var(--gray-2)",
        "gray-3": "var(--gray-3)",
        "gray-4": "var(--gray-4)",

        "black": "var(--black)",
        "black-2": "var(--black-2)",
        "black-3": "var(--black-3)",  
      },
    },
  },
  plugins: [],
}
