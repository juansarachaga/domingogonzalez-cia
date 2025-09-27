"use client"
import Image from "next/image"
import { Instagram, X, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      {/* Contenedor principal */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        {/* Columna logo + texto */}
        <div className="col-span-1">
          <Image
            src="/img/layout/logoHeader.png"
            alt="Logo Domingo González & Cía"
            width={200}
            height={50}
            className="mb-4"
          />
          <p className="text-sm text-gray-600">
            Trabajamos cerca del productor, con compromiso y conocimiento del campo.
          </p>
        </div>

        {/* Columna 1 */}
        <div>
          <h3 className="font-semibold mb-4">La Empresa</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-red-700 transition">Home</a></li>
            <li><a href="#blog" className="hover:text-red-700 transition">Blog</a></li>
            <li><a href="#nosotros" className="hover:text-red-700 transition">Nosotros</a></li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold mb-4">Servicios</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#aves" className="hover:text-red-700 transition">Aves</a></li>
            <li><a href="#bovinos" className="hover:text-red-700 transition">Bovinos</a></li>
            <li><a href="#cerdos" className="hover:text-red-700 transition">Cerdos</a></li>
            <li><a href="#equinos" className="hover:text-red-700 transition">Equinos</a></li>
            <li><a href="#otros" className="hover:text-red-700 transition">Otros</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="font-semibold mb-4">Nuestro Producto</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#suplemento" className="hover:text-red-700 transition">Suplemento</a></li>
            <li><a href="#aliados" className="hover:text-red-700 transition">Aliados</a></li>
            <li><a href="#empresas" className="hover:text-red-700 transition">Empresas</a></li>
          </ul>
        </div>

        {/* Columna 4 (contacto) */}
        <div>
          <h3 className="font-semibold mb-4">Contacto</h3>
          <p className="text-sm text-gray-600">info@mail.com</p>
          <p className="text-sm text-gray-600 mb-4">(000) 000-0000</p>
          <div className="flex gap-3">
            <a href="#" className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800 transition"><Instagram size={18} /></a>
            <a href="#" className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800 transition"><X size={18} /></a>
            <a href="#" className="bg-red-700 text-white p-2 rounded-full hover:bg-red-800 transition"><Youtube size={18} /></a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>Todos los derechos reservados 2025.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#privacidad" className="hover:text-red-700 transition">Políticas de Privacidad</a>
            <a href="#terminos" className="hover:text-red-700 transition">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
