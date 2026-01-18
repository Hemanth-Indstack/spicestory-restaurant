/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"]
      },
      colors: {
        dark: "#1a1a1a",
        accent: "#f1c40f"
      }
    }
  },
  plugins: []
};
