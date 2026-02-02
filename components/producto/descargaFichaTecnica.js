"use client";

import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const DescargaFichaTecnica = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
    /* --- Desktop amplio (≥1258px) --- */
    @media (min-width: 1258px) {
      .left-bar {
        position: absolute;
        top: 4rem;
        bottom: 4rem;
        width: 4px;
        background-color: #D9D9D9;
        left: 150px;
      }
      .right-bar {
        position: absolute;
        top: 4rem;
        bottom: 4rem;
        width: 4px;
        background-color: #D9D9D9;
        right: 150px;
      }
    }

    /* --- Intermedio (1450px → 1158px): más cerca de los bordes --- */
    @media (max-width: 1450px) and (min-width: 1158px) {
      .left-bar {
        position: absolute;
        top: 3rem;
        bottom: 3rem;
        width: 3px;
        background-color: #D9D9D9;
        left: 60px !important;
      }
      .right-bar {
        position: absolute;
        top: 3rem;
        bottom: 3rem;
        width: 3px;
        background-color: #D9D9D9;
        right: 60px !important;
      }
    }

    /* --- Ocultar barras por debajo de 1157px --- */
    @media (max-width: 1157px) {
      .left-bar,
      .right-bar {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
      }
    }

    /* --- Márgenes laterales para botones (≤1122px y mobile) --- */
    @media (max-width: 1122px) {
      .descarga-fichas-container a {
        margin-left: 20px !important;
        margin-right: 20px !important;
        width: calc(100% - 40px) !important;
      }
    }

    @media (max-width: 768px) {
      .descarga-fichas-container a {
        margin-left: 20px !important;
        margin-right: 20px !important;
        width: calc(100% - 40px) !important;
      }
    }

    /* 👇 Celu horizontal: forzar versión mobile */
    @media (orientation: landscape) and (max-width: 900px) {
      .descarga-fichas-container {
        flex-direction: column !important;
        align-items: center !important;
      }

      .descarga-fichas-container > div {
        width: 100% !important;
        text-align: center !important;
      }

      .descarga-fichas-container a {
        margin-left: 20px !important;
        margin-right: 20px !important;
        width: calc(100% - 40px) !important;
      }
    }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const fichas = [
    { nombre: "Ficha n1 - Trazabilidad del producto", archivo: "/docs/ficha1.pdf" },
    { nombre: "Ficha n2 - Esquema de controles", archivo: "/docs/ficha2.pdf" },
    { nombre: "Ficha n3 - Informe Biodisponibilidad", archivo: "/docs/ficha3.pdf" },
    { nombre: "Ficha n4 - Seguridad del producto", archivo: "/docs/ficha4.pdf" },
  ];

  return (
    <section id="fichasTecnicas"
    className="relative w-full bg-[#F9F9F9] py-24 my-28 flex justify-center overflow-hidden">
      {/* Barras laterales */}
      <div className="hidden md:block left-bar" />
      <div className="hidden md:block right-bar" />

      {/* Contenido principal */}
      <div className="descarga-fichas-container w-full max-w-[1100px] flex flex-col md:flex-row justify-between items-center md:items-start gap-16 px-6 md:px-16 z-10 mt-30 mb-30">
        {/* Bloque de texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
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
            className="mt-2"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "110%",
              color: "#000000",
            }}
          >
            Fichas <br className="hidden md:block" /> técnicas
          </h2>

          <p
            className="mt-6 text-[16px] text-[#2A2A2A]"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 400,
              lineHeight: "140%",
              maxWidth: 420,
            }}
          >
            Descargá nuestras fichas técnicas para saber más de nuestro producto o
            contactate con{" "}
            <a
  href="mailto:calidad@domonsa.com.ar?subject=Consulta%20Ficha%20Técnica&body=Hola%2C%20quisiera%20recibir%20información%20sobre%20las%20fichas%20técnicas."
  className="underline text-[#AE0C21]"
  style={{ fontWeight: 500 }}
>
  calidad@domonsa.com.ar
</a>

          </p>
        </div>

        {/* Botones */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6">
          {fichas.map((ficha, index) => (
            <a
              key={index}
              href={ficha.archivo}
              download
              className="group flex items-center rounded-full border border-[#D9D9D9] transition-all duration-300 hover:bg-[#AE0C21] bg-white shadow-sm w-full md:max-w-[540px]"
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                color: "#AE0C21",
                textDecoration: "none",
                padding: 10,
              }}
            >
              <span className="block w-6 md:hidden" />
              <span className="flex-1 text-center md:text-left group-hover:text-white">
                {ficha.nombre}
              </span>
              <ArrowRight
                size={20}
                className="group-hover:text-white transition-all duration-300 ml-4 flex-shrink-0"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DescargaFichaTecnica;
