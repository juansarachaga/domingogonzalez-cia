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
      <div className="pqe-container max-w-7xl mx-auto px-6 sm:px-12 text-center">
        {/* Encabezado centrado */}
        <p
          className="uppercase text-[#AE0C21] tracking-[0.05em] mb-3 pqe-kicker"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            fontWeight: 300,
            fontSize: "18px",
          }}
        >
          POR QUÉ ELEGIR
        </p>

        <h3
          className="text-black mb-6 leading-[110%] pqe-title"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            fontWeight: 400,
            fontSize: "40px",
          }}
        >
          Carbonato de Calcio Organico
        </h3>

        <p
          className="pqe-parrafo text-black mx-auto"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "140%",
            maxWidth: "680px",
          }}
        >
          El calcio es fundamental para huesos, dientes y cáscaras de huevo.
          <br className="hidden md:block" />
          En la producción animal intensiva, su suplementación, junto con
          <br className="hidden md:block" />
          vitamina D y otros nutrientes, es indispensable.
        </p>
           
        {/* Íconos centrados */}
        <div className="pqe-icons mt-25">
          <div className="pqe-icons-grid grid grid-cols-2 sm:grid-cols-4 gap-x-1 gap-y-1 w-full justify-items-center">
            {iconos.map((icono, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center max-w-[160px]"
              >
                <Image
                  src={icono.src}
                  alt={icono.texto.replace(/<br\/>/g, " ")}
                  width={80}
                  height={80}
                  className="mb-4 object-contain pqe-icon"
                />
                <p
                  className="text-[#707070] leading-[120%] pqe-icon-text"
                  style={{
                    fontFamily: "Hanken Grotesk, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                  }}
                  dangerouslySetInnerHTML={{ __html: icono.texto }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* === Desktop ancho (≥1300): misma regla que venimos usando === */
        @media (min-width: 1300px) {
          .pqe-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* === Ajuste intermedio (1025–1299) === */
        @media (max-width: 1299px) and (min-width: 1025px) {
          .pqe-section {
            padding-left: 30px;
            padding-right: 30px;
          }
          .pqe-title {
            font-size: 38px !important;
          }
          .pqe-parrafo {
            font-size: 15px !important;
          }
        }

        /* === Mobile === */
        @media (max-width: 768px) {
          .pqe-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .pqe-kicker {
            font-size: 14px !important;
          }

          .pqe-title {
            font-size: 28px !important;
            line-height: 120% !important;
          }

          .pqe-parrafo {
            font-size: 14px !important;
            line-height: 130% !important;
            max-width: 92% !important;
          }

          .pqe-icon {
            width: 58px !important;
            height: 58px !important;
          }

          .pqe-icon-text {
            font-size: 13px !important;
          }
        }

        /* Landscape mobile/tablet chico: que no quede apretado */
        @media (orientation: landscape) and (max-width: 900px) {
          .pqe-parrafo {
            max-width: 760px !important;
          }
          .pqe-icons-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr)) !important;
            gap-y: 18px !important;
          }
        }
      `}</style>
    </section>
  )
}
