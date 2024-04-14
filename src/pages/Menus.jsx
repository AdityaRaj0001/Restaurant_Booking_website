import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import Footer from "../components/Footer";
import axios from "axios";

const Menus = () => {
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="Food & Drinks" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <Slideshow />
      <BookTable />
    </main>
  );
};

export default Menus;
