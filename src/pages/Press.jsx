import React from 'react'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable"
const Press = () => {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Hero maintext="Press" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <BookTable />
    </main>
  )
}

export default Press