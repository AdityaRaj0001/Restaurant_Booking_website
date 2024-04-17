
import React, {  useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { DetailsContext } from "../context/staticDetails";
import { LandingPageContext } from "../context/landingPage";

gsap.registerPlugin(ScrollTrigger);

const LandingHero = () => {
	const details = useContext(DetailsContext);
	const landingPage = useContext(LandingPageContext);
	const containerRef = useRef(null);


	useGSAP(
		() => {
			const tl = gsap.timeline();
			tl.from([".landingheroimg", ".herologo", ".landingtitle", ".landingheropara", ".landingherobtn", ".landingherodetails"], {
				opacity: 0,
				duration: 0.4,
				stagger: 0.4,
			});
			tl.from(".titleline", {
				width: "0px",
				duration: 0.7,
			});
			tl.from(".yoyodiv", {
				opacity: 0,
				duration: 0.7,
			});
			tl.from(".yoyodiv", {
				y: "50px",
				yoyo: true,
				duration: 1,
				repeat: -1,
			});
		},
		{ scope: containerRef }
	);


    const heroImgUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${landingPage?.hero_img?.data?.attributes?.url}`;
    

	return (
		<div ref={containerRef} className="h-[70vh] md:h-[100vh] relative w-full  flex-col text-white  flex items-center justify-center">
			<img src={heroImgUrl} className="landingheroimg h-full md:w-full md:h-full  -z-20 absolute object-cover object-top" alt="hero-img" />
			<div className="overlay -z-10 w-full h-full bg-black opacity-50 top-0 absolute"></div>
			<div className="h-auto mb-4 gap-4  w-full  flex flex-col items-center justify-center text">
				<p className="w-full   h-1/4 flex items-center justify-center text-lg font-bold">
					<Link className="herologo w-3/4 h-4.9/5 flex items-center justify-center" to="/">
						<img src="./blueroom-logo-removebg.png" alt="logo" style={{ maxWidth: "80px", maxHeight: "100%" }} />
					</Link>
				</p>
				<div className="h-1/5 w-full flex justify-center gap-4 items-center">
					<div className="titleline h-[2px] w-[5%] bg-white"></div>
					<p className="landingtitle sedan-regular w-auto h-full font-thin  text-center text-xl md:text-5xl">{landingPage?.hero_title}</p>
					<div className="titleline h-[2px] w-[5%] bg-white"></div>
				</div>
				<p className="landingheropara w-full h-1/5 flex items-center justify-center">
					<button className="h-auto py-4  pb-6 px-2 w-[140px]  md:w-[200px] md:font-medium md:text-2xl uppercase  text-[#1c0e34] bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] hover:via-80% tracking-wider relative">
						Book Table
						<div className="bg-purple-900 h-[2px] absolute w-full bottom-0 left-0"></div>
					</button>
				</p>
				<span className="landingherobtn sedan-regular w-1/2 md:mt-12 md:text-lg margin-b-12  opacit-30 text-center text-sm">
					{details.addressLine1}, {details.addressLine2}, {details.addressLine3}
				</span>
				<div className="landingherodetails sedan-regular uppercase w-full h-1/5  flex justify-between    md:text-2xl md:font-medium items-center px-4 md:px-40 md:absolute md:bottom-6">
					<div className="w-auto h-full text-center flex flex-col  ">
						<p className="text-left ">{landingPage?.hero_left_text[0]?.description_line}</p>
						<p className="text-left">{landingPage?.hero_left_text[1]?.description_line}</p>
						<p className="text-left text-[10px] md:text-xl">{landingPage?.hero_left_text[2]?.description_line}</p>
					</div>
					<div className="w-auto h-full text-center flex flex-col  ">
						<p className="text-left  md:text-4xl">{landingPage?.hero_right_text[0]?.description_line}</p>
						<p className="text-right text-[10px]  md:text-xl">{landingPage?.hero_right_text[1]?.description_line}</p>
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
