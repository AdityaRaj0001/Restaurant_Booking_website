import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const MenuPageContext = createContext();

export const MenuPageProvider = (props) => {
    const [menuPage, setMenuPage] = useState({});

		useEffect(() => {
			getMenuPage();
		}, []);

		const getMenuPage = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/menu-page?populate=deep`, {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
					},
				});

				setMenuPage(res?.data?.data?.attributes);
			} catch (error) {
				console.log(error.message);
			}
		};

		return <MenuPageContext.Provider value={menuPage}>{Object.keys(menuPage).length > 0 ? props.children : <Loading isLoading={true} />}</MenuPageContext.Provider>;
}