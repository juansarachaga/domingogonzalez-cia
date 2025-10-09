"use client"
import React from "react"
import Image from "next/image"

export default function PoliticaDeCalidad() {
  const items = [
    { icon: "/img/la-empresa/iconos/box.png", text: "Asegurar la confiabilidad de cada producto" },
    { icon: "/img/la-empresa/iconos/verified.png", text: "Implementar calidad en todas las áreas" },
    { icon: "/img/la-empresa/iconos/trending_up.png", text: "Impulsar la mejora continua siempre" },
    { icon: "/img/la-empresa/iconos/verified_user.png", text: "Cumplir requisitos legales aplicables" },
    { icon: "/img/la-empresa/iconos/nest_eco_leaf.png", text: "Usar recursos y prevenir contaminación" },
    { icon: "/img/la-empresa/iconos/handshake.png", text: "Lograr satisfacción de nuestros clientes" },
  ]

  return (
    <section className="relative w-full bg-white py-20 mt-20 pc-section overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        
        {/* --- Título y descripción --- */}
        <h2 className="text-[40px] font-normal text-[#2A2A2A] leading-[100%] mb-6">
          Política de Calidad
        </h2>

        <p className="text-[16px] font-normal text-[#2A2A2A] leading-[150%] max-w-3xl mx-auto mb-16">
          La Política de Calidad de Domingo González y Cía. S.A. está basada en la provisión de productos confiables 
          que satisfagan los requisitos de nuestros clientes y los lineamientos de la norma ISO 9001:2015. 
          Nos enfocamos en:
        </p>

        {/* --- Iconos con textos --- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 justify-center items-start max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300">
              {/* Icono */}
              <div className="w-[60px] h-[60px] mb-4 flex justify-center items-center transition-all duration-300">
                <Image
                  src={item.icon}
                  alt={item.text}
                  width={60}
                  height={60}
                  className="brightness-75 grayscale group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Texto */}
              <p className="text-[16px] leading-[120%] font-normal max-w-[150px] text-[#999999] group-hover:text-[#2A2A2A] transition-all duration-300">
                {item.text}
              </p>

              {/* Línea inferior solo en hover */}
              <div className="w-[60px] h-[4px] bg-[#AE0C21]/0 mt-4 rounded-full group-hover:bg-[#AE0C21]/20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CSS local para márgenes y responsividad --- */}
      <style jsx>{`
        @media (min-width: 1300px) {
          .pc-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 768px) {
          .pc-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .pc-section h2 {
            font-size: 28px;
          }

          .pc-section p {
            font-size: 15px;
            line-height: 140%;
          }

          .pc-section .grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
          }

          .pc-section img {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </section>
  )
}
