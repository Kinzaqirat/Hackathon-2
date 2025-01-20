import Header from '@/components/header'
import React from 'react'
import Link from 'next/link'
import logo from "../../../public/logo.png"
import { IoTime } from "react-icons/io5";
import Image from 'next/image'
export default function Contact() {
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
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">Contact</h1>
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
    <Link href={"/contact"}>  <p className="block transition hover:text-gray-700"> Contact </p></Link>
    </li>
  </ol>
</nav>
</div>


     
      </div>
    </div>
    </div>
<br />

<br />

<div>
<h1 className="text-4xl font-bold montserrat text-center">Get in Touch</h1>
<p className="text-sm text-gray-300 mt-4 leading-relaxed montserrat text-center max-sm:pl-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
<div className="mt-6 max-w-6xl max-lg:max-w-3xl mx-auto  rounded-lg">
            <div className="grid lg:grid-cols-2 items-center gap-14 sm:p-8 p-4 font-[sans-serif]">
                <div>
                 

                    <ul className=" space-y-8">

                    <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill='black' viewBox="0 0 368.16 368.16" className='bg-white rounded-xl'>
                                <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
                                <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
                            </svg>
                            <a href="javascript:void(0)" className=" text-sm ml-4 montserrat">
                                <h1 className='montserrat text-[30px] font-bold'>Address</h1>
                                <br />
                                236 5th SE Avenue, New
                                <br />
                                York NY1000,United State
                            </a>
                        </li>
                    
                        <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" fill='black' viewBox="0 0 482.6 482.6">
                                <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" data-original="#000000"></path>
                            </svg>
                            <a href="javascript:void(0)" className=" text-sm ml-4">
                            <h1 className='montserrat text-[30px] font-bold'>Phone</h1>
                                <br />
                            Mobile: +(84) 546 6789
                                <br />
                                Mobile: +(84) 456 6789
                            </a>
                        </li>
                   
                        <li className="flex items-center">
                        <IoTime className='text-[30px]' />
                            <a href="javascript:void(0)" className=" text-sm ml-4">
                            <h1 className='montserrat text-[30px] font-bold'>Working Time</h1>
                                <br />
                          Monday-friday:9.00 t0 22.00
                                <br />
                                Mobile: +(84) 456 6789
                                <br />
                                Saturday-Sunday:9.00 t0 21.00
                                <br />
                                                           </a>
                        </li>
                    </ul>

                   
                </div>

                <div className="bg-white p-6 rounded-lg">
   
                   

                    <form className="mt-8 space-y-4">
                        <h1 className='montserrat text-[20px]'>Your Name</h1>
                        <input type='text' placeholder=''
                        
                            className="w-full rounded-xl py-3 px-4 border border-black text-sm" />
                               <h1 className='montserrat text-[20px]'>Email Address</h1>
                        <input type='email' placeholder='Email'
                            className="w-full rounded-xl py-3 px-4 border border-black text-sm" />
                                  <h1 className='montserrat text-[20px]'>Subject</h1>
                        <input type='text' placeholder='Subject'
                            className="w-full rounded-xl py-3 px-4 border border-black text-sm" />
                                  <h1 className='montserrat text-[20px]'>Message</h1>
                        <textarea placeholder='Message' rows={6}
                            className="w-full rounded-xl px-4 border border-black text-sm pt-3"></textarea>
                        <button type='button'
                            className="text-black tracking-wide border rounded-xl border-black text-sm px-4 py-3 flex items-center justify-center w-full !mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                            </svg>
                            Sumbit
                        </button>
                    </form>
                </div>
            </div>
        </div>
</div>
<br />
<br />
<section className="bg-[#9F9F9F] body-font max-sm:w-[410px]">
  <div className="container px-10 py-24 mx-auto pl-[200px]">
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
<br />
<br />

    </div>
  )
}
