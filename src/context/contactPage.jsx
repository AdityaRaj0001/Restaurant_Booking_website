import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";

export const ContactPageContext = createContext();

export const ContactPageProvider = (props) => {
    const [contactPage, setContactPage] = useState({});

		useEffect(() => {
			getContactPage();
		}, []);

		const getContactPage = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/contact-page?populate=deep`, {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
					},
				});

				setContactPage(res?.data?.data?.attributes);
			} catch (error) {
				console.log(error.message);
			}
		};

		return <ContactPageContext.Provider value={contactPage}>{Object.keys(contactPage).length > 0 ? props.children : <Loading isLoading={true} />}</ContactPageContext.Provider>;
}