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
        scrolled ? "bg-[#1E1E1E]/95 shadow-md" : "bg-[#1E1E1E]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-20 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/img/layout/logoHeader.png"
            alt="Logo Domingo González & Cía"
            width={180}
            height={50}
            priority
          />
        </div>

        {/* Menú */}
        <ul className="flex flex-row space-x-12 font-['Hanken_Grotesk'] text-[16px] text-white list-none">
          <li>
            <a href="#home" className="hover:text-gray-300 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#empresa" className="hover:text-gray-300 transition">
              La Empresa
            </a>
          </li>
          <li>
            <a href="#servicios" className="hover:text-gray-300 transition">
              Servicios
            </a>
          </li>
          <li>
            <a href="#productos" className="hover:text-gray-300 transition">
              Producto
            </a>
          </li>
          <li>
            <a href="#contacto" className="hover:text-gray-300 transition">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
