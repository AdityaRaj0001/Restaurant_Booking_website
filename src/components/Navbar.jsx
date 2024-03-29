import React from "react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <div className="h-[75px] z-10 absolute top-0 w-full bg-transparent md:flex justify-center">
      <div className=" flex  justify-between text-white items-center px-4 md:px-12  h-full w-full md:w-3/4">
        <a className="w-1/4 h-4/5 flex items-center justify-center">LOGO</a>
        <span className="w-1/4">Phone</span>
        <button className="w-1/4 text-black py-2 font-normal bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] md:hidden">
          Book Table
        </button>
        <Sidebar />
        <ul className="hidden md:flex text-sm  gap-4 font-medium items-center">
          <li className=" ">MENUS</li>
          <li className=" ">OCCASSIONS</li>
          <li className=" ">GALLERY</li>
          <li className=" ">PRESS</li>
          <li className=" ">ABOUT</li>
          <li className="">CONTACT</li>
          
          <button className="text-left flex items-center justify-center py-2 font-normal text-sm  text-black bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] w-[100px]  ">
            BOOK TABLE
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
