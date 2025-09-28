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
    <section className="relative w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* --- NUESTROS LOGROS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Texto */}
          <div>
            <p className="text-[#AE0C21] text-[20px] font-semibold tracking-wide  mt-15 mb-2">
              NUESTROS LOGROS
            </p>
            <h2 className="text-[40px] font-normal leading-[100%] text-gray-900">
              Compromiso en lo nuestro, <br /> un cliente a la vez.
            </h2>
          </div>

          {/* Números */}
          <div className="flex justify-end items-center gap-12 mt-10">
            <div className="text-right ">
              <h3 className="text-[80px] font-semibold text-[#AE0C21] leading-[100%]">
                70+
              </h3>
              <p className="text-gray-600 text-sm">Años de experiencia</p>
            </div>
            <div className="border-l-2 border-gray-300 h-16"></div>
            <div className="text-right">
              <h3 className="text-[80px] font-semibold text-[#AE0C21] leading-[100%]">
                50+
              </h3>
              <p className="text-gray-600 text-sm">
                Empresas que confían día a día
              </p>
            </div>
          </div>
        </div>

        {/* Línea divisoria superior derecha */}
        <div className="w-full border-t-[8px] border-[#AE0C21]/10 mb-16"></div>

        {/* --- NUESTROS SERVICIOS --- */}
        <div className="text-center mb-16">
          <p className="text-[#AE0C21] text-[25px] font-semibold tracking-wide mb-2">
            NUESTROS SERVICIOS
          </p>
          <h2 className="text-[32px] md:text-[36px] font-normal leading-[120%] text-gray-900">
            Expertos en nutrición animal: <br /> de la fábrica a cada especie.
          </h2>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
          {servicios.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="p-4 rounded-md transition duration-300 hover:shadow-lg hover:border hover:border-[#AE0C21] group"
            >
              <Image
                src={s.img}
                alt={s.nombre}
                width={60}
                height={60}
                className="mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h3 className="text-[20px] font-medium tracking-[0.05em] text-[#AE0C21] mb-2">
                {s.nombre}
              </h3>
              <p className="text-[12px] text-gray-700 leading-[100%]">
                {s.texto}
              </p>
            </a>
          ))}
        </div>

        {/* Línea inferior derecha */}
        <div className="w-full border-t-[8px] border-[#AE0C21]/10 mt-16"></div>
      </div>
    </section>
  )
}
