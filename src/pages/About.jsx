import React, { useContext, useEffect, useState } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import axios from "axios";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AboutPageContext } from "../context/aboutPage";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	const aboutPage = useContext(AboutPageContext);

	console.log(aboutPage);

	const dataArray = aboutPage?.about_content;

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

	const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${aboutPage?.hero_img?.data?.attributes?.url}`;
	return (
		<main className="min-h-[100vh] overflow-hidden relative w-full">
			<Hero maintext={aboutPage?.hero_title} heroimg={heroUrl} />
			<div className="menuparent  md:pb-40 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 " alt="plant background"></img>
				<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{aboutPage?.welcome_block?.sub_title}</p>
				<div className="w-full px-4 sedan-regular flex justify-center  items-center">
					<div className="h-[2px] w-[8%] md:w-[5%] bg-black"></div>
					<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{aboutPage?.welcome_block?.title}</p>
					<div className="h-[2px] w-[8%] md:w-[5%] bg-black"></div>
				</div>

				<p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">{aboutPage?.welcome_block?.description[0]?.description_line}</p>
				<p className="w-3/5  mt-4 mb-12 text-center font-thin px-4 md:text-xl ">{aboutPage?.welcome_block?.description[1]?.description_line}</p>
				<p className="w-3/5   mb-12 text-center font-thin px-4 md:text-xl ">{aboutPage?.welcome_block?.description[2]?.description_line}</p>
				{dataArray.map((item, index) => (
					<div className="w-full h-auto md:hidden" key={index}>
						<img src={`${import.meta.env.VITE_STRAPI_BASE_URL}${item?.img?.data?.attributes?.url}`} className="w-full relative z-10"></img>
						<div className="h-auto w-full  flex justify-center relative items-center">
							<img src="././paper-bg.jpg" className="object-contain  absolute top-0 bg-repeat"></img>
							<div className="w-[90%] mb-4 bg-white z-10 h-auto py-4 flex flex-col items-center gap-2">
								<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{item.sub_title}</p>
								<p className="text-[#46296e] sedan-regular h-full flex px-2 items-center justify-center font-medium text-center text-2xl md:text-4xl">{item.title}</p>
								<p className="w-full mb-12 text-center font-thin px-4 md:text-xl ">{item.description}</p>
							</div>
						</div>
					</div>
				))}
				{dataArray.map((item, index) => (
					<div className="w-3/5 h-auto hidden  md:flex mb-48" key={index}>
						<div className={`h-auto w-1/3 relative flex justify-center items-center ${index % 2 === 0 ? "" : "order-2"}`}>
							<img src="././paper-bg.jpg" className={`object-cover w-[90%] h-[100%] absolute   top-28 ${index % 2 === 0 ? "left-20" : "right-20"} `}></img>
							<div className={`w-[100%]    absolute top-24 ${index % 2 === 0 ? "left-24" : "right-24"} mb-4 bg-white z-20 h-[100%] py-4 flex flex-col items-center gap-2`}>
								<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{item.sub_title}</p>
								<p className="text-[#46296e] mt-2 sedan-regular h-auto flex px-2 items-center justify-center font-medium text-center text-2xl md:text-4xl">{item.title}</p>
								<p className="w-full h-auto mb-4 text-center font-thin px-4 md:text-[14px] trackinwidest ">{item.description}</p>
							</div>
						</div>
						<img src={`${import.meta.env.VITE_STRAPI_BASE_URL}${item?.img?.data?.attributes?.url}`} className="w-2/3 relative z-10"></img>
					</div>
				))}
			</div>
			<BookTable />
			<PaperBanner2 />
		</main>
	);
};

export default About;
