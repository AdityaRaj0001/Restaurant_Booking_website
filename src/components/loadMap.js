import axios from "axios";

const initMap = async function initMap() {
	const companyLocation = { lat: 51.59989, lng: -0.35631 };

	const { Map } = await google.maps.importLibrary("maps");

	let imageUrl = ""; // Default value for imageUrl

	try {
		const res = await axios.get(`${import.meta.env.VITE_STRAPI_BASE_URL}/api/map-location-pin?populate=*`, {
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`,
			},
		});

		imageUrl = `${import.meta.env.VITE_STRAPI_BASE_URL}${res.data.data.attributes.image.data[0].attributes.url}`;

		console.log(imageUrl);
	} catch (error) {
		console.error("Error fetching image URL:", error);
		// Handle the error, if needed
	}

	const map = new Map(document.getElementById("map"), {
		zoom: 8,
		center: companyLocation,
		mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
	});

	let icon = {
		scaledSize: new google.maps.Size(120, 120),
	};

	if (!imageUrl) {
		icon.url = "./location.png";
	} else {
		icon.url = imageUrl;
	}

	let marker = new google.maps.Marker({
		map: map,
		position: companyLocation,
		title: "Blue Room Sports Venue",
		icon: icon,
		animation: google.maps.Animation.BOUNCE,
	});

	marker.addListener("click", function () {
		const destination = `${companyLocation.lat},${companyLocation.lng}`;
		const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
		window.open(url, "_blank");
	});
};

export default initMap;
