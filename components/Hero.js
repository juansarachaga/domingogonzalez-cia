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

      {/* Contenedor para posicionar el rectángulo y el texto */}
      <div className="relative z-10 max-w-3xl px-8 mt-25 text-left">
        <div className="relative flex flex-col items-start font-['Hanken_Grotesk'] ml-4 md:ml-[20vw] pt-8 pb-8">
          {/* Borde en forma de "U" de lado */}
          <div className="pointer-events-none absolute -top-8 -left-8 z-0 w-[calc(100%+32px)] h-[calc(100%+32px)]">
            {/* Línea izquierda (larga) */}
            <div className="absolute left-0 top-0 h-full w-0 border-l-8 border-[#AE0C21]"></div>
            {/* Línea superior (mitad de ancho) */}
            <div className="absolute left-0 top-0 w-[50%] h-0 border-t-8 border-[#AE0C21]"></div>
            {/* Línea inferior (mitad de ancho) */}
            <div className="absolute left-0 bottom-0 w-[50%] h-0 border-b-8 border-[#AE0C21]"></div>
          </div>
          <span className="font-normal text-[18px] leading-[1] tracking-[0%] mt-15 mb-2 z-10">
            NOSOTROS
          </span>
          <h2 className="font-medium text-[50px] leading-[55px] tracking-[0.04em] mb-4 z-10">
            CALIDAD Y
            <br />
            EXPERIENCIA
          </h2>
          <div className="w-[90vw] max-w-[520px] z-10">
            <p className="font-normal text-[16px] leading-[1.3] tracking-[0%] mb-6">
              <span className="block">
                Nuestra experiencia nos permite garantizar una
              </span>
              <span className="block">
                materia prima confiable, segura y de excelente calidad,
              </span>
              <span className="block">
                adaptada a las necesidades de cada productor.
              </span>
            </p>
          </div>
          <div className="mt-5 mb-20 flex gap-4 z-10">
            <button
              className="w-[124px] h-[40px] rounded-full bg-[#AE0C21] text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-[#8B091A]"
            >
              Conocer más
            </button>
            <button
              className="w-[120px] h-[40px] rounded-full border border-white bg-transparent text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-white hover:text-black"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
      <nav className="w-full flex justify-center items-center py-4 absolute top-0 left-0 z-20">
        {/* Aquí va el contenido del navbar */}
      </nav>
    </section>
  )
}
