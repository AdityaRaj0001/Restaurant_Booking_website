import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
const Press = () => {
	const [heroUrl, setHeroUrl] = useState("");

	useEffect(() => {
		getHeroUrl();
	}, []);

	const getHeroUrl = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/press-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.press_hero_img.data.attributes.url}`);
		} catch (error) {
			console.log(error.message);
		}
	};

	const heroImageSrc = heroUrl ? heroUrl : "./press-hero.jpg";
	return (
		<main className="min-h-[100vh] relative w-full">
			<Hero maintext="Press" heroimg={heroImageSrc} />
			<Menu />
			<BookTable />
		</main>
	);
};

export default Press;
