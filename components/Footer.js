"use client"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-['Hanken_Grotesk']">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 mt-20 mb-10">
        
        {/* Columna logo + texto */}
        <div className="flex flex-col">
          <Image
            src="/img/layout/logoGris.png"
            alt="Logo Domingo González & Cía"
            width={250}
            height={50}
            className="mb-4"
          />
          <p className="text-[15px] font-normal leading-[100%] tracking-[0%] text-gray-700 max-w-sm">
            Trabajamos cerca del productor, con compromiso y conocimiento del campo.
          </p>
        </div>

        {/* Mitad derecha (4 columnas) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Columna 1 */}
          <div>
            <h3 className="text-[15px] font-semibold leading-[100%] mb-4">La Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[15px] font-normal hover:text-red-700 transition">Home</a></li>
              <li><a href="#blog" className="text-[15px] font-normal hover:text-red-700 transition">Blog</a></li>
              <li><a href="#nosotros" className="text-[15px] font-normal hover:text-red-700 transition">Nosotros</a></li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-[15px] font-semibold leading-[100%] mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#aves" className="text-[15px] font-normal hover:text-red-700 transition">Aves</a></li>
              <li><a href="#bovinos" className="text-[15px] font-normal hover:text-red-700 transition">Bovinos</a></li>
              <li><a href="#cerdos" className="text-[15px] font-normal hover:text-red-700 transition">Cerdos</a></li>
              <li><a href="#equinos" className="text-[15px] font-normal hover:text-red-700 transition">Equinos</a></li>
              <li><a href="#otros" className="text-[15px] font-normal hover:text-red-700 transition">Otros</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-[15px] font-semibold leading-[100%] mb-4">Nuestro Producto</h3>
            <ul className="space-y-2">
              <li><a href="#suplemento" className="text-[15px] font-normal hover:text-red-700 transition">Suplemento</a></li>
              <li><a href="#aliados" className="text-[15px] font-normal hover:text-red-700 transition">Aliados</a></li>
              <li><a href="#empresas" className="text-[15px] font-normal hover:text-red-700 transition">Empresas</a></li>
            </ul>
          </div>

          {/* Columna 4 (contacto) */}
          <div>
            <h3 className="text-[15px] font-semibold leading-[100%] mb-4">Contacto</h3>
            <p className="text-[15px] font-normal text-gray-700 leading-[100%] mb-1">info@mail.com</p>
            <p className="text-[15px] font-normal text-gray-700 leading-[100%] mb-4">(000) 000-0000</p>
            <div className="flex gap-3">
  <a
    href="#"
    className="flex items-center justify-center w-8 h-7.5 rounded-full bg-[#AE0C21] text-white hover:bg-red-800 transition"
  >
    <FontAwesomeIcon icon={faInstagram} size="lg" />
  </a>
  <a
    href="#"
    className="flex items-center justify-center w-8 h-7.5 rounded-full bg-[#AE0C21] text-white hover:bg-red-800 transition"
  >
    <FontAwesomeIcon icon={faXTwitter} size="lg" />
  </a>
  <a
    href="#"
    className="flex items-center justify-center w-8 h-7.5 rounded-full bg-[#AE0C21] text-white hover:bg-red-800 transition"
  >
    <FontAwesomeIcon icon={faYoutube} size="lg" />
  </a>
</div>

          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 py-4 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-[15px] font-normal text-gray-500 mt-5">
          <p className="mb-5">Todos los derechos reservados 2025.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#privacidad" className="hover:text-red-700 transition mb-5">Políticas de Privacidad</a>
            <span>-</span>
            <a href="#terminos" className="hover:text-red-700 transition mb-5">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
