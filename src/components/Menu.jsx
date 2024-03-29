import React from "react";

const Menu = () => {
  return (
    <div className="h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-4">
         <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  -top-56 w-[10%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  -top-32 w-[10%] md:w-[5%]  -scale-x-100 "
        ></img>
         {/* <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  bottom-0 w-[10%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  bottom-0 w-[10%] md:w-[5%]  -scale-x-100 "
        ></img> */}
      <p className="w-3/5 text-center">Lorem ipsum dolor, sit amet </p>
      <div className="w-4/5 px-4  flex justify-center  items-center">
        <div className="h-[2px] w-[10%] bg-black"></div>
        <p className="h-full flex px-4 items-center justify-center font-medium  text-center text-3xl ">
          MENU
        </p>
        <div className="h-[2px] w-[10%] bg-black"></div>
      </div>

      <p className="w-4/5 mt-6 text-center text-gray-400 px-4">
        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Neque eius ex vero id, temporibus autem. Labore
        temporibus dolore quis neque?{" "}
      </p>
      <p className="w-4/5 text-center text-gray-400 px-4">
        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Neque eius ex vero id, temporibus autem. Labore
        temporibus dolore quis neque?{" "}
      </p>
      
      <div className="h-[20vh] w-[90%] flex justify-between items-center">
        <div className="w-[48%] h-full relative flex flex-col  justify-center">
            <img src="./default-gallery-7.jpg" className="h-[70%]  "></img>
            <p className="flex items-center justify-center h-[30%] text-lg">Menu 1</p>
        </div>
        <div className="w-[48%] h-full relative flex flex-col justify-center">
        <img src="./default-gallery-7.jpg" className="h-[70%]  "></img>
        <p className="flex items-center justify-center h-[30%] text-lg">Menu 2</p>
        </div>
      </div>
      <div className="h-[20vh] w-[90%] flex justify-between items-center">
        <div className="w-[48%] h-full relative flex flex-col  justify-center">
            <img src="./default-gallery-7.jpg" className="h-[70%]  "></img>
            <p className="flex items-center relative justify-center h-[30%] text-lg">
                <div className="h-[80%] absolute w-[2px] bottom-1/2 bg-violet-300"></div>
                <span className="mt-6">Menu 1</span></p>
        </div>
        <div className="w-[48%] h-full relative flex flex-col justify-center">
        <img src="./default-gallery-7.jpg" className="h-[70%]  "></img>
        <p className="flex items-center justify-center h-[30%] text-lg">Menu 2</p>
        </div>
      </div>
     

      {/* <div className="w-3/5   flex justify-center  items-center">
        <div className="h-[2px] w-[10%] bg-black"></div>
        <p className="h-full flex px-4 items-center justify-center font-medium  text-center text-xl ">
          WELCOME TO 1947 LONDON
        </p>
        <div className="h-[2px] w-[10%] bg-black"></div>
      </div>
      <p className="w-4/5 text-center text-gray-400 px-4">
        Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Neque eius ex vero id, temporibus autem. Labore
        temporibus dolore quis neque?{" "}
      </p>

      <div className="h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  -top-8 w-[15%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  top-0 w-[15%] md:w-[5%] -scale-x-100 "
        ></img>
        <div className="imagediv h-[40%] w-3/4 md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img src="./story.jpg" className="h-full md:w-full  object-cover"></img>
        </div>
        <div className="storydiv h-[60%] w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center">
            Lorem ipsum dolor sit.
          </p>
          <h1 className="text-2xl text-center md:text-3xl">THE MENU</h1>
          <p className="w-full md:w-4/5 text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <p className="w-full md:w-4/5 hidden md:block text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  -top-8 w-[15%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  top-0 w-[15%] md:w-[5%]  -scale-x-100 "
        ></img>
        <div className="imagediv h-[40%] w-3/4 md:order-2 md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img src="./story.jpg" className="h-full md:w-full  object-cover"></img>
        </div>
        <div className="storydiv h-[60%] w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center">
            Lorem ipsum dolor sit.
          </p>
          <h1 className="text-2xl text-center md:text-3xl">THE MENU</h1>
          <p className="w-full md:w-4/5 text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <p className="w-full md:w-4/5 hidden md:block text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  -top-8 w-[15%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  top-0 w-[15%] md:w-[5%]  -scale-x-100 "
        ></img>
        <div className="imagediv h-[40%] w-3/4  md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img src="./story.jpg" className="h-full md:w-full  object-cover"></img>
        </div>
        <div className="storydiv h-[60%] w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center">
            Lorem ipsum dolor sit.
          </p>
          <h1 className="text-2xl text-center md:text-3xl">THE MENU</h1>
          <p className="w-full md:w-4/5 text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <p className="w-full md:w-4/5 hidden md:block text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  -top-8 w-[15%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  top-0 w-[15%] md:w-[5%]  -scale-x-100 "
        ></img>
        <div className="imagediv h-[40%] w-3/4 md:order-2  md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img src="./story.jpg" className="h-full md:w-full  object-cover"></img>
        </div>
        <div className="storydiv h-[60%] w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center">
            Lorem ipsum dolor sit.
          </p>
          <h1 className="text-2xl text-center md:text-3xl">THE MENU</h1>
          <p className="w-full md:w-4/5 text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <p className="w-full md:w-4/5 hidden md:block text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div>
      <div className="h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
        <img
          src="./plantbgmobile.png"
          className="absolute left-0 z-20  -top-8 w-[15%] md:w-[5%] "
        ></img>
        <img
          src="./plantbgmobile.png"
          className="absolute right-0 z-20  top-0 w-[15%] md:w-[5%]  -scale-x-100 "
        ></img>
        <div className="imagediv h-[40%] w-3/4   md:w-1/3 md:h-3/4 flex items-center justify-center">
          <img src="./story.jpg" className="h-full md:w-full  object-cover"></img>
        </div>
        <div className="storydiv h-[60%] w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
          <p className="text-violet-700 w-full text-center">
            Lorem ipsum dolor sit.
          </p>
          <h1 className="text-2xl text-center md:text-3xl">THE MENU</h1>
          <p className="w-full md:w-4/5 text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <p className="w-full md:w-4/5 hidden md:block text-center text-gray-400 mt-4">
            Lorem ipsum dolor, sit amet Lorem ipsum dolor sit, amet consectetur
            adipisicing Lorem ipsum dolor sit amet
          </p>
          <button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">
            DISCOVER MORE
          </button>
        </div>
      </div> */}
     
    </div>
  );
};

export default Menu;
