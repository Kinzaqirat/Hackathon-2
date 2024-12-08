import Header from '@/components/header'
import React from 'react'
import Link from 'next/link'
import logo from "../../public/logo.png"
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <Header/>

      <div>
      <div className="relative py-16 font-[sans-serif]">
      <div className="absolute inset-0 max-sm:w-[410px]">
        <img src="https://images.unsplash.com/photo-1625494025723-5a401deae8c8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white mt-8">
    <div  className="items-center flex justify-center">
    <Image src={logo} alt=''></Image>

    </div>
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">Account</h1>
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
    <Link href={"/account"}>  <p className="block transition hover:text-gray-700"> Account </p></Link>
    </li>
  </ol>
</nav>
</div>


     
      </div>
    </div>
    </div>


{/* more */}

<div className='flex justify-evenly max-sm:grid max-sm:grid-cols-1'>
<div className='max-sm:pl-11'>
  <h1 className='montserrat font-bold text-[30px]'>Login</h1>
  <br />
  <form action="">
    <p className='montserrat text-[20px]'> Username and email address</p>
    <br />
    <input type="" className='border border-black w-[250px] h-[50px]  rounded-xl' />
  </form>
  <br />
  <br />
  <form action="">
    <p className='montserrat text-[20px]'> Password</p>
    <br />
    <input type="" className='border border-black w-[250px] h-[50px]  rounded-xl' />
  </form>
  <br />
  <div className="space-y-6">

  <div className="flex items-center">
    <input type="radio" className="w-5 h-5" />
    <label className="text-sm text-black ml-4 montserrat">remember me</label>
  </div>
<br />



</div>

  <div className='flex justify-center gap-6 '>
    <button className='montserrat w-[100px] h-[50px] border border-black rounded-xl'>login </button>
    <button className='montserrat w-[150px] h-[50px]  rounded-xl'>Forget Password </button>
  </div>
</div>

<div  className='max-sm:pl-11'>
  <h1 className='montserrat font-bold text-[30px]'>Register</h1>
  <br />
  <form action="">
    <p className='montserrat text-[20px]'> Email address</p>
    <br />
    <input type="" className='border border-black w-[250px] h-[50px]  rounded-xl' />
  </form>
  <br />
  <br />
<p  className='montserrat text-slate-400'>A link to set new password will be sent to your
  <br />
  email address
  <br />
  <br />
  Your personal data will be support your
  <br />
  experience through the websites to manage access
<br />
your account and other purpose describeed in our 
<br />
<span className='font-black'>privacy policy</span>

   </p>
  <br />



    <button className='montserrat w-[150px] h-[50px] border border-black rounded-xl'>Register</button>

</div>




</div>
<br />
<br />


<section className="bg-[#9F9F9F] body-font pl-[200px]">
  <div className="container px-10 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 montserrat">Free delivery</h2>
        <p className="leading-relaxed">For all orders above $50</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 montserrat ">90 days return</h2>
        <p className="leading-relaxed montserrat">if goods have problem</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 montserrat">Secure payment</h2>
        <p className="leading-relaxed montserrat">100% secure payment</p>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}
