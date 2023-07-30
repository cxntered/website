/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		colors: {
			primary: "#1d1d1d",
			white: "#ffffff",
			gray: "#d9d9d9",
			footer: "#ffffff39",
			current: "#252525",
			hover: "#353535",
			discord: "#5865f2",
			twitter: "#1d9bf0",
			globe: "#1c70e7",
			robot: "#90a4ae",
		}
	},
	plugins: []
};
