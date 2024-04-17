import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const LandingPageContext = createContext();

export const LandingPageProvider = (props) => {
	const [landingPage, setLandingPage] = useState({});

	useEffect(() => {
		getLandingPage();
	}, []);

	const getLandingPage = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/landing-page?populate=deep`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});

			setLandingPage(res?.data?.data?.attributes);
		} catch (error) {
			console.log(error.message);
		}
	};


	return <LandingPageContext.Provider value={landingPage}>{Object.keys(landingPage).length > 0 ? props.children : <Loading isLoading={true}/>}</LandingPageContext.Provider>;

};
