"use client"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-empresa relative w-full h-[400px] md:h-[450px] lg:h-[550px] flex items-center"
    >
      {/* Imagen optimizada con Next */}
      <Image
        src="/img/la-empresa/banner-empresa.png"
        alt="Banner La Empresa"
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
      ></div>

      {/* Contenedor de texto y rectángulo */}
      <div className="relative z-10 max-w-3xl px-8 text-center mt-[120px] md:mt-0 mx-auto">
        <div className="relative flex flex-col items-center font-['Hanken_Grotesk'] pt-8 pb-8 scale-90 md:scale-100">
          {/* Texto */}
          <h2 className="font-medium text-[36px] md:text-[50px] leading-tight mb-6 z-10 text-white mt-2 mb-10">
            LA EMPRESA
          </h2>
        </div>
      </div>

      <nav className="w-full flex justify-center items-center py-4 absolute top-0 left-0 z-20">
        {/* Aquí va el contenido del navbar */}
      </nav>

      {/* 👉 Margen solo en celular horizontal */}
      <style jsx>{`
        @media (orientation: landscape) and (max-width: 900px) {
          .hero-empresa {
            margin-top: 30px;
          }
        }
      `}</style>
    </section>
  )
}
