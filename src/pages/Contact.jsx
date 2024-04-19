import React, { useContext } from "react";
import EnquiryForm from "../components/EnquiryForm";
import Hero from "../components/Hero";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ContactPageContext } from "../context/contactPage";
import { DetailsContext } from "../context/staticDetails";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactPage = useContext(ContactPageContext);

  const details = useContext(DetailsContext);

  console.log(contactPage);

  useGSAP(
    () => {
      let flowersbigarray = gsap.utils.toArray(".flowersbig");

      for (let i = 0; i < flowersbigarray.length; i++) {
        gsap.from(flowersbigarray[i], {
          x: i === 1 ? "150px" : "-150px",
          duration: 4,
          scrollTrigger: {
            trigger: ".menuparent",
            start: "-100% top",
            end: "-100% top",
          },
        });
      }
      gsap.from(".menu", {
        opacity:0,
        duration: 1.5,
        stagger:0.5,
        scrollTrigger: {
          trigger: ".menutypesparent",
          start: "-80% top",
          end: "-80% top",
        },
      });
    },
    { }
  );

  const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${contactPage?.hero_img?.data?.attributes?.url}`;
  return (
		<main className="min-h-[100vh] relative w-full overflow-hidden">
			<Hero maintext={contactPage?.hero_title} heroimg={heroUrl} />
			<div className="menuparent pb-20  md:pb-12 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 " alt="plant background"></img>
				<div className="w-4/5 px-4 sedan-regular flex justify-center  items-center">
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
					<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{contactPage?.welcome_title}</p>
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				</div>

				<p className="w-3/5  mt-6 text-center font-thin px-4 md:text-xl ">{details?.addressLine1}</p>
				<p className="w-3/5   text-center font-thin px-4 md:text-xl ">{details?.addressLine2}</p>
				<p className="w-3/5  text-center font-thin px-4 md:text-xl ">{details?.addressLine3}</p>
				<p className="w-3/5  mt-4 mb-8 text-center font-thin px-4 md:text-lsm ">({details?.addressLine4}) </p>
				<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
					<a className="underline text-lg " href="mailto:info@1947london.com">
						{details?.email}
					</a>
				</p>
				<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">
					<a className="text-lg" href="tel:0207 693 6290">
						{details?.phone}
					</a>
				</p>
				<div className="w-4/5 mt-24 px-4 sedan-regular flex justify-center  items-center">
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
					<p className="text-[#46296e] uppercase h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-3xl">{contactPage?.enquire_content?.title}</p>
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				</div>
				<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{contactPage?.enquire_content?.description[0].description_line}</p>
				<p className="w-3/5  mt-4  text-center font-thin px-4 md:text-xl ">{contactPage?.enquire_content?.description[1].description_line}</p>
			</div>
			<EnquiryForm />
			<BookTable />
			<PaperBanner2/>
		</main>
	);
};

export default Contact;
