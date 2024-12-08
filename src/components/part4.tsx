import React from 'react'
import sofa from "../public/Asgaard sofa 1.png"
import Image from 'next/image'

export default function Part4() {
  return (
    <div>
<div className="h-[740px] bg-peach flex justify-evenly pt-10 max-sm:grid max-sm:w-[410px] ">
<div>
  <Image src={sofa} alt=" "></Image>
</div>
<div className='max-sm:pl-[60px]'>
<h1 className="montserrat text-[30px] mt-[200px] max-sm:mt-[100px] max-sm:text-[20px]">New Arrivals </h1>
  <h1 className="montserrat text-[50px] mt-[0px] max-sm:text-[30px]">Rocket Single
    <br />
    Seater
  </h1>
  <br />
  <br />
  <button className="montserrat bg-transparent border border-black w-[150px] text-[20px] h-[50px] ">Order now</button>
</div>

</div>

    </div>
  )
}
