"use client"
import Navbar from '@/components/header'
import React, { useContext } from 'react'
import Link from 'next/link'
import logo from "../../../public/logo.png"
import { IoTime } from "react-icons/io5";
import Image from 'next/image'
import { CartContext } from '@/app/context/CartContext';





export default function Check() {
  
  const {items,add ,dec,qty,totalQuantity,totalPrice,itemQty,remove} :any = useContext(CartContext);
 
    //  const {items,add ,dec,qty,totalQuantity,totalPrice,itemQty,remove} :any = useContext(CartContext);
  
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
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">Checkout</h1>
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
    <Link href={"/check"}>  <p className="block transition hover:text-gray-700"> check </p></Link>
    </li>
  </ol>
</nav>
</div>


     
      </div>
    </div>
    </div>
<br />
<br />










{/* */}

      <div className=" pl-[100px]">
      <div className="flex max-sm:flex-col gap-12 max-lg:gap-4  ">
       

        <div className="max-w-4xl w-full h-max rounded-md px-4 py-8 ">
          <h2 className="text-4xl font-bold montserrat">Billing Details</h2>
          <form className="mt-8 h-[1500px] max-sm:h-[1800px]">
            <br />

            
             
              <div className="grid md:grid-cols-2 gap-[30px] h-[70px]">
                <div className=''>
                    <label className='text-[20px] montserrat'>First Name</label>
                    <br />
                  <input type="text" placeholder=""
                    className="px-4 py-3 bg-transparent h-[70px] w-[200px] text-sm rounded-xl border border-black" />
                        </div>

             <div className=''>
             <label className='text-[20px] montserrat'>Last Name</label>
             <br />
                  <input type="text" placeholder=""
                    className="px-4 py-5    w-[200px] text-sm  h-[70px] rounded-xl border border-black" />
                </div>

                <div>
                <label className='text-[20px] montserrat'>Comapny name (Optional)</label>
                <br />
                  <input type="email" placeholder=""
                  
                    className="px-4 py-3 w-full text-sm rounded-xl h-[70px] border border-black " />
                </div>
                <br />
                <div>
                <label className='text-[20px] montserrat'>Country\Region</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl h-[70px] border border-black " />
                </div>
                <br />
                <div>
                <label className='text-[20px] montserrat'>Street address</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl h-[70px] border border-black " />
                </div>

                <br />  
                 <div>
                <label className='text-[20px] montserrat'>Town city</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl border h-[70px] border-black " />
                </div>
                <br />
                <div>
                <label className='text-[20px] montserrat'>Province</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl border h-[70px] border-black " />
                </div>

                <br />
                <div>
                <label className='text-[20px] montserrat'>Zip code</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl border h-[70px] border-black " />
                </div>
                <br />
                <div>
                <label className='text-[20px] montserrat'>Phone</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl border h-[70px] border-black " />
                </div>
                <br />
                <div>
                <label className='text-[20px] montserrat'>Email address</label>
                <br />
                  <input type="email" placeholder=""
                    className="px-4 py-3 w-full text-sm rounded-xl border h-[70px] border-black " />
                </div>
                <br />
                <div>
                
                  <input type="email" placeholder="Additional information "
                    className="px-4 py-3 w-full montserrat text-sm rounded-xl border h-[70px] border-black " />
                </div>







            </div>
            <br />
            <br />

            
           
          </form>
        </div>

        <div className=" sm:h-screen  sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">

{items.map((product:any)=>(
  <div className='grid grid-cols-2'>
  <div>
      <h1 className='montserrat text-xl font-bold'>Product</h1>
      <br />
  
      <p className='montserrat text-slate-400'>{product.name} <span className='text-black'>{totalQuantity}</span></p>
      <br />
      <img src={product.imagePath} alt="" className='w-[200px] h-[200px]' />
      <p className='montserrat'>  Subtotal</p>
      <br />
      <p className='montserrat'> Total</p>
     <br />
     
  <div>
      <p className='montserrat'>Direct Bank transfer</p>
      <p className='montserrat text-slate-400'>
{product.description}
        </p>
        <br />
  
        <div className='items-center flex justify-center'>
        <button className='montserrat border border-black w-[200px] h-[50px] rounded-xl'>Place order</button>
        </div>
  </div>
  </div>
  <div>
      <h1 className='montserrat text-xl font-bold'>Subtotal</h1>
     <br />
      <p className='montserrat'>{product.price}</p>
      <br />
      <p className='montserrat'>{product.totalPrice}</p>
      <br />
      <p className='montserrat text-[#B88E2F] font-extrabold'>{product.totalPrice}</p>
  </div>
  
  
  
  </div>
))}
               

             

                

                
              </div>
            </div>

           
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}


function useState<T>(arg0: null): [any, any] {
  throw new Error('Function not implemented.')
}

