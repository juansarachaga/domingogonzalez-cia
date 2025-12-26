"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const images = useMemo(
    () => [
      "/img/home/carrusel/carrusel1.png",
      "/img/home/carrusel/carrusel2.png",
      "/img/home/carrusel/carrusel3.png",
      "/img/home/carrusel/carrusel4.png",
      "/img/home/carrusel/carrusel5.png",
    ],
    []
  )

  // Timing (suave)
  const INTERVAL_MS = 13000 // cada cuánto cambia
  const FADE_MS = 2400     // duración del fade

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isFading, setIsFading] = useState(false)

  // Preload para que no "salte"
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [images])

  useEffect(() => {
    if (images.length < 2) return

    const interval = setInterval(() => {
      const upcoming = (currentIndex + 1) % images.length
      setNextIndex(upcoming)
      setIsFading(true)

      const t = setTimeout(() => {
        setCurrentIndex(upcoming)
        setIsFading(false)
      }, FADE_MS)

      return () => clearTimeout(t)
    }, INTERVAL_MS)

    return () => clearInterval(interval)
  }, [currentIndex, images.length])

  return (
    <section
      id="home"
      className="relative w-full h-screen md:h-[800px] flex items-center overflow-hidden"
    >
      {/* Fondo: capa actual */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${images[currentIndex]}')`,
          // mantiene el look "cover/center" como tu hero actual
        }}
      />

      {/* Fondo: capa siguiente (crossfade) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity"
        style={{
          backgroundImage: `url('${images[nextIndex]}')`,
          opacity: isFading ? 1 : 0,
          transitionDuration: `${FADE_MS}ms`,
          transitionTimingFunction: "ease-in-out",
        }}
      />

      {/* Overlay con gradiente (igual que antes) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AE0C21]/70 to-[#2A2A2A]/70 mix-blend-multiply"></div>

      {/* Contenedor para posicionar el rectángulo y el texto */}
      <div className="relative z-10 max-w-3xl px-8 mt-25 text-left">
        <div className="relative flex flex-col items-start font-['Hanken_Grotesk'] ml-4 md:ml-[20vw] pt-8 pb-8 scale-90 md:scale-100">
          {/* Borde en forma de "U" con patitas derechas */}
          <div className="pointer-events-none absolute -top-8 -left-8 z-0 w-[calc(100%+32px)] h-[calc(100%+32px)]">
            <div className="absolute left-0 top-0 h-full w-0 border-l-8 border-[#AE0C21]" />
            <div className="absolute left-0 top-0 w-[52%] h-0 border-t-8 border-[#AE0C21]" />
            <div className="absolute left-0 bottom-0 w-[52%] h-0 border-b-8 border-[#AE0C21]" />
            <div className="absolute top-0 left-[52%] h-20 w-0 border-r-8 border-[#AE0C21]" />
            <div className="absolute bottom-0 left-[52%] h-18 w-0 border-r-8 border-[#AE0C21]" />
          </div>

          {/* Texto */}
          <span className="font-normal text-[18px] leading-[1] tracking-[0%] mt-15 mb-2 z-10 text-white">
            NOSOTROS
          </span>

          <h2 className="font-medium text-[50px] leading-[55px] tracking-[0.04em] mb-4 z-10 text-white">
            CALIDAD Y
            <br />
            EXPERIENCIA
          </h2>

          <div className="w-[90vw] max-w-[520px] z-10">
            <p className="font-normal text-[16px] leading-[1.3] tracking-[0%] mb-6 text-white">
              <span className="block">Nuestra experiencia nos permite garantizar una</span>
              <span className="block">materia prima confiable, segura y de excelente calidad,</span>
              <span className="block">adaptada a las necesidades de cada productor.</span>
            </p>
          </div>

          <div className="mt-5 mb-22 flex gap-4 z-10">
            <Link href="/producto">
              <button className="w-[124px] h-[40px] rounded-full bg-[#AE0C21] text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-[#8B091A]">
                Conocer más
              </button>
            </Link>
            <Link href="/contacto">
              <button className="w-[120px] h-[40px] rounded-full border border-white bg-transparent text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-white hover:text-black">
                Contáctanos
              </button>
            </Link>
          </div>
        </div>
      </div>

      <nav className="w-full flex justify-center items-center py-4 absolute top-0 left-0 z-20">
        {/* Aquí va el contenido del navbar */}
      </nav>
    </section>
  )
}
