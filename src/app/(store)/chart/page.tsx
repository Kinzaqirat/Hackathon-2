"use client"
import Header from '@/components/header'
import React, { useContext } from 'react'

import Link from 'next/link'
import logo from "../../../public/logo.png"
import Image from 'next/image'
// import sofa from "../../public/Asgaard sofa 1.png"
import Navbar from '@/components/header'
// import CartContext
import { SanityClient } from '@/sanity/sanity.client'
import { groq } from 'next-sanity'
import { CartContext } from '@/app/context/CartContext'
import { MdDelete } from 'react-icons/md'


export default  function Chart() {
  const {items,add ,dec,qty,totalQuantity,totalPrice,itemQty,remove} :any = useContext(CartContext);

  // const {items,add ,dec,qty,totalQuantity,totalPrice,itemQty,remove} :any = useContext(CartContext);
  return (
    <div>
      <Navbar/>
      
      <div>
      <div className="relative py-16 font-[sans-serif]">
      <div className="absolute inset-0 max-sm:w-[410px]">
        <img src="https://images.unsplash.com/photo-1625494025723-5a401deae8c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white mt-8">
    <div  className="items-center flex justify-center">
    <Image src={logo} alt=''></Image>

    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">Cart</h1>
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
    <Link href={"/chart"}>  <p className="block transition hover:text-gray-700"> Cart </p></Link>
    </li>
  </ol>
</nav>
</div>


     
      </div>
    </div>
    </div>



{/* more */}

   {items.map((product:any)=>(    <div className="grid lg:grid-cols-3 max-sm:grid max-sm:grid-cols-1">
        <div className="lg:col-span-2 p-6 bg-white overflow-x-auto"
         key={product._id}
        >
        

          <table className="mt-6 w-full border-collapse divide-y  max-sm:w-[410px] ">
            <thead className="whitespace-nowrap text-left bg-peach">
              <tr>
                <th className="text-base text-gray-800 p-4">Description</th>
                <th className="text-base text-gray-800 p-4">Quantity</th>
                <th className="text-base text-gray-800 p-4">Price</th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y">
              <tr>
                <td className="p-4">
                  <div className="flex items-center gap-4 w-max">
                    <div className="h-32 shrink-0">
                      <img
                      src={product.imagePath} alt="" className="w-full h-full object-contain rounded-lg" />
                    </div>
                    <div>
                    <p className="text-base font-bold text-gray-800">{product.name}</p>
                      <p className="text-base font-bold text-gray-800">{product.description}</p>
                     
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                
                    <button type="button" className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base">
                      {qty}
                    </button>
                   
                  </div>
                </td>
                <td className="p-4">
                  <h4 className="text-base font-bold text-gray-800 max-sm:inline-block ">Rs: {product.price}</h4>
                  <button className="text-red-500 text-xl"  onClick={()=>remove(product)}>
              <MdDelete />
            </button>
                </td>
              </tr>

              <tr>
             
              
              
              </tr>

             

              
            </tbody>
          </table>
        </div>

        <div className=" mt-6 lg:sticky lg:top-0 border-transparent border-xl bg-peach ">
          <h2 className="text-2xl font-bold montserrat  pb-4 text-center">Cart total</h2>

          <ul className="text-gray-800  mt-6 items-center">
            <li className=" gap-4  py-3 text-center">Subtotal <span className="font-bold text-slate-400">{items.reduce(
              (total: number, product: any) =>
                total + product.price * product.quantity,
              0
            )}</span></li>
            <li className=" gap-4  py-3 text-center">Total <span className=" text-yellow-700 font-bold">{product.price}</span></li>
           
          </ul>

          <div className='flex justify-center'>
          <Link href={"/check"}><button type="button" className="mt-6 px-5 py-2.5 w-[200px] rounded-xl border border-black">Make Payment</button></Link>
          </div>
          <br />

        </div>
      </div>
    ))}
    <div className="font-sans max-sm:w-[410px]">
  
  


<br />
<br />
<section className="bg-[#9F9F9F] body-font">
  <div className="container px-6 sm:px-10 py-16 sm:py-24 mx-auto">
    <div className="flex flex-wrap justify-center text-center gap-8 sm:gap-0">
      <div className="p-4 w-full sm:w-1/3">
        <h2 className="title-font font-medium text-3xl sm:text-4xl text-gray-900 montserrat">
          Free delivery
        </h2>
        <p className="leading-relaxed text-lg">For all orders above $50</p>
      </div>
      <div className="p-4 w-full sm:w-1/3">
        <h2 className="title-font font-medium text-3xl sm:text-4xl text-gray-900 montserrat">
          90 days return
        </h2>
        <p className="leading-relaxed text-lg">If goods have problem</p>
      </div>
      <div className="p-4 w-full sm:w-1/3">
        <h2 className="title-font font-medium text-3xl sm:text-4xl text-gray-900 montserrat">
          Secure payment
        </h2>
        <p className="leading-relaxed text-lg">100% secure payment</p>
      </div>
    </div>
  </div>
</section>

 

</div>
</div>
  )
}
