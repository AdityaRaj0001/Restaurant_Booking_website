import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import Footer from "../components/Footer";
import axios from "axios";

const Menus = () => {
<<<<<<< HEAD
	const [heroUrl, setHeroUrl] = useState("");

	useEffect(() => {
		getHeroUrl();
	}, []);

	const getHeroUrl = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/menu-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.menu_hero_img.data.attributes.url}`);
		} catch (error) {
			console.log(error.message);
		}
	};
	  
	const heroImageSrc = heroUrl ? heroUrl : "./menu-hero.jpg";

	return (
		<main className="min-h-[100vh] relative w-full">
			<Hero maintext="Food & Drinks" heroimg={heroImageSrc} />
			<Menu />
			<Slideshow />
			<BookTable />
		</main>
	);
=======
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="Food & Drinks" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <Slideshow />
      <BookTable />
    </main>
  );
>>>>>>> cb6204f6430fe58a881bd801b42f4d825808506a
};

export default Menus;
