export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/img/home/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Bienvenidos a Domingo González & Cía
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
          Comprometidos en brindar soluciones integrales a nuestros clientes.
        </p>
      </div>
    </section>
  );
}
