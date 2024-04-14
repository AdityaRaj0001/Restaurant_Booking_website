import React, { useEffect, useState } from "react";
import initMap from "./loadMap";
import axios from "axios";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa"; // Import the icons you want to use

function Footer() {
	const [street, setStreet] = useState("");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	useEffect(() => {
		getAddress();
	}, []);
	const getAddress = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/restaurant-address`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});

			console.log(res.data.data.attributes);
			setStreet(res.data.data.attributes.Street_Address);
			setCity(res.data.data.attributes.City_or_Locality);
			setCountry(res.data.data.attributes.Country);
		} catch (error) {
			console.log(error.message);
		}
	};
	initMap();
	return (
		<>
			<footer className="relative h-[100vh] flex items-center justify-center flex-col  text-white w-full pt-12 pb-2 px-4 md:px-0 bg-[url('./sidebarbg.jpg')] bg-repeat" >
				<div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>

				<div className="px-4 flex justify-center gap-2 items-center my-5">
					<div className="h-[2px] w-[5%] bg-black"></div>
					<p className="h-full flex px-2 items-center justify-center font-medium text-center text-2xl ">BlueRoom Venue</p>
					<div className="h-[2px] w-[5%] bg-black"></div>
				</div>

				<div className="container mx-auto flex flex-wrap justify-between">
					<div className="w-full md:w-1/4 px-4">
						<div className="w-4/5 px-4 flex justify-center gap-2 items-center">
							<div className="h-[2px] w-[10%] bg-black"></div>
							<p className="h-full flex px-2 items-center justify-center font-medium text-center text-2xl ">FOLLOW US</p>
							<div className="h-[2px] w-[10%] bg-black"></div>
						</div>
						<h3 className="text-xl font-bold mb-4">Office</h3>
						<p>220 Headstone Lane</p>
						<p>Harrow HA2 6LY</p>
						<p>United Kingdom</p>
						<p className="border-b border-orange-500 inline-block mt-4">blueroomvenue123@gmail.com</p>
						<h4 className="mt-4">+44 20 8421 1442</h4>
					</div>

					<div className="w-full md:w-1/4 px-4 flex justify-center items-center">
						<a href="https://www.facebook.com" className="mr-4">
							<FaFacebook className="social-icon" size={30} />
						</a>
						<a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" className="mr-4">
							<FaWhatsapp className="social-icon" size={30} />
						</a>
						<a href="https://twitter.com" className="mr-4">
							<FaTwitter className="social-icon" size={30} />
						</a>
						<a href="https://www.instagram.com">
							<FaInstagram className="social-icon" size={30} />
						</a>
					</div>

					<div className="md:w-[42%]" id="map"></div>
				</div>

				<hr className="my-4 w-11/12 mx-auto border-gray-400" />
				<p className="text-center my-2">Made with ❤️ by Rahul & Aditya &copy; 2024 - All Rights Reserved</p>
			</footer>
		</>
	);
}

export default Footer;
