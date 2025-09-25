import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />

        {/* La Empresa */}
        <section id="empresa" className="max-w-7xl mx-auto px-6 py-20 text-left">
          <h2 className="text-2xl font-bold mb-4 text-white">La Empresa</h2>
          <p className="text-white/80 leading-relaxed">
            Somos Domingo González & Cía, una empresa con años de experiencia en el rubro,
            comprometida en brindar soluciones integrales a nuestros clientes. Nuestro equipo de
            profesionales trabaja día a día con pasión y dedicación.
          </p>
        </section>

        {/* Servicios */}
        <section id="servicios" className="max-w-7xl mx-auto px-6 py-20 text-left">
          <h2 className="text-2xl font-bold mb-4 text-white">Servicios</h2>
          <ul className="space-y-4 text-white/80">
            <li><span className="font-semibold text-white">Servicio 1:</span> Descripción breve.</li>
            <li><span className="font-semibold text-white">Servicio 2:</span> Descripción breve.</li>
            <li><span className="font-semibold text-white">Servicio 3:</span> Descripción breve.</li>
          </ul>
        </section>

        {/* Productos */}
        <section id="productos" className="max-w-7xl mx-auto px-6 py-20 text-left">
          <h2 className="text-2xl font-bold mb-4 text-white">Productos</h2>
          <p className="text-white/80">Catálogo / grilla de productos (luego lo rellenamos).</p>
        </section>

        {/* Contacto */}
        <section id="contacto" className="max-w-7xl mx-auto px-6 py-20 text-left">
          <h2 className="text-2xl font-bold mb-4 text-white">Contacto</h2>
          <p className="text-white/80">Formulario o datos de contacto aquí.</p>
        </section>
      </main>
      <Footer />
    </>
  )
}
