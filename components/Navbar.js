"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/la-empresa", label: "La Empresa" },
    { href: "/calidad", label: "Calidad" },
    { href: "/producto", label: "Producto" },
    { href: "/contacto", label: "Contacto" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#222]/90 backdrop-blur-md shadow-md"
          : "bg-[#222]/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-3 flex md:flex-row flex-col md:items-center items-center justify-between md:h-[80px] h-[100px]">
        
        {/* Logo */}
        <div className="md:w-auto w-full flex justify-center md:justify-start items-center m-[10px] max-[1300px]:ml-6">
          <Link href="/">
            <Image
              src="/img/layout/logoHeader.png"
              alt="Logo Domingo González & Cía"
              width={240}
              height={40}
              priority
            />
          </Link>
        </div>

        {/* Menú desktop */}
        <ul className="hidden md:flex items-center gap-8 list-none max-[1300px]:mr-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm md:text-base lg:text-lg font-medium tracking-wide transition 
                    ${isActive ? "text-white" : "text-white/60 hover:text-white/80"}`}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Botón hamburguesa */}
        <div className="md:hidden w-full flex justify-center m-[10px] items-center">
          <button
            className="text-white border border-white p-2 rounded-md"
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
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-normal transition 
                      ${isActive ? "text-white" : "text-white/60 hover:text-white/80"}`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
