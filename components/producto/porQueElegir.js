"use client"
import Image from "next/image"

export default function PorQueElegir() {
  const iconos = [
    { src: "/img/producto/iconos/enzima.png", texto: "Activación <br/> de enzimas" },
    { src: "/img/producto/iconos/corazon.png", texto: "Contracción <br/> muscular y ritmo <br/>cardíaco" },
    { src: "/img/producto/iconos/coagulo.png", texto: "Coagulación <br/> sanguínea" },
    { src: "/img/producto/iconos/permeable.png", texto: "Permeabilidad <br/> de membranas" },
  ]

  return (
    <section className="w-full bg-white py-20 mt-32 sm:mt-40 pqe-section">
      <div className="pqe-container max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between px-6 sm:px-12 gap-16 sm:gap-20">
        
        {/* Columna de texto */}
        <div className="pqe-text sm:w-1/3 text-center sm:text-left px-2">
          <p
            className="uppercase text-[#AE0C21] text-[18px] tracking-[0.05em] mb-3"
            style={{
              fontFamily: "Hanken Grotesk, sans-serif",
              fontWeight: 300,
            }}
          >
            POR QUÉ ELEGIR
          </p>

          <h3
            className="text-[32px] sm:text-[40px] text-black mb-6 leading-[110%]"
            style={{
              fontFamily: "Hanken Grotesk, sans-serif",
              fontWeight: 400,
            }}
          >
            Carbonato de <br /> Calcio Orgánico
          </h3>

          <p
            className="pqe-parrafo text-[16px] text-black leading-[160%] max-w-[360px] mx-auto sm:mx-0 px-4 sm:px-0"
            style={{
              fontFamily: "Hanken Grotesk, sans-serif",
              fontWeight: 400,
            }}
          >
            El calcio es fundamental para huesos, dientes y cáscaras de huevo. En la producción animal intensiva, su suplementación, junto con vitamina D y otros nutrientes, es indispensable.
          </p>
        </div>

        {/* Íconos */}
        <div className="pqe-icons w-full sm:w-2/3 mt-8 sm:mt-4 px-4 sm:px-0">
          <div className="pqe-icons-grid grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-0 w-full">
            {iconos.map((icono, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center max-w-[140px] sm:max-w-[160px] mx-auto"
              >
                <Image
                  src={icono.src}
                  alt={icono.texto}
                  width={80}
                  height={80}
                  className="mb-3 object-contain"
                />
                <p
                  className="text-[16px] text-[#707070] leading-[120%]"
                  style={{
                    fontFamily: "Hanken Grotesk, sans-serif",
                    fontWeight: 400,
                  }}
                  dangerouslySetInnerHTML={{ __html: icono.texto }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 🎨 CSS local para márgenes y responsividad */}
      <style jsx>{`
        /* Márgenes laterales amplios (≥1300px) */
        @media (min-width: 1300px) {
          .pqe-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* Márgenes reducidos y ajuste en mobile */
        @media (max-width: 768px) {
          .pqe-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .pqe-section h3 {
            font-size: 26px;
            line-height: 120%;
          }

          .pqe-section p {
            font-size: 14px;
          }

          .pqe-section img {
            width: 70px;
            height: 70px;
          }
        }

        /* Ajuste intermedio para pantallas tipo 1300px */
        @media (max-width: 1300px) and (min-width: 1025px) {
          .pqe-section {
            padding-left: 30px;
            padding-right: 30px;
          }

          .pqe-section h3 {
            font-size: 36px;
          }

          .pqe-section p {
            font-size: 15px;
          }
        }

        /* 👇 NUEVO: forzar layout mobile + centrado vertical en celu horizontal */
        @media (orientation: landscape) and (max-width: 900px) {
          .pqe-section {
            min-height: 100vh;
            display: flex;
            align-items: center;
          }

          .pqe-container {
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .pqe-text,
          .pqe-icons {
            width: 100% !important;
            text-align: center !important;
          }

          .pqe-parrafo {
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .pqe-icons-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            row-gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
