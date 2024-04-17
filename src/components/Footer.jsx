import React, { useContext } from "react";
import initMap from "./loadMap";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa"; // Import the icons you want to use
import { DetailsContext } from "../context/staticDetails";

function Footer() {
  const details = useContext(DetailsContext);

  initMap();
  return (
		<>
			<footer className="relative h-auto pt-12 flex items-end bg-[url('./sidebarbg.jpg')] bg-repeat">
				<div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
				<div className="h-auto text-white w-full flex flex-col gap-4 items-center justify-start">
					<div className="logodiv w-full h-[80px] flex items-center justify-center">
						<img src="./blueroom-logo-removebg.png" alt="logo" className="h-full" />
					</div>
					<div className=" text-white w-full flex flex-col gap-8 md:flex-row md:mt-12 items-center ">
						<div className="flex flex-col justify-center  items-center w-full md:w-1/2 h-auto">
							<div className="w-4/5 mb-4  sedan-regular flex justify-center  items-center">
								<div className="h-[2px] w-[10%] md:w-[5%] bg-[#d1a24a]"></div>
								<p className="text-[#d1a24a] h-full flex px-2 items-center justify-center font-medium  text-center text-3xl md:text-4xl">FIND US</p>
								<div className="h-[2px] w-[10%] md:w-[5%] bg-[#d1a24a]"></div>
							</div>
							<p className="text-xl sedan-regular font-medium">{details?.addressLine1}</p>
							<p className="text-xl sedan-regular font-medium mt-2">{details?.addressLine2}</p>
							<p className="text-xl sedan-regular font-medium mt-2">{details?.addressLine3}</p>
							<p className="text-xl font-medium mt-4">
								<a className="text-lg" href="tel:0207 693 6290">
									{details?.phone}
								</a>
							</p>
							<p className="text-center w-full text-sm mt-6">{details?.addressLine4}</p>
							<p className="flex w-full justify-center items-center gap-2 mt-4">
								<a href={details?.social_media[0]?.title === "facebook" ? details?.social_media[0]?.id_url : ""} className="mr-4">
									<FaFacebook className="social-icon" size={30} />
								</a>

								<a href={details?.social_media[1]?.title === "instagram" ? details?.social_media[1]?.id_url : ""}>
									<FaInstagram className="social-icon" size={30} />
								</a>
							</p>
						</div>
						<div className="w-[90%] md:w-[45%] aspect-[1.5]" id="map"></div>
					</div>
					<div className="h-[10vh] w-full"></div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
