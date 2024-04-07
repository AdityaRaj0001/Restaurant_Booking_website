import axios from "axios";
import React, { useEffect, useState } from "react";

const Hero = ({ maintext, heroimg }) => {
  const [heroUrl, setHeroUrl] = useState("");
  useEffect(() => {
    getHeroUrl();
  }, []);

  const getHeroUrl = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_STRAPI_BASE_URL}/api/hero-section?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
          },
        }
      );

      setHeroUrl(
        `${import.meta.env.VITE_STRAPI_BASE_URL}${
          res.data.data.attributes.homehero.data[0].attributes.url
        }`
      );
      console.log(heroUrl);
    } catch (error) {
      console.log(error.message);
    }
  };
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
