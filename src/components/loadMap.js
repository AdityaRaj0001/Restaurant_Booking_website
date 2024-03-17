const initMap = async function initMap() {
	const companyLocation = { lat: 51.59989, lng: -0.35631 };

	const { Map } = await google.maps.importLibrary("maps");

	const map = new Map(document.getElementById("map"), {
		zoom: 8,
		center: companyLocation,
		mapId: import.meta.env.VITE_GOOGLE_MAP_ID,
	});

	let marker = new google.maps.Marker({
		map: map,
		position: companyLocation,
		title: "Blue Room Sports Venue",
		icon: {
			url: "https://png.pngtree.com/png-clipart/20221229/original/pngtree-restaurant-location-pin-icon-in-gold-yellow-color-png-image_8824535.png",
			scaledSize: new google.maps.Size(120, 120),
		},
		animation: google.maps.Animation.BOUNCE,
	});
    marker.addListener("click", function () {
			const destination = `${companyLocation.lat},${companyLocation.lng}`;
			const url = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
			window.open(url, "_blank");
		});
};

export default initMap;
