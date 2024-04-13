import React from "react";

import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Slideshow from "../components/Slideshow"
import BookTable from "../components/BookTable"
import Footer from "../components/Footer";

const Menus = () => {
  return (
    <main className="min-h-[100vh] relative w-full">
      <Hero maintext="Food & Drinks" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <Slideshow />
      <BookTable />
    </main>
  );
};

export default Menus;
