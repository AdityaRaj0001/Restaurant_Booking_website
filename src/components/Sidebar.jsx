import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FaBars } from "react-icons/fa";

export default function Sidebar() {
  return (
    <Sheet className="w-[20px] ">
      <SheetTrigger >
      <FaBars className="text-2xl md:hidden" />
      </SheetTrigger>
      <SheetContent  className="bg-[url('./sidebarbg.jpg')]  bg-cover text-white text-lg ">
        <ul className="mt-16 flex flex-col gap-4 font-medium">
          <li className=" pl-4">MENUS</li>
          <li className=" pl-4">OCCASSIONS</li>
          <li className=" pl-4">GALLERY</li>
          <li className=" pl-4">PRESS</li>
          <li className=" pl-4">ABOUT</li>
          <li className=" pl-4">CONTACT</li>
          <button className="text-left pl-4 py-2 font-normal  text-black bg-gradient-to-r from-[#7b4f1c] via-white to-[#7b4f1c] tracking-wider  ">BOOK TABLE</button>
         
        </ul>
      </SheetContent>
    </Sheet>
  )
}
