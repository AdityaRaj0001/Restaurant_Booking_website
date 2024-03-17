import React, { useEffect } from "react";
import initMap from "./loadMap";

function Footer() {
	initMap();
    console.log(import.meta.env.VITE_GOOGLE_MAP_API);
	return (
		<footer className="relative w-full bg-gradient-to-r from-slate-900 to-slate-700 text-white py-12 px-4 md:px-0">
			{/* Add linear gradient border at the top */}
			<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>

			<div className="container mx-auto flex flex-wrap justify-between">
				<div className="w-full md:w-1/4 px-4">
					<h3 className="text-xl font-bold mb-4">Office</h3>
					<p>220 Headstone Ln</p>
					<p>Harrow HA2 6LY</p>
					<p>United Kingdom</p>
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

			<hr className="my-8 w-11/12 mx-auto border-gray-400" />
			<p className="text-center">Made with ❤️ by Rahul & Aditya &copy; 2024 - All Rights Reserved</p>
		</footer>
	);
}

export default Footer;
