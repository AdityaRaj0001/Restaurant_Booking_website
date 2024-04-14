import React, { useEffect, useState } from "react";
import EnquiryForm from "../components/EnquiryForm";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import axios from "axios";
const About = () => {
<<<<<<< HEAD
	const [heroUrl, setHeroUrl] = useState("");
=======
  return (
    <main className="min-h-[100vh] overflow-hidden  relative w-full">
      <Hero maintext="Contact" heroimg="./default-gallery-10.jpg" />
      <Menu />
	  <EnquiryForm/>
      <BookTable />
      <PaperBanner2/>
    </main>
  )
}
>>>>>>> cb6204f6430fe58a881bd801b42f4d825808506a

	useEffect(() => {
		getHeroUrl();
	}, []);

	const getHeroUrl = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/contact-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.contact_hero_img.data.attributes.url}`);
		} catch (error) {
			console.log(error.message);
		}
	};

	const heroImageSrc = heroUrl ? heroUrl : "./contact-hero.jpg";
	return (
		<main className="min-h-[100vh] relative w-full">
			<Hero maintext="Contact" heroimg={heroImageSrc} />
			<Menu />
			<EnquiryForm />
			<BookTable />
			{/* <PaperBanner2/> */}
		</main>
	);
};

export default About;
