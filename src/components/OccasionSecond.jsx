import React, { useContext, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { OccasionPageContext } from "../context/occasionPage";
gsap.registerPlugin(ScrollTrigger);

const OccasionSecond = () => {
	const occasionPage = useContext(OccasionPageContext);

	useGSAP(() => {
		let flowersbigarray = gsap.utils.toArray(".flowersbig");

		for (let i = 0; i < flowersbigarray.length; i++) {
			gsap.from(flowersbigarray[i], {
				x: i === 1 ? "150px" : "-150px",
				duration: 4,
				scrollTrigger: {
					trigger: ".occasionparent",
					start: "-100% top",
					end: "-100% top",
				},
			});
		}
	}, {});

	return (
		<div className="occasionparent pb-20  h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
			<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
			<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
			<img src="./plant-bg big.png" className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100" alt="plant background"></img>
			<img src="./plant-bg big right.png" className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 " alt="plant background"></img>
			<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{occasionPage?.welcome_block?.sub_title}</p>
			<div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				<p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{occasionPage?.welcome_block?.title}</p>
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
			</div>

			<p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">{occasionPage?.welcome_block?.description[0]?.description_line}</p>
			<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{occasionPage?.welcome_block?.description[1]?.description_line}</p>
			<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{occasionPage?.welcome_block?.description[2]?.description_line}</p>
			<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{occasionPage?.welcome_block?.description[3]?.description_line}</p>

			<div className="w-4/5 mt-24 px-4 sedan-regular flex justify-center  items-center">
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				<p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{occasionPage?.exclusive_block?.title}</p>
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
			</div>
			<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{occasionPage?.exclusive_block?.description[0]?.description_line}</p>
			<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{occasionPage?.exclusive_block?.description[1]?.description_line}</p>

			<div className="w-4/5 mt-24 px-4 sedan-regular flex justify-center  items-center">
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				<p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-3xl">{occasionPage?.form_details?.title}</p>
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
			</div>
			<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{occasionPage?.form_details?.description[0]?.description_line}</p>
		</div>
	);
};

export default OccasionSecond;
