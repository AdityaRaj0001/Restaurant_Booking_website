import React, { useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OccasionSecond from "../components/OccasionSecond";
import EnquiryForm from '../components/EnquiryForm';
import axios from "axios";


const Occassions = () => {
  const [heroUrl, setHeroUrl] = useState("");

	useEffect(() => {
		getHeroUrl();
	}, []);

	const getHeroUrl = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/occasion-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.occasion_hero_img.data.attributes.url}`);
		} catch (error) {
			console.log(error.message);
		}
	};

	const heroImageSrc = heroUrl ? heroUrl : "./occasions-hero.jpg";
  return (
    <main className="min-h-[100vh] overflow-hidden relative w-full">
      <Navbar />
      <Hero maintext="Special Occasions" heroimg="./default-gallery-10.jpg" />
      <OccasionSecond/>
      <EnquiryForm/>
      <Slideshow />
      <BookTable />
      <PaperBanner2 />
    </main>
  );
};

export default Occassions;
