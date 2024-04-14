import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const PaperBanner2 = () => {


  useGSAP(
    () => {
      gsap.from(".banner2",{
        opacity:0,
        scrollTrigger:{
          trigger:".banner2",
          start:"-200% top",
          end:"-200% top",
        }
      })
      
    },
    {  }
  );

    return (
      <div  className='banner2 h-[30vh] relative w-full shadow-xl flex flex-col items-start bg-repeat bg-[url(./paper-bg.jpg)] justify-center'>
          <div className="absolute z-10 bottom-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
         
          <div className="w-full absolute h-full flex flex-col items-center justify-center">

          <p className="w-full text-center text-[#46296e] sedan-regular">1947 LONDON</p>
          <div className="w-4/5 px-4  flex justify-center gap-2  items-center">
            <div className="h-[2px] w-[10%] md:w-[6%] bg-black "></div>
            <p className="h-full sedan-regular flex px-2 items-center justify-center   text-center text-3xl md:text-4xl ">
              FOLLOW US
            </p>
            <div className="h-[2px] w-[10%] md:w-[6%] bg-black"></div>
          </div>
          <p className="w-full text-center font-thin  mt-4 text-xl">@1947LONDON</p>
          </div>
          
  
      </div>
    )
  }
  
  export default PaperBanner2