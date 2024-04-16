import React, { useEffect, useState, useRef } from "react";
import BookTableForm from "../components/BookTableForm";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const BookATable = () => {
  useGSAP(() => {
    let flowersbigarray = gsap.utils.toArray(".flowersbig");

    for (let i = 0; i < flowersbigarray.length; i++) {
      gsap.from(flowersbigarray[i], {
        x: i === 1 ? "150px" : "-150px",
        duration: 4,
        scrollTrigger: {
          trigger: ".menuparent",
          start: "-100% top",
          end: "-100% top",
        },
      });
    }
    gsap.from(".menu", {
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".menutypesparent",
        start: "-80% top",
        end: "-80% top",
      },
    });
  }, {});

  return (
    <main className="min-h-[100vh] relative w-full overflow-hidden">
      <Hero
        maintext="Book A Table"
        subtext={"We are closed"}
        subtext2={"until further notice"}
        heroimg="./default-gallery-10.jpg"
      />
      <div className="menuparent pb-20  md:pb-20 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] "
          alt="plant background"
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 "
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big.png"
          className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big right.png"
          className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 "
          alt="plant background"
        ></img>
        <p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
          SCROLL DOWN TO BOOK
        </p>
        <div className="w-4/5 mb-16 px-4 sedan-regular flex justify-center  items-center">
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
          <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
            BOOK NOW
          </p>
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        </div>

        <p className="booktablestaggerelement text-xl  font-bold sedan-regular">
          TUESDAY - SATURDAY
        </p>
        <p className="booktablestaggerelement text-lg font-thin">
          5pm - Midnight
        </p>
        <p className="booktablestaggerelement text-sm ">
          (Last seating 10:15pm)
        </p>
        <p className="booktablestaggerelement text-xl font-bold mt-4 sedan-regular">
          SUNDAY
        </p>
        <p className="booktablestaggerelement text-lg ">5pm - 11pm</p>
        <p className="booktablestaggerelement text-sm mb-4">
          (Last seating 9pm)
        </p>
        <p className="w-3/5  mt-4 mb-0 text-center font-thin px-4 md:text-xl ">
          Dress code: smart and elegant.{" "}
        </p>
        <p className="w-3/5  mt-4 mb-0 text-center font-thin px-4 md:text-xl ">
          Any deposits paid to reserve a table during our busiest periods
          (typically set at £20 per person) will be deducted from your final
          bill. Children under 12 not permitted on Friday and Saturday.{" "}
        </p>
        <p className="w-3/5  mt-4 mb-0 text-center font-thin px-4 md:text-xl ">
          Book between the golden hour of 5-6pm, Tuesday to Thursday and get 20%
          off your entire bill.{" "}
        </p>
      </div>
      <BookTableForm />
      <BookTable />
      <PaperBanner2 />
    </main>
  );
};

export default BookATable;
