

import { Menu } from "lucide-react";
import Link from "next/link"
import {  Sheet, SheetContent, SheetDescription,SheetHeader,SheetTitle,SheetTrigger,} from "@/components/ui/sheet";

import { IoSearchOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { BsCart } from "react-icons/bs";
import { MdOutlineAccountCircle } from "react-icons/md";
import AccountDropDown from "../../../components/ui/AccountDropDown";
import Image from "next/image";
import seater from "../../../public/seater.png"
import Second from "@/components/second";
import Card1 from "../../../components/card1"
import Part4 from "@/components/part4";
import Blog from "@/components/blog";
import Part5 from "@/components/part5";
interface Data{
    name: string,
    path: string
}

const LinksData:Data[] =[
    { name:'Home', path:'/' },
    { name:'Shop', path:'/shopp'},
    {name:"About", path:"/account" },
    {name:"Contact", path:"/contact" },    

]


export default function Home2() {
  
  return (
 <div className=" w-[100%]  ">
     <div className=" bg-[#FBEBB5] max-sm:w-[410px] ">




     <div>
   <nav className="flex items-center justify-evenly px-6 py-4 bg-peach shadow-md">
      {/* Left Section: Logo */}
    

      {/* Middle Section: Links (Hidden on small screens, visible on medium and larger screens) */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 pl-7 ">
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

      
   <div className="flex items-center gap-x-6 gap-y-4 ml-[600px]  max-md:ml-[30px] gap-11 max-sm:[20px] md:ml-[300px]   lg:pl-[700px] lg:pt-0 bg-peach">     <div className="flex text-2xl bg-transparent flex-col items-center justify-center gap-0.5 cursor-pointer">
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
        <Menu className="text-2xl  bg-peach"/>
        </SheetTrigger>
        <SheetContent className=" bg-peach text-black" >
          <SheetHeader>
            <SheetTitle className="mt-5 mx-5 text-3xl hover:underline  font-thin ">Menu Bar</SheetTitle>
            <ul>
          {LinksData.map((list)=>(
            <li className="flex  space-y-6 mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">
            <Link href={`${list.path}`}>
            {list.name}</Link></li>
          ))}
         
      </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      </div>
    </div>
    </nav>
  </div>

</div>


{/* Hero */}

<div className="h-[900px] bg-peach flex justify-evenly pt-10 max-sm:grid max-sm:grid-cols-3 pl-9 max-sm:h-[400px] max-sm:w-[410px] lg:w-[100%]  ">

<div>
  <h1 className="montserrat text-[50px] mt-[200px] max-sm:text-[20px] max-sm:mt-[100px] ">Rocket Single
    <br />
    Seater
  </h1>
  <br />
  <br />
  <button  className="montserrat bg-transparent underline text-[30px] h-[50px] max-sm:h-[30px] max-sm:text-[15px]">Shop now</button>
</div>
<div className="max-sm:w-[250px] h-[100px] max-sm:mr-[50px]">



  <Image src={seater} alt=" "  ></Image>
</div>
</div>


<br />
<br />





{/* Part second */}

<Second/>

<br />
<br />
{/* Third part */}
<div>
  <h1 className="montserrat text-center text-[40px] max-sm:text-[20px]">Top picks for You</h1>
 

  <p className="montserrat text-center text-slate-400 text-[20px] max-sm:text-[15px]">Find a bright ideal to suits your taste with a great suspension, table, floor and table lights</p>
  <br />
<Card1/>
<br />
<div className="items-center flex justify-center">
<button className="text-[30px] underline max-sm:text-[20px]">Veiw more</button>
</div>
</div>
<br />
<br />


{/* Part4 */}
<div>
  <Part4/>
</div>

<br />
<br />
{/* Blog */}
<div>
  <Blog/>
</div>
<br />
{/* Part 5 */}
<div>
  <Part5/>
</div>
<br />
<br />

</div>




  )
}
