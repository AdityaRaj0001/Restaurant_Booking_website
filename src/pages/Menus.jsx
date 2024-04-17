import React, { useContext } from "react";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import { MenuPageContext} from "../context/menuPage";

const Menus = () => {

  const menuPage = useContext(MenuPageContext);

  console.log(menuPage);

  const heroUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${menuPage?.hero_img?.data?.attributes?.url}`
  return (
		<main className="min-h-[100vh] overflow-hidden relative w-full">
			<Hero maintext={menuPage?.hero_title} heroimg={heroUrl} />
			<Menu />
			<Slideshow pageData={menuPage}/>
			<BookTable />
		</main>
	);
};

export default Menus;
