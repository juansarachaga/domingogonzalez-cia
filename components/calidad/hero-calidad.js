"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-contacto relative w-full h-[400px] md:h-[450px] lg:h-[550px] flex items-center"
    >
      {/* Imagen optimizada con Next */}
      <Image
        src="/img/calidad/hero-calidad.png"
        alt="Banner calidad"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />

      {/* Overlay con gradiente exacto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(174, 12, 33, 0.7) 0%, rgba(42, 42, 42, 0.7) 100%)",
        }}
      />

      {/* Contenedor de texto y rectángulo */}
        <div className="relative z-10 max-w-3xl px-8 text-left mt-[120px] ml-[120px] md:mt-0">
        <div className="relative flex flex-col items-start font-['Hanken_Grotesk'] ml-4 md:ml-[20vw] pt-8 pb-8 scale-90 md:scale-100">
          {/* Borde decorativo */}
          <div className="pointer-events-none absolute -top-8 -left-8 z-0 w-[calc(100%+70px)] h-[calc(100%+32px)]">
            <div className="absolute left-0 top-0 h-full w-0 border-l-8 border-[#AE0C21]" />
            <div className="absolute left-0 top-0 w-[52%] h-0 border-t-8 border-[#AE0C21]" />
            <div className="absolute left-0 bottom-0 w-[52%] h-0 border-b-8 border-[#AE0C21]" />
            <div className="absolute top-0 left-[52%] h-8 w-0 border-r-8 border-[#AE0C21]" />
            <div className="absolute bottom-0 left-[52%] h-8 w-0 border-r-8 border-[#AE0C21]" />
          </div>

          {/* Texto */}
          <h2 className="font-medium text-[36px] md:text-[50px] leading-tight mb-6 z-10 text-white ml-10 mt-2 mb-10">
            CALIDAD
          </h2>
        </div>
      </div>

      <nav className="w-full flex justify-center items-center py-4 absolute top-0 left-0 z-20">
        {/* Aquí va el contenido del navbar */}
      </nav>

      {/* 👇 CSS para margen en celular horizontal */}
      <style jsx>{`
        @media (orientation: landscape) and (max-width: 900px) {
          .hero-contacto {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  )
}
