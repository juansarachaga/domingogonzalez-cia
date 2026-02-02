"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function NuestrosProductos() {
  const [activo, setActivo] = useState("bovinos")

  const productos = [
    {
      id: "bovinos",
      nombre: "BOVINOS",
      icono: "/img/animalesIcon/vaca.png",
      iconoBlanco: "/img/animalesIcon/vaca-b.png",
      imagen: "/img/producto/especies/bovinos.png",
    },
    {
      id: "aves",
      nombre: "AVES",
      icono: "/img/animalesIcon/gallina.png",
      iconoBlanco: "/img/animalesIcon/gallina-b.png",
      imagen: "/img/producto/especies/aves.png",
    },
    {
      id: "cerdos",
      nombre: "CERDOS",
      icono: "/img/animalesIcon/cerdo.png",
      iconoBlanco: "/img/animalesIcon/cerdo-b.png",
      imagen: "/img/producto/especies/cerdos.png",
    },
  ]

  const textos = {
    bovinos: {
      titulo: "Bovinos",
      descripcion: `
El calcio es un mineral esencial para el ganado bovino, no solo por su papel estructural en huesos y dientes, sino también por su función en la contracción muscular, la coagulación sanguínea y la regulación neuromuscular.

Mantener un equilibrio adecuado entre calcio y fósforo, junto con un correcto aporte de vitamina D, es clave para su absorción y metabolismo. Su deficiencia genera retraso en el crecimiento, fracturas espontáneas, pérdida de reservas óseas durante la lactancia y una notable disminución en la producción de carne y leche.

Las necesidades varían según la raza, la edad y la etapa productiva, por lo que las dosis deben ajustarse a cada caso.

En sistemas intensivos, como el feedlot o la alimentación con granos y pasturas maduras de bajo contenido mineral, la suplementación resulta indispensable para evitar pérdidas productivas.

Un buen balance mineral asegura animales sanos, mayor rendimiento y una mejor eficiencia en toda la producción.
      `,
      dosisTitulo: "Dosis recomendadas de carbonato de calcio",
      dosis: [
        { label: "VACAS DE ORDEÑE", valor: "50 - 70 g" },
        { label: "VACAS SECAS", valor: "35 - 40 g" },
        { label: "VACAS GESTANTES", valor: "85 g" },
        { label: "TERNEROS", valor: "25 g" },
        { label: "INVERNADA", valor: "35 - 40 g" },
        { label: "VACAS DE CRÍA", valor: "35 - 40 g" },
      ],
      nota: "La relación ideal calcio/fósforo es de 1,4–2:1. La vitamina D regula el metabolismo del calcio; su deficiencia resulta perjudicial.",
    },

    aves: {
      titulo: "Aves",
      descripcion: `
La importancia del calcio en la nutrición avícola

El calcio es un nutriente esencial en la dieta de las aves, clave para su salud, crecimiento y productividad. En las primeras etapas de vida, las aves presentan una estructura ósea inmadura y una relación calcio fósforo inferior a la del adulto, por lo que necesitan un aporte temprano y equilibrado de calcio, fósforo y vitamina D.

La deficiencia de calcio impacta directamente en la producción avícola, generando huevos con cáscara delgada, baja incubabilidad y, en casos severos, el cese total de la postura. Para prevenir estos problemas y favorecer el desarrollo de animales jóvenes, el carbonato de calcio orgánico de conchilla se destaca como una fuente de alta disponibilidad biológica.

La carencia de calcio se observa especialmente en sistemas de postura, aunque también afecta a los parrilleros, provocando fracturas, menor engorde y bajo rendimiento. Una correcta suplementación mejora la absorción mineral, fortalece la estructura ósea y optimiza resultados productivos generales.
      `,
      dosisTitulo: "Recomendaciones de inclusión de carbonato de calcio",
      dosis: [
        { label: "POLLOS 0 A 8 SEMANAS", valor: "2,5 % (≈ 0,9 % Ca)" },
        { label: "POLLOS 8 A 10 SEMANAS", valor: "1,5 % (≈ 0,6 % Ca)" },
        { label: "PONEDORAS", valor: "7,0 % a 8,5 % (≈ 2,75 % a 3,0 % Ca)" },
      ],
      nota: "La relación calcio:fósforo debe ajustarse según la edad y el destino productivo del ave, manteniéndose entre 1,5:1 y 3:1.",
    },

    cerdos: {
      titulo: "Cerdos",
      descripcion: `
El rol del calcio en la nutrición porcina

El calcio es un elemento fundamental en el desarrollo esquelético del cerdo y cumple un papel clave durante las etapas de crecimiento, gestación y lactancia. Una administración deficiente se manifiesta en múltiples trastornos, como retraso o detención del crecimiento, menor consumo de alimento, deterioro de piel y pelaje, debilitamiento óseo y alteraciones reproductivas.

Un adecuado aporte de calcio permite maximizar el rendimiento productivo y mantener animales más sanos y eficientes en cada etapa de su ciclo.
      `,
      dosisTitulo: "Recomendaciones de inclusión diaria de carbonato de calcio",
      dosis: [
        { label: "CRECIMIENTO 5 A 10 KG PV", valor: "12 a 15 g/día (≈ 0,8 % Ca)" },
        { label: "CRECIMIENTO 20 A 35 KG PV", valor: "25 a 30 g/día (≈ 0,65 % Ca)" },
        { label: "CERDAS EN GESTACIÓN 110 A 250 KG PV", valor: "35 g/día (≈ 0,75 % Ca)" },
        { label: "CERDAS EN LACTANCIA", valor: "70 g/día (≈ 0,75 % Ca)" },
        { label: "REPRODUCTORES MACHOS", valor: "35 a 40 g/día (≈ 0,75 % Ca)" },
      ],
      nota: "Para lograr un correcto desarrollo óseo, es fundamental mantener una relación equilibrada calcio:fósforo (1,1:1 a 1,5:1) y asegurar un adecuado suministro de vitamina D, optimizando así la absorción y el metabolismo mineral.",
    },
  }

  const info = textos[activo]

  return (
    <section id="usosDelProducto"
    className="relative w-full py-20 bg-white np-section">
      <div className="max-w-7xl mx-auto mt-20">
        {/* Galería siempre horizontal */}
        <div className="flex w-full h-[360px] sm:h-[420px]">
          {productos.map((p) => (
            <div
              key={p.id}
              onClick={() => setActivo(p.id)}
              className="relative flex-1 h-full cursor-pointer overflow-hidden transition-all duration-500 group"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                style={{
                  backgroundImage: `url(${p.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-500 p-4 ${
                  activo === p.id
                    ? "bg-[#AE0C2166]"
                    : "bg-white/70 hover:bg-[#AE0C21]/40"
                }`}
              >
                <Image
                  src={activo === p.id ? p.iconoBlanco : p.icono}
                  alt={p.nombre}
                  width={70}
                  height={70}
                  className="mb-3 transition-transform duration-300 group-hover:scale-105"
                />
                <p
                  className={`font-medium text-[22px] sm:text-[28px] tracking-[0.05em] ${
                    activo === p.id ? "text-white" : "text-[#AE0C21]"
                  }`}
                >
                  {p.nombre}
                </p>

                {activo === p.id ? (
                  <ChevronDown className="text-white mt-6 animate-bounce" size={32} />
                ) : (
                  <span
                    className="mt-6 text-white text-[14px] sm:text-[14px] px-6 py-2 sm:px-6 sm:py-2 rounded-full"
                    style={{
                      fontFamily: "Hanken Grotesk, sans-serif",
                      fontWeight: 600,
                      background: "rgba(174, 12, 33, 1)",
                      backdropFilter: "blur(4px)",
                      padding: "8px 16px",
                    }}
                  >
                    Conocer más
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Panel informativo */}
        <div className="np-panel mt-14 mx-auto px-4 sm:px-10 md:px-12 text-left bg-white max-w-[90%] sm:max-w-4xl md:max-w-5xl">
          <h3 className="text-[30px] sm:text-[40px] font-normal mb-6 sm:mb-8 text-black">
            {info.titulo}
          </h3>

          <p className="whitespace-pre-line text-[18px] sm:text-[20px] leading-[160%] mb-10 sm:mb-12 text-black">
            {info.descripcion}
          </p>

          <h4 className="text-[26px] sm:text-[32px] font-normal mb-8 text-black">
            {info.dosisTitulo}
          </h4>

          <div className="np-dosis-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 mb-12">
            {info.dosis.map((d, i) => (
              <div key={i} className="text-center sm:text-left">
                <p className="text-[22px] uppercase tracking-[0.05em] mb-2 text-[#AE0C21] font-medium">
                  {d.label}
                </p>
                <p className="text-[32px] sm:text-[40px] text-black">
                  {d.valor}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[18px] sm:text-[20px] text-[#BBBBBB] leading-[150%]">
            {info.nota}
          </p>
        </div>
      </div>

      {/* 🔧 CSS para modo horizontal mobile */}
      <style jsx>{`
        @media (orientation: landscape) and (max-width: 900px) {
          .np-section {
            padding-top: 16px;
            padding-bottom: 40px;
          }

          .np-panel {
            max-width: 100% !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            text-align: center !important;
          }

          .np-panel h3,
          .np-panel h4,
          .np-panel p {
            text-align: center !important;
          }

          .np-dosis-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }

          .np-dosis-grid > div {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  )
}
