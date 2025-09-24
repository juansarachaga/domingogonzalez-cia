import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-[600px] w-full">
      {/* Imagen de fondo */}
      <Image
        src="/img/home/banner.jpg"
        alt="Banner principal"
        fill
        className="object-cover"
        priority
      />
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold text-center">
          Bienvenidos a Domingo González & Cía
        </h1>
      </div>
    </section>
  )
}
