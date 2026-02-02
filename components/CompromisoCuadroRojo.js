"use client"

export default function CompromisoCuadroRojo() {
  const items = [
    {
      numero: "01.",
      titulo: "COMPROMISO CON LA CALIDAD Y LA MEJORA CONSTANTE",
      texto:
        "Nos enfocamos en la calidad como pilar fundamental, mejorándola de forma continua mediante la prevención, el análisis justo y la corrección oportuna de desvíos en los procesos productivos y operativos de la empresa.",
    },
    {
      numero: "02.",
      titulo: "RESPONSABILIDAD INTEGRAL Y TRABAJO EN EQUIPO",
      texto:
        "La calidad es una responsabilidad compartida por todas las áreas. Promovemos la colaboración interna y el compromiso colectivo para asegurar productos confiables, alineados con los estándares del sector agroindustrial.",
    },
    {
      numero: "03.",
      titulo: "RESPETO POR EL MEDIO AMBIENTE Y USO RESPONSABLE",
      texto:
        "Trabajamos de forma sostenible, haciendo un uso racional de los recursos naturales y previniendo la contaminación. Cumplimos los requisitos legales y buscamos la satisfacción plena de nuestros clientes, productores y aliados estratégicos.",
    },
  ]

  return (
    <section
    className="w-full bg-[#AE0C21] py-16">
      {/* Margen superior de 30px con mismo background */}
      <div className="h-[50px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Línea izquierda */}
          <span
            aria-hidden
            className="hidden md:block absolute left-0 top-0 h-full w-[4px] bg-[#850818]"
          />
          {/* Línea derecha */}
          <span
            aria-hidden
            className="hidden md:block absolute right-0 top-0 h-full w-[4px] bg-[#850818]"
          />

          {items.map((item, i) => (
            <div
              key={i}
              className="text-white flex flex-col space-y-4 px-4 md:px-8 mt-10 mb-10 m-[40px] mobile-ajuste"
            >
              <span className="numero font-['Hanken_Grotesk'] font-normal text-[50px] leading-[100%] text-white/40">
                {item.numero}
              </span>
              <h3 className="font-['Hanken_Grotesk'] font-bold text-[18px] leading-[120%] uppercase text-white">
                {item.titulo}
              </h3>
              <p className="font-['Hanken_Grotesk'] font-normal text-[14px] leading-[150%] text-white">
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Margen inferior de 30px con mismo background */}
      <div className="h-[50px]" />

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-ajuste {
            margin-left: 20px;
            margin-right: 20px;
          }
          .mobile-ajuste .numero {
            text-align: left;
            display: block;
          }
        }
      `}</style>
    </section>
  )
}
