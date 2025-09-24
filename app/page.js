import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24"> {/* Espacio para compensar la altura del navbar */}
        <Hero />
        <About />
        <Services />
      </main>
      <Footer />
    </>
  )
}
