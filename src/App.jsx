import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import About from "./pages/About";
import BookATable from "./pages/BookATable";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Menus from "./pages/Menus";
import Occassions from "./pages/Occassions";
import Press from "./pages/Press";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/bookatable" element={<BookATable />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/menus" element={<Menus />} />
          <Route path="/occassions" element={<Occassions />} />
          <Route path="/press" element={<Press />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
