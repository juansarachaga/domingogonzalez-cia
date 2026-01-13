"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const slides = useMemo(
    () => [
      {
        image: "/img/home/carrusel/carrusel1.png",
        title: "COMPROMISO\nCON LA CALIDAD",
        body:
          "Nuestra experiencia nos permite garantizar una materia prima confiable, segura y de excelente calidad, adaptada a las necesidades de cada productor.",
        cta: { label: "Contactános", href: "/contacto", variant: "outline" },
        mobileBgPosition: "center 25%",
      },
      {
        image: "/img/home/carrusel/carrusel2.png",
        title: "TRAYECTORIA\nY CONFIANZA",
        body:
          "Somos una empresa con más de 80 años de historia dedicada al desarrollo y producción de alimentos y suplementos para la nutrición animal, siendo pioneros en Argentina desde 1943.",
        cta: { label: "Nuestra historia", href: "/la-empresa", variant: "outline" },
        mobileBgPosition: "center 25%",
      },
      {
        image: "/img/home/carrusel/carrusel3.png",
        title: "PRODUCCIÓN Y\nCAPACIDAD OPERATIVA",
        body:
          "Contamos con planta propia, infraestructura industrial y procesos de lavado, molienda y control que nos permiten garantizar volumen, continuidad y uniformidad en cada entrega.",
        cta: { label: "Contactános", href: "/contacto", variant: "outline" },
        mobileBgPosition: "center 25%",
      },
    ],
    []
  )

  const INTERVAL_MS = 13000
  const FADE_MS = 3200
  const EASING = "cubic-bezier(0.4, 0, 0.2, 1)"

  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(1)
  const [isFading, setIsFading] = useState(false)

  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640) // <sm
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    slides.forEach((s) => {
      const img = new Image()
      img.src = s.image
    })
  }, [slides])

  const clearTimers = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    intervalRef.current = null
    timeoutRef.current = null
  }

  const goTo = (index) => {
    if (index === currentIndex || isFading) return
    clearTimers()

    setNextIndex(index)
    setIsFading(true)

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex(index)
      setIsFading(false)
    }, FADE_MS)
  }

  useEffect(() => {
    if (slides.length < 2) return

    clearTimers()
    intervalRef.current = setInterval(() => {
      const upcoming = (currentIndex + 1) % slides.length
      setNextIndex(upcoming)
      setIsFading(true)

      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(upcoming)
        setIsFading(false)
      }, FADE_MS)
    }, INTERVAL_MS)

    return () => clearTimers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, slides.length])

  const current = slides[currentIndex]
  const next = slides[nextIndex]

  const bgPositionFor = (slide) => {
    if (!isMobile) return "center"
    return slide.mobileBgPosition || "center 25%"
  }

  const Title = ({ text }) => (
    <h2
      className="
        font-['Hanken_Grotesk'] font-medium text-white text-center tracking-normal
        text-[36px] leading-[42px]
        sm:text-[44px] sm:leading-[50px]
        md:text-[52px] md:leading-[58px]
        lg:text-[56px] lg:leading-[62px]
        whitespace-pre-line
      "
    >
      {text}
    </h2>
  )

  const Body = ({ text }) => (
    <p
      className="
        font-['Hanken_Grotesk'] font-normal text-white text-center
        text-[15px] leading-[1.28] tracking-[0.02em]
        sm:text-[17px] sm:leading-[1.22] sm:tracking-[0.022em]
        md:text-[18px] md:leading-[1.18] md:tracking-[0.024em]
        lg:text-[19px] lg:leading-[1.14] lg:tracking-[0.026em]
        whitespace-normal
      "
    >
      {text}
    </p>
  )

  const CTAButton = ({ slide }) => {
    const outline =
  slide.cta.label === "Nuestra historia"
    ? "w-[200px] sm:w-[180px] h-[48px] px-6 mx-6 sm:mx-0 rounded-full border border-white bg-transparent text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-white hover:text-black"
    : "w-[200px] sm:w-[180px] h-[40px] rounded-full border border-white bg-transparent text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-white hover:text-black"
 const solid =
      "w-[200px] sm:w-[180px] h-[40px] rounded-full bg-[#AE0C21] text-white font-['Hanken_Grotesk'] font-normal text-[16px] transition hover:bg-[#8B091A]"

    return (
      <Link href={slide.cta.href}>
        <button className={slide.cta.variant === "solid" ? solid : outline}>
          {slide.cta.label}
        </button>
      </Link>
    )
  }

  return (
    <section
      id="home"
      className="relative w-full h-screen md:h-[800px] flex items-center justify-center overflow-hidden"
    >
      <style jsx>{`
        .hero-body-wrap {
          max-width: 580px;
        }
        @media (max-width: 639px) {
          .hero-body-wrap {
            width: 100%;
            padding-left: 24px;
            padding-right: 24px;
            box-sizing: border-box;
          }
        }
      `}</style>

      {/* Fondo actual */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${current.image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: bgPositionFor(current),
          willChange: "opacity",
        }}
      />

      {/* Fondo siguiente */}
      <div
        className="absolute inset-0 transition-opacity"
        style={{
          backgroundImage: `url('${next.image}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: bgPositionFor(next),
          opacity: isFading ? 1 : 0,
          transitionDuration: `${FADE_MS}ms`,
          transitionTimingFunction: EASING,
          willChange: "opacity",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(270deg, rgba(174, 12, 33, 0.7) 0%, rgba(42, 42, 42, 0.7) 100%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full px-4 sm:px-6">
        <div className="relative mx-auto max-w-3xl min-h-[360px] sm:min-h-[380px] md:min-h-[400px]">
          {/* Capa actual */}
          <div
            className="absolute inset-0 flex flex-col items-center transition-opacity"
            style={{
              opacity: isFading ? 0 : 1,
              transitionDuration: `${FADE_MS}ms`,
              transitionTimingFunction: EASING,
              pointerEvents: isFading ? "none" : "auto",
              willChange: "opacity",
            }}
          >
            <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 pt-2">
              <Title text={current.title} />
              <div className="w-[78px] md:w-[96px] h-[6px] bg-[#AE0C21] rounded-full" />
              <div className="hero-body-wrap">
                <Body text={current.body} />
              </div>
              <div className="pt-1">
                <CTAButton slide={current} />
              </div>
            </div>
          </div>

          {/* Capa siguiente */}
          <div
            className="absolute inset-0 flex flex-col items-center transition-opacity"
            style={{
              opacity: isFading ? 1 : 0,
              transitionDuration: `${FADE_MS}ms`,
              transitionTimingFunction: EASING,
              pointerEvents: isFading ? "auto" : "none",
              willChange: "opacity",
            }}
          >
            <div className="flex flex-col items-center gap-6 sm:gap-7 md:gap-8 pt-2">
              <Title text={next.title} />
              <div className="w-[78px] md:w-[96px] h-[6px] bg-[#AE0C21] rounded-full" />
              <div className="hero-body-wrap">
                <Body text={next.body} />
              </div>
              <div className="pt-1">
                <CTAButton slide={next} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute left-0 right-0 z-20 bottom-[166px] sm:bottom-[94px] md:bottom-[148px] flex justify-center">
        <div className="inline-flex items-center gap-2 sm:gap-3">
          {slides.map((_, i) => {
            const active = i === currentIndex && !isFading
            return (
              <button
                key={i}
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-[6px] w-[34px] sm:w-[44px] rounded-full transition-opacity ${
                  active ? "bg-[#AE0C21] opacity-100" : "bg-white/60 opacity-60 hover:opacity-90"
                }`}
              />
            )
          })}
        </div>
      </div>

      <nav className="w-full flex justify-center items-center py-4 absolute top-0 left-0 z-20">
        {/* Navbar */}
      </nav>
    </section>
  )
}
