import React, { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import axios from "axios";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [heroUrl, setHeroUrl] = useState("");

  useEffect(() => {
    getHeroUrl();
  }, []);
  useGSAP(
    () => {
      let flowersbigarray = gsap.utils.toArray(".flowersbig");

      for (let i = 0; i < flowersbigarray.length; i++) {
        gsap.from(flowersbigarray[i], {
          x: i === 1 ? "150px" : "-150px",
          duration: 4,
          scrollTrigger: {
            trigger: ".menuparent",
            start: "-100% top",
            end: "-100% top",
          },
        });
      }
      gsap.from(".menu", {
        opacity:0,
        duration: 1.5,
        stagger:0.5,
        scrollTrigger: {
          trigger: ".menutypesparent",
          start: "-80% top",
          end: "-80% top",
        },
      });
    },
    { }
  );

  const getHeroUrl = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_STRAPI_BASE_URL}/api/contact-hero?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
          },
        }
      );
      setHeroUrl(
        `${import.meta.env.VITE_STRAPI_BASE_URL}${
          res.data.data.attributes.contact_hero_img.data.attributes.url
        }`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const heroImageSrc = heroUrl ? heroUrl : "./contact-hero.jpg";
  return (
    <main className="min-h-[100vh] relative w-full overflow-hidden">
      <Hero maintext="Contact" heroimg={heroImageSrc} />
      <div className="menuparent pb-20  md:pb-12 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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
          className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100"
          alt="plant background"
        ></img>
        <img
          src="./plant-bg big right.png"
          className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 "
          alt="plant background"
        ></img>
        {/* <p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
          BY MICHELIN EXPERIENCED CHEFS
        </p> */}
        <div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
          <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
            GET IN TOUCH
          </p>
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        </div>

        <p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">
          33 Charlotte Street
        </p>
        <p className="w-3/5   text-center font-thin px-4 md:text-xl ">
          Fitzrovia, London
        </p>
        <p className="w-3/5  text-center font-thin px-4 md:text-xl ">W1T 1RR</p>
        <p className="w-3/5  mt-4 mb-8 text-center font-thin px-4 md:text-lsm ">
          (Entrance opposite Rathbone Hotel on Rathbone Street){" "}
        </p>
        <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
          <a className="underline text-lg " href="mailto:info@1947london.com">
            info@1947london.com
          </a>
        </p>
        <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
          <a className="text-lg" href="tel:0207 693 6290">
            020 7693 6290
          </a>
        </p>
        <div className="w-4/5 mt-24 px-4 sedan-regular flex justify-center  items-center">
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
          <p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-3xl">
            ENQUIRE NOW
          </p>
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        </div>
        <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
          If you have general enquiry, get in touch with us using the form
          below.{" "}
        </p>
        <p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">
          If you would like to make, change or discuss the details of an
          existing reservation, please call us directly on 020 7693 6290{" "}
        </p>
      </div>
      <EnquiryForm />
      <BookTable />
      {/* <PaperBanner2/> */}
    </main>
  );
};

export default About;
