"use client"
import { useState } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
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
              src="/img/layout/logoHeaderRojo.png"
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
          <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr_1fr_1.2fr] gap-3 sm:gap-4 md:gap-6 lg:gap-8 text-center md:text-left">

            {/* Columna 1 */}
            <div>
              <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">
                La Empresa
              </h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[#AE0C21] transition">Home</a></li>
                <li><a href="#blog" className="hover:text-[#AE0C21] transition">Blog</a></li>
                <li><a href="#nosotros" className="hover:text-[#AE0C21] transition">Nosotros</a></li>
              </ul>
            </div>

            {/* Columna 2 */}
            <div>
              <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2">
                <li><a href="#aves" className="hover:text-[#AE0C21] transition">Aves</a></li>
                <li><a href="#bovinos" className="hover:text-[#AE0C21] transition">Bovinos</a></li>
                <li><a href="#cerdos" className="hover:text-[#AE0C21] transition">Cerdos</a></li>
                <li><a href="#equinos" className="hover:text-[#AE0C21] transition">Equinos</a></li>
                <li><a href="#otros" className="hover:text-[#AE0C21] transition">Otros</a></li>
              </ul>
            </div>

            {/* Columna 3 */}
            <div>
             <h3 className="text-[14px] md:text-[15px] font-semibold mb-4 whitespace-nowrap">
  Nuestro Producto
</h3>

              <ul className="space-y-2">
                <li><a href="#suplemento" className="hover:text-[#AE0C21] transition">Suplemento</a></li>
                <li><a href="#aliados" className="hover:text-[#AE0C21] transition">Aliados</a></li>
                <li><a href="#empresas" className="hover:text-[#AE0C21] transition">Empresas</a></li>
              </ul>
            </div>

            {/* Columna 4 */}
            <div>
              <h3 className="text-[14px] md:text-[15px] font-semibold mb-4">Contacto</h3>
              
              {/* Mails */}
             <p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-700 mb-1 break-words">
  <a href="mailto:ventas@domgonsa.com.ar" className="hover:text-[#AE0C21] transition">
    ventas@domgonsa.com.ar
  </a>
</p>
<p className="text-[13px] sm:text-[14px] md:text-[15px] text-gray-700 mb-4 break-words">
  <a href="mailto:domgonsa@domgonsa.com.ar" className="hover:text-[#AE0C21] transition">
    domgonsa@domgonsa.com.ar
  </a>
</p>


          {/* Teléfono con ícono WhatsApp */}
<div className="flex items-center justify-center md:justify-start text-gray-700 mt-2">
  <a 
    href="https://wa.me/5492268455176?text=Hola%20👋%2C%20te%20escribo%20desde%20la%20página%20web." 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center text-[14px] md:text-[15px] hover:text-[#AE0C21] transition whitespace-nowrap"
  >
    <FontAwesomeIcon icon={faWhatsapp} size="lg" className="text-gray-700 mr-[2px] flex-shrink-0" />
    +54&nbsp;9&nbsp;2268&nbsp;45-5176
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
  Todos los derechos reservados {new Date().getFullYear()}.
</p>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center mb-10">
              <a href="#privacidad" className="hover:text-[#AE0C21] transition">Políticas de Privacidad</a>
              <span className="hidden sm:block">-</span>
              <a href="#terminos" className="hover:text-[#AE0C21] transition">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- BOTÓN FLOTANTE DE WHATSAPP --- */}
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-6 right-3 sm:right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#AE0C21] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48" fill="none">
          <path
            fill="#ffffff"
            d="M24 9C15.72 9 9 15.72 9 24c0 2.6.67 5.07 1.93 7.29L9 39l7.89-2.07A15 15 0 0 0 24 39c8.28 0 15-6.72 15-15S32.28 9 24 9zm0 27a12 12 0 0 1-6.07-1.67l-.43-.25-4.5 1.18 1.2-4.37-.27-.43A12 12 0 1 1 36 24c0 6.63-5.37 12-12 12zm6.68-8.56c-.36-.18-2.09-1.03-2.41-1.14-.32-.12-.55-.18-.78.18-.23.36-.9 1.14-1.1 1.38-.2.23-.41.26-.77.09-.36-.18-1.51-.56-2.88-1.81-1.06-.94-1.77-2.1-1.98-2.45-.21-.36-.02-.55.16-.73.17-.17.39-.45.59-.68.2-.23.26-.41.38-.68.12-.27.06-.5-.03-.68-.09-.18-.82-1.98-1.12-2.71-.3-.71-.56-.61-.77-.62h-.66c-.23 0-.6.09-.91.45-.32.36-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.44 3.91 6.03 5.48.84.36 1.5.58 2.01.74.84.27 1.61.23 2.18.14.66-.1 2.01-.83 2.29-1.62.28-.79.28-1.44.19-1.62-.09-.18-.33-.27-.69-.45z"
          />
        </svg>
      </button>

      {/* --- MINI VENTANA DE WHATSAPP --- */}
      {isDialogOpen && (
        <div className="fixed bottom-24 right-3 sm:right-20 z-[10000] w-[94%] sm:w-[90%] max-w-sm bg-[#2b2b2b] rounded-2xl shadow-2xl border border-[#AE0C21] p-7 animate-fadeIn ">
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-3 right-3 text-white hover:text-gray-200"
          >
            ✕
          </button>

          <div className="rounded-xl p-7 text-center shadow-sm mt-15 mb-20 ml-10 mr-10">
            <Image
              src="/img/layout/logoHeader.png"
              alt="Logo Domingo González & Cía"
              width={200}
              height={95}
              className="mx-auto mb-5"
            />

            <h3 className="text-white font-semibold text-[18px] mt-10 mb-3">¡Hola! 👋</h3>
            <p className="text-white text-[16px] mb-7 leading-relaxed">
              Gracias por tu visita. Si querés hacer una <br /> consulta o pedido, escribinos por WhatsApp.
            </p>

            <a
              href="https://wa.me/5492268455176?text=Hola%20👋%2C%20te%20escribo%20desde%20la%20página%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#AE0C21] hover:bg-[#8B091A] text-white font-semibold 
             px-8 py-3 rounded-full text-[17px] transition-all duration-200 shadow-md 
             w-[45%] sm:w-auto mx-auto"
              onClick={() => setIsDialogOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="26" viewBox="0 0 48 48" fill="none" className="ml-1">
                <path
                  fill="#ffffff"
                  d="M24 9C15.72 9 9 15.72 9 24c0 2.6.67 5.07 1.93 7.29L9 39l7.89-2.07A15 15 0 0 0 24 39c8.28 0 15-6.72 15-15S32.28 9 24 9zm0 27a12 12 0 0 1-6.07-1.67l-.43-.25-4.5 1.18 1.2-4.37-.27-.43A12 12 0 1 1 36 24c0 6.63-5.37 12-12 12z"
                />
              </svg>
              <p className="mr-5 mt-1 mb-1">Iniciar chat</p>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
