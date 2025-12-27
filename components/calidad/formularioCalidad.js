// components/formularioCalidad.js
export default function FormularioCalidad() {
  return (
    <section className="relative w-full h-screen">
      {/* Fondo de la web (acá podés usar tus colores/gradientes) */}
      <div className="absolute inset-0 bg-[#f5f5f5]" />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col w-full h-full">
        {/* Encabezado opcional, para que se sienta parte del sitio */}
        <header className="px-4 md:px-10 pt-6 pb-2">
          {/* <h1 className="text-2xl md:text-3xl font-semibold">
            Tu opinión nos ayuda a mejorar
          </h1> */}
          {/* <p className="text-sm md:text-base mt-1 text-gray-600">
            Completá este formulario y contanos tu experiencia.
          </p> */}
        </header>

        {/* Iframe full-page */}
        <div className="flex-1">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdmvuOWDWQU1g6HqP-rGQbg5mbWK2TA8XqsciVKUAXFMCc2zA/viewform?embedded=true"
            className="w-full h-full"
            style={{ border: 0 }}
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </section>
  );
}
