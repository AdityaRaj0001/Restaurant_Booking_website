import React, { useContext } from "react";
import { LandingPageContext } from "../context/landingPage";

const Grid = () => {
  const landingPage = useContext(LandingPageContext);

  const img1 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[0]?.images?.data[0]?.attributes?.url}`;
	const img2 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[1]?.images?.data[0]?.attributes?.url}`;
	const img3 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[2]?.images?.data[0]?.attributes?.url}`;
	const img4 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[3]?.images?.data[0]?.attributes?.url}`;
	const img5 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[4]?.images?.data[0]?.attributes?.url}`;
	const img6 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[5]?.images?.data[0]?.attributes?.url}`;
	const img7 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[6]?.images?.data[0]?.attributes?.url}`;
	const img8 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.grid_images[7]?.images?.data[0]?.attributes?.url}`;


  return (
    <div className="w-full h-[70vh] md:h-[100vh]  md:gap-4 py-16 flex flex-col items-center justify-center">
      <div className="w-full h-[50%] flex justify-between  mb-4">
        <div className="w-[48%] md:w-[24%] overflow-hidden   object-cover">
          <img src={img1} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
        <div className="w-[48%] md:w-[24%] overflow-hidden   object-cover">
          <img src={img2} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
      
        <div className="w-[48%] md:w-[24%] hidden overflow-hidden md:block object-cover">
        <img src={img3} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
        <div className="w-[48%] md:w-[24%] hidden overflow-hidden md:block object-cover">
        <img src={img4} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
      </div>
      <div className="w-full h-[50%] flex justify-between  mb-4">
        <div className="w-[48%] md:w-[24%] overflow-hidden   object-cover">
          <img src={img5} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
        <div className="w-[48%] md:w-[24%] overflow-hidden   object-cover">
          <img src={img6} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
      
        <div className="w-[48%] md:w-[24%] hidden overflow-hidden md:block object-cover">
        <img src={img7} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
        <div className="w-[48%] md:w-[24%] hidden overflow-hidden md:block object-cover">
        <img src={img8} className="md:w-full max-w-none transform transition-transform duration-500 hover:scale-110 h-full" />
        </div>
      </div>
     
      <button className="w-3/5 md:w-1/4 bg-violet-900 px-4 p-2 flex items-center justify-center text-white mt-4">
        DISCOVER MORE
      </button>
    </div>
  );
};

export default Grid;
