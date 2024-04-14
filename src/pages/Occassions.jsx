import React from "react";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OccasionSecond from "../components/OccasionSecond";
import EnquiryForm from '../components/EnquiryForm';


const Occassions = () => {
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Navbar />
      <Hero maintext="Special Occasions" heroimg="./default-gallery-10.jpg" />
      <OccasionSecond/>
      <EnquiryForm/>
      <Slideshow />
      <BookTable />
      <PaperBanner2 />
    </main>
  );
};

export default Occassions;
