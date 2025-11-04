/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // agrega ./src si usás esa carpeta
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
      screens: {
        // ✅ breakpoint para 768–1215 px
        mid: { raw: "(min-width: 768px) and (max-width: 1215px)" },

        // ✅ el resto de tus breakpoints extra
        "xl-1300": "1300px",
        "xl-1366": "1366px",
        xxl: "1440px",
        uhd: "1920px",
      },
    },
  },
  plugins: [],
}
