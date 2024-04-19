import React, { useContext } from "react";
import Hero from "../components/Hero";

import BookTable from "../components/BookTable";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PressPageContext } from "../context/pressPage";
gsap.registerPlugin(ScrollTrigger);

const Press = () => {

  const pressPage = useContext(PressPageContext);

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


  const dataArray = pressPage?.press_content;

  const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${pressPage?.hero_img?.data?.attributes?.url}`;

  return (
		<main className="min-h-[100vh] relative overflow-hidden w-full">
			<Hero maintext={pressPage?.hero_title} heroimg={heroUrl} />
			<div className="menuparent pb-20  md:pb-40 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 " alt="plant background"></img>
				<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{pressPage?.welcome_block?.sub_title}</p>
				<div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
					<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{pressPage?.welcome_block?.title}</p>
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				</div>
				<p className="w-auto mt-12 mb-20 text-center sedan-regular font-thin text-[20px] text-gray-500 md:text-[24px]">{pressPage?.welcome_block?.description[0]?.description_line}</p>

				{dataArray.map((item, index) => (
					<>
						<a href={item.link} className="text-[#7031cf] sedan-regular uppercase mt-12 h-full flex px-2 items-center justify-center font-medium text-center text-xl md:text-2xl">
							{item.title}
						</a>
						<p className="text-black uppercase sedan-regular h-full flex px-2 items-center justify-center font-medium text-center text-lg md:text-xl">{item.sub_title}</p>
						<span>
							<img src="./nav-dot-on.png" className="w-3 h-3 mt-8" alt="Navigation Dot"></img>
						</span>
					</>
				))}
			</div>
			<BookTable />
		</main>
	);
};

export default Press;
