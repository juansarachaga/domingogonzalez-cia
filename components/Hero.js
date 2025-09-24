export default function Hero() {
  return (
    <section className="bg-gray-100 py-20 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
        Bienvenidos a Domingo González & Cía
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
        Somos una empresa dedicada a brindar soluciones integrales, con años de experiencia
        y compromiso en cada proyecto.
      </p>
      <a
        href="#contact"
        className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
      >
        Contáctanos
      </a>
    </section>
  )
}
