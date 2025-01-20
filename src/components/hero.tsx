import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'
import Link from 'next/link'
import React from 'react'

export default async function Hero() {


  const data = await SanityClient.fetch(groq `*[_type=="product" && id=="16"]`)
  return (
    <div className=''>


      <div className="h-[900px] bg-peach flex justify-center gap-3   pt-10 max-sm:grid max-sm:grid-cols-2  pl-9 max-sm:h-[700px] max-sm:w-[360px] lg:w-[100%] max-md:grid-cols-2  ">
      <div>
        {data.map((items:any)=>(
          <Link  href={`product/${items.slug.current}`}>
            <div className=''>
        <h1 className="montserrat text-[50px] mt-[200px]  max-sm:text-[20px] max-sm:mt-[100px] ">{items.name}
          <br />
          Seater
        </h1>
        <br />
        <br />
        <button  className="montserrat bg-transparent underline text-[30px] h-[50px] max-sm:h-[30px] max-sm:text-[15px]">Shop now</button>
      </div>
      <div className="max-sm:w-[250px] h-[100px] max-sm:mr-[50px]">
      
      
    <div className='flex justify-end ml-[400px] mb-[400px]  max-sm:ml-[100px] max-sm:mb-[100px]'>
    <img src={items.imagePath} alt=" "  className='w-[400px]   h-[400px]  text-center rounded-xl max-sm:w-[400px] max-sm:h-[300px]'  ></img>
      </div>  
    
    </div>
          </Link>
        ))}
      </div>
      {/* <div>
        <h1 className="montserrat text-[50px] mt-[200px] max-sm:text-[20px] max-sm:mt-[100px] ">Rocket Single
          <br />
          Seater
        </h1>
        <br />
        <br />
        <button  className="montserrat bg-transparent underline text-[30px] h-[50px] max-sm:h-[30px] max-sm:text-[15px]">Shop now</button>
      </div> */}
      <div className="max-sm:w-[250px] h-[100px] max-sm:mr-[50px]">
      
      
      
        {/* <Image src={seater} alt=" "  ></Image> */}
      </div>
      </div>
      
    </div>
  )
}
