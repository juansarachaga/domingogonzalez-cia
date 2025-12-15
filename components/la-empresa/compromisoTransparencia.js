"use client"
import Image from "next/image"

export default function NuestroCompromiso() {
  return (
    <section className="w-full bg-white py-24 mt-20 nc-section overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center relative">
        {/* Label */}
        <p
          className="uppercase mb-6"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 300,
            fontSize: "20px",
            letterSpacing: "5%",
            color: "#AE0C21",
          }}
        >
          NUESTRO COMPROMISO
        </p>

        {/* Cita (comillas decorativas) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Comilla izquierda */}
          <span
            aria-hidden="true"
            className="nc-quote-left pointer-events-none select-none"
          >
            “
          </span>

          {/* Texto */}
          <p
            className="mx-auto nc-text"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 500,
              fontSize: "32px",
              lineHeight: "100%",
              color: "#9B9B9B",
              textAlign: "center",
            }}
          >
            Comprometidos con la transparencia y la mejora continua, somos
            miembros de <b>SEDEX</b> (<i>Supplier Ethical Data Exchange</i>)
            inscriptos en su plataforma, garantizando prácticas responsables en
            materia de calidad, medio ambiente, seguridad y ética laboral
          </p>

          {/* Comilla derecha */}
          <span
            aria-hidden="true"
            className="nc-quote-right pointer-events-none select-none"
          >
            ”
          </span>
        </div>

        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/img/la-empresa/sedexLogo.png"
            alt="Sedex Member"
            width={500}
            height={200}
            className="w-[400px] md:w-[500px] h-auto opacity-95"
            priority
          />
        </div>
      </div>

      {/* 🎯 CSS local: reglas 1300 + mobile */}
      <style jsx>{`
        @media (min-width: 1300px) {
          .nc-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        .nc-quote-left,
        .nc-quote-right {
          position: absolute;
          font-family: "HeadlandOne", serif;
          font-weight: 400;
          font-size: 200px;
          line-height: 100%;
          color: #e8e8e8;
        }

        .nc-quote-left {
          left: -60px;     /* antes -10px */
          top: -80px;
        }

        .nc-quote-right {
          right: -70px;    /* antes -10px */
          bottom: -140px;  /* antes -90px */
        }

        @media (max-width: 768px) {
          .nc-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .nc-text {
            font-size: 20px !important;
            line-height: 120% !important;
            max-width: 92%;
          }

          .nc-quote-left,
          .nc-quote-right {
            font-size: 120px;
          }

          .nc-quote-left {
            left: -6px;
            top: -45px;
          }

          .nc-quote-right {
            right: -6px;
            bottom: -70px;
          }
        }
      `}</style>
    </section>
  )
}
