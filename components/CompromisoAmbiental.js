"use client"
import Image from "next/image"

export default function CompromisoAmbiental() {
  return (
    <section className="w-full bg-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 space-y-20">
        
        {/* --- BLOQUE 1 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Texto */}
          <div className="flex flex-col space-y-4 px-2 sm:px-4">
            <p className="text-[#AE0C21] font-['Hanken_Grotesk'] font-light text-[14px] tracking-[0.05em] leading-[100%] uppercase">
              #BOSQUEDETALA
            </p>
            <h2 className="text-[26px] md:text-[36px] font-semibold leading-[120%] text-gray-900">
              Conservación del Ambiente <br /> y Producción Sustentable
            </h2>
            <p className="text-[15px] md:text-[16px] font-normal text-gray-800 leading-[150%]">
              Desde Domingo Gonzalez y Cia S.A venimos llevando a cabo un Plan de
              Cese de Actividad y Restauración (PCAR), con el objetivo de lograr la
              compatibilidad absoluta entre nuestra actividad productiva y la
              conservación del entorno.
            </p>
            <button className="w-[150px] h-[40px] rounded-full bg-white border border-[#BBBBBB] text-[#AE0C21] text-[15px] hover:bg-[#AE0C21] hover:text-white transition">
              Conocer más
            </button>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="absolute -right-3 top-3 w-full h-full bg-[#AE0C21] -z-10"></div>
            <Image
              src="/img/home/conservacionAmbiente.png"
              alt="Conservación del Ambiente"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* --- BLOQUE 2 --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Imagen */}
          <div className="relative order-1 md:order-none mb-30">
            <div className="absolute -left-3 top-3 w-full h-full bg-[#AE0C21] -z-10"></div>
            <Image
              src="/img/home/vacasCalcio.png"
              alt="El Calcio y las Etapas de Crecimiento Animal"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Texto */}
          <div className="flex flex-col space-y-4 px-2 sm:px-4">
            <p className="text-[#AE0C21] font-['Hanken_Grotesk'] font-light text-[14px] tracking-[0.05em] leading-[100%] uppercase">
              #CIENCIAYCAMPO
            </p>
            <h2 className="text-[26px] md:text-[36px] font-semibold leading-[120%] text-gray-900">
              El Calcio y las Etapas de <br /> Crecimiento Animal
            </h2>
            <p className="text-[15px] md:text-[16px] font-normal text-gray-800 leading-[150%]">
              Desde Domingo Gonzalez y Cia S.A venimos llevando a cabo un Plan de
              Cese de Actividad y Restauración (PCAR), con el objetivo de lograr la
              compatibilidad absoluta entre nuestra actividad productiva y la
              conservación del entorno.
            </p>
            <button className="w-[150px] h-[40px] rounded-full bg-white border border-[#BBBBBB] text-[#AE0C21] text-[15px] hover:bg-[#AE0C21] hover:text-white transition">
              Conocer más
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
