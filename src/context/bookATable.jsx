import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from "axios";

export const BookTableContext = createContext();

export const BookTableProvider = (props) =>{
    const [bookTablePage, setBookTablePage] = useState({});

		useEffect(() => {
			getBookTablePage();
		}, []);

		const getBookTablePage = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/book-table-page?populate=deep`, {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
					},
				});

				setBookTablePage(res?.data?.data?.attributes);
			} catch (error) {
				console.log(error.message);
			}
		};

		return <BookTableContext.Provider value={bookTablePage}>{Object.keys(bookTablePage).length > 0 ? props.children : <Loading isLoading={true} />}</BookTableContext.Provider>;
}