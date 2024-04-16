import React, { useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

const Press = () => {
  const [heroUrl, setHeroUrl] = useState("");
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

  useEffect(() => {
    getHeroUrl();
  }, []);

  const getHeroUrl = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_STRAPI_BASE_URL}/api/press-hero?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
          },
        }
      );
      setHeroUrl(
        `${import.meta.env.VITE_STRAPI_BASE_URL}${
          res.data.data.attributes.press_hero_img.data.attributes.url
        }`
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const dataArray = [
    {
      link: "/link1",
      firstPara: `"One of the best Indian restaurants in London"`,
      secondPara: "Spectator Life",
    },
    {
      link: "/link2",
	  firstPara: `"One of the best Indian restaurants in London"`,
      secondPara: "Spectator Life",
    },
    {
      link: "/link2",
	  firstPara: `"One of the best Indian restaurants in London"`,
      secondPara: "Spectator Life",
    },
    {
      link: "/link2",
	  firstPara: `"One of the best Indian restaurants in London"`,
      secondPara: "Spectator Life",
    },
    {
      link: "/link2",
	  firstPara: `"One of the best Indian restaurants in London"`,
      secondPara: "Spectator Life",
    },
  ];

  const heroImageSrc = heroUrl ? heroUrl : "./press-hero.jpg";
  return (
    <main className="min-h-[100vh] relative overflow-hidden w-full">
      <Hero maintext="Press" heroimg={heroImageSrc} />
      <div className="menuparent pb-20  md:pb-40 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
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
          BY MICHELIN EXPERIENCED CHEFS
        </p>
        <div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
          <p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
            WHAT THE CRITICS SAY
          </p>
          <div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
        </div>
        <p className="w-auto mt-12 mb-20 text-center sedan-regular font-thin text-[20px] text-gray-500 md:text-[24px]">
          Press cuttings from local and national press outlets
        </p>

        {/* <p className="text-[#46296e] sedan-regular h-full flex px-2 items-center justify-center font-medium  text-center text-xl md:text-2xl">
		"ONE OF THE BEST INDIAN RESTAURANTS IN LONDON"
          </p>
		<p className="text-black sedan-regular h-full flex px-2 items-center justify-center font-medium  text-center text-lg md:text-xl">
		SPECTATOR LIFE
          </p>

		  <span><img src="./nav-dot-on.png" className="w-3 h-3 mt-8"></img></span>
		 */}
        {dataArray.map((item, index) => (
			<>
			
            <a
              href={item.link}
              className="text-[#46296e] sedan-regular uppercase mt-12 h-full flex px-2 items-center justify-center font-medium text-center text-xl md:text-2xl"
            >
              {item.firstPara}
            </a>
            <p className="text-black uppercase sedan-regular h-full flex px-2 items-center justify-center font-medium text-center text-lg md:text-xl">
              {item.secondPara}
            </p>
            <span>
              <img
                src="./nav-dot-on.png"
                className="w-3 h-3 mt-8"
                alt="Navigation Dot"
              ></img>
            </span>
			</>
        ))}
      </div>
      <BookTable />
    </main>
  );
};

export default Press;
