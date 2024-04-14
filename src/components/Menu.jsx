import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Menu = () => {
  useGSAP(
    () => {
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
        opacity:0,
        duration: 1.5,
        stagger:0.5,
        scrollTrigger: {
          trigger: ".menutypesparent",
          start: "-80% top",
          end: "-80% top",
        },
      });
    },
    { }
  );

  return (
    <div className="menuparent pb-20  md:pb-40 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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
     BY MICHELIN EXPERIENCED CHEFS
      </p>
      <div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
          MENU
        </p>
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
      </div>

      <p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">
        Based in London’s West End, our restaurant is situated in a beautiful
        dining space with an unrivalled ambience within walking distance from
        Goodge Street, Oxford Street and Tottenham Court Road.{" "}
      </p>
      <p className="w-3/5  mt-4 mb-12 text-center font-thin px-4 md:text-xl ">
        From statement pieces of interior design to the perfectly judged
        lighting, 1947 London, is glamour and excellence personified at the same
        time providing a rare and easy elegance.{" "}
      </p>
      <div className="h-auto menutypesparent uppercase md:p-4 text-[#46296e] sedan-regular flex flex-wrap w-[100%] gap-2 gap-y-4 md:gap-4 justify-center">
      <div className="w-[40%] menu  md:w-[25%] overflow-hidden  h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full transform transition-transform duration-500 hover:scale-110"></img>
          <p className=" text-center mt-2  h-[30%] text-sm md:text-2xl">
            A la carte menu
          </p>
        </div>
        <div className="w-[40%] menu  md:w-[25%] overflow-hidden h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full transform transition-transform duration-500 hover:scale-110"></img>
          <p className=" text-center mt-2  h-[30%] text-sm md:text-2xl">
            Drinks Menu
          </p>
        </div>
        <div className="w-[40%] menu  md:w-[25%] overflow-hidden h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full transform transition-transform duration-500 hover:scale-110"></img>
          <p className=" text-center mt-2  h-[30%] text-sm md:text-2xl">
            Set menu
          </p>
        </div>
        <div className="w-[40%] menu  md:w-[25%] overflow-hidden h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full transform transition-transform duration-500 hover:scale-110"></img>
          <p className=" text-center mt-2  h-[30%] text-sm md:text-2xl">
            Valentine's day menu
          </p>
        </div>

      </div>
    

      {/* <div className="h-auto w-[80%] xl:w-[90%] flex justify-b[30%]en items-center">
        <div className="w-[48%] h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full "></img>
          <p className="flex items-center justify-center h-[30%] text-lg">
            Menu 1
          </p>
        </div>
        <div className="w-[48%] h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full "></img>
          <p className="flex items-center justify-center h-[30%] text-lg">
            Menu 2
          </p>
        </div>
      </div>
      <div className="h-auto w-[80%] xl:w-[60%] flex justify-between items-center">
        <div className="w-[48%] h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full "></img>
          <p className="flex items-center justify-center h-[30%] text-lg">
            Menu 1
          </p>
        </div>
        <div className="w-[48%] h-auto relative flex flex-col  justify-center">
          <img src="./default-gallery-7.jpg" className="w-full "></img>
          <p className="flex items-center justify-center h-[30%] text-lg">
            Menu 2
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Menu;
