"use client"
import Image from "next/image"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useState } from "react"

export default function AliadosEstrategicos() {
  const logos = ["marca1.png","marca2.png","marca3.png","marca4.png","marca5.png","marca6.png"]

  const [active, setActive] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 2, spacing: 16 }, // mobile
    breakpoints: {
      "(min-width: 640px)":  { slides: { perView: 3, spacing: 16 } }, 
      "(min-width: 1024px)": { slides: { perView: 4, spacing: 24 } }, 
      "(min-width: 1280px)": { slides: { perView: 5, spacing: 24 } }, 
    },
    renderMode: "performance",
    slideChanged(s) {
      let best = 0, p = 0
      s.track.details.slides.forEach((sl, idx) => {
        if (sl.portion > p) { p = sl.portion; best = idx }
      })
      setActive(best)
    },
    // ⚡ transición más suave y lenta
    animation: { duration: 1200, easing: (t) => 1 - Math.pow(1 - t, 3) },
  })

  // Autoplay cada 7 segundos
  useEffect(() => {
    const slider = instanceRef.current
    if (!slider) return

    let timeout
    const autoplay = () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => slider.next(), 7000) // cada 7s
    }

    slider.on("created", autoplay)
    slider.on("animationEnded", autoplay)
    slider.on("updated", autoplay)

    return () => clearTimeout(timeout)
  }, [instanceRef])

  return (
    <section className="w-full py-16 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center aliados-mobile">
        {/* Texto superior */}
        <span className="font-['Hanken_Grotesk'] font-light text-[18px] tracking-[0.05em] text-[#AE0C21] uppercase mb-4">
          ALIADOS ESTRATÉGICOS
        </span>

        {/* Título */}
        <h2 className="font-['Hanken_Grotesk'] font-normal text-[40px] text-center text-black mb-8">
          Nos eligen, crecemos juntos
        </h2>

        {/* Carrusel */}
        <div ref={sliderRef} className="keen-slider w-full">
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="keen-slider__slide flex justify-center items-center transition-all duration-1000 ease-in-out"
            >
              <Image
                src={`/img/logos/marcas/${logo}`}
                alt={`Logo ${i + 1}`}
                width={150}
                height={80}
                className={`object-contain transition-all duration-1000 ease-in-out
                  ${i === active ? "opacity-100 grayscale-0" : "opacity-50 grayscale"}`}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .aliados-mobile { margin-left: 20px; margin-right: 20px; }
        }
      `}</style>
    </section>
  )
}
