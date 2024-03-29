import Navbar from "../components/Navbar"
import LandingHero from "../components/LandingHero"
import Footer from "../components/Footer"
import PaperBanner from "../components/PaperBanner"
import Third from "../components/Third"
import Slideshow from "../components/Slideshow"
import BookTable from "../components/BookTable"
import Grid from "../components/Grid"
import PaperBanner2 from "../components/PaperBanner2"
export default function Home() {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Navbar/>
      <LandingHero/>
      < PaperBanner/>
      <Third/>
      <Slideshow/>
      <BookTable/>
      <Grid/>
      <PaperBanner2/>
      {/* <Footer /> */}
      
    </main>
  )
}
