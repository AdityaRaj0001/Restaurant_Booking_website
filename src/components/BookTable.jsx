import React, { useContext } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { DetailsContext } from "../context/staticDetails";

gsap.registerPlugin(ScrollTrigger);

const BookTable = () => {
	const containerRef = useRef(null);
	const details = useContext(DetailsContext);

	
	useGSAP(
		() => {
			gsap.from(".booktablestaggerelement", {
				opacity: 0,
				duration: 1.5,
				scrollTrigger: {
					trigger: containerRef.current,
					start: "-50% top",
					end: "-50% top",
				},
			});
		},
		{ scope: containerRef }
	);

	const bgUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${details?.booktable_background?.data?.attributes?.url}`;

	return (
		<div ref={containerRef} className="h-[80vh] mt-8 w-full bg-white  flex items-center justify-center">
			<div className="h-[100%] relative w-full flex items-center justify-center">
				<img src={bgUrl} className="h-full md:w-full absolute  object-cover" alt="BookTable background"></img>
				<div className="h-[80%] w-[90%] md:w-1/3 z-10 flex flex-col items-center justify-center bg-white">
					<p className="booktablestaggerelement text-sm md:text-lg sedan-regular">{details?.sub_title}</p>
					<div className="booktablestaggerelement w-4/5 sedan-regular px-4 py-2  flex justify-center  items-center">
						<div className="h-[2px] w-[10%] bg-black"></div>
						<p className="h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-3xl ">{details?.title}</p>
						<div className="h-[2px] w-[10%] bg-black"></div>
					</div>
					{details.open_timing && (
						<>
							<p className="booktablestaggerelement text-[14px] mt-4 mb-4 font-medium">OPENING HOURS</p>
							{details.open_timing.map((timing, index) => (
								<React.Fragment key={index}>
									<p className="booktablestaggerelement text-2xl  font-bold sedan-regular">{timing.days}</p>
									<p className="booktablestaggerelement text-lg font-bold">{timing.time}</p>
									<p className="booktablestaggerelement text-sm ">{timing.closing_time}</p>
								</React.Fragment>
							))}
						</>
					)}
					<p className="booktablestaggerelement text-[14px] md:text-lg text-center w-4/5 trackingwidest">{details?.booktable_notice}</p>
					<button className="uppercase booktablestaggerelement  w-3/5 bg-violet-900 px-4 p-2 flex items-center justify-center md:w-[45%] text-white mt-4 ">Book Now</button>
				</div>
			</div>
		</div>
	);
};

export default BookTable;
