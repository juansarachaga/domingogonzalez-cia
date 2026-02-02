"use client"
import Image from "next/image"
import styles from "./Aliados.module.css"

export default function AliadosEstrategicos() {
  const logos = [
    "01marca.png",
    "02marca.png",
    "03marca.png",
    "04marca.png",
    "05marca.png",
    "06marca.png",
    "07marca.png",
    "08marca.png",
    "09marca.png",
    "10marca.png",
    "11marca.png",
    "12marca.png",
    "13marca.png",
    "14marca.png",
    "15marca.png",
    "16marca.png",
    "17marca.png",
    "18marca.png",
    
  ]

  return (
    <section 
    className="w-full py-16 bg-white mt-20" id="aliados">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <span className="font-['Hanken_Grotesk'] font-light text-[18px] tracking-[0.05em] text-[#AE0C21] uppercase mb-4">
          ALIADOS ESTRATÉGICOS
        </span>

        <h2 className="font-['Hanken_Grotesk'] font-normal text-[40px] text-center text-black mb-10">
          Nos eligen, crecemos juntos
        </h2>

        {/* Wrap centrado: genera 3 filas (8 + 8 + 4 aprox) y centra la última */}
        <div className={styles.logosWrap} aria-label="Marcas aliadas">
          {logos.map((logo, i) => (
            <div key={logo} className={styles.logoItem}>
              <div className={styles.logoBox}>
                <Image
                  src={`/img/logos/marcas/${logo}`}
                  alt={`Marca ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 20vw, 12vw"
                  className={styles.logoImg}
                  priority={i < 10}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
