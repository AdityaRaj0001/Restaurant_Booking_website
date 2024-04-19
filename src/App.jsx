import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import BookATable from "./pages/BookATable";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DetailsProvider } from "./context/staticDetails.jsx";
import Menus2 from "./components/Menus2.jsx";
import Home2 from "./components/wrapper/Home2.jsx";
import Occassions2 from "./components/wrapper/Occassions2.jsx";
import Gallery2 from "./components/wrapper/Gallery2.jsx";
import Press2 from "./components/wrapper/Press2.jsx";
import About2 from "./components/wrapper/About2.jsx";
import Contact2 from "./components/wrapper/Contact2.jsx";
import BookATable2 from "./components/wrapper/BookATable2.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

function App() {
	return (
		<>
			<DetailsProvider>
				<BrowserRouter>
					<ScrollToTop />
					<Navbar />
					<Routes>
						<Route path="/" element={<Home2 />} />
						<Route path="/about" element={<About2 />} />
						<Route path="/bookatable" element={<BookATable2 />} />
						<Route path="/contact" element={<Contact2 />} />
						<Route path="/gallery" element={<Gallery2 />} />
						<Route path="/menus" element={<Menus2 />} />
						<Route path="/occassions" element={<Occassions2 />} />
						<Route path="/press" element={<Press2 />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</DetailsProvider>
		</>
	);
}

export default App;
