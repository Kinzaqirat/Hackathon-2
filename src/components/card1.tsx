import React from 'react'
import chair from "../public/chair (2).png"
import chairtable from "../public/table chair.png"
import outdoor from "../public/outdoor.png"
import  sofa2 from "../public/break.png"

import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'

export default function  Card1() {

let Data2 =[
    {
    image :chair , text :"Trenton modular sofa_3" , price:"RS. 25,000.00"
    },
    {image:chairtable, text :"Granite dining table with dining chair" ,  price:"RS. 25,000.00"},
    {image:outdoor, text :"Outdoor bar table and stole" ,  price:"RS. 25,000.00"},
    {image:sofa2, text :"Plain console with teak mirror" ,  price:"RS. 25,000.00"}
]

  return (
    <div>
        <div className=' grid grid-cols-4 pl-7 md:grid max-sm:grid-cols-1 max-sm:pl-20  '>

{Data2.map((data)=>(
    <div>
    <Image src={data.image} alt='' className='w-[240px] h-[240px] max-sm:h-[300px]'></Image>
  
    <p className='montserrat pl-7 max-sm:text-[15px]'>{data.text}</p>
    <p className='montserrat pl-7 font-extrabold text-[30px] max-sm:text-[15px]'>{data.price}</p>
</div> 
))}
  </div>


  <ul className="bg-peach shadow-[0_2px_8px_-1px_rgba(6,81,237,0.4)] p-2 space-x-4 w-max flex items-center rounded-lg mx-auto font-[sans-serif] mt-4">
      <li className="text-gray-400 hover:bg-gray-100 px-4 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex items-center">
    
       1
      </li>
      <li>
 
        2
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-400 w-3 -rotate-90 leading-none" viewBox="0 0 24 24">
          <path fill-rule="evenodd"
            d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
            clip-rule="evenodd" data-original="#000000"></path>
        </svg>
      </li>
      <li className="text-gray-400 hover:bg-gray-100 px-4 py-2.5 rounded-lg text-sm font-bold cursor-pointer flex items-center">
  
      3
      </li>
    </ul>
    </div>
  )
}
