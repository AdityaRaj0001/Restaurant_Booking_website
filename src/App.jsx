import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Second from "./components/Second"
import Third from "./components/Third"
export default function Home() {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Navbar/>
      <Hero/>
      <Second/>
      <Third/>
      {/* <Footer /> */}
      
    </main>
  )
}
