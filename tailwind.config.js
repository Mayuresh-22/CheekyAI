/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E91E63', // Custom pink color
        secondary: '#6E6E6E', // Custom gray color
      },
    },
    fontFamily: {
      quattrocento: ["Quattrocento", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
  },
  },
  plugins: [],
}

