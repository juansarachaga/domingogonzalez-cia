import Navbar from "@/components/Navbar"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Hero from "@/components/la-empresa/hero-empresa"
import NuestraHistoria from "@/components/la-empresa/nuestraHistoria"
import AliadosEstrategicos from "@/components/Aliados"      

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <NuestraHistoria />
      <AliadosEstrategicos />
      <Contacto />
      <Footer />
    </>
  )
}
