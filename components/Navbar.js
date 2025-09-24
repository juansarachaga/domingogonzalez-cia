"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
        <ul className="flex flex-row gap-12 font-normal text-[16px]">
          <li>
            <a href="#inicio" className="text-white/50 hover:text-white transition">
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className="text-white/50 hover:text-white transition">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" className="text-white/50 hover:text-white transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-white/50 hover:text-white transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
