export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Servicio 1</h3>
            <p className="text-gray-600">Descripción breve del servicio 1.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Servicio 2</h3>
            <p className="text-gray-600">Descripción breve del servicio 2.</p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Servicio 3</h3>
            <p className="text-gray-600">Descripción breve del servicio 3.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
