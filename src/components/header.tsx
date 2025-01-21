






import { Menu } from "lucide-react";
import Link from "next/link"
import {  Sheet, SheetContent, SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";

import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import AccountDropDown from "../components/ui/AccountDropDown";
import SearchBar from "./search";

interface Data{
    name: string,
    path: string
}




export default function Navbar() {
    const LinksData:Data[] =[
    { name:'Home', path:'/' },
    { name:'Shop', path:'/shopp'},
    {name:"About", path:"/account" },
    {name:"Contact", path:"/contact" },    

]
  return (
    <div className="w-full">
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left Section: Logo */}
      <div className="text-2xl font-bold cursor-pointer">
        <a href="/">Logo</a>
      </div>
  
      {/* Middle Section: Links (Hidden on small screens, visible on medium and larger screens) */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
        <li>
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="shopp" className="hover:text-gray-600">
            Shop
          </a>
        </li>
        <li>
          <a href="account" className="hover:text-gray-600">
            About
          </a>
        </li>
        <li>
          <a href="contact" className="hover:text-gray-600">
            Contact
          </a>
        </li>
      </ul>
  
      {/* Right Section: Icons and Search */}
      <div className="flex items-center gap-x-4 md:gap-x-6">
        <div className="text-2xl cursor-pointer">
          <MdOutlineAccountCircle />
        </div>
  
        {/* Search Bar - Hidden on small screens */}
        <div className="hidden md:flex items-center focus-within:border-b-gray-200 rounded-sm px-4 py-2.5 max-w-52">
          <SearchBar />
        </div>
  
        {/* Account Dropdown */}
        <div className="relative cursor-pointer">
          <AccountDropDown />
        </div>
  
        {/* Mobile Menu (Visible on small screens) */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="text-2xl bg-white" />
          </SheetTrigger>
          <SheetContent className="bg-peach text-black">
            <SheetHeader>
              <SheetTitle className="mt-5 mx-5 text-3xl font-thin hover:underline">
                Menu Bar
              </SheetTitle>
              <ul>
                {LinksData.map((list) => (
                  <li
                    key={list.name}
                    className="flex flex-col space-y-6 mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700"
                  >
                    <Link href={`${list.path}`}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </div>
  

  )}