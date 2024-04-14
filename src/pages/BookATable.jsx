import React, { useEffect, useState } from "react";
import BookTableForm from "../components/BookTableForm";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import axios from "axios";

const BookATable = () => {
	const [heroUrl, setHeroUrl] = useState("");

	useEffect(() => {
		getHeroUrl();
	}, []);

	const getHeroUrl = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/book-table-hero?populate=*`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			// console.log(res);
			setHeroUrl(`${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.book_table_img.data.attributes.url}`);

			console.log("Image Url Set:", heroUrl);
		} catch (error) {
			console.log(error.message);
		}
	};

	const heroImageSrc = heroUrl ? heroUrl : "./book-table-hero.jpg";
	return (
		<main className="min-h-[100vh] relative w-full">
			<Hero maintext="Book A Table" heroimg={heroImageSrc} />
			<Menu />
			<BookTableForm />
			<BookTable />
			<PaperBanner2 />
		</main>
	);
};

export default BookATable;
