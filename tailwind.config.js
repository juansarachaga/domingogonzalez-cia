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

        screens: {
    "xl-1300": "1300px",   // notebooks 14-15"
    "xl-1366": "1366px",   // resolución clásica de 14"
  },
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "sans-serif"],
      },
      screens: {
        // 👇 breakpoints adicionales
        "xl-1300": "1300px",   // notebooks de 14-15" con FHD escalado raro
        "xl-1366": "1366px",   // resolución muy común en 14"
        "xxl": "1440px",       // Macbook Pro / monitores grandes
        "uhd": "1920px",       // monitores full HD de escritorio
      },
    },
  },
  plugins: [],
}

