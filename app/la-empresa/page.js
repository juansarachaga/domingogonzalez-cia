import Navbar from "@/components/Navbar"
import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Hero from "@/components/la-empresa/hero-empresa"
import NuestraHistoria from "@/components/la-empresa/nuestraHistoria"
import PoliticasDeCalidad from "@/components/la-empresa/politicasDeCalidad"
import Compromiso from "@/components/la-empresa/compromisoTransparencia"
import DescargaCertificados from "@/components/la-empresa/descargaCertificados"
import AliadosEstrategicos from "@/components/Aliados"      
import PreguntasFrecuentes from "@/components/la-empresa/preguntasFrecuentes"      
import Iso from "@/components/la-empresa/iso"

export default function LaEmpresaPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <NuestraHistoria />
      <PoliticasDeCalidad />
      <Compromiso />
      <DescargaCertificados />
      <Iso />
      <AliadosEstrategicos />
      <PreguntasFrecuentes />
      <Contacto />
      <Footer />
    </>
  )
}
