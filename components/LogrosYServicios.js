"use client"
import Image from "next/image"

export default function LogrosYServicios() {
  const servicios = [
    { id: "aves", nombre: "AVES", img: "/img/animalesIcon/gallina.png", texto: "Favorece la formación de cáscaras de huevo de calidad y mantiene la salud ósea en todas las etapas." },
    { id: "bovinos", nombre: "BOVINOS", img: "/img/animalesIcon/vaca.png", texto: "Suplemento mineral esencial para cubrir los requerimientos de calcio en ganado bovino." },
    { id: "cerdos", nombre: "CERDOS", img: "/img/animalesIcon/cerdo.png", texto: "El calcio es esencial en la dieta de cerdos y se recomienda su uso como suplemento mineral." },
    { id: "equinos", nombre: "EQUINOS", img: "/img/animalesIcon/caballo.png", texto: "Ayuda a fortalecer huesos y dientes, previene deficiencias nutricionales y se adapta a su necesidad." },
    { id: "otros", nombre: "OTROS", img: "/img/animalesIcon/gato.png", texto: "Garantiza un aporte seguro y uniforme de calcio, esencial para la salud ósea y dental." },
  ]

  return (
    <section className="relative w-full py-20 bg-white">
      {/* LOGROS */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 max-[1366px]:max-w-[1200px] max-[1366px]:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-20 mb-20">
          
          {/* Texto */}
          <div className="text-center md:text-left px-4 sm:px-0">
            <p className="
              text-[#AE0C21] text-[20px] font-semibold tracking-wide mb-2
              min-[768px]:max-[1215px]:text-[16px]
            ">
              NUESTROS LOGROS
            </p>

            <h2 className="
              text-[28px] sm:text-[36px] md:text-[40px] font-normal leading-[120%] text-gray-900
              min-[768px]:max-[1215px]:text-[32px]
            ">
              Compromiso en lo nuestro, <br /> un cliente a la vez.
            </h2>
          </div>

          {/* Números */}
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-8 md:gap-12 mt-6 md:mt-0 text-center md:text-right">
            <div>
              <h3 className="
                text-[50px] sm:text-[70px] md:text-[80px] font-semibold text-[#AE0C21] leading-[100%]
                min-[768px]:max-[1215px]:text-[64px]
              ">
                70+
              </h3>
              <p className="
                text-gray-600 text-sm sm:text-base
                min-[768px]:max-[1215px]:text-[13px]
              ">
                Años de experiencia
              </p>
            </div>

            <div className="hidden md:block border-l-2 border-gray-300 h-16" />

            <div>
              <h3 className="
                text-[50px] sm:text-[70px] md:text-[80px] font-semibold text-[#AE0C21] leading-[100%]
                min-[768px]:max-[1215px]:text-[64px]
              ">
                50+
              </h3>
              <p className="
                text-gray-600 text-sm sm:text-base
                min-[768px]:max-[1215px]:text-[13px]
              ">
                Empresas que confían día a día
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Línea superior izquierda */}
      <div className="w-1/3 border-t-[8px] border-[#AE0C21]/10 mt-12 mr-auto" />

      {/* SERVICIOS */}
      <div className="max-w-7xl mx-auto px-8 sm:px-10 md:px-12 lg:px-16 max-[1366px]:max-w-[1200px] max-[1366px]:px-10">
        <div className="text-center mb-12 mt-16">
          <p className="
            text-[#AE0C21] text-[22px] sm:text-[25px] font-semibold tracking-wide mb-2
            min-[768px]:max-[1215px]:text-[20px]
          ">
            NUESTROS SERVICIOS
          </p>

          <h2 className="
            text-[28px] sm:text-[32px] md:text-[36px] font-normal leading-[120%] text-gray-900
            min-[768px]:max-[1215px]:text-[29px]
          ">
            Expertos en nutrición animal: <br /> de la fábrica a cada especie.
          </h2>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center mb-20">
          {servicios.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="max-w-xs mx-auto p-6 rounded-md border border-transparent transition duration-300 md:hover:shadow-lg md:hover:border-[#AE0C21] group min-h-[220px] flex flex-col"
            >
              <Image
                src={s.img}
                alt={s.nombre}
                width={60}
                height={60}
                className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="
                text-[18px] sm:text-[20px] font-medium tracking-[0.05em] text-[#AE0C21] mb-2
                min-[768px]:max-[1215px]:text-[16px]
              ">
                {s.nombre}
              </h3>
              <p className="
                text-sm sm:text-base text-gray-700 leading-snug flex-1
                min-[768px]:max-[1215px]:text-[13px]
              ">
                {s.texto}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Línea inferior derecha */}
      <div className="w-1/3 border-t-[8px] border-[#AE0C21]/10 mt-12 ml-auto" />
    </section>
  )
}
