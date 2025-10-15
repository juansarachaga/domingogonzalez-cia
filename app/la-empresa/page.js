import Navbar from "@/components/Navbar"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Hero from "@/components/la-empresa/hero-empresa"
import NuestraHistoria from "@/components/la-empresa/nuestraHistoria"
import PoliticasDeCalidad from "@/components/la-empresa/politicasDeCalidad"
import DescargaCertificados from "@/components/la-empresa/descargaCertificados"
import AliadosEstrategicos from "@/components/Aliados"      

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <NuestraHistoria />
      <PoliticasDeCalidad />
      <DescargaCertificados />
      <AliadosEstrategicos />
      <Contacto />
      <Footer />
    </>
  )
}
