import React from "react";

const Hero = () => {
  return (
    <div className="h-[70vh] relative w-full flex flex-col text-white ">
      <img
        src="./homehero.jpg"
        className="h-full -z-20 absolute object-cover"
        alt=""
      />
      <div className="overlay -z-10 w-full h-full bg-black opacity-35 top-0 absolute"></div>
      <div className="h-1/3 mt-44 relative w-full mb-32 flex flex-col items-center justify-center text">
        <p className="w-full   h-1/3 flex items-center justify-center text-lg font-bold">
          <span className="">LOGO</span>
        </p>
        <div className="h-1/3 w-full flex justify-center gap-4 items-center">
          <div className="h-[2px] w-[5%] bg-white"></div>
          <p className="w-4/5 h-full flex items-center justify-center font-thin trackingwider text-3xl ">MODERN INDIAN CUISINE</p>
          <div className="h-[2px] w-[5%] bg-white"></div>

        </div>
        <p className="w-full h-1/3 flex items-center justify-center">
<button className="h-1/2 w-[140px] uppercase">Book A Table</button>
        </p>
        <span className="absolute w-1/2 text-center -bottom-[0%] translate-y-[100%]  text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, itaque!</span>
      </div>
      <div className="h-[80px] absolute w-full justify-between bottom-24 flex px-4">
        <div className="w-1/4 h-full text-center flex flex-col  ">
          <p className="text-left">4 Minutes</p>
          <p className="text-left">From</p>
          <p className="text-left text-[10px]">Godge st.station</p>
        </div>
        <div className="w-1/4 h-[140%]  text-center flex flex-col  ">
          <p className="text-left text-xl">4 Minutes</p>
          <p className="text-left">From</p>
          <p className="text-left text-[10px]">Godge st.station</p>
        </div>
      </div>
      <div className="absolute bottom-0 h-[60px] w-full flex flex-col items-center justify-center"></div>
      
    </div>
  );
};

export default Hero;
