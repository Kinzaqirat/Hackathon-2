import React from 'react'
import table1 from "../public/Granite square side table 1 (1).png"
import table2 from "../public/sofa.png"
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'

import Link from 'next/link'
import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'

export default async function Second() {
  let Data = await SanityClient.fetch(groq `*[_type=="product"][0..1]
    `)





  return (
//     <div>
     
//       <div>
     
//     <div className='grid grid-cols-2 pl-[300px] py-12 max-sm:grid-cols-1 xl:grid-cols-2 lg:gap-7 lg:grid-cols-2  md:pl-[150px] md:w-[640px]  max-sm:pl-[10px]'>
//     {Data.map((items:any)=>(
// <Link href={`product/${items.slug.current}`} >

// <div className=''>


//     <div className='w-[300px] '>
// <div className='rounded-xl w-[300px] h-[300px] py-8'>
// <img src={items.imagePath} alt='' className='w-[340px] h-[340px] max-sm:ml-11 rounded-xl xl:w-[600px] '></img>
  
// </div>
// <p className='montserrat pl-7 text-[20px] max-sm:text-[15px] max-sm:text-center text-left pt-20'>{items.name}</p>
// {/* <br /> */}
//     <p className='montserrat pl-7 max-sm:text-[15px]  font-extrabold max-sm:text-center text-left pt-20'>{items.description}</p>
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
  <div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7 px-4 sm:px-10 md:px-[150px] lg:px-[200px] xl:px-[300px] py-12'>
      {Data.map((items:any)=>(
        <Link href={`product/${items.slug.current}`} key={items.slug.current}>
          <div className='flex flex-col items-center'>
            <div className='rounded-xl overflow-hidden w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] py-8'>
              <img 
                src={items.imagePath} 
                alt={items.name} 
                className='w-full h-[400px] rounded-xl'
              />
            </div>
            <p className='montserrat text-[20px] sm:text-[18px] max-sm:text-[15px] text-center sm:text-left pt-6'>
              {items.name}
            </p>
            <p className='montserrat text-[16px] sm:text-[15px] font-extrabold text-center sm:text-left pt-4'>
              {items.description}
            </p>
            <p className='montserrat text-[30px] sm:text-[25px] font-extrabold text-center sm:text-left pt-4'>
              <span className='text-[24px] sm:text-[20px]'>Rs:</span> {items.price}
            </p>
          </div>
        </Link>
      ))}
    </div>
  </div>

  {/* Pagination */}
  <div className='mt-10'>
    <ul className="flex justify-center space-x-3 sm:space-x-5 font-[sans-serif]">
      <li className="flex items-center justify-center bg-peach border hover:border-blue-500 cursor-pointer text-base font-bold text-white px-4 py-2 rounded-lg">
        1
      </li>
      <li className="flex items-center justify-center border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-4 py-2 rounded-lg">
        2
      </li>
      <li className="flex items-center justify-center border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-4 py-2 rounded-lg">
        3
      </li>
      <li className="flex items-center justify-center border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-4 py-2 rounded-lg">
        Next
      </li>
    </ul>
  </div>
</div>

  )
}
