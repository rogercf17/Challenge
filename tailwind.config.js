/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        corDaLetra: "rgb(226 232 240)"
      }
    },
  },
  plugins: [],
}