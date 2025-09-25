export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full h-[600px] md:h-[750px] flex items-center"
      style={{
        backgroundImage: "url('/img/home/banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AE0C21]/70 to-[#2A2A2A]/70 mix-blend-multiply"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-3xl px-8 ml-16 text-left">
        <p className="uppercase tracking-widest text-sm text-white/80 mb-4">
          Nosotros
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          CALIDAD Y <br /> EXPERIENCIA
        </h1>
        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          Nuestra experiencia nos permite garantizar una materia prima confiable,
          segura y de excelente calidad, adaptada a las necesidades de cada productor.
        </p>

        {/* Botones */}
        <div className="flex gap-6">
          <a
            href="#empresa"
            className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-full font-medium transition"
          >
            Conocer más
          </a>
          <a
            href="#contacto"
            className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}
