"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const preguntas = [
    {
      pregunta: "¿Cómo puedo pedir presupuesto o contactar?",
      respuesta:
        "Podés contactarnos a través del formulario de contacto en nuestra web o enviarnos un correo a info@domingogonzalez.com.ar. También estamos disponibles por teléfono o WhatsApp para consultas directas.",
    },
    {
      pregunta: "¿Cuál es el proceso de entrega y envío?",
      respuesta:
        "Realizamos entregas en todo el país. Los pedidos se preparan en nuestra planta y se despachan a través de transportes de confianza, asegurando puntualidad y calidad en la entrega.",
    },
    {
      pregunta: "¿Ofrecen asistencia técnica o asesoramiento sobre uso?",
      respuesta:
        "Sí, contamos con un equipo especializado que brinda asesoramiento técnico sobre la correcta aplicación y uso de nuestros productos.",
    },
    {
      pregunta: "¿La empresa tiene una política de calidad establecida?",
      respuesta:
        "En Domingo Gonzalez y CIA S.A aplicamos una política de calidad basada en la mejora continua, la selección de materia prima natural y controles durante todo el proceso de lavado y molienda para asegurar un producto limpio, uniforme y libre de impurezas.",
    },
    {
      pregunta: "¿Cuentan con servicio al consumidor y reclamos?",
      respuesta:
        "Sí, disponemos de un canal de atención al cliente para recibir consultas, sugerencias o reclamos y brindar una respuesta rápida y efectiva.",
    },
    {
      pregunta: "¿Dónde están ubicados?",
      respuesta:
        "Nuestra planta se encuentra en Los Talas, Berisso, provincia de Buenos Aires, y atendemos a todo el país.",
    },
  ]

  return (
    <section className="w-full py-20 bg-white px-6 md:px-20 max-w-6xl mx-auto mt-30 pf-section">
      {/* --- Título --- */}
      <h2 className="text-[40px] font-normal text-[#000000] mb-10 text-left pf-title">
        Preguntas más frecuentes
      </h2>

      {/* --- Listado de preguntas --- */}
      <div className="divide-y divide-gray-200">
        {preguntas.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className="py-5 cursor-pointer transition-colors duration-300"
              onClick={() => toggleQuestion(index)}
            >
              {/* --- Pregunta --- */}
              <div
                className={`flex justify-between items-start md:items-center gap-4 ${
                  isOpen ? "text-[#AE0C21]" : "text-[#000000] mt-5 mb-5"
                }`}
              >
                <h3
                  className={`font-semibold text-[23px] leading-snug flex-1 transition-colors duration-300 pf-question`}
                  style={{ fontFamily: "Hanken Grotesk" }}
                >
                  {item.pregunta}
                </h3>

                <div className="flex-shrink-0 flex items-center h-[28px]">
                  <ChevronDown
                    size={22}
                    className={`transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#AE0C21]" : "text-gray-600"
                    }`}
                  />
                </div>
              </div>

              {/* --- Respuesta desplegable --- */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isOpen ? "max-h-[500px] mt-4" : "max-h-0"
                }`}
              >
                <p
                  className="text-[18px] text-[#5D5D5D] leading-[140%] mt-2 mb-3 pf-answer"
                  style={{ fontFamily: "Hanken Grotesk" }}
                >
                  {item.respuesta}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* 🎯 Estilos responsivos locales */}
      <style jsx>{`
        /* --- General --- */
        @media (max-width: 1300px) {
          .pf-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        /* --- Tablets medianas --- */
        @media (max-width: 1024px) {
          .pf-section {
            padding-left: 30px;
            padding-right: 30px;
          }
          .pf-title {
            font-size: 34px;
          }
          .pf-question {
            font-size: 21px;
          }
          .pf-answer {
            font-size: 17px;
          }
        }

        /* --- Tablets chicas / Celulares grandes --- */
        @media (max-width: 768px) {
          .pf-section {
            padding-left: 22px;
            padding-right: 22px;
          }
          .pf-title {
            font-size: 30px;
            text-align: center;
          }
          .pf-question {
            font-size: 20px;
            line-height: 130%;
          }
          .pf-answer {
            font-size: 16px;
          }
        }

        /* --- Celulares pequeños --- */
        @media (max-width: 480px) {
          .pf-section {
            padding-left: 18px;
            padding-right: 18px;
          }
          .pf-title {
            font-size: 26px;
            text-align: center;
          }
          .pf-question {
            font-size: 18px;
            line-height: 130%;
          }
          .pf-answer {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  )
}
