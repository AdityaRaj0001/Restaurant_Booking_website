import React, { useContext } from "react";
import Hero from "../components/Hero";
import BookTable from "../components/BookTable";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GalleryPageContext } from "../context/galleryPage";
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
	const galleryPage = useContext(GalleryPageContext);


	const desktopimagedataarray1 = [`${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[0]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[1]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[2]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[3]?.images?.data[0]?.attributes?.url}`];
	const desktopimagedataarray2 = [`${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[4]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[5]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[6]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[7]?.images?.data[0]?.attributes?.url}`];

	const desktopimagedataarray3 = [`${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[8]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[9]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[10]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[11]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[12]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images[13]?.images?.data[0]?.attributes?.url}`];

	const mobileimagedataarray = [`${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images_mobile[0]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images_mobile[1]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images_mobile[2]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images_mobile[3]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images_mobile[4]?.images?.data[0]?.attributes?.url}`, `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.gallery_images_mobile[5]?.images?.data[0]?.attributes?.url}`];

	useGSAP(() => {
		let flowersbigarray = gsap.utils.toArray(".flowersbig");

		for (let i = 0; i < flowersbigarray.length; i++) {
			gsap.from(flowersbigarray[i], {
				x: i === 1 ? "150px" : "-150px",
				duration: 4,
				scrollTrigger: {
					trigger: ".occasionparent",
					start: "-100% top",
					end: "-100% top",
				},
			});
		}
	}, {});

	const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${galleryPage?.hero_img?.data?.attributes?.url}`;

	return (
		<main className="min-h-[100vh] overflow-hidden relative w-full">
			<Hero maintext={galleryPage?.hero_title} heroimg={heroUrl} />
			<div className="occasionparent   h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 " alt="plant background"></img>
				<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{galleryPage?.welcome_block?.sub_title}</p>
				<div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
					<p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{galleryPage?.welcome_block?.title}</p>
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				</div>

				<p className="w-3/5 mb-12  mt-6 text-center font-thin px-4 md:text-xl ">
					{galleryPage?.welcome_block?.description[0]?.description_line}
					<span className="text-[#7146ad]">{galleryPage?.welcome_block?.description[1]?.description_line}</span>{" "}
				</p>
				<div className="w-full h-auto md:hidden">
					{mobileimagedataarray.map((item, i) => (
						<img key={i} src={item} className="w-full object-cover"></img>
					))}
				</div>
				<div className="h-auto w-3/4 hidden md:flex gap-4 justify-center">
					<div className="h-full w-1/4 flex flex-col gap-4">
						{desktopimagedataarray1.map((item, i) => (
							<img key={i} src={item} className="w-full object-cover"></img>
						))}
					</div>
					<div className="h-full w-1/4 flex flex-col gap-4">
						{desktopimagedataarray2.map((item, i) => (
							<img key={i} src={item} className="w-full object-cover"></img>
						))}
					</div>
					<div className="h-full w-1/4 flex flex-col gap-4">
						{desktopimagedataarray3.map((item, i) => (
							<img key={i} src={item} className="w-full object-cover"></img>
						))}
					</div>
				</div>
			</div>
			<BookTable />
		</main>
	);
};

export default Gallery;
