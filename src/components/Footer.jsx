import React, { useEffect, useState } from "react";
import initMap from "./loadMap";
import axios from "axios";

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
			<footer className="relative w-full py-12 px-4 md:px-0" style={{ backgroundImage: `url('./paper-bg.jpg')`, backgroundSize: "cover", backgroundPosition: "center" }}>
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
						<p>Lorem ipsum dolor</p>
						<p>sit amet consectetur</p>
						<p>Vitae blanditiis</p>
						<p className="border-b border-orange-500 inline-block mt-4">alexastockphotos@gamil.com</p>
						<h4 className="mt-4">+44 20 8421 1442</h4>
					</div>

					<div id="map"></div>

					{/* Add Social Media handles */}

					{/* <div className="w-full md:w-1/4 px-4">
            <div className="flex">
                <ion-icon name="logo-facebook" class="social-icon mr-2"></ion-icon>
                <ion-icon name="logo-whatsapp" class="social-icon mr-2"></ion-icon>
                <ion-icon name="logo-twitter" class="social-icon mr-2"></ion-icon>
                <ion-icon name="logo-instagram" class="social-icon"></ion-icon>
            </div>
        </div> */}
				</div>

				<hr className="my-4 w-11/12 mx-auto border-gray-400" />
				<p className="text-center my-2">Made with ❤️ by Rahul & Aditya &copy; 2024 - All Rights Reserved</p>
			</footer>
		</>
	);
}

export default Footer;
