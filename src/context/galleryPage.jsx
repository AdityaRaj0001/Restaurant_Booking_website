import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from "axios";

export const GalleryPageContext = createContext();

export const GalleryPageProvider = (props) => {
    const [galleryPage, setGalleryPage] = useState({});

		useEffect(() => {
			getGalleryPage();
		}, []);

		const getGalleryPage = async () => {
			try {
				const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/gallery-page?populate=deep`, {
					headers: {
						Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
					},
				});

				setGalleryPage(res?.data?.data?.attributes);
			} catch (error) {
				console.log(error.message);
			}
		};

		return <GalleryPageContext.Provider value={galleryPage}>{Object.keys(galleryPage).length > 0 ? props.children : <Loading isLoading={true} />}</GalleryPageContext.Provider>;
}