/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alok: "#BDBDBD",
        bg: "#333333",
        btnBg: "#FF5252",
        btnHover: "#FF1744",
      }
    },
  },
  plugins: [],
}