import React, {  useContext } from "react";
import BookTableForm from "../components/BookTableForm";
import Hero from "../components/Hero";
import BookTable from "../components/BookTable";
import PaperBanner2 from "../components/PaperBanner2";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BookTableContext } from "../context/bookATable";
gsap.registerPlugin(ScrollTrigger);

const BookATable = () => {

  const bookTablePage = useContext(BookTableContext);

  console.log(bookTablePage);
  useGSAP(() => {
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
      opacity: 0,
      duration: 1.5,
      stagger: 0.5,
      scrollTrigger: {
        trigger: ".menutypesparent",
        start: "-80% top",
        end: "-80% top",
      },
    });
  }, {});

  const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${bookTablePage?.hero_img?.data?.attributes?.url}`;

  return (
		<main className="min-h-[100vh] relative w-full overflow-hidden">
			<Hero maintext={bookTablePage?.hero_title} subtext={bookTablePage?.hero_text1} subtext2={bookTablePage?.hero_text2} heroimg={heroUrl} />
			<div className="menuparent pb-20  md:pb-20 h-auto relative w-full flex flex-col items-center justify-start pt-12 gap-0">
				<img src="./plantbgmobile.png" className="absolute xl:hidden left-0 z-20  -top-8 w-[17%] " alt="plant background"></img>
				<img src="./plantbgmobile.png" className="absolute xl:hidden right-0 z-20  top-16 w-[14%] -scale-x-100 " alt="plant background"></img>
				<img src="./plant-bg big.png" className="flowersbig absolute hidden xl:block left-0 z-20  -top-44 w-[18%] scale-y-100" alt="plant background"></img>
				<img src="./plant-bg big right.png" className="flowersbig absolute hidden  xl:block right-0 z-20 -top-44 w-[18%] -scale-y-100 " alt="plant background"></img>
				<p className="w-auto text-center sedan-regular text-[12px] md:text-[16px]">{bookTablePage?.welcome_block?.sub_title} </p>
				<div className="w-4/5 mb-16 px-4 sedan-regular flex justify-center  items-center">
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
					<p className="text-[#46296e] h-full flex px-2 items-center justify-center font-medium  text-center text-2xl md:text-4xl">{bookTablePage?.welcome_block?.title}</p>
					<div className="h-[2px] w-[10%] md:w-[5%] bg-black"></div>
				</div>

				<p className="booktablestaggerelement text-xl  font-bold sedan-regular">{bookTablePage?.open_timings[0]?.days}</p>
				<p className="booktablestaggerelement text-lg font-thin">{bookTablePage?.open_timings[0]?.time}</p>
				<p className="booktablestaggerelement text-sm ">{bookTablePage?.open_timings[0]?.closing_time}</p>
				<p className="booktablestaggerelement text-xl font-bold mt-4 sedan-regular">{bookTablePage?.open_timings[1]?.days}</p>
				<p className="booktablestaggerelement text-lg ">{bookTablePage?.open_timings[1]?.time}</p>
				<p className="booktablestaggerelement text-sm mb-4">{bookTablePage?.open_timings[1]?.closing_time}</p>
				<p className="w-3/5  mt-4 mb-0 text-center font-thin px-4 md:text-xl ">{bookTablePage?.welcome_block?.description[0]?.description_line}</p>
				<p className="w-3/5  mt-4 mb-0 text-center font-thin px-4 md:text-xl ">{bookTablePage?.welcome_block?.description[1]?.description_line}</p>
				<p className="w-3/5  mt-4 mb-0 text-center font-thin px-4 md:text-xl ">{bookTablePage?.welcome_block?.description[2]?.description_line}</p>
			</div>
			<BookTableForm />
			<BookTable />
			<PaperBanner2 />
		</main>
	);
};

export default BookATable;
