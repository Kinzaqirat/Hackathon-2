'use client'
import { SanityClient } from '@/sanity/sanity.client'
import { log } from 'console'
import { groq } from 'next-sanity'
import Link from 'next/link'
// import { useParams } from 'next/navigation'
// import bed from "../public/bed.png"

export default async function HeroSec() {
    const data2 = await SanityClient.fetch(groq `*[_type == "product" && id=="16"]`)


 
  return (
    
    <div>
     

{data2.map((item:any)=>(
  <div className='bg-peach py-10 flex flex-col md:flex-row items-center justify-center gap-10 px-4 sm:px-6 lg:px-20'>
    
   
  <div className='text-center md:text-left'>
    <h1 className="montserrat text-[50px] mt-20 sm:text-[30px] sm:mt-10 md:text-[40px]">{item.name}<br />Seater</h1>
    <button  className="montserrat bg-transparent underline text-[30px] h-[50px] sm:text-[20px] sm:h-[40px] mt-5">Shop now</button>
  </div>
  <Link href={`/product/${item.slug.current}`}>
  <div className='flex justify-center md:justify-end mt-10'>
    
    <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=" " className='w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] rounded-xl' />
  </div>
  </Link>
  
  </div>
))} 
      
 



    </div>
    

  )
}

