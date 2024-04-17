import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const DetailsContext = createContext();

export const DetailsProvider = (props) => {
	const [details, setDetails] = useState({});

	useEffect(() => {
		getDetails();
	}, []);

	const getDetails = async () => {
		try {
			const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/static-content?populate=deep`, {
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
				},
			});
			setDetails(res.data.data.attributes);
		} catch (error) {
			console.log(error.message);
		}
	};
	return <DetailsContext.Provider value={details}>{Object.keys(details).length > 0 ? props.children : <Loading isLoading={true} />}</DetailsContext.Provider>;
};