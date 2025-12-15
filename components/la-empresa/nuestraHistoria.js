"use client"
import React, { useState } from "react" // 1. Importamos useState
// 2. Eliminamos la importación de 'next/image' que causa el error
// import Image from "next/image" 

export default function NuestraHistoria() {
  // 3. Añadimos un estado para rastrear el error del video
  const [videoHasError, setVideoHasError] = useState(false);

  return (
    <section className="relative w-full bg-white py-20 mt-20 nh-section overflow-x-hidden">
      
      {/* --- Contenido Superior (centrado) --- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* --- Título principal --- */}
        <p className="text-[#AE0C21] text-[20px] font-light tracking-[0.05em] uppercase mb-2">
          NUESTRA HISTORIA
        </p>

        <h2 className="text-[40px] font-normal text-[#2A2A2A] leading-[100%] mb-6">
          Domingo González y Cía S.A
        </h2>

        <p className="text-[18px] font-normal text-gray-700 leading-[130%] max-w-3xl mx-auto mb-16 mt-10">
          Desde 1943, sinónimo de confianza en nutrición animal
Domingo González y Cía S.A. nace en 1943 en Los Talas, Berisso, como lavadero y molienda de conchilla. Con más de 80 años de trayectoria, somos pioneros en el desarrollo de la alimentación animal en Argentina.
        </p>

        {/* --- Números destacados --- */}
        {/* <div className="grid grid-cols-2 md:flex justify-center items-center gap-10 md:gap-16 max-w-5xl mx-auto mb-20">
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
        </div> */}
      </div>
      {/* --- Fin del Contenido Superior --- */}


    


      {/* --- Contenido Inferior (centrado) --- */}
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* Este div w-full era el que tenías antes, lo mantenemos por consistencia */}
        <div className="w-full max-w-[1800px] mx-auto text-center overflow-hidden">
          <h3 className="text-[24px] md:text-[32px] font-medium text-[#000000] leading-snug mb-6 px-4 nh-text mx-auto">
            Todo comenzó con Don Domingo, quien vio el valor del carbonato de calcio. <br/>
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

  {/* --- Video (Contenedor más ancho) --- */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 text-center overflow-hidden mt-20">
        {/*
          Este contenedor mantiene la relación de aspecto del video (16:9).
        */}
        <div className="w-full mx-auto rounded-sm mb-10 overflow-hidden shadow-xl aspect-video">
          {/* 4. Renderizado condicional */}
          {videoHasError ? (
            // Si hay un error, mostramos la imagen original
            // Reemplazamos <Image> por <img> estándar
            <img
              src="/img/la-empresa/nuestraHistoria.png"
              alt="Nuestra Historia"
              className="w-full h-full object-cover" // Hacemos que la imagen llene el contenedor
            />
          ) : (
            // Si no, intentamos cargar el video
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Mna-fFDjIw0?rel=0&autoplay=1&mute=1&loop=1&playlist=Mna-fFDjIw0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy" 
              onError={() => setVideoHasError(true)} // 5. Si el iframe falla, actualizamos el estado
            ></iframe>
          )}
        </div>
      </div>
      {/* --- Fin del Video --- */}

      {/* --- Fin del Contenido Inferior --- */}


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