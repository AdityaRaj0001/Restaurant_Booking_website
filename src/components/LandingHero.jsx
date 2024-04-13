import axios from "axios";
import React, { useEffect, useState,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);


const LandingHero = () => {
  const [heroUrl, setHeroUrl] = useState('');
  const containerRef = useRef(null)
  useEffect(() =>{
    getHeroUrl();
  }, []);
  useGSAP(
    () => {
      const tl=gsap.timeline()
      tl.from([".landingheroimg",".herologo",".landingtitle",".landingheropara",".landingherobtn",".landingherodetails"], {
        opacity:0,
        duration:0.4,
        stagger:.4
      });
      tl.from(".titleline",{
        width:"0px",
        duration:0.7
      })
      tl.from(".yoyodiv",{
        opacity:0,
        duration:0.7
      })
      tl.from(".yoyodiv",{
        y:"50px",
        yoyo:true,
        duration:1,
        repeat:-1,
      })
    },
    { scope: containerRef }
  );


  const getHeroUrl = async() =>{
    try {
      const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/hero-section?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});

      setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.homehero.data[0].attributes.url}`);
      console.log(heroUrl);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div ref={containerRef} className="h-[70vh] md:h-[100vh] relative w-full  flex-col text-white  flex items-center justify-center">
      <img
        src="./homehero.jpg"
        className="landingheroimg h-full md:w-full md:h-full  -z-20 absolute object-cover object-top"
        alt="hero-img"
      />
      <div className="overlay -z-10 w-full h-full bg-black opacity-50 top-0 absolute"></div>
      <div className="h-1/2 mb-4   w-full  flex flex-col items-center justify-center text">
        <p className="w-full   h-1/4 flex items-center justify-center text-lg font-bold">
        <Link className="herologo w-1/4 h-4/5 flex items-center justify-center" to="/">
					<img src="./blueroom-logo.jpeg" alt="logo" style={{ maxWidth: "80px", maxHeight: "100%" }} />
				</Link>
        </p>
        <div className="h-1/5 w-full flex justify-center gap-4 items-center">
          <div className="titleline h-[2px] w-[5%] bg-white"></div>
          <p className="landingtitle w-auto h-full flex items-center justify-center font-thin  text-center text-3xl ">
            MODERN INDIAN CUISINE
          </p>
          <div className="titleline h-[2px] w-[5%] bg-white"></div>
        </div>
        <p className="landingheropara w-full h-1/5 flex items-center justify-center">
          <button className="h-1/2 w-[140px] md:h-3/4 md:w-[200px] md:font-medium md:text-xl uppercase  text-black bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] tracking-wider ">Book Table</button>
        </p>
        <span className="landingherobtn w-1/2 md:mt-12 md:text-lg  opacit-30 text-center text-sm">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur,
          itaque!
        </span>
        <div className="landingherodetails w-full h-1/5  flex justify-between   md:text-2xl md:font-medium items-center px-4 md:px-72 md:absolute md:bottom-6">
          <div className="w-1/4 h-full text-center flex flex-col  ">
            <p className="text-left">4 Minutes</p>
            <p className="text-left">From</p>
            <p className="text-left text-[10px] md:text-xl">Godge st.station</p>
          </div>
          <div className="w-1/4 h-full text-center flex flex-col  ">
            <p className="text-left">4 Minutes</p>
            <p className="text-left">From</p>
            <p className="text-left text-[10px] md:text-xl">Godge st.station</p>
          </div>
        </div>
      </div>

      <div className="yoyodiv w-full h-[18%] md:h-[10%] absolute bottom-0 flex flex-col justify-center items-center">
        <span className="text-[12px] mb-2">Explore</span>
        <div className="h-[80%] w-[1px] bg-white"></div>
      </div>
    </div>
  );
};

export default LandingHero;
