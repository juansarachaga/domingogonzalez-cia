import Navbar from "@/components/Navbar"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Hero from "@/components/producto/hero-producto"
import NuestrosProductos from "@/components/producto/nuestrosProductos"
  

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <NuestrosProductos/>
      
      <Contacto />
      <Footer />
    </>
  )
}
