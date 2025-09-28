import Image from "next/image"

export default function Contacto() {
  return (
    <section id="contacto" className="relative w-full h-[444px] flex items-center justify-center">
      {/* Imagen con estilos de Figma */}
      <Image
  src="/img/contacto/contactoImage.png"
  alt="Contacto"
  fill
  className="object-cover opacity-100"
  style={{ top: "0", left: "0" }}
/>

      {/* Contenido arriba de la imagen */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
        <h2 className="text-2xl  text-[42px] font-bold mb-6 text-white box-border" style={{ lineHeight: "1.2", letterSpacing: "0.04em" }}>
          Contactate con Nosotros <br/> para más Información
        </h2>
        <button
          className="w-[240px] h-[60px] rounded-full bg-[#AE0C21] text-white font-['Hanken_Grotesk'] font-normal text-[25px] transition hover:bg-[#8B091A]"
        >
          Contactanos
        </button>
      </div>
    </section>
  )
}
