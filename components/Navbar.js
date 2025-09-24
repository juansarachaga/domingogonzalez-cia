export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Domingo González & Cía</div>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:text-gray-300">Inicio</a></li>
        <li><a href="#about" className="hover:text-gray-300">Nosotros</a></li>
        <li><a href="#services" className="hover:text-gray-300">Servicios</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contacto</a></li>
      </ul>
    </nav>
  )
}
