module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				"55%": "55%",
				"45%": "45%",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
