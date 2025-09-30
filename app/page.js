import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import LogrosYServicios from "../components/LogrosYServicios"
import CompromisoAmbiental from "../components/CompromisoAmbiental"
import CompromisoCuadroRojo from "../components/CompromisoCuadroRojo"
import Aliados from "../components/Aliados"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />


      </main>
      <LogrosYServicios />
      <CompromisoAmbiental />
      <CompromisoCuadroRojo />
      <Aliados />
      <Contacto />
      <Footer />
    </>
  )
}
