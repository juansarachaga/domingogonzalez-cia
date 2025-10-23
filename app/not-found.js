"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 notfound-section overflow-hidden"
      style={{
        backgroundImage: "url('/img/producto/texturaRoja.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(174,12,33,0.90)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* LOGO */}
      <div className="mb-10">
        <Image
          src="/img/layout/logoHeader.png"
          alt="Domingo González y Cía S.A."
          width={300}
          height={120}
          className="mx-auto drop-shadow-lg"
        />
      </div>

      {/* ANIMACIÓN 404 */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-[120px] md:text-[160px] font-semibold leading-none text-white mb-4"
        style={{
          fontFamily: "Hanken Grotesk",
          textShadow: "4px 4px 12px rgba(0, 0, 0, 0.5)",
        }}
      >
        404
      </motion.h1>

      {/* SUBTÍTULO */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-[28px] md:text-[36px] font-normal text-white mb-6"
        style={{
          fontFamily: "Hanken Grotesk",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
        }}
      >
        Ups... no pudimos encontrar la página que buscás.
      </motion.h2>

      {/* TEXTO DESCRIPTIVO */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-[18px] text-white/90 max-w-[600px] mx-auto leading-relaxed mb-12"
        style={{
          fontFamily: "Hanken Grotesk",
          textShadow: "1px 1px 5px rgba(0, 0, 0, 0.4)",
        }}
      >
        Puede que el enlace haya cambiado o que la dirección no exista más.
        Te invitamos a volver al inicio o explorar nuestras secciones principales.
      </motion.p>

      {/* BOTONES */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-5 justify-center"
      >
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-white hover:bg-[#F9F9F9] text-[#AE0C21] px-10 py-4 rounded-full text-[18px] font-semibold transition-all duration-300 shadow-lg"
          style={{
            fontFamily: "Hanken Grotesk",
            boxShadow: "0 6px 18px rgba(0,0,0,0.2)",
            padding: "10px 30px",
          }}
        >
          Volver al inicio
        </Link>

        <Link
          href="/contacto"
          className="inline-flex items-center justify-center bg-[#AE0C21] hover:bg-[#8B091A] text-white px-10 py-4 rounded-full text-[18px] font-semibold transition-all duration-300 shadow-lg"
          style={{
            fontFamily: "Hanken Grotesk",
            boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
            padding: "10px 30px",
          }}
        >
          Contactanos
        </Link>
      </motion.div>

      {/* FOOTER LIGERO */}
      <div
        className="absolute bottom-6 text-white/70 text-[14px]"
        style={{
          fontFamily: "Hanken Grotesk",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
        }}
      >
        © {new Date().getFullYear()} Domingo González y Cía S.A. — Todos los derechos reservados.
      </div>

      {/* 🎯 CSS local */}
      <style jsx>{`
        @media (min-width: 1300px) {
          .notfound-section {
            padding-left: 40px;
            padding-right: 40px;
          }
        }

        @media (max-width: 768px) {
          .notfound-section {
            padding-left: 20px;
            padding-right: 20px;
          }

          h1 {
            font-size: 80px !important;
          }

          h2 {
            font-size: 22px !important;
          }

          p {
            font-size: 16px !important;
            line-height: 130% !important;
          }

          a {
            font-size: 16px !important;
            padding: 12px 25px !important;
          }
        }
      `}</style>
    </section>
  );
}
