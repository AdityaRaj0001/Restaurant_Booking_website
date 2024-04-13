
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  return (
		<Sheet className="w-[20px] ">
			<SheetTrigger>
				<FaBars className="text-2xl md:hidden" />
			</SheetTrigger>
			<SheetContent className="bg-[url('./sidebarbg.jpg')]  bg-cover text-white text-lg ">
				<ul className="mt-16 flex flex-col gap-4 font-medium">
					<li>
						<Link to="/menus">MENUS</Link>
					</li>
					<li>
						<Link to="/occassions">OCCASIONS</Link>
					</li>
					<li>
						<Link to="/gallery">GALLERY</Link>
					</li>
					<li>
						<Link to="/press">PRESS</Link>
					</li>
					<li>
						<Link to="/about">ABOUT</Link>
					</li>
					<li>
						<Link to="/contact">CONTACT</Link>
					</li>
					<button className="text-left pl-4 py-2 font-normal  text-black bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] tracking-wider  "><Link to="/bookatable">BOOK TABLE</Link></button>
				</ul>
			</SheetContent>
		</Sheet>
	);
}
