import Image from "next/image"
import Link from "next/link"

export default function Contacto() {
  return (
    <>
      {/* Separador de 60px arriba */}
      <div aria-hidden className="h-[60px] w-full bg-white" />

      <section
        id="contacto"
        className="relative w-full h-[444px] flex items-center justify-center overflow-hidden"
      >
        {/* Imagen de fondo */}
        <Image
          src="/img/contacto/contactoImage2.png"
          alt="Contacto"
          fill
          className="object-cover"
          priority
        />

        {/* Capa con gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, #FFFFFF 0%, #2A2A2A 100%)",
            opacity: 0.3, // Podés ajustar la opacidad a gusto
          }}
        />

        {/* Contenido principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 flex flex-col items-center text-center">
          <h2
  className="text-[42px] font-bold mb-6 text-white"
  style={{
    lineHeight: "1.2",
    letterSpacing: "0.04em",
    textShadow: "0 2px 10px rgba(0,0,0,0.85)",
  }}
>
  Hacé tu consulta técnica <br /> directamente con nosotros
</h2>


          <Link href="/contacto">
            <button className="w-[240px] h-[60px] rounded-full bg-[#AE0C21] text-white font-normal text-[25px] transition hover:bg-[#8B091A]">
              Contactanos
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
