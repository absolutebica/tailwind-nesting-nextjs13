/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    daisyui: {
      themes: [
			{
				mb: {
					"primary": "#0d8aee",
					"secondary": "#dfdfdf",
					"accent": "#37CDBE", 
					"neutral": "#fafafa",
					"base-100": "#FFFFFF",
					"info": "#b3dbfb",
					"success": "#4caf50",
					"warning": "#ffd200",
					"error": "#d32f2f",
					},
			},
			"light",
			"dark"
      ]
    },
    plugins: [require("daisyui")],
  }