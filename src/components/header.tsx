






import { Menu } from "lucide-react";
import Link from "next/link"
import {  Sheet, SheetContent, SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";

import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import AccountDropDown from "../components/ui/AccountDropDown";

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
 <div>
   <nav className="flex items-center justify-evenly
    px-6 py-4 bg-white shadow-md max-sm:w-[410px] md:w-[910px] lg:w-[100%]">
      {/* Left Section: Logo */}
    

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

      
   <div className="flex items-center gap-x-6 gap-y-4 ml-[600px]  max-md:ml-[40px] max-sm:[20px] max-sm:gap-8 md:ml-[300px]">     <div className="flex text-2xl bg-transparent flex-col items-center justify-center gap-0.5 cursor-pointer">
        <MdOutlineAccountCircle />        </div>
    <div
        className=' text-2xl focus-within:bg-transparent focus-within:border-gray-400 rounded-sm px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>

       <IoSearchOutline/>
      </div>


      <div className='flex items-center sm:space-x-8 space-x-6'>
        <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">

          <div className="relative">
           <Link href={'/'}>< GoHeart className="text-2xl max-sm:text-2xl"/>
           
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
   
          <div className="relative">
            <AccountDropDown/>
     
         
          </div>
    
        </div>
     

        <Sheet >
        <SheetTrigger className="md:hidden  ">
        <Menu className="text-2xl  bg-white"/>
        </SheetTrigger>
        <SheetContent className=" bg-peach text-black" >
          <SheetHeader>
            <SheetTitle className="mt-5 mx-5 text-3xl hover:underline   font-thin ">Menu Bar</SheetTitle>
            <ul>
          {LinksData.map((list)=>(
            <li className="flex flex-col space-y-6 mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">
            <Link href={`${list.path}`}>{list.name}</Link></li>
          ))}
         
      </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      </div>
    </div>
    </nav>
  </div>

  )}