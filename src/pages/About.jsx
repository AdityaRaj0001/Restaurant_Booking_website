import React from 'react'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable"
import PaperBanner2 from "../components/PaperBanner2"
const About = () => {
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="About" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <BookTable />
      <PaperBanner2/>
    </main>
  )
}

export default About