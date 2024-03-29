import React from "react";

const BookTable = () => {
  return (
    <div className="h-[80vh] mt-8 w-full bg-white  flex items-center justify-center">
      <div className="h-[100%] relative w-full flex items-center justify-center">
        <img
          src="./default-gallery-7.jpg"
          className="h-full md:w-full absolute  object-cover"
        ></img>
        <div className="h-[80%] w-[90%] md:w-1/3 z-10 flex flex-col items-center justify-center bg-white">
          <p className="text-xl">EXPERIENCE 1947 LONDON</p>
          <div className="w-4/5 px-4  flex justify-center  items-center">
            <div className="h-[2px] w-[10%] bg-black"></div>
            <p className="h-full flex px-2 items-center justify-center font-medium  text-center text-2xl ">
              BOOK A TABLE
            </p>
            <div className="h-[2px] w-[10%] bg-black"></div>
          </div>
          <p className="text-xl mt-4 mb-4">OPENING HOURS</p>
          <p className="text-xl font-bold">TUESDAY - SATURDAY</p>
          <p className="text-lg ">5pm - Midnight</p>
          <p className="text-sm ">(Last seating 9pm)</p>
          <p className="text-xl font-bold mt-4">SUNDAY</p>
          <p className="text-lg ">5pm - Midnight</p>
          <p className="text-sm mb-4">(Last seating 9pm)</p>
          <p className="text-sm text-center w-4/5">Children under 12 not permitted on friday and saturday</p>
          <button className="w-3/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-[45%] text-white mt-4 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
