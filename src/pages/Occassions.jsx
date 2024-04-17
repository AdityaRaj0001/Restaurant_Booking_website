import React, { useContext, useEffect, useState } from "react";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import OccasionSecond from "../components/OccasionSecond";
import EnquiryForm from '../components/EnquiryForm';
import axios from "axios";
import { OccasionPageContext } from "../context/occasionPage";


const Occassions = () => {
	const occasionPage = useContext(OccasionPageContext);

	console.log(occasionPage);

	const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${occasionPage?.hero_img?.data?.attributes?.url}`;
  return (
		<main className="min-h-[100vh] overflow-hidden relative w-full">
			<Navbar />
			<Hero maintext={occasionPage?.hero_title} heroimg={heroUrl} />
			<OccasionSecond />
			<EnquiryForm />
			<Slideshow pageData={occasionPage}/>
			<BookTable />
			<PaperBanner2 />
		</main>
	);
};

export default Occassions;
