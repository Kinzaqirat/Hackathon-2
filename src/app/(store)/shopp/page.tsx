// "use client"
import Header from '@/components/header'
import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.png"


import Link from 'next/link'
import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'

export default async function ShopPgae() {
  let Data = await SanityClient.fetch(groq `*[_type=="product"]
    `)





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
    <div className='grid grid-cols-4 pl-10 py-12 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 '>
    {Data.map((items:any)=>(
<Link href={`product/${items.slug.current}`} >

<div className=''>


    <div className='w-[300px]'>
<div className='rounded-xl w-[300px] h-[300px] py-8'>
<img src={items.imagePath} alt='' className='w-[240px] h-[240px] max-sm:ml-11 rounded-xl '></img>
  
</div>
<p  className='montserrat pl-7 max-sm:text-[15px] max-sm:text-center text-left'>{items.name}</p>
<br />
    <p   className='montserrat pl-7 max-sm:text-[15px] max-sm:text-center text-left'>{items.description}</p>
    <p className='montserrat pl-7 font-extrabold text-[30px] max-sm:pl-16 max-sm:text-[25px]'><span className='montserrat pl-7 font-extrabold text-[24px] max-sm:pl-16 max-sm:text-[15px]'>Rs:</span>:{items.price}</p>

</div> 

  </div>

</Link>

        ))}
  
    </div>
    
    </div> 


{/* shop */}

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
