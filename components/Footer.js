"use client"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-['Hanken_Grotesk']">
      {/* Contenedor principal */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-12 
                   grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 md:mt-20 mb-10
                   max-[1366px]:max-w-[1200px] max-[1366px]:px-8"
      >
        {/* Columna logo + texto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/img/layout/logoGris.png"
            alt="Logo Domingo González & Cía"
            width={180}
            height={45}
            className="mb-4 md:w-[250px] md:h-[60px] w-[180px] h-auto"
          />
          <p className="text-[14px] md:text-[15px] font-normal leading-snug text-gray-700 max-w-xs md:max-w-sm">
            Trabajamos cerca del productor, con compromiso y conocimiento del campo.
          </p>
        </div>

        {/* Menús */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Columna 1 */}
          <div>
            <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">
              La Empresa
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#aves"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Aves
                </a>
              </li>
              <li>
                <a
                  href="#bovinos"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Bovinos
                </a>
              </li>
              <li>
                <a
                  href="#cerdos"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Cerdos
                </a>
              </li>
              <li>
                <a
                  href="#equinos"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Equinos
                </a>
              </li>
              <li>
                <a
                  href="#otros"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Otros
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">
              Nuestro Producto
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#suplemento"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Suplemento
                </a>
              </li>
              <li>
                <a
                  href="#aliados"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Aliados
                </a>
              </li>
              <li>
                <a
                  href="#empresas"
                  className="text-[14px] md:text-[15px] hover:text-red-700 transition"
                >
                  Empresas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">
              Contacto
            </h3>
            <p className="text-[14px] md:text-[15px] text-gray-700 mb-1">
              info@mail.com
            </p>
            <p className="text-[14px] md:text-[15px] text-gray-700 mb-4">
              (000) 000-0000
            </p>
            <div className="flex justify-center md:justify-start gap-3">
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#AE0C21] text-white hover:bg-red-800 transition"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#AE0C21] text-white hover:bg-red-800 transition"
              >
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#AE0C21] text-white hover:bg-red-800 transition"
              >
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 py-6">
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center
                     text-[13px] md:text-[15px] text-gray-500 text-center mt-4
                     max-[1366px]:max-w-[1200px] max-[1366px]:px-8"
        >
          <p className="mb-3 md:mb-10">
            Todos los derechos reservados 2025.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-10">
            <a href="#privacidad" className="hover:text-red-700 transition">
              Políticas de Privacidad
            </a>
            <span className="hidden sm:block">-</span>
            <a href="#terminos" className="hover:text-red-700 transition">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
