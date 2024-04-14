import React from 'react'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable"
const Gallery = () => {
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="Gallery" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <BookTable />
    </main>
  )
}

export default Gallery