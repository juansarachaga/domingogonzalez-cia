"use client";
import Image from "next/image";

export default function ContactoUbicacion() {
  return (
    <section className="w-full bg-white py-24 mt-20 contacto-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        {/* --- CONTACTO --- */}
        <p
          className="uppercase mb-2"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 300,
            fontSize: "18px",
            letterSpacing: "5%",
            color: "#AE0C21",
          }}
        >
          CONTACTO
        </p>

        <h2
          className="mb-14"
          style={{
            fontFamily: "Hanken Grotesk",
            fontWeight: 400,
            fontSize: "40px",
            color: "#000000",
          }}
        >
          Contactate con nosotros
        </h2>

        {/* --- Íconos --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-20 items-start justify-center">
          {/* Teléfono */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full mb-4">
              <Image
                src="/img/contacto/ICONOS/call.png"
                alt="Teléfono"
                width={40}
                height={40}
              />
            </div>
            <h3
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 500,
                fontSize: "20px",
                letterSpacing: "5%",
                color: "#AE0C21",
              }}
              className="uppercase mb-2"
            >
              TELÉFONO
            </h3>
            <a
              href="tel:+5492268455176"
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 400,
                fontSize: "16px",
                color: "#2A2A2A",
              }}
              className="hover:text-[#AE0C21] transition"
            >
              +54 9 2268 45-5176
            </a>
          </div>

          {/* Correo */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full mb-4">
              <Image
                src="/img/contacto/ICONOS/mail.png"
                alt="Correo"
                width={42}
                height={42}
              />
            </div>
            <h3
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 500,
                fontSize: "20px",
                letterSpacing: "5%",
                color: "#AE0C21",
              }}
              className="uppercase mb-2"
            >
              CORREO
            </h3>
            <a
              href="mailto:ventas@domgonsa.com.ar"
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 400,
                fontSize: "16px",
                color: "#2A2A2A",
                display: "block",
                marginBottom: "4px",
              }}
              className="hover:text-[#AE0C21] transition"
            >
              ventas@domgonsa.com.ar
            </a>
            <a
              href="mailto:domgonsa@domgonsa.com.ar"
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 400,
                fontSize: "16px",
                color: "#2A2A2A",
              }}
              className="hover:text-[#AE0C21] transition"
            >
              domgonsa@domgonsa.com.ar
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-[80px] h-[80px] rounded-full mb-4">
              <Image
                src="/img/contacto/ICONOS/wsp.png"
                alt="WhatsApp"
                width={42}
                height={42}
              />
            </div>
            <h3
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 500,
                fontSize: "20px",
                letterSpacing: "5%",
                color: "#AE0C21",
              }}
              className="uppercase mb-2"
            >
              WHATSAPP
            </h3>
            <a
              href="https://wa.me/5492268455176?text=Hola%20👋%2C%20quiero%20consultar%20sobre%20sus%20productos."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "Hanken Grotesk",
                fontWeight: 400,
                fontSize: "16px",
                color: "#2A2A2A",
              }}
              className="hover:text-[#AE0C21] transition"
            >
              +54 9 2268 45-5176
            </a>
          </div>
        </div>

        {/* --- UBICACIÓN --- */}
        <div className="mt-28 mb-20"> {/* margen inferior agregado */}
          <p
            className="uppercase mb-2"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 300,
              fontSize: "18px",
              letterSpacing: "5%",
              color: "#AE0C21",
            }}
          >
            UBICACIÓN
          </p>

          <h2
            className="mb-12"
            style={{
              fontFamily: "Hanken Grotesk",
              fontWeight: 400,
              fontSize: "40px",
              color: "#000000",
            }}
          >
            Donde podés encontrarnos
          </h2>

          {/* Mapa */}
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.6162528905374!2d-57.79744292498702!3d-34.90442217364625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2f00f89f462f9%3A0x74bf8aa7ad2eff35!2sDomingo%20Gonzalez%20y%20Cia%20SA!5e0!3m2!1ses!2sar!4v1728950947152!5m2!1ses!2sar"
              width="800"
              height="400"
              style={{ border: 0, borderRadius: "8px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* 🎯 CSS local para márgenes y responsividad */}
      <style jsx>{`
        @media (min-width: 1300px) {
          .contacto-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 768px) {
          .contacto-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          h2 {
            font-size: 28px !important;
          }

          iframe {
            width: 100% !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
