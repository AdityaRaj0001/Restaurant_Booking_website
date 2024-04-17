import LandingHero from "../components/LandingHero";
import PaperBanner from "../components/PaperBanner";
import Third from "../components/Third";
import Slideshow from "../components/Slideshow";
import BookTable from "../components/BookTable";
import Grid from "../components/Grid";
import PaperBanner2 from "../components/PaperBanner2";
import { useContext } from "react";
import { LandingPageContext } from "../context/landingPage";

export default function Home() {

	const landingPage = useContext(LandingPageContext);
	return (
		<main className="min-h-[100vh] relative w-full overflow-hidden">
			<LandingHero />
			<PaperBanner />
			<Third />
			<Slideshow pageData={landingPage} />
			<BookTable />
			<Grid />
			<PaperBanner2 />
		</main>
	);
}
