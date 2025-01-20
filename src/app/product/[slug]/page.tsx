"use client"
import { useParams } from "next/navigation"
import {groq} from  "next-sanity"
import productDetail from "@/components/productDetail"
import { SanityClient } from "@/sanity/sanity.client";

import Detaile from "@/components/ui/detaile";
import Chart from "@/app/(store)/chart/page";


export default async function Dynamic() {

    const {slug}:any= useParams();
    console.log(slug);
    
    const data=await SanityClient.fetch(groq ` *[_type == "product" ] `)
       console.log(data);
        
        const products=data.find((product:any)=>product.slug.current ==slug)
        console.log(products);

        // const query = await fetch 
  return (
   
      <div>
        <Detaile products={products}/>
      {/* <Chart products={products}/> */}

      
    
      </div>
   
  )
}
