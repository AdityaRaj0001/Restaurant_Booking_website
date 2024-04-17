import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { LandingPageContext } from "../context/landingPage";

export default function Slideshow() {
	const landingPage = React.useContext(LandingPageContext);
	const [imageArray, setImageArray] = React.useState([]);

	React.useEffect(() => {
		if (landingPage && landingPage.gallery_images) {
			const urls = landingPage.gallery_images.map((image) => {
				// Assuming the structure of each image object is { images: { data: [{ attributes: { url } }] } }
				return `${import.meta.env.VITE_STRAPI_BASE_URL}${image.images.data[0].attributes.url}`;
			});
			setImageArray(urls);
		}
	}, [landingPage]);


	return (
		<div className="w-full h-auto flex justify-center">
			<Carousel className="w-[90%] md:w-[50%]">
				<CarouselContent>
					{imageArray.map((src, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<img src={src} className="w-full object-cover md:h-full md:w-auto" alt={`Slide ${index + 1}`} />
								</Card>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious size={8} />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
