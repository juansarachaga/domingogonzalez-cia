"use client"
import Image from "next/image"

export default function LogrosYServicios() {
  const servicios = [
    {
      id: "aves",
      nombre: "AVES",
      img: "/img/home/animalesIcon/gallina.png",
      texto:
        "Favorece la formación de cáscaras de huevo de calidad y mantiene la salud ósea en todas las etapas.",
    },
    {
      id: "bovinos",
      nombre: "BOVINOS",
      img: "/img/home/animalesIcon/vaca.png",
      texto:
        "Suplemento mineral esencial para cubrir los requerimientos de calcio en ganado bovino.",
    },
    {
      id: "cerdos",
      nombre: "CERDOS",
      img: "/img/home/animalesIcon/cerdo.png",
      texto:
        "El calcio es esencial en la dieta de cerdos y se recomienda su uso como suplemento mineral.",
    },
    {
      id: "equinos",
      nombre: "EQUINOS",
      img: "/img/home/animalesIcon/caballo.png",
      texto:
        "Ayuda a fortalecer huesos y dientes, previene deficiencias nutricionales y se adapta a su necesidad.",
    },
    {
      id: "otros",
      nombre: "OTROS",
      img: "/img/home/animalesIcon/gato.png",
      texto:
        "Garantiza un aporte seguro y uniforme de calcio, esencial para la salud ósea y dental.",
    },
  ]

  return (
    <section className="relative w-full py-20 bg-white ">
      {/* Contenedor de LOGROS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
          {/* Texto */}
          <div>
            <p className="text-[#AE0C21] text-[20px] font-semibold tracking-wide mb-2 mt-30">
              NUESTROS LOGROS
            </p>
            <h2 className="text-[32px] sm:text-[40px] font-normal leading-[110%] text-gray-900">
              Compromiso en lo nuestro, <br /> un cliente a la vez.
            </h2>
          </div>

          {/* Números */}
          <div className="flex justify-end items-center gap-12 mt-10 md:mt-30">
            <div className="text-right">
              <h3 className="text-[60px] sm:text-[80px] font-semibold text-[#AE0C21] leading-[100%]">
                70+
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">Años de experiencia</p>
            </div>
            <div className="border-l-2 border-gray-300 h-16"></div>
            <div className="text-right">
              <h3 className="text-[60px] sm:text-[80px] font-semibold text-[#AE0C21] leading-[100%]">
                50+
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Empresas que confían día a día
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Línea superior izquierda */}
      <div className="w-1/3 border-t-[8px] border-[#AE0C21]/10 mt-12 mr-auto"></div>

      {/* Contenedor de SERVICIOS */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 mt-16">
          <p className="text-[#AE0C21] text-[22px] sm:text-[25px] font-semibold tracking-wide mb-2">
            NUESTROS SERVICIOS
          </p>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-normal leading-[120%] text-gray-900">
            Expertos en nutrición animal: <br /> de la fábrica a cada especie.
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center mb-20">
          {servicios.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="p-4 rounded-md border border-transparent transition duration-300 md:hover:shadow-lg md:hover:border-[#AE0C21] group min-h-[220px] flex flex-col"
            >
              <Image
                src={s.img}
                alt={s.nombre}
                width={60}
                height={60}
                className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-[18px] sm:text-[20px] font-medium tracking-[0.05em] text-[#AE0C21] mb-2">
                {s.nombre}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-snug flex-1">
                {s.texto}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Línea inferior derecha */}
      <div className="w-1/3 border-t-[8px] border-[#AE0C21]/10 mt-12 ml-auto"></div>
    </section>
  )
}
