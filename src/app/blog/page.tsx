import Header from '@/components/header'
import React from 'react'
import Link from 'next/link'
import logo from "../../public/logo.png"
import Image from 'next/image'

export default function Blog(){
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
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black"> Blog</h1>
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
<Link href={"/blog"}>  <p className="block transition hover:text-gray-700"> Blog </p></Link>
</li>
</ol>
</nav>
</div>



</div>
</div>
</div>



<div className='grid grid-cols-2 max-sm:grid max-sm:grid-cols-1'>

<section className="bg-white h-[400px] pl-[100px]   w-[340px] py-6 px-4 font-[sans-serif] overflow-auto">
      <ul>
        <li>
          <a href="javascript:void(0)"
            className="text-black  text-[15px] block hover:bg-blue-50 rounded px-4 py-2.5 transition-all">
            Dashboard
          </a>
        </li>
      </ul>

      <div className="mt-4">
        <input type="Sreach" placeholder='sreach' className='border border-black text-slate-400 rounded-xl' />
        <h6 className="text-black text-sm font-bold px-4">Categories</h6>
        <ul className="mt-2">
          <li>
            <a href="javascript:void(0)"
              className="text-slate-400 text-[15px] block  rounded px-4 py-2.5 transition-all">
             Craft
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              className="text-slate-400  text-[15px] block  rounded px-4 py-2.5 transition-all">
           Design
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              className="text-slate-400  text-[15px] block rounded px-4 py-2.5 transition-all">
            Interior
            </a>
          </li>
          <li>
            <a href="javascript:void(0)"
              className="text-slate-400  text-[15px] block rounded px-4 py-2.5 transition-all">
              Wood
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <h6 className="text-blue-600 text-sm font-bold px-4">Income</h6>
     
      </div>

   
    </section>

<div className=''><article className="overflow-hidden  gap-7 rounded-lg shadow transition hover:shadow-lg w-[600px] max-sm:w-[330px] max-sm:pl-10">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    className="h-56 w-[600px] object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
    <button className='underline'>Veiw more</button>
  </div>
</article>
</div>
<br />


<div><article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[600px] max-sm:w-[330px] max-sm:pl-10  ">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    className="h-56 w-[600px] object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
    <button className='underline'>Veiw more</button>
  </div>
</article>
</div><br />
<br />
<div><article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[600px] max-sm:w-[330px] max-sm:pl-10 ">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    className="h-56 w-[600px] object-cover"
  />

  <div className="bg-white p-4 sm:p-6">
    <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

    <a href="#">
      <h3 className="mt-0.5 text-lg text-gray-900">How to position your furniture for positivity</h3>
    </a>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
    <button className='underline'>Veiw more</button>
  </div>
</article>
</div>
<br />
<br />
<div>
<ul className="flex space-x-5 felx-around font-[sans-serif] max-sm:pl-10">
    
     
      <li
        className="flex items-center justify-center shrink-0 bg-peach  border hover:border-blue-500 cursor-pointer text-base font-bold text-white px-[13px] h-9 rounded-lg">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 border bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
        2
      </li>
      <li
        className="flex items-center justify-center shrink-0 border  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
        3
      </li>
      <li
        className="flex items-center justify-center shrink-0 border  bg-[#FFF9E5] cursor-pointer text-base font-bold text-gray-800 px-[13px] h-9 rounded-lg">
      Next
      </li>
     
    </ul>
</div>
<br />
<br />


</div>

<section className="bg-[#9F9F9F] body-font max-sm:w-[410px] pl-[200px]">
  <div className="container px-10 py-24 mx-auto ">
    <div className="flex flex-wrap -m-4 text-center max-sm:grid max-sm:grid-cols-1">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 montserrat max-sm:pl-28">Free delivery</h2>
        <p className="leading-relaxed  max-sm:pl-28">For all orders above $50</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 montserrat  max-sm:pl-28 ">90 days return</h2>
        <p className="leading-relaxed montserrat  max-sm:pl-28">if goods have problem</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900 montserrat  max-sm:pl-28">Secure payment</h2>
        <p className="leading-relaxed montserrat  max-sm:pl-28">100% secure payment</p>
      </div>
      
    </div>
  </div>
</section>
    </div>
  )
}
