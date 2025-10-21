"use client"
import { useState } from "react"
import Image from "next/image"

export default function NuestrosProductos() {
  const [activo, setActivo] = useState("bovinos")

  const productos = [
    {
      id: "bovinos",
      nombre: "BOVINOS",
      icono: "/img/home/animalesIcon/vaca.png",
      imagen: "/img/producto/especies/bovinos.png",
    },
    {
      id: "equinos",
      nombre: "EQUINOS",
      icono: "/img/home/animalesIcon/caballo.png",
      imagen: "/img/producto/especies/equinos.png",
    },
    {
      id: "cerdos",
      nombre: "CERDOS",
      icono: "/img/home/animalesIcon/cerdo.png",
      imagen: "/img/producto/especies/cerdos.png",
    },
    {
      id: "aves",
      nombre: "AVES",
      icono: "/img/home/animalesIcon/gallina.png",
      imagen: "/img/producto/especies/aves.png",
    },
    {
      id: "otros",
      nombre: "OTROS",
      icono: "/img/home/animalesIcon/gato.png",
      imagen: "/img/producto/especies/otros.png",
    },
    {
      id: "nucleos",
      nombre: "NÚCLEOS",
      icono: "/img/home/animalesIcon/nucleos.png",
      imagen: "/img/producto/especies/nucleos.png",
    },
  ]

  return (
    <section className="relative w-full py-20 bg-white">
      {/* Contenedor principal */}
      <div
        className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 grid gap-12"
        style={{ maxWidth: "1200px" }}
      >
        {/* Encabezado */}
        <div className="text-center mb-10">
          <p className="uppercase text-[#AE0C21] text-[20px] font-light tracking-[0.05em] mb-2">
            NUESTROS PRODUCTOS
          </p>
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-normal leading-[120%] text-gray-900">
            Expertos en nutrición animal: <br /> de la fábrica a cada especie.
          </h2>
        </div>

        {/* Galería */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {productos.map((p) => (
            <div
              key={p.id}
              onClick={() => setActivo(p.id)}
              className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] cursor-pointer overflow-hidden rounded-md transition-all duration-500 group"
            >
              <Image
                src={p.imagen}
                alt={p.nombre}
                width={600}
                height={400}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
              />

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-300 ${
                  activo === p.id
                    ? "bg-[#AE0C21]/70"
                    : "bg-white/85 hover:bg-[#AE0C21]/60"
                }`}
              >
                <Image
                  src={p.icono}
                  alt={`${p.nombre} icono`}
                  width={60}
                  height={60}
                  className={`mx-auto mb-3 transition-transform duration-300 ${
                    activo === p.id ? "scale-110" : "group-hover:scale-105"
                  }`}
                />
                <p
                  className={`font-medium text-[22px] sm:text-[26px] md:text-[28px] tracking-[0.05em] transition-colors duration-300 ${
                    activo === p.id ? "text-white" : "text-[#AE0C21]"
                  }`}
                >
                  {p.nombre}
                </p>

                {activo === p.id && (
                  <span className="text-white text-[14px] font-light mt-3 tracking-wide">
                    Conocer más →
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3 border-t-[8px] border-[#AE0C21]/10 mt-16 ml-auto"></div>

      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 20px;
            padding-right: 20px;
          }
          .grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
