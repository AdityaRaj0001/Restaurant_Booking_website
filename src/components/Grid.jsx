import React from "react";

const Grid = () => {
  return (
    <div className="w-full h-[70vh] md:h-[100vh]  md:gap-4 py-16 flex flex-col items-center  justify-center ">
      <div className="w-full h-[50%] flex justify-between  mb-4">
        <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%] object-cover"
        ></img>
        <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%] object-cover"
        ></img>
        <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%] hidden md:block object-cover"
        ></img>
        <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%] hidden md:block object-cover"
        ></img>
      </div>
      <div className="w-full h-[50%] flex justify-between gap-2">
      <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%]  object-cover"
        ></img>
      <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%]  object-cover"
        ></img>
      <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%] hidden md:block object-cover"
        ></img>
      <img
          src="./default-gallery-7.jpg"
          className="w-[48%] md:w-[24%] hidden md:block object-cover"
        ></img>
      </div>
      <button className="w-3/5 md:w-1/4 bg-violet-900 px-4 p-2 flex items-center justify-center  text-white mt-4 ">
        DISCOVER MORE
      </button>
    </div>
  );
};

export default Grid;