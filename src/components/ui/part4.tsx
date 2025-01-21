"use client"

import Link from 'next/link'
import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'

export default async function Part4() {
const data = await SanityClient.fetch(groq`
  *[_type=="product"&&id=="6"]
  `)
  
  return (
   




<div >
        {data.map((item:any)=>(
        <Link href={`product/${item.slug.current}`}> <div>
        <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] max-w-5xl max-md:max-w-md mx-auto max-sm:grid-rows-2">
<div className="max-md:order-1 max-md:text-center">
    <h1 className='text-3xl md:text-2xl'>NEW ARRIVAL</h1>
    <br />
<h3 className=" text-2xl md:leading-10 font-bold text-yellow-400 md:text-2xl">{item.name}</h3>
<p className="mt-4 text-sm text-gray-600 max-sm:text-center">{item.description}</p>
<button type="button" className="px-5 py-2.5 mt-8 rounded text-sm outline-none tracking-wide bg-blue-600 text-white hover:bg-blue-700">Explore</button>
</div>
<div className="md:h-[470px]  rounded">

<img src={item.imagePath} alt={item.name} width="200"
className='w-full h-full md:object-contain max-sm:w-[350px] md:w-[400px]'/>

</div>
</div>
 </div></Link>
        ))}
      
    </div>
    
  


    )
       
   
   
  
}
