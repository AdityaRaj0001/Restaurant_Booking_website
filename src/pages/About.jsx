import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [heroUrl, setHeroUrl] = useState("");

  useEffect(() => {
    getHeroUrl();
  }, []);
  const data = [
	{
	  imageSrc: "./occasions-hero.jpg",
	  title: "HEART OF THE WEST END",
	  subtitle: "MEMORABLE EXPERIENCES",
	  description: "The restaurant is situated in a beautiful dining space with an unrivalled ambience within walking distance from London’s West End. From statement pieces of interior design to the perfectly judged lighting, 1947 London, is glamour and excellence personified at the same time providing a rare and easy elegance."
	},
	{
	  imageSrc: "./occasions-hero.jpg", // Keeping the same image for subsequent entries
	  title: "MODERN INDIAN FLAVOURS",
	  subtitle: "EXQUISITE MENU",
	  description: "Our exquisite menu prepared by Michelin-experienced chefs brings together the best modern Indian flavours and spices and the result is a culinary dream. The menu is also complimented by a carefully curated wine and cocktail list, selected expressly to compliment the many diverse flavours present in Indian and Asian cuisine."
	},
	{
	  imageSrc: "./occasions-hero.jpg", // Keeping the same image for subsequent entries
	  title: "DRINKS FOR ALL OCCASIONS",
	  subtitle: "ARTFUL COCKTAIL LIST",
	  description: "Enjoy an artfully created cocktail and mocktail list with classics and variations of classics, designed and concocted, especially for our esteemed clientele, by our in-house experts."
	},
	{
	  imageSrc: "./occasions-hero.jpg", // Keeping the same image for subsequent entries
	  title: "MICHELIN AWARD WINNING CHEF",
	  subtitle: "CHEF KRISHNAPAL NEGI",
	  description: "Our Michelin Bib Gourmand award winning chef, Krishnapal Negi, experience stretches from India’s top hotels as well as Michelin-starred restaurants in Central London. He has joined us as executive chef, specialising in a modern Indian cuisine which emerged from much-loved recipes from the Indian Himalayas."
	},
	{
	  imageSrc: "./occasions-hero.jpg", // Keeping the same image for subsequent entries
	  title: "SATISFYING DINING EXPERIENCES",
	  subtitle: "HARDEN'S LISTED RESTAURANT",
	  description: "Being a Harden’s Listed Restaurant, 1947 London has all the individual qualities that mark a wonderful restaurant and it is remarkable enough for that alone. However, what truly makes us more than the sum of our parts is the passion, knowledge and genuine love of what we do. The result is one of the most finely judged and satisfying dining experiences anywhere."
	}
  ];
  
  useGSAP(() => {
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
  }, {});

  const getHeroUrl = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_STRAPI_BASE_URL}/api/about-hero?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
          },
        }
      );
      setHeroUrl(
        `${import.meta.env.VITE_STRAPI_BASE_URL}${
          res.data.data.attributes.about_hero_img.data.attributes.url
        }`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const heroImageSrc = heroUrl ? heroUrl : "./about-hero.jpg";
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="About" heroimg={heroImageSrc} />
      <div className="menuparent  md:pb-40 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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
        <p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
          1947 LONDON
        </p>
        <div className="w-full px-4 sedan-regular flex justify-center  items-center">
          <div className="h-[2px] w-[8%] md:w-[5%] bg-black"></div>
          <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
            YOU’RE INVITED
          </p>
          <div className="h-[2px] w-[8%] md:w-[5%] bg-black"></div>
        </div>

        <p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">
          The richness and diversity of India itself can be seen and tasted in
          the unrivalled path, breath and variety of its cuisine.
        </p>
        <p className="w-3/5  mt-4 mb-12 text-center font-thin px-4 md:text-xl ">
          The true raison d’être of 1947 however, is in understanding the power
          of shared dining experiences to bring together cultures and
          generations like nothing else. And, it is here that we excel.
        </p>
        <p className="w-3/5   mb-12 text-center font-thin px-4 md:text-xl ">
          We cordially invite you to 1947 London to experience our brand of
          hospitality for yourself.
        </p>
        {data.map((item, index) => (
          <div className="w-full h-auto md:hidden" key={index}>
            <img src={item.imageSrc} className="w-full relative z-10"></img>
            <div className="h-auto w-full  flex justify-center relative items-center">
              <img
                src="././paper-bg.jpg"
                className="object-contain  absolute top-0 bg-repeat"
              ></img>
              <div className="w-[90%] mb-4 bg-white z-10 h-auto py-4 flex flex-col items-center gap-2">
                <p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
                  {item.subtitle}
                </p>
                <p className="text-[#46296e] sedan-regular h-full flex px-2 items-center justify-center font-medium text-center text-2xl md:text-4xl">
                  {item.title}
                </p>
                <p className="w-full mb-12 text-center font-thin px-4 md:text-xl ">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        {data.map((item, index) => (
          <div className="w-3/5 h-auto hidden  md:flex mb-48" key={index}>
            <div className={`h-auto w-1/3 relative flex justify-center items-center ${index % 2 === 0 ? "" : "order-2"}`}>
              <img
                src="././paper-bg.jpg"
                className={`object-cover w-[90%] h-[100%] absolute   top-28 ${index % 2 === 0 ? "left-20" : "right-20"} `}
              ></img>
              <div className={`w-[100%]    absolute top-24 ${index % 2 === 0 ? "left-24" : "right-24"} mb-4 bg-white z-20 h-[100%] py-4 flex flex-col items-center gap-2`}>
                <p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
                  {item.subtitle}
                </p>
                <p className="text-[#46296e] mt-2 sedan-regular h-auto flex px-2 items-center justify-center font-medium text-center text-2xl md:text-4xl">
                  {item.title}
                </p>
                <p className="w-full h-auto mb-4 text-center font-thin px-4 md:text-[14px] trackinwidest ">
                  {item.description}
                </p>
              </div>
            </div>
            <img src={item.imageSrc} className="w-2/3 relative z-10"></img>
          </div>
        ))}

      </div>
      <BookTable />
      <PaperBanner2 />
    </main>
  );
};

export default About;
