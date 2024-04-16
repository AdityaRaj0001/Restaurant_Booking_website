import React, { useRef } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const mobileimagedataarray = [
  "./occasion-gallery-9.jpg",
  "./homehero.jpg",
  "./home-about-image-1.jpg",
  "./occasion-gallery-9.jpg",
];

const desktopimagedataarray1 = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
];
const desktopimagedataarray2 = [
  "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
];
const desktopimagedataarray3 = [
  "https://images.unsplash.com/photo-1554679665-f5537f187268?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  "./home-about-image-1.jpg",
  "./home-about-image-2.jpg",
  "./home-about-image-3.jpg",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D",
  "./homehero.jpg",
];

const Gallery = () => {
  useGSAP(() => {
    let flowersbigarray = gsap.utils.toArray(".flowersbig");

    for (let i = 0; i < flowersbigarray.length; i++) {
      gsap.from(flowersbigarray[i], {
        x: i === 1 ? "150px" : "-150px",
        duration: 4,
        scrollTrigger: {
          trigger: ".occasionparent",
          start: "-100% top",
          end: "-100% top",
        },
      });
    }
  }, {});

  return (

    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="Gallery" heroimg="./default-gallery-10.jpg" />
      <div className="occasionparent   h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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
          PARTIES & ENTERTAINING
        </p>
        <div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
          <p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
            CELEBRATE IN STYLE
          </p>
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        </div>

        <p className="w-3/5 mb-12  mt-6 text-center font-thin px-4 md:text-xl ">
          Follow us <span className="text-[#7146ad]">@1947LONDON</span>{" "}
        </p>
        <div className="w-full h-auto md:hidden">
          {mobileimagedataarray.map((item, i) => (
            <img key={i} src={item} className="w-full object-cover"></img>
          ))}
        </div>
        <div className="h-auto w-3/4 hidden md:flex gap-4 justify-center">
          <div className="h-full w-1/4 flex flex-col gap-4">
            {desktopimagedataarray1.map((item, i) => (
              <img key={i} src={item} className="w-full object-cover"></img>
            ))}
          </div>
          <div className="h-full w-1/4 flex flex-col gap-4">{desktopimagedataarray2.map((item, i) => (
              <img key={i} src={item} className="w-full object-cover"></img>
            ))}</div>
          <div className="h-full w-1/4 flex flex-col gap-4">{desktopimagedataarray3.map((item, i) => (
              <img key={i} src={item} className="w-full object-cover"></img>
            ))}</div>
        </div>
      </div>
      <BookTable />
    </main>
  );
};


export default Gallery;
