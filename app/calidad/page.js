import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import FormularioCalidad from "@/components/calidad/formularioCalidad"
import Hero from "@/components/calidad/hero-calidad"
  

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FormularioCalidad />  
      <Footer />
    </>
  )
}
