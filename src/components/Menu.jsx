import React from "react";
import Slideshow from "../components/Slideshow"
import BookTable from "../components/BookTable"
import PaperBanner2 from "../components/PaperBanner2";
const Menu = () => {
  return (
    <div className="h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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
        className="absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100"
        alt="plant background"
      ></img>
      <img
        src="./plant-bg big right.png"
        className="absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 "
        alt="plant background"
      ></img>
      <p className="w-3/5 text-center">Lorem ipsum dolor, sit amet </p>
      <div className="w-4/5 px-4  flex justify-center  items-center">
        <div className="h-[2px] w-[10%] bg-black"></div>
        <p className="h-full flex px-4 items-center justify-center font-medium  text-center text-3xl ">
          MENU
        </p>
        <div className="h-[2px] w-[10%] bg-black"></div>
      </div>

      <p className="w-4/5 mt-6 text-center text-gray-400 px-4 xl:text-xl xl:w-3/5">
        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Neque eius ex vero id, temporibus autem. Labore
        temporibus dolore quis neque?{" "}
      </p>
      <p className="w-4/5 text-center text-gray-400 px-4 xl:mb-8 xl:text-xl xl:w-3/5">
        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Neque eius ex vero id, temporibus autem. Labore
        temporibus dolore quis neque?{" "}
      </p>

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
      </div>
      <Slideshow/>
      <BookTable/>
      <PaperBanner2/>


     
    </div>
  );
};

export default Menu;
