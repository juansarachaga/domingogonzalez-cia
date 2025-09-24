import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="bg-[#0A0A0A] px-12 py-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Image
          src="/img/layout/logoHeader.png"
          alt="Logo Domingo González & Cía"
          width={160}
          height={40}
          priority
        />
      </div>

      {/* Menú */}
      <ul className="flex gap-10 text-[16px] font-normal">
        <li>
          <a href="#" className="text-white/50 hover:text-white transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#about" className="text-white/50 hover:text-white transition">
            Nosotros
          </a>
        </li>
        <li>
          <a href="#services" className="text-white/50 hover:text-white transition">
            Servicios
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white/50 hover:text-white transition">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}
