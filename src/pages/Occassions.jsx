import React from "react";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OccasionSecond from "../components/OccasionSecond";
const Occassions = () => {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Navbar />
      <Hero maintext="Special Occasions" heroimg="./default-gallery-10.jpg" />
      <OccasionSecond/>
      <Slideshow />
      <BookTable />
      <PaperBanner2 />
    </main>
  );
};

export default Occassions;
