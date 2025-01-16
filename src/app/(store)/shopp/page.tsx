import Header from '@/components/header'
import React from 'react'
import Image from 'next/image'
import logo from "../../public/logo.png"
import Link from 'next/link'
import chair from "../../public/chair (2).png"
import chairtable from "../../public/table chair.png"
import outdoor from "../../public/outdoor.png"
import  sofa2 from "../../public/break.png"
import  table1 from "../../public/table1.png"
import  table2 from "../../public/table2.png"
import  table3 from "../../public/table3.png"
import  table4 from "../../public/table4.png"
import  table5 from "../../public/table5.png"
import  table6 from "../../public/table6.png"
import  table7 from "../../public/table7.png"
import  table8 from "../../public/table7.png"

export default function ShopPgae() {
  let Data2 =[
    {
    image :chair , text :"Trenton modular sofa_3" , price:"RS. 25,000.00"
    },
    {image:chairtable, text :"Granite dining table with dining chair" ,  price:"RS. 25,000.00"},
    {image:outdoor, text :"Outdoor bar table and stole" ,  price:"RS. 25,000.00"},
    {image:sofa2, text :" Grain coffee table" ,  price:"RS. 15,000.00"},
    {image:table1, text :"Kent coffee table" ,  price:"RS. 225,000.00"},
    {image:table2, text :"Round coffee table color-2" ,  price:"RS. 251,000.00"},
    {image:table3, text :"Reclaimed teak coffe table" ,  price:"RS. 25,200.00"},
    {image:table4, text :"granite saqure side table" ,  price:"RS. 258,800.00"},
    {image:table5, text :"Asgaard" ,  price:"RS. 25o,000.00"},
    {image:table6, text :"Maya fofa three seater" ,  price:"RS. 115,000.00"},
    {image:table7, text :"Plain console with teak mirror" ,  price:"RS. 25,000.00"},
    {image:table8, text :"Outdoor sofa set" ,  price:"RS. 244,000.00"}
  
  
  
  ]






  return (
    <div>
      <Header/>
      <div>
      <div className="relative py-16 font-[sans-serif]">
      <div className="absolute inset-0 max-sm:w-[410px]">
        <img src="https://images.unsplash.com/photo-1625494025723-5a401deae8c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white mt-8">
    <div  className="items-center flex justify-center">
    <Image src={logo} alt=''></Image>

    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black ">Shop</h1>
<div className='flex justify-center'>

<nav aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <Link href={"/"}><p  className="block transition hover:text-gray-700">
      <span className="sr-only"> Home </span>

</p>
      </Link>
      
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-4"
      >
     
      </svg>
    </li>

    <li>
    <Link href={"/"}>  <p className="block transition hover:text-gray-700"> Home </p></Link>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="size-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5" />
      </svg>
    </li>

    <li>
    <Link href={"/shop-page"}>  <p className="block transition hover:text-gray-700"> Shop </p></Link>
    </li>
  </ol>
</nav>
</div>


     
      </div>
    </div>
    </div>


{/* shop */}
<div className=' grid grid-cols-4 pl-7 max-sm:grid max-sm:grid-cols-1 '>

{Data2.map((data)=>(
    <div>
    <Image src={data.image} alt='' className='w-[240px] h-[240px] max-sm:ml-11'></Image>
  
    <p className='montserrat pl-7 max-sm:text-[15px] max-sm:text-center'>{data.text}</p>
    <p className='montserrat pl-7 font-extrabold text-[30px] max-sm:pl-16 max-sm:text-[25px]'>{data.price}</p>
    <button>Add to cart</button>
</div> 
))}
  </div>
<br />
<br />


<div>
<ul className="flex space-x-5 justify-center font-[sans-serif]">
    
     
      <li
        className="flex items-center justify-center shrink-0 bg-peach  border hover:border-blue-500 cursor-pointer text-base font-bold text-white px-[13px] h-9 rounded-lg">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0 border  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
        3
      </li>
      <li
        className="flex items-center justify-center shrink-0 border  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
      Next
      </li>
     
    </ul>
</div>

    </div>
  )
}
