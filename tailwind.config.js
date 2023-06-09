import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}", "./assets/icons/*.html"];
export const theme = {
	colors: {
		"dark-red": "var(--dark-red)",
		"standart-red": "var(--standart-red)",
		red: "var(--red)",

		"sec-black": "var(--sec-black)",
		"sec-purple": "var(--sec-purple)",
		"sec-white": "var(--sec-white)",

		/*where is gray-1 ???*/
		"gray-2": "var(--gray-2)",
		"gray-3": "var(--gray-3)",
		"gray-4": "var(--gray-4)",

		black: "var(--black)",
		"black-2": "var(--black-2)",
		"black-3": "var(--black-3)",
	},
	fontFamily: {
		roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
		kiona: ["Kiona"],
	},
};
export const plugins = [];
