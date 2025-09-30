"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#empresa", label: "La Empresa" },
    { href: "#servicios", label: "Servicios" },
    { href: "#productos", label: "Producto" },
    { href: "#contacto", label: "Contacto" },
  ]
//quiero que el logo sea un enlace a la home
//copilot funciona??
//que el nav bar tenga un alto minimo de 80px y un maximo de 100px

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300  ${
        scrolled
          ? "bg-[#222]/90 backdrop-blur-md shadow-md"
          : "bg-[#222]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-3 flex md:flex-row flex-col md:items-center items-center justify-between md:min-h-[80px] md:max-h-[100px] md:h-[80px] min-h-[100px] h-[100px]">

        {/* Logo */}
        <div className="md:w-auto w-full flex justify-center md:justify-start items-center m-[10px]">
          <a href="#home">
            <Image
              src="/img/layout/logoHeader.png"
              alt="Logo Domingo González & Cía"
              width={240}
              height={40}
              priority
            />
          </a>
        </div>

        {/* Menú desktop */}
        <ul className="hidden md:flex items-center gap-10 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white text-lg font-medium tracking-wide hover:text-[#7e797a] transition"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa solo en mobile */}
        <div className="md:hidden w-full flex justify-center m-[10px] items-center">
          <button
            className="md:hidden text-white border border-white p-"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-[#222]/95 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-normal hover:text-[#7e797a] transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
