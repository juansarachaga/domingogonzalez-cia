"use client"
import Image from "next/image"

export default function AliadosEstrategicos() {
  const logos = [
    "marca1.png",
    "marca2.png",
    "marca3.png",
    "marca4.png",
    "marca5.png",
    "marca6.png",
  ]

  return (
    <section className="w-full py-16 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        
        {/* Texto superior */}
        <span className="font-['Hanken_Grotesk'] font-light text-[18px] leading-[100%] tracking-[0.05em] text-[#AE0C21] uppercase mb-4">
          ALIADOS ESTRATÉGICOS
        </span>

        {/* Título */}
        <h2 className="font-['Hanken_Grotesk'] font-normal text-[40px] leading-[100%] text-center text-black mb-8">
          Nos eligen, crecemos juntos
        </h2>

        {/* Grid de logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 w-full items-center justify-items-center">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`transition-all duration-500 ${
                i === 2 || i === 3
                  ? "opacity-100 grayscale-0" // Logos centrales más vivos
                  : "opacity-50 grayscale"     // Logos costados con filtro
              }`}
            >
              <Image
                src={`/img/logos/marcas/${logo}`}
                alt={`Logo ${i + 1}`}
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
