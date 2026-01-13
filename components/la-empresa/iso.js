"use client"
import Image from "next/image"

export default function Iso() {
  return (
    <section className="iso-section relative w-full bg-white py-24 mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Logo ISO */}
        <div className="flex justify-center mb-10">
          <Image
            src="/img/logos/logoIso.png"
            alt="ISO"
            width={94}
            height={70}
            className="object-contain"
            priority
          />
        </div>

        {/* Texto */}
        <p
          className="iso-text mx-auto text-center"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 500,
            fontSize: "32px",
            lineHeight: "100%",
            letterSpacing: "0%",
            color: "#9B9B9B",
            maxWidth: "980px",
          }}
        >
          Estamos certificados bajo la norma ISO 9001 desde hace más de 10 años,
          lo que respalda nuestro compromiso sostenido con la calidad y la mejora
          continua.
        </p>

        {/* Botón */}
        <div className="mt-12 flex justify-center mb-40">
          <a
            href="/docs/certificadoIso.pdf"
            download
            className="iso-btn inline-flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#8B091A]"
            style={{
              background: "#AE0C21",
              fontFamily: "Hanken Grotesk",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0%",
              color: "#FFFFFF",
              padding: "14px 44px",
              textDecoration: "none",
            }}
          >
            Descargar certificado
          </a>
        </div>
      </div>

      {/* 🎯 Reglas responsive institucionales */}
      <style jsx>{`
        @media (min-width: 1300px) {
          .iso-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 768px) {
          .iso-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .iso-text {
            font-size: 18px !important;
            line-height: 120% !important;
            max-width: 92% !important;
          }

          .iso-btn {
            width: calc(100% - 40px) !important;
            margin-left: 20px !important;
            margin-right: 20px !important;
            padding: 14px 20px !important;
          }
        }

        /* 👇 Celu horizontal: forzar versión más compacta */
        @media (orientation: landscape) and (max-width: 900px) {
          .iso-text {
            font-size: 18px !important;
            line-height: 120% !important;
          }

          .iso-btn {
            width: calc(100% - 40px) !important;
            margin-left: 20px !important;
            margin-right: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
