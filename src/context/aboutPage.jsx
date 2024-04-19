import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from "axios";

export const AboutPageContext = createContext();

export const AboutPageProvider = (props) => {
	const [aboutPage, setAboutPage] = useState({});

	useEffect(() => {
		getAboutPage();
	}, []);

	const getAboutPage = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/about-page?populate=deep`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});

			setAboutPage(res?.data?.data?.attributes);
		} catch (error) {
			console.log(error.message);
		}
	};

	return <AboutPageContext.Provider value={aboutPage}>{Object.keys(aboutPage).length > 0 ? props.children : <Loading isLoading={true} />}</AboutPageContext.Provider>;
};
