/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#FF0000",
          black: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
