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
    <main className="min-h-[100vh] relative w-full overflow-hidden">
      <LandingHero/>
      < PaperBanner/>
      <Third/>
      <Slideshow/>
      <BookTable/>
      <Grid/>
<<<<<<< HEAD
      {/* <PaperBanner2/> */}
      {/* <Footer /> */}
=======
      <PaperBanner2/>
>>>>>>> cb6204f6430fe58a881bd801b42f4d825808506a
      
    </main>
  )
}
