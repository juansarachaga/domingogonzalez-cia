import Navbar from "@/components/Navbar"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Hero from "@/components/producto/hero-producto"
  

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      
      <Contacto />
      <Footer />
    </>
  )
}
