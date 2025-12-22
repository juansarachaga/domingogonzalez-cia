import Navbar from "@/components/Navbar"
import Contacto from "@/components/producto/contactoProducto"
import Footer from "@/components/Footer"
import Hero from "@/components/producto/hero-producto"
import PorQueElegir from "@/components/producto/porQueElegir"
import Estudios from "@/components/producto/estudiosMicroscopias"
import FuenteNatural from "@/components/producto/fuenteNaturalRojo"
import ComoLoHacemos from "@/components/producto/comoLoHacemos" 
import Granulometrias from "@/components/producto/granulometrias"
import Descarga from "@/components/producto/descargaFichaTecnica"
import NuestrosProductos from "@/components/producto/nuestrosProductos" 
  

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <PorQueElegir />
      <Estudios />
      {/* <FuenteNatural/> */}
      <ComoLoHacemos/>
      <Granulometrias/>
      <NuestrosProductos/>
      <Descarga />
      <Contacto />
      <Footer />
    </>
  )
}
