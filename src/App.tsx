import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Navbar/>
      <Hero/>
      <Footer />
      
    </main>
  )
}
