import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const OccasionSecond = () => {
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
    <div className="occasionparent pb-20  h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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

      <p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">
      Whether you’re looking for a private dining area for a business meeting, a treat for your clients or for a celebratory meal with family and friends, 1947 London can provide you an exceptional and unrivalled dining experience in the heart of London’s West End.{" "}
      </p>
      <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
      Choose from a number of booths (for up to 8 guests) either in or away from the hubbub of the main dining room where you can enjoy the buzz of the restaurant while maintaining a greater level of privacy and space.{" "}
      </p>
      <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
      Celebrate the night with dishes from our A la carte menu (no longer restricted to a set menu) and celebratory desserts (sparklers and all!) for that extra wow factor.{" "}
      </p>
      <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
      A short walk from away from Goodge Street, Oxford Circus, Tottenham Court Road Tube stations makes 1947 London a Central London venue you like no another, easily accessible for guests.{" "}
      </p>

      <div className="w-4/5 mt-24 px-4 sedan-regular flex justify-center  items-center">
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        <p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
        EXCLUSIVE HERE
        </p>
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
      </div>
      <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
      If you are looking to host a larger event, 1947 London is available for semi-exclusive hire in the bar area for up to 30 guests and exclusive hire of the full venue for up to 150 guests.{" "}
      </p>
      <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
      For any enquiries relating to a special event, please contact us using the form below.{" "}
      </p>

      <div className="w-4/5 mt-24 px-4 sedan-regular flex justify-center  items-center">
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        <p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-3xl">
        ENQUIRE NOW
        </p>
        <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
      </div>
      <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
      Get in touch for large group, celebration and event bookings. We typically reply on the same day during opening hours.{" "}
      </p>
     
    </div>
  );
};

export default OccasionSecond;
