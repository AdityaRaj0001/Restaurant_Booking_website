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
      const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/landing-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});

      setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.landing_hero_img.data.attributes.url}`);
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
      <div className="h-auto mb-4 gap-4  w-full  flex flex-col items-center justify-center text">
        <p className="w-full   h-1/4 flex items-center justify-center text-lg font-bold">
        <Link className="herologo w-1/4 h-4/5 flex items-center justify-center" to="/">
					<img src="./blueroom-logo.jpeg" alt="logo" style={{ maxWidth: "80px", maxHeight: "100%" }} />
				</Link>
        </p>
        <div className="h-1/5 w-full flex justify-center gap-4 items-center">
          <div className="titleline h-[2px] w-[5%] bg-white"></div>
          <p className="landingtitle sedan-regular w-auto h-full font-thin  text-center text-xl md:text-5xl">
            MODERN INDIAN CUISINE
          </p>
          <div className="titleline h-[2px] w-[5%] bg-white"></div>
        </div>
        <p className="landingheropara w-full h-1/5 flex items-center justify-center">
          <button className="h-auto py-2 px-2 w-[140px] md:h-[90%] md:w-[200px] md:font-medium md:text-2xl uppercase  text-[#1c0e34] bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] tracking-wider ">Book Table</button>
        </p>
        <span className="landingherobtn sedan-regular w-1/2 md:mt-12 md:text-lg margin-b-12  opacit-30 text-center text-sm">
        33 CHARLOTTE STREET, FITZROVIA, LONDON, W1T 1RR
        </span>
        <div className="landingherodetails sedan-regular uppercase w-full h-1/5  flex justify-between    md:text-2xl md:font-medium items-center px-4 md:px-40 md:absolute md:bottom-6">
          <div className="w-auto h-full text-center flex flex-col  ">
            <p className="text-left ">4 Minutes</p>
            <p className="text-left">From</p>
            <p className="text-left text-[10px] md:text-xl">Godge st.station</p>
          </div>
          <div className="w-auto h-full text-center flex flex-col  ">
            <p className="text-left  md:text-4xl">WE ARE CLOSED</p>
            <p className="text-right text-[10px]  md:text-xl">UNTIL FURTHER NOTICE</p>
            
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
