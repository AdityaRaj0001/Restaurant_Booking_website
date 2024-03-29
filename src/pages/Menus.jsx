import React from 'react'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Menu from '../components/Menu'


const Menus = () => {
  return (
    <main className="min-h-[100vh] relative w-full">
    <Navbar/>
    <Hero maintext="Food & Drinks" heroimg="./default-gallery-10.jpg"/>
    <Menu/>   
    
    
  </main>
  )
}

export default Menus