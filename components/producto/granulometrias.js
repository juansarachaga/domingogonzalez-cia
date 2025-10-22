"use client";

import React, { useEffect } from "react";

const GranulometriasDisponibles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* --- Barras laterales --- */
      @media (min-width: 1258px) {
        .left-bar {
          position: absolute;
          top: 4rem;
          bottom: 4rem;
          width: 4px;
          background-color: #AE0C21; /* más visible */
          left: 120px;
          z-index: 0;
        }
        .right-bar {
          position: absolute;
          top: 4rem;
          bottom: 4rem;
          width: 4px;
          background-color: #D9D9D9;
          right: 150px;
          z-index: 0;
        }
      }

      /* --- Intermedio (1257px → 1158px): más cerca de bordes --- */
      @media (max-width: 1450px) and (min-width: 1158px) {
        .left-bar {
          position: absolute;
          top: 3rem;
          bottom: 3rem;
          width: 3px;
          background-color: #AE0C21;
          left: 60px !important;
          z-index: 0;
        }
        .right-bar {
          position: absolute;
          top: 3rem;
          bottom: 3rem;
          width: 3px;
          background-color: #D9D9D9;
          right: 60px !important;
          z-index: 0;
        }
      }

      /* --- 💣 Ocultar barras en resoluciones menores --- */
      @media (max-width: 1157px) {
        .left-bar, .right-bar {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
        }
      }

      /* --- Márgenes laterales para mobile y hasta 1300px --- */
      @media (max-width: 1300px) {
        .granulometria-container {
          padding-left: 20px !important;
          padding-right: 20px !important;
        }
      }

      @media (max-width: 768px) {
        .granulometria-container {
          flex-direction: column !important;
          text-align: center !important;
          gap: 2rem !important;
        }
        .granulometria-container ul li {
          text-align: center !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="relative w-full bg-[rgba(217,217,217,0.3)] py-24 flex justify-center overflow-hidden mt-20">

      {/* Barras laterales */}
      {/* <div className="hidden md:block left-bar" /> */}
     

      {/* Contenido principal */}
      <div className="granulometria-container relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-start md:items-start gap-16 px-6 md:px-16 mt-20 mb-20">
        {/* Bloque de texto principal */}
        <div className="relative w-full md:w-1/2 text-left pl-6 md:pl-12 before:content-[''] before:absolute before:left-[-4rem] before:top-0 before:bottom-0 before:border-l-[4px] before:border-[#D9D9D9] mr-6">

          <p
            className="uppercase mb-4"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 300,
              fontSize: "18px",
              letterSpacing: "5%",
              color: "#AE0C21",
            }}
          >
            NUESTRO PRODUCTO
          </p>

          <h2
            className="mt-2 mb-6"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 400,
              fontSize: "40px",
              lineHeight: "110%",
              color: "#000000",
            }}
          >
            Granulometrías <br className="hidden md:block" /> disponibles
          </h2>

          <p
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 400,
              fontSize: "17px",
              lineHeight: "140%",
              color: "#000000",
            }}
          >
            Disponemos de granulometrías adaptadas a cada especie, y podés
            consultar la Ficha Química General para más detalles técnicos.
          </p>
        </div>

        {/* Bloque de lista */}
        <div className="w-full md:w-1/2 text-left md:text-left pr-4 md:pr-16 ml-80">
          <ul className="space-y-3 md:space-y-4">
            {[
              "Tipo Nº2 - Bovinos y Equinos",
              "Tipo Nº1 - Bobinos",
              "Tipo Nº0 - Aves y Cerdos",
              "Tipo Nº00 - Aves",
            ].map((tipo, i) => (
              <li
                key={i}
                className="text-[#AE0C21] mt-2"
                style={{
                  fontFamily: "Hanken Grotesk",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "172%",
                }}
              >
                {tipo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GranulometriasDisponibles;
