import { Hanken_Grotesk } from "next/font/google"
import "./globals.css"

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
})

export const metadata = {
  title: "Domingo González & Cía",
  description: "Sitio oficial",
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${hanken.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
