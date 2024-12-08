// import React from 'react'
// import {
//     Sheet,
//     SheetContent,
//     SheetDescription,
//     SheetHeader,
//     SheetTitle,
//     SheetTrigger,
//   } from "@/components/ui/sheet";

//   import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
//   } from "../components/ui/dropdown-menu"
//   import { IoSearchOutline } from "react-icons/io5";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import { GoHeart } from "react-icons/go";
// import { BsCart } from "react-icons/bs";
// import Link from 'next/link';

//   interface Data{
//     name: string,
//     path: string
// }

// const LinksData:Data[] =[
//     { name:'Home', path:'/' },
//     { name:'Contact', path:'/contact'},
//     {name:"About", path:"/about" },
//     {name:"Sign up", path:"/sign-up" },    

// ]


// export default function Header() {
  
//   return (
//   <div className="block">
//   <section className='py-2 bg-black text-white text-center flex justify-center max-sm:justify-evenly'>
//         <div>
//         <p className='mx-2 text-xs'><strong className="">Summer Sales For All Swim Suits And Free Express Deilvery-50% OFF  <Link href={'/'}><strong className="mx-2 uppercase">shop now</strong></Link></strong></p>
//         </div>
//           <div className="flex relative bottom-1 max-sm:top-[3px]"><strong>English</strong> <RiArrowDropDownLine className="text-white"/></div>
//       </section>



//       <header className='flex bg-white border-b py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide relative z-50'>
//       <div className='flex max-w-screen-xl mx-auto w-full'>

//         <div className='flex justify-evenly items-center lg:gap-y-2 gap-4 w-full'>
//           <Link href={'/'} ><h1 className="text-3xl font-bold mx-40 max-sm:text-start max-sm:mx-2 max-sm:text-[20px]"> Exclusive </h1></Link>

//           <div id="collapseMenu"
//             className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
//             <ul
//               className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
//             {LinksData.map((list)=>(
//               <li className='max-lg:border-b max-lg:py-3 px-3'><Link href={`${list.path}`}
//               className='text-black hover:underline text-[15px] block font-semibold'>{list.name}</Link></li>
//             ))}
//             </ul>
//           </div>



//           <div className="flex items-center gap-x-6 gap-y-4 ml-auto">
//             <div
//               className='flex bg-gray-50  focus-within:bg-transparent focus-within:border-gray-400 rounded-sm px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>
//               <input type='text' placeholder='Search something...' className='w-full text-sm bg-transparent outline-none pr-2' />
//              <IoSearchOutline/>
//             </div>


//             <div className='flex items-center sm:space-x-8 space-x-6'>
//               <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">

//                 <div className="relative">
//                  <Link href={'/wishlist'}>< GoHeart className="text-3xl max-sm:text-2xl"/>
//                   <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">4</span>
//                   </Link>
//                 </div>
//                <span className="text-[13px] font-semibold text-[#333]">Wishlist</span>
//               </div>

//               <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
//                 <div className="relative">
//                  <BsCart className="text-3xl max-sm:text-2xl"/>
//                   <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
//                 </div>
//                 <span className="text-[13px] font-semibold text-[#333]">Cart</span>
//               </div>
//              <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
//               <AccountDropDown />
//              </div>

//               <Sheet >
//               <SheetTrigger className="md:hidden  ">
//               <Menu className="text-2xl  bg-white"/>
//               </SheetTrigger>
//               <SheetContent className=" bg-white" >
//                 <SheetHeader>
//                   <SheetTitle className="mt-5 mx-5 text-3xl hover:underline   font-thin ">Menu Bar</SheetTitle>
//                   <ul>
//                 {LinksData.map((list)=>(
//                   <li className="flex flex-col space-y-6 mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">
//                   <Link href={`${list.path}`}>{list.name}</Link></li>
//                 ))}
               
//             </ul>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>

//             </div>
//           </div>
//         </div>
//       </div>
//     </header>

// </div>
//   )
// }






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




// export default function Header() {
//   const LinksData:Data[] =[
//     { name:'Home', path:'/' },
//     { name:'Shop', path:'/shopp'},
//     {name:"About", path:"/" },
//     {name:"Contact", path:"/contact" },    

// ]

//   return (
//   <div className="">

// <div>

  
// </div>

// <header className='flex  py-3 sm:px-6 px-4 font-[sans-serif] min-h-[75px] tracking-wide relative z-50'>
// <div className='flex max-w-screen-xl mx-auto w-full'>

// <div className='flex max-w-screen-xl mx-auto w-full'>

//         <div className='flex justify-evenly items-center lg:gap-y-2 gap-4 w-full'>
                  

//            <div id="collapseMenu" className='lg:ml-6 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>           <ul className='lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
//            {LinksData.map((list)=>(
//               <li className='max-lg:border-b max-lg:py-3 px-3'><Link href={`${list.path}`}        
//               className='text-black hover:underline text-[15px] block font-semibold'>{list.name}</Link></li>
//             ))}
//             </ul>
//           </div>
//           </div>



//     <div className="flex items-center gap-x-6 gap-y-4 ml-[600px] max-sm:[100px]">
//     <div className="flex text-2xl bg-transparent flex-col items-center justify-center gap-0.5 cursor-pointer">
//         <MdOutlineAccountCircle />
//        </div>
//       <div
//         className=' text-2xl focus-within:bg-transparent focus-within:border-gray-400 rounded-sm px-4 py-2.5 overflow-hidden max-w-52 max-lg:hidden'>

//        <IoSearchOutline/>
//       </div>


//       <div className='flex items-center sm:space-x-8 space-x-6'>
//         <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">

//           <div className="relative">
//            <Link href={'/'}>< GoHeart className="text-2xl max-sm:text-2xl"/>
           
//             </Link>
//           </div>
//         </div>

//         <div className="flex flex-col items-center justify-center gap-0.5 cursor-pointer">
   
//           <div className="relative">
//             <AccountDropDown/>
     
         
//           </div>
    
//         </div>
     

//         <Sheet >
//         <SheetTrigger className="md:hidden  ">
//         <Menu className="text-2xl  bg-white"/>
//         </SheetTrigger>
//         <SheetContent className=" bg-white" >
//           <SheetHeader>
//             <SheetTitle className="mt-5 mx-5 text-3xl hover:underline   font-thin ">Menu Bar</SheetTitle>
//             <ul>
//           {LinksData.map((list)=>(
//             <li className="flex flex-col space-y-6 mt-5 mx-5 text-2xl font-bold hover:text-rose-900 text-pink-700">
//             <Link href={`${list.path}`}>{list.name}</Link></li>
//           ))}
         
//       </ul>
//           </SheetHeader>
//         </SheetContent>
//       </Sheet>

//       </div>
//     </div>
//   </div>
// </div>
// </header>


// </div>
//   )
// }\\



// Responsive Navbar with Tailwind CSS

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