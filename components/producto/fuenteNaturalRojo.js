"use client"
import React from "react"

export default function NuestraFuenteNatural() {
  return (
    <section
      className="relative w-full py-20 flex items-center justify-center text-center text-white fuente-natural-section mt-20"
      style={{
        backgroundImage: "url('/img/producto/texturaRoja.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 mt-30 mb-30">
        {/* Título */}
        <h2
          className="text-[36px] md:text-[40px] font-semibold mb-6 leading-[110%]"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            color: "#FFFFFF",
          }}
        >
          Nuestra fuente natural
        </h2>

        {/* Texto descriptivo */}
        <p
          className="text-[18px] md:text-[20px] font-normal leading-[150%] text-white"
          style={{
            fontFamily: "Hanken Grotesk, sans-serif",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          Desde hace décadas producimos carbonato de calcio orgánico a partir de
          conchillas fósiles de ostras. Su origen biogénico y estructura porosa
          aumentan la superficie de absorción, mejoran la biodisponibilidad y
          optimizan la eficiencia en la nutrición animal. La deficiencia de calcio
          puede causar cáscaras débiles en aves, raquitismo en bovinos jóvenes,
          osteomalacia, fracturas, menor vida productiva y casos de “vacas caídas”
          o mortalidad.
        </p>
      </div>

      {/* 🎨 CSS responsivo local */}
      <style jsx>{`
        /* Márgenes laterales en pantallas grandes */
        @media (min-width: 1300px) {
          .fuente-natural-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* Ajustes en pantallas medianas */
        @media (max-width: 1300px) and (min-width: 1025px) {
          .fuente-natural-section {
            padding-left: 30px;
            padding-right: 30px;
          }
          .fuente-natural-section h2 {
            font-size: 36px;
          }
          .fuente-natural-section p {
            font-size: 18px;
          }
        }

        /* Mobile */
        @media (max-width: 768px) {
          .fuente-natural-section {
            padding-left: 20px;
            padding-right: 20px;
            padding-top: 60px;
            padding-bottom: 60px;
          }
          .fuente-natural-section h2 {
            font-size: 26px;
            line-height: 120%;
          }
          .fuente-natural-section p {
            font-size: 14px;
            line-height: 140%;
          }
        }
      `}</style>
    </section>
  )
}
