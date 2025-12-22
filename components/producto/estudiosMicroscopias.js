"use client"
import Image from "next/image"

export default function EstudiosMicroscopias() {
  const carbonato = ["carbonato1", "carbonato2", "carbonato3"]
  const calcita = ["calcita1", "calcita2", "calcita3"]

  return (
    <section className="relative w-full bg-white py-24 em-section mt-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        
        {/* Texto introductorio */}
        <p
          className="text-[16px] text-black max-w-3xl mx-auto mb-12"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 400,
            lineHeight: "120%",
          }}
        >
          Estudios con microscopía SEM del laboratorio CINDECA
          <br className="em-br" />
          muestran la porosidad de la conchilla y su contraste con la
          <br className="em-br" />
          estructura sólida de la calcita.
        </p>

        {/* Título Carbonato */}
        <h3
          className="uppercase mb-6"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "5%",
            color: "#AE0C21",
          }}
        >
          CARBONATO ORGÁNICO
        </h3>

        {/* Imágenes Carbonato */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-16">
          {carbonato.map((img) => (
            <div key={img} className="relative w-full aspect-[351/206] overflow-hidden">
              <Image
                src={`/img/producto/estudios/${img}.png`}
                alt={img}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>

        {/* Título Calcita */}
        <h3
          className="uppercase mb-6"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 700,
            fontSize: "20px",
            letterSpacing: "5%",
            color: "#BBBBBB",
          }}
        >
          CALCITA MINERAL
        </h3>

        {/* Imágenes Calcita */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-6">
          {calcita.map((img) => (
            <div key={img} className="relative w-full aspect-[351/206] overflow-hidden">
              <Image
                src={`/img/producto/estudios/${img}.png`}
                alt={img}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 33vw, 100vw"
              />
            </div>
          ))}
        </div>

        {/* Epígrafe */}
        <p
          className="italic text-[16px] mt-4"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 400,
            color: "#9B9B9B",
          }}
        >
          Detalle de morfologías diferenciadas bajo 2000x
        </p>
      </div>

      {/* 🎯 CSS institucional */}
      <style jsx>{`
        /* Mostrar saltos de línea solo en desktop */
        .em-br {
          display: inline;
        }

        @media (min-width: 1300px) {
          .em-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* Tablet y mobile: texto corrido */
        @media (max-width: 1024px) {
          .em-br {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .em-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          h3 {
            font-size: 18px !important;
          }

          p {
            font-size: 14px !important;
            line-height: 120% !important;
          }
        }
      `}</style>
    </section>
  )
}
