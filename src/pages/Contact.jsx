import React from 'react'
import EnquiryForm from '../components/EnquiryForm';
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable"
import PaperBanner2 from "../components/PaperBanner2"
const About = () => {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Hero maintext="Contact" heroimg="./default-gallery-10.jpg" />
      <Menu />
	  <EnquiryForm/>
      <BookTable />
      <PaperBanner2/>
    </main>
  )
}

export default About