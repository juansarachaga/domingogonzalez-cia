import Image from "next/image"

export default function Contacto() {
  return (
    <>
      {/* Separador de 30px arriba */}
      <div aria-hidden className="h-[60px] w-full bg-white" />

      <section id="contacto" className="relative w-full h-[444px] flex items-center justify-center overflow-hidden">
        <Image
          src="/img/contacto/contactoImage.png"
          alt="Contacto"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
          <h2
            className="text-[42px] font-bold mb-6 text-white"
            style={{ lineHeight: "1.2", letterSpacing: "0.04em" }}
          >
            Contactate con Nosotros <br /> para más Información
          </h2>
          <button className="w-[240px] h-[60px] rounded-full bg-[#AE0C21] text-white font-normal text-[25px] transition hover:bg-[#8B091A]">
            Contactanos
          </button>
        </div>
      </section>
    </>
  )
}
