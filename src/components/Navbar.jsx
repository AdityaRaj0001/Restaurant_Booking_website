import React, { useState, useEffect, useContext } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { DetailsContext } from "../context/staticDetails.jsx";

const Navbar = () => {
	const [scrollY, setScrollY] = useState(0);

	const details = useContext(DetailsContext);

	useEffect(() => {
		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navbarHeight = 75; // Height of the navbar

	// Dynamic CSS class for the parent div of the navbar
	const parentDivClassName = scrollY >= navbarHeight ? "bg-[url('./sidebarbg.jpg')]" : "";

	return (
		<div className={`h-[75px] z-50 fixed top-0 w-full bg-transparent md:flex justify-center ${parentDivClassName}`}>
			<div className=" flex justify-between text-white items-center px-4   h-full w-full ">
				<Link className="w-1/4 h-4/5 flex items-center justify-center" to="/">
					<img src="./blueroom-logo-removebg.png" alt="logo" style={{ maxWidth: "80px", maxHeight: "100%" }} />
				</Link>
				<span className="w-1/4">{details.phone}</span>
				<button className="w-1/4 text-black py-2 font-normal bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] md:hidden">Book Table</button>
				<Sidebar />
				<ul className="hidden tracking-widest md:flex md:mr-32 text-sm  gap-4 font-medium items-center">
					<li>
						<Link to="/menus">MENUS</Link>
					</li>
					<li>
						<Link to="/occassions">OCCASIONS</Link>
					</li>
					<li>
						<Link to="/gallery">GALLERY</Link>
					</li>
					<li>
						<Link to="/press">PRESS</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>

					<button className="text-left  flex items-center justify-center py-3 font-medium tracking-widest text-sm  text-black bg-gradient-to-r from-[#7b4f1c] hover:via-70% via-white to-[#7b4f1c] w-auto px-4 ">
						<Link to="/bookatable">BOOK TABLE</Link>
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
