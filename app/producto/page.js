import Navbar from "@/components/Navbar"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Hero from "@/components/producto/hero-producto"
import PorQueElegir from "@/components/producto/porQueElegir"
import FuenteNatural from "@/components/producto/fuenteNaturalRojo"
import ComoLoHacemos from "@/components/producto/comoLoHacemos" 
import Granulometrias from "@/components/producto/granulometrias"
import NuestrosProductos from "@/components/producto/nuestrosProductos" 
  

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <PorQueElegir />
      <FuenteNatural/>
      <ComoLoHacemos/>
      <Granulometrias/>
      <NuestrosProductos/>
      <Contacto />
      <Footer />
    </>
  )
}
