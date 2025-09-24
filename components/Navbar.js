"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/img/layout/logoHeader.png"
          alt="Logo Domingo González & Cía"
          width={160}
          height={40}
          priority
        />

        {/* Menú */}
        <ul className="flex gap-10 text-[16px] font-normal">
          <li>
            <a href="#" className="text-white/70 hover:text-white transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" className="text-white/70 hover:text-white transition">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#services" className="text-white/70 hover:text-white transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white/70 hover:text-white transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
