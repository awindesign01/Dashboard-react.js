module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			width: {
				"55%": "55%",
				"45%": "45%",
				"90%": "90%",
			},
			height: {
				"43rem": "43rem",
				"96rem": "96rem",
			},
		},
	},
	variants: {
		extend: {
			divideColor: ['group-hover'],
			transitionProperty: ['hover', 'focus'],
		},
	},
	plugins: [],
};
