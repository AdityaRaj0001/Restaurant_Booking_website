import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ maintext, heroimg, subtext, subtext2 }) => {
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
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from([".heroimg", ".herotitle"], {
      opacity: 0,
      duration: 0.6,
      stagger: 0.4,
    });
    tl.from(".titleline", {
      width: "0px",
      duration: 1,
    });
    const tl2 = gsap.timeline();
  }, {});

  return (
    <div className="h-[60vh] md:h-[70vh] overflow-hidden  relative w-full  flex-col text-white  flex items-center justify-center">
      <img
        src={heroimg}
        className="heroimg  -z-20 absolute object-cover h-full w-full md:w-full"
        alt="hero-img"
      />
      <div className="overlay -z-10 w-full h-full bg-black opacity-50 top-0 absolute"></div>
      <div className="h-1/2 mb-4   w-full  flex flex-col items-center justify-center text">
        <div className="h-1/5 w-full flex justify-center flex-col gap-0 items-center">
          <div className="h-4/5 w-full flex justify-center mb-4  gap-4 items-center">
            <div className="titleline h-[2px] w-[5%] bg-white"></div>
            <p className="w-auto h-full flex items-center justify-center uppercase sedan-regular  text-center text-3xl md:text-5xl font-medium ">
              {maintext}
            </p>
            <div className="titleline h-[2px] w-[5%] bg-white"></div>
          </div>

          <p className="w-auto h-auto flex mt-4 items-center justify-center uppercase sedan-regular  text-center text-2xl md:text-4xl font-medium ">
            {subtext}
          </p>
          <p className="w-auto h-auto flex items-center justify-center uppercase   text-center text-lg md:text-xl font-medium ">
            {subtext2}
          </p>
        </div>
      </div>

      <div className="absolute z-10 bottom-0 h-[10px] w-full bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
    </div>
  );
};

export default Hero;
