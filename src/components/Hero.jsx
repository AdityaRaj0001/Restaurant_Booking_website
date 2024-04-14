
import React from "react";

const Hero = ({ maintext, heroimg }) => {
  
  return (
    <div className="h-[60vh] md:h-[70vh] overflow-hidden  relative w-full  flex-col text-white  flex items-center justify-center">
      <img
        src={heroimg}
        className="  -z-20 absolute object-cover md:w-full"
        alt="hero-img"
      />
      <div className="overlay -z-10 w-full h-full bg-black opacity-50 top-0 absolute"></div>
      <div className="h-1/2 mb-4   w-full  flex flex-col items-center justify-center text">
        <div className="h-1/5 w-full flex justify-center gap-4 items-center">
          <div className="h-[2px] w-[5%] bg-white"></div>
          <p className="w-auto h-full flex items-center justify-center  text-center text-3xl md:text-5xl font-medium ">
            {maintext}
          </p>
          <div className="h-[2px] w-[5%] bg-white"></div>
        </div>
      </div>
      <div className="absolute z-10 bottom-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>

    </div>
  );
};

export default Hero;
