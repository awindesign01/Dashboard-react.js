module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontSize: {
				xxs: "10px",
			},
			width: {
				"10%": "10%",
				"12%": "12%",
				"15%": "15%",
				"25%": "25%",
				"30%": "30%",
				"55%": "55%",
				"60%": "60%",
				"63.5%": "63.5%",
				"68%": "68%",
				"70%": "70%",
				"45%": "45%",
				"85%": "85%",
				"88%": "88%",
				"90%": "90%",
				"95%": "95%",
				"98%": "98%",
			},
			height: {
				"43rem": "43rem",
				"43.5rem": "43.5rem",
				"96rem": "96rem",
				"10%": "10%",
				"15%": "15%",
				"30%": "30%",
				"45%": "45%",
				"90%": "90%",
			},
			backgroundImage: {
				"main-image-1": "url('/src/Assets/image/1.png')",
				"main-image-2": "url('/src/Assets/image/2.png')",
				"subsidiary-image-1": "url('/src/Assets/image/11.jfif')",
				"subsidiary-image-2": "url('/src/Assets/image/22.jfif')",
				"subsidiary-image-3": "url('/src/Assets/image/33.jfif')",
				"subsidiary-image-4": "url('/src/Assets/image/44.jfif')",
				"image-1-s-streaming": "url('/src/Assets/ImageSStreaming/images-(1).jfif')",
				"image-2-s-streaming": "url('/src/Assets/ImageSStreaming/images.jfif')",
				"image-3-s-streaming":
					"url('/src/Assets/ImageSStreaming/people-raising-hands-concert_249578-737.jpg')",
			},
			backgroundSize: {
				"50%": "50%",
				"100%": "100%",
			},
			colors: {
				"green-1": "#1aac28",
				"red-1": "#b62327",
				"red-2": "rgba(239, 68, 68)",
				"black-1": "rgba(23,23,23,0.95)",
				"black-2": "#202020",
				"black-3": "#303030",
				"yellow-1": "rgba(252, 211, 77)",
			},
			animation: {
				bounce_right: "bounce_right 1.5s ease-in-out infinite",
			},
			keyframes: {
				bounce_right: {
					"0%, 100%": { transform: "translateX(0)" },
					"50%": { transform: "translateX(5px)" },
				},
			},
		},
	},
	variants: {
		extend: {
			divideColor: ["group-hover"],
			transitionProperty: ["hover", "focus", "active"],
			backgroundColor: ["active", "visited"],
			textColor: ["active", "visited"],
		},
	},
	plugins: [],
};
