"use client"
import React from "react"
import Image from "next/image"

export default function NuestraHistoria() {
  return (
    <section className="relative w-full bg-white py-20 mt-20 nh-section overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">

        {/* --- Título principal --- */}
        <p className="text-[#AE0C21] text-[20px] font-light tracking-[0.05em] uppercase mb-2">
          NUESTRA HISTORIA
        </p>

        <h2 className="text-[40px] font-normal text-[#2A2A2A] leading-[100%] mb-6">
          Domingo González y Cía S.A
        </h2>

        <p className="text-[18px] font-normal text-gray-700 leading-[130%] max-w-3xl mx-auto mb-16 mt-10">
          Domingo González y Cía S.A. nace en 1943 en Los Talas, Berisso, como lavadero y molienda de conchilla. 
          Con más de 70 años de trayectoria, somos pioneros en el desarrollo de la alimentación animal en Argentina.
        </p>

        {/* --- Números destacados --- */}
        <div className="grid grid-cols-2 md:flex justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto mb-20">
          {[
            { n: "10k", t: "Gallinas\nponedoras" },
            { n: "5k", t: "Cerdos en\ncría y engorde" },
            { n: "3k", t: "Bovinos de\nleche y carne" },
            { n: "2k", t: "Conejos y\notros animales" },
          ].map((e, i) => (
            <React.Fragment key={i}>
              <div className="flex flex-col items-center justify-center text-center">
                <h3 className="text-[80px] font-semibold text-[#2A2A2A] leading-[100%]">{e.n}</h3>
                <p className="text-[16px] font-normal text-[#BBBBBB] leading-[100%] mt-2 whitespace-pre-line">
                  {e.t}
                </p>
              </div>
              {i < 3 && <div className="hidden md:block w-[2px] h-[90px] bg-[#AE0C21]/20"></div>}
            </React.Fragment>
          ))}
        </div>

        {/* --- Imagen y texto histórico --- */}
        <div className="w-full max-w-[1800px] mx-auto text-center overflow-hidden">
          <Image
            src="/img/la-empresa/nuestraHistoria.png"
            alt="Nuestra Historia"
            width={1900}
            height={800}
            className="w-full h-auto object-cover mx-auto rounded-sm mb-10"
            priority
          />

          <h3 className="text-[24px] md:text-[32px] font-medium text-[#000000] leading-snug mb-6 px-4 nh-text mx-auto">
            Todo comenzó con Don Domingo, quien vio el valor del carbonato de calcio. 
            La empresa creció con esfuerzo, innovación y compromiso.
          </h3>

          <p className="text-[18px] text-[#707070] leading-[120%] mb-12 px-4 nh-subtext">
            Hoy, la tercera generación de la familia González continúa el legado, <br />
            manteniendo vivo el lema del fundador:
          </p>

          {/* --- Recuadro con abertura inferior --- */}
          <div className="relative border-[8px] border-[#AE0C21]/10 p-8 md:p-10 w-[90%] lg:w-[80%] xl:w-[100%] mx-auto nh-quote-box">
            <p className="text-[36px] md:text-[46px] font-semibold text-[#AE0C21] leading-[100%] mt-10 mb-10 nh-quote">
              “Dar antes que recibir”
            </p>

            {/* Abertura inferior */}
            <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-[120px] h-[8px] bg-white"></div>
          </div>
        </div>
      </div>

      {/* 🎯 CSS local con prioridad en mobile */}
      <style jsx>{`
        @media (min-width: 1300px) {
          .nh-section {
            padding-left: 40px;
            padding-right: 40px;
          }
          .nh-section .max-w-5xl {
            max-width: 70%;
          }
        }

        @media (max-width: 768px) {
          .nh-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          .nh-section .grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
          }

          .nh-section h3 {
            font-size: 64px;
          }

          /* Texto "Todo comenzó..." */
          .nh-text {
            font-size: 16px !important;
            line-height: 120% !important;
            max-width: 90%;
            text-align: center;
            margin: 0 auto;
          }

          /* Texto "Hoy la tercera generación..." */
          .nh-subtext {
            font-size: 15px !important;
            line-height: 120% !important;
          }

          /* Recuadro y texto "Dar antes que recibir" */
          .nh-quote-box {
            max-width: 90%;
            padding: 20px;
          }

          .nh-quote {
            font-size: 30px !important;
            line-height: 110% !important;
          }
        }
      `}</style>
    </section>
  )
}
