import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";


export const OccasionPageContext = createContext();

export const OccasionPageProvider = (props) =>{
    const [occasionPage, setOccasionPage] = useState({});

    useEffect(() => {
			getOccasionPage();
		}, []);

		const getOccasionPage = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/occasion-page?populate=deep`, {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
					},
				});

				setOccasionPage(res?.data?.data?.attributes);
			} catch (error) {
				console.log(error.message);
			}
		};

		return <OccasionPageContext.Provider value={occasionPage}>{Object.keys(occasionPage).length > 0 ? props.children : <Loading isLoading={true} />}</OccasionPageContext.Provider>;
}
