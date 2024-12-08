import React from 'react'
import table1 from "../public/Granite square side table 1 (1).png"
import table2 from "../public/sofa.png"
import { ImageConfigContext } from 'next/dist/shared/lib/image-config-context.shared-runtime'
import Image from 'next/image'

export default function     Second() {

let Data1 =[
    {
    image :table1 , text :"Side table" , button :"Veiw more"
    },
    {image:table2, text :"Side table" , button :"Veiw more"}
]

  return (
    <div>
        <div className=' grid grid-cols-2  pl-[300px] max-sm:pl-[0px] max-sm:grid max-sm:grid-cols-1 md:pl-[250px] max-md:pl-[100px] '>
{Data1.map((data)=>(
   
   <div className='w-[605px] h-[562px]  max-sm:w-[400px] max-sm:h-[400px] '>
   <Image src={data.image} alt=" " className='h-[400px] max-sm:h-[200px] max-sm:w-[340px] max-sm:ml-4'></Image>
   <br />

   <p className=' montserrat text-[30px]  pl-[100px] max-sm:text-[20px] max-sm:ml-9'>{data.text} </p>
   <br />
   <button className="montserrat bg-transparent underline text-[20px] h-[30px] pl-[100px] max-sm:text-[15px] max-sm:ml-8 ">{data.button}</button>
   </div>



))}
  </div>
    </div>
  )
}
