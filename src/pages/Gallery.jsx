import React, { useEffect, useState } from 'react'
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable"
import axios from 'axios';
const Gallery = () => {
  const [heroUrl, setHeroUrl] = useState("");

	useEffect(() => {
		getHeroUrl();
	}, []);

	const getHeroUrl = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/galley-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.gallery_hero_img.data.attributes.url}`);
		} catch (error) {
			console.log(error.message);
		}
	};

	const heroImageSrc = heroUrl ? heroUrl : "./gallery-hero.jpg";
  return (
<<<<<<< HEAD
		<main className="min-h-[100vh] relative w-full">
			<Hero maintext="Gallery" heroimg={heroImageSrc} />
			<Menu />
			<BookTable />
		</main>
	);
=======
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Hero maintext="Gallery" heroimg="./default-gallery-10.jpg" />
      <Menu />
      <BookTable />
    </main>
  )
>>>>>>> cb6204f6430fe58a881bd801b42f4d825808506a
}

export default Gallery