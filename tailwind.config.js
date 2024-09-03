/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				ct: {
					green: "hsl(75, 94%, 57%)",
					"grey-700": "hsl(0, 0%, 20%)",
					"grey-800": "hsl(0, 0%, 12%)",
					"grey-900": "hsl(0, 0%, 8%)",
				},
			},
			fontFamily: {
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	plugins: [],
};
