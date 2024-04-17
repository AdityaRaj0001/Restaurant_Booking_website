import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import About from "./pages/About";
import BookATable from "./pages/BookATable";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Occassions from "./pages/Occassions";
import Press from "./pages/Press";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { DetailsProvider } from "./context/staticDetails.jsx";
import Menus2 from "./components/Menus2.jsx";
import Home2 from "./components/wrapper/Home2.jsx";
import Occassions2 from "./components/wrapper/Occassions2.jsx";

function App() {
	return (
		<>
			<DetailsProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home2 />} />
						<Route path="/about" element={<About />} />
						<Route path="/bookatable" element={<BookATable />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/menus" element={<Menus2 />} />
						<Route path="/occassions" element={<Occassions2 />} />
						<Route path="/press" element={<Press />} />
					</Routes>
					<Footer />
				</BrowserRouter>
			</DetailsProvider>
		</>
	);
}

export default App;
