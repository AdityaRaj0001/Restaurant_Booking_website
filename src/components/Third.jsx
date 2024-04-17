import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DetailsContext } from "../context/staticDetails";
import axios from "axios";
import { LandingPageContext } from "../context/landingPage";
gsap.registerPlugin(ScrollTrigger);

const Third = () => {
	const containerRef = useRef(null);
	const screenWidth = window.innerWidth;
	const details = useContext(DetailsContext);

	const landingPage = useContext(LandingPageContext);

	useGSAP(
		() => {
			let imagedivs = gsap.utils.toArray(".imagediv");
			let storydivs = gsap.utils.toArray(".storydiv");
			let flowersbigarray = gsap.utils.toArray(".desktopflowersbig2");
			if (screenWidth > 768) {
				for (let i = 0; i < imagedivs.length; i++) {
					gsap.from([storydivs[i], imagedivs[i]], {
						opacity: 0,
						duration: 1.5,
						stagger: 0.4,
						scrollTrigger: {
							trigger: storydivs[i],
							start: "-100% top",
							end: "-100% top",
						},
					});
				}
			}
			for (let i = 0; i < flowersbigarray.length; i++) {
				gsap.from(flowersbigarray[i], {
					x: i === 1 ? "150px" : "-150px",
					duration: 2.5,
					scrollTrigger: {
						trigger: flowersbigarray[i],
						start: "-60% top",
						end: "-60% top",
					},
				});
			}
		},
		{ scope: containerRef }
	);

	const featuredImg1 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.featured[0]?.img?.data?.attributes?.url}`;

	const featuredImg2 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.featured[1]?.img?.data?.attributes?.url}`;
	const featuredImg3 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.featured[2]?.img?.data?.attributes?.url}`;
	const featuredImg4 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.featured[3]?.img?.data?.attributes?.url}`;
	const featuredImg5 = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.featured[4]?.img?.data?.attributes?.url}`;

	return (
		<div ref={containerRef} className="h-auto w-full flex flex-col items-center justify-start pt-12 gap-2">
			<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">
				{details.addressLine1}, {details.addressLine2}, {details.addressLine3}
			</p>
			<div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{landingPage.welcome_block.title}</p>
				<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
			</div>

			<p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl md:w-3/5">{landingPage.welcome_block.Description[0].description_line}</p>
			<p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl md:w-3/5">{landingPage.welcome_block.Description[1].description_line}</p>
			<p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl md:w-3/5">{landingPage.welcome_block.Description[2].description_line}</p>

			<div className="w-4/5 md:w-3/5 px-4 sedan-regular flex justify-center  items-center">
				<div className="h-[2px] w-[10%] bg-black"></div>
				<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-[20px] md:text-3xl">{landingPage.offer_block.title}</p>
				<div className="h-[2px] w-[10%] bg-black"></div>
			</div>
			<p className="w-4/5 mt-4 text-center font-thin px-4 md:text-xl mb-8 md:w-3/5">{landingPage.offer_block.Description[0].description_line}</p>

			<div className="h-auto md:h-[60vh]  mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="absolute hidden xl:block left-0 z-20  -top-8 w-[18%] -scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="absolute hidden  xl:block right-0 z-20 -top-8 w-[18%] scale-y-100 " alt="plant background"></img>
				<div className="imagediv h-[40%] w-3/4 md:w-1/3 overflow-hidden md:h-3/4 flex items-center justify-center">
					<img src={featuredImg1} className="h-full md:w-full transform transition-transform duration-500 hover:scale-110  object-cover"></img>
				</div>
				<div className="storydiv h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
					<p className="text-violet-700 w-full text-center sedan-regular">{landingPage?.featured[0]?.sub_title}</p>
					<h1 className="text-2xl text-center md:text-3xl sedan-regular">{landingPage?.featured[0]?.title}</h1>
					<p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">{landingPage?.featured[0]?.description}</p>

					<button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">DISCOVER MORE</button>
				</div>
			</div>
			<div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plantbgfiller.png" className="absolute hidden xl:block left-0 z-20  top-32 w-[10%] scale-y-100" alt="plant background"></img>
				<img src="./plantbgfiller.png" className="absolute hidden  xl:block right-0 z-20 top-32 w-[10%] -scale-x-100 " alt="plant background"></img>
				<div className="imagediv overflow-hidden h-[40%] w-3/4 md:order-2 md:w-1/3 md:h-3/4 flex items-center justify-center">
					<img src={featuredImg2} className="h-full md:w-full transform transition-transform duration-500 hover:scale-110 object-cover"></img>
				</div>
				<div className="storydiv h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
					<p className="text-violet-700 w-full text-center sedan-regular">{landingPage?.featured[1]?.sub_title}</p>
					<h1 className="text-2xl text-center md:text-3xl sedan-regular">{landingPage?.featured[1]?.title}</h1>
					<p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">{landingPage?.featured[1]?.description}</p>

					<button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">DISCOVER MORE</button>
				</div>
			</div>
			<div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plantbgfiller.png" className="absolute hidden xl:block left-0 z-20  top-32 w-[10%] scale-y-100" alt="plant background"></img>
				<img src="./plantbgfiller.png" className="absolute hidden  xl:block right-0 z-20 top-32 w-[10%] -scale-x-100 " alt="plant background"></img>
				<div className="imagediv overflow-hidden h-[40%] w-3/4  md:w-1/3 md:h-3/4 flex items-center justify-center">
					<img src={featuredImg3} className="h-full md:w-full transform transition-transform duration-500 hover:scale-110  object-cover"></img>
				</div>
				<div className="storydiv h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
					<p className="text-violet-700 w-full text-center sedan-regular">{landingPage?.featured[2]?.sub_title}</p>
					<h1 className="text-2xl text-center md:text-3xl sedan-regular">{landingPage?.featured[2]?.title}</h1>
					<p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">{landingPage?.featured[2]?.description}</p>

					<button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">DISCOVER MORE</button>
				</div>
			</div>
			<div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="absolute desktopflowersbig2 hidden xl:block left-0 z-20  -top-8 w-[18%] scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="absolute hidden desktopflowersbig2  xl:block right-0 z-20 -top-8 w-[18%] scale-y-100 " alt="plant background"></img>
				<div className="imagediv overflow-hidden h-[40%] w-3/4 md:order-2  md:w-1/3 md:h-3/4 flex items-center justify-center">
					<img src={featuredImg4} className="h-full transform transition-transform duration-500 hover:scale-110 md:w-full  object-cover"></img>
				</div>
				<div className="storydiv h-auto  w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pt-0 px-8 ">
					<p className="text-violet-700 w-full text-center sedan-regular">{landingPage?.featured[3]?.sub_title}</p>
					<h1 className="text-2xl text-center md:text-3xl sedan-regular">{landingPage?.featured[3]?.title}</h1>
					<p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">{landingPage?.featured[3]?.description}</p>

					<button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">DISCOVER MORE</button>
				</div>
			</div>
			<div className="h-auto md:h-[60vh] mb-8 relative w-full flex flex-col md:flex-row items-center justify-center">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plantbgfiller.png" className="absolute hidden xl:block left-0 z-20  top-32 w-[10%] scale-y-100" alt="plant background"></img>
				<img src="./plantbgfiller.png" className="absolute hidden  xl:block right-0 z-20 top-32 w-[10%] -scale-x-100 " alt="plant background"></img>
				<div className="imagediv overflow-hidden h-[40%] w-3/4   md:w-1/3 md:h-3/4 flex items-center justify-center">
					<img src={featuredImg5} className="h-full transform transition-transform duration-500 hover:scale-110 md:w-full  object-cover"></img>
				</div>
				<div className="storydiv  h-auto w-3/4  md:w-1/3 md:h-full flex flex-col pt-8  items-center justify-center md:pb-4 px-8 ">
					<p className="text-violet-700 w-full text-center sedan-regular">{landingPage?.featured[4]?.sub_title}</p>
					<h1 className="text-2xl text-center md:text-3xl sedan-regular">{landingPage?.featured[4]?.title}</h1>
					<p className="w-full md:w-4/5 text-center md:text-xl font-thin  mt-4">{landingPage?.featured[4]?.description}</p>

					<button className="w-4/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-1/2 text-white mt-8 ">DISCOVER MORE</button>
				</div>
			</div>
		</div>
	);
};

export default Third;
