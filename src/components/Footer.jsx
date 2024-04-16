import React from "react";
import initMap from "./loadMap";
import { FaFacebook, FaWhatsapp, FaTwitter, FaInstagram } from "react-icons/fa"; // Import the icons you want to use

function Footer() {
  initMap();
  return (
    <>
      <footer className="relative h-auto pt-12 flex items-end bg-[url('./sidebarbg.jpg')] bg-repeat">
        <div className="absolute top-0 left-0 w-full h-[10px] bg-gradient-to-r from-[#8c7050] via-white to-[#8c7050]"></div>
        <div className="h-auto text-white w-full flex flex-col gap-4 items-center justify-start">
          <div className="logodiv w-full h-[50px] flex items-center justify-center">
            <img src="./blueroom-logo.jpeg" alt="logo" className="h-full" />
          </div>
          <div className=" text-white w-full flex flex-col gap-8 md:flex-row md:mt-12 items-center ">
            <div className="flex flex-col justify-center  items-center w-full md:w-1/2 h-auto">
              <div className="w-4/5 mb-4  sedan-regular flex justify-center  items-center">
                <div className="h-[2px] w-[10%] md:w-[5%] bg-[#d1a24a]"></div>
                <p className="text-[#d1a24a] h-full flex px-2 items-center justify-center font-medium  text-center text-3xl md:text-4xl">
                  FIND US
                </p>
                <div className="h-[2px] w-[10%] md:w-[5%] bg-[#d1a24a]"></div>
              </div>
              <p className="text-xl sedan-regular font-medium">
                33 Charlotte Street
              </p>
              <p className="text-xl sedan-regular font-medium mt-2">
                Fitzrovia, London
              </p>
              <p className="text-xl sedan-regular font-medium mt-2">W1T 1RR</p>
              <p className="text-xl font-medium mt-4">
                <a className="text-lg" href="tel:0207 693 6290">
                  020 7693 6290
                </a>
              </p>
              <p className="text-center w-full text-sm mt-6">
                Entrance opposite Rathbone Hotel on Rathbone Street
              </p>
              <p className="flex w-full justify-center items-center gap-2 mt-4">
                <a href="https://www.facebook.com" className="mr-4">
                  <FaFacebook className="social-icon" size={30} />
                </a>

                <a href="https://www.instagram.com">
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
