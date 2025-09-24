export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-100 text-black">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-4">Servicio 1</h3>
            <p>Descripción breve del servicio 1.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-4">Servicio 2</h3>
            <p>Descripción breve del servicio 2.</p>
          </div>
          <div className="p-6 bg-white shadow rounded">
            <h3 className="text-xl font-semibold mb-4">Servicio 3</h3>
            <p>Descripción breve del servicio 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
