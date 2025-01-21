import React from 'react'
import chair from "../public/chair (2).png"
import chairtable from "../public/table chair.png"
import outdoor from "../public/outdoor.png"
import  sofa2 from "../public/break.png"

import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'
import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'
import Link from 'next/link'

export default async function  Card1() {

  let Data = await SanityClient.fetch(groq `*[_type=="product"][0..4]
    `)





  return (
//     <div>
     
//       <div>
     
//     <div className='grid grid-cols-3 pl-[300px] py-12 max-sm:grid-cols-1 max-sm:pl-[1px] md:grid-cols-2 md:pl-[100px]  '>
//     {Data.map((items:any)=>(
// <Link href={`product/${items.slug.current}`} >

// <div className=''>


//     <div className='w-[300px] '>
// <div className='rounded-xl w-[300px] h-[300px] py-8'>
// <img src={items.imagePath} alt='' className='w-[340px] h-[340px] max-sm:ml-11 rounded-xl '></img>
  
// </div>
// <p className='montserrat pl-7 max-sm:text-[15px] max-sm:text-center text-left pt-20'>{items.name}</p>
//     <p className='montserrat pl-7 max-sm:text-[15px] max-sm:text-center text-left pt-20'>{items.description}</p>
//     <br />

//     <p className='montserrat pl-7 font-extrabold text-[30px] max-sm:pl-16 max-sm:text-[25px]'><span className='montserrat pl-7 font-extrabold text-[24px] max-sm:pl-16 max-sm:text-[15px]'>Rs:</span>:{items.price}</p>

// </div> 

//   </div>

// </Link>

//         ))}
  
//     </div>
    
//     </div> 


// {/* shop */}

// <br />
// <br />


// <div>
// <ul className="flex space-x-5 justify-center font-[sans-serif]">
    
     
//       <li
//         className="flex items-center justify-center shrink-0 bg-peach  border hover:border-blue-500 cursor-pointer text-base font-bold text-white px-[13px] h-9 rounded-lg">
//         1
//       </li>
//       <li
//         className="flex items-center justify-center shrink-0 border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
//         2
//       </li>
//       <li
//         className="flex items-center justify-center shrink-0 border  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
//         3
//       </li>
//       <li
//         className="flex items-center justify-center shrink-0 border  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
//       Next
//       </li>
     
//     </ul>
// </div>

//     </div>

<div>
  
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10 px-4 sm:px-6 lg:px-20'>
    {Data.map((items:any) => (
      <Link href={`product/${items.slug.current}`} key={items.slug.current}>
        <div className='text-center md:text-left'>
          <div className='w-full max-w-sm mx-auto'>
            <img src={items.imagePath} alt='' className='w-full rounded-xl h-[400px]' />
          </div>
          <p className='montserrat text-lg sm:text-xl md:text-2xl font-bold mt-5'>{items.name}</p>
          <p className='montserrat text-base sm:text-lg mt-2'>{items.description}</p>
          <p className='montserrat text-xl font-extrabold mt-2'>Rs: {items.price}</p>
        </div>
      </Link>
    ))}
  </div>

  <div className='flex justify-center mt-10'>
    <ul className="flex space-x-5 justify-center font-[sans-serif]">
      <li className="flex items-center justify-center bg-peach border hover:border-blue-500 cursor-pointer text-base font-bold text-white px-4 h-9 rounded-lg">1</li>
      <li className="flex items-center justify-center border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-4 h-9 rounded-lg">2</li>
      <li className="flex items-center justify-center border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-4 h-9 rounded-lg">3</li>
      <li className="flex items-center justify-center border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-4 h-9 rounded-lg">Next</li>
    </ul>
  </div>
</div>


    )
}
