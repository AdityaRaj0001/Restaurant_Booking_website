import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const PressPageContext = createContext();

export const PressPageProvider = (props) => {
    const [pressPage, setPressPage] = useState({});

		useEffect(() => {
			getPressPage();
		}, []);

		const getPressPage = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/press-page?populate=deep`, {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
					},
				});

				setPressPage(res?.data?.data?.attributes);
			} catch (error) {
				console.log(error.message);
			}
		};

		return <PressPageContext.Provider value={pressPage}>{Object.keys(pressPage).length > 0 ? props.children : <Loading isLoading={true} />}</PressPageContext.Provider>;
}