import React from "react";

import BookTableForm from "../components/BookTableForm";

import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
const BookATable = () => {
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="Book A Table" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <BookTableForm />
      <BookTable />
      <PaperBanner2 />
    </main>
  );
};

export default BookATable;
