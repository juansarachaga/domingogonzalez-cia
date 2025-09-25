"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react" // podés cambiar por Heroicons si querés

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-md"
          : "bg-black/50 backdrop-blur-md"
          
      }`}
    >
      <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Image
          src="/img/layout/logoHeader.png"
          alt="Logo Domingo González & Cía"
          width={280}
          height={45}
          priority
          className="mr-8"
        />

        {/* Menú desktop */}
        <ul className="hidden md:flex flex-row gap-10 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white hover:text-red-600 transition font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa solo en mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-6 py-6">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg hover:text-red-600 transition font-medium"
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
