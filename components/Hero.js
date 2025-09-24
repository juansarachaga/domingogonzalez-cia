import Image from "next/image"

export default function Hero() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/img/home/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold">
          Bienvenidos a Domingo González & Cía
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
          Comprometidos en brindar soluciones integrales a nuestros clientes.
        </p>
      </div>
    </section>
  )
}
