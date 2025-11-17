"use client"
import Image from "next/image"

export default function ComoLoHacemos() {
  const pasos = [
    {
      icono: "/img/producto/iconos/excavador.png",
      titulo: "EXTRACCIÓN",
      texto: "Obtenemos conchilla de yacimientos naturales cuidando el ambiente y asegurando calidad.",
    },
    {
      icono: "/img/producto/iconos/limpieza.png",
      titulo: "LIMPIEZA",
      texto: "Quitamos impurezas para asegurar un material puro, confiable y apto como suplemento nutricional.",
    },
    {
      icono: "/img/producto/iconos/molienda.png",
      titulo: "MOLIENDA",
      texto: "Trituramos la conchilla para lograr granulometrías exactas, adaptadas a cada uso y necesidad específica.",
    },
    {
      icono: "/img/producto/iconos/regla.png",
      titulo: "SELECCIÓN",
      texto: "Separación y tamizado por tamaño para garantizar estándares y calidad uniforme del producto.",
    },
    {
      icono: "/img/producto/iconos/control.png",
      titulo: "CONTROL",
      texto: "Verificación constante para asegurar un suplemento confiable y seguro para la alimentación animal.",
    },
  ]

  return (
    <section className="w-full bg-white py-20 mt-32 como-hacemos-section">
      <div className="max-w-7xl mx-auto text-center px-6 md:px-12">
        {/* Encabezado */}
        <p
          className="uppercase text-[#AE0C21] text-[18px] tracking-[0.05em] mb-2"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            fontWeight: 300,
          }}
        >
          ELABORACIÓN
        </p>

        <h2
          className="text-[32px] md:text-[40px] text-[#000000] font-normal mb-12"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            fontWeight: 400,
          }}
        >
          Como lo hacemos
        </h2>

        {/* Íconos */}
        <div className="como-hacemos-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-10 gap-x-6 md:gap-x-12 justify-items-center">
          {pasos.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center max-w-[200px]">
              <Image
                src={item.icono}
                alt={item.titulo}
                width={50}
                height={50}
                className="mb-3 object-contain"
              />
              <h3
                className="text-[18px] md:text-[20px] text-[#AE0C21] font-medium tracking-[0.05em] mb-2"
                style={{
                  fontFamily: "Hanken Grotesk, sans-serif",
                  fontWeight: 500,
                }}
              >
                {item.titulo}
              </h3>
              <p
                className="text-[14px] text-[#5D5D5D] leading-[130%]"
                style={{
                  fontFamily: "Hanken Grotesk, sans-serif",
                  fontWeight: 400,
                }}
              >
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎨 CSS local para márgenes y responsividad */}
      <style jsx>{`
        /* Márgenes amplios en pantallas grandes */
        @media (min-width: 1300px) {
          .como-hacemos-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* Ajuste intermedio (pantallas tipo notebook 1300px o menos) */
        @media (max-width: 1300px) and (min-width: 1025px) {
          .como-hacemos-section {
            padding-left: 30px;
            padding-right: 30px;
          }
          .como-hacemos-section h2 {
            font-size: 36px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .como-hacemos-section {
            padding-left: 20px;
            padding-right: 20px;
          }
          .como-hacemos-section h2 {
            font-size: 26px;
            line-height: 120%;
          }
          .como-hacemos-section p {
            font-size: 14px;
          }
        }

        /* 👇 NUEVO: forzar versión mobile en celu horizontal */
        @media (orientation: landscape) and (max-width: 900px) {
          .como-hacemos-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .como-hacemos-section h2 {
            font-size: 26px;
            line-height: 120%;
          }

          .como-hacemos-section p {
            font-size: 14px;
          }

          .como-hacemos-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}
