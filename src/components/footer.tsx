import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-white py-12 px-8 font-sans tracking-wide ">
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
        <div className="lg:col-span-2">
   
          <p className="text-slate-400 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida,
            mi eu pulvinar cursus, sem elit interdum mauris.</p>

                </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-400">Links</h4>
          <ul className="space-y-4">
           <Link href={"/head"}> <li className="text-black montserrat text-[15px]">Home
           </li></Link>
           <Link href={"/shopp"}> <li className=" text-black montserrattext-[15px]">Shop
          </li></Link>
           <Link href={"/account"}> <li className="text-black montserrat text-[15px]">About
           </li></Link>
    <Link href={"/contact"}>        <li className="text-black montserrat text-[15px]">Contact</li></Link>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-400">Help?</h4>
          <ul className="space-y-4">
            <li><a href="javascript:void(0)" className="text-black montserrat text-[15px]">Payments options</a>
            </li>
            <li><a href="javascript:void(0)" className="text-black montserrat text-[15px]">Return</a>
            </li>
            <li><a href="javascript:void(0)" className="text-black montserrat text-[15px]">Privacy policy</a>
            </li>
        
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-[#333]">About Us</h4>
          <div className="bg-[#e8e8e88f] flex px-4 py-3 rounded-md text-left mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
              className="fill-gray-500 mr-3 rotate-90">
              <path
                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
              </path>
            </svg>
            <input type='email' placeholder='Search...' className="w-full outline-none bg-transparent text-gray-600 text-[15px]" />
          </div>
        </div>
      </div>
    </footer>


    <footer className="bg-white font-sans tracking-wide">
      <div className="py-12 px-12">
        <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
        

         
        </div>

        <hr className="my-6 border-slate-300" />

        <p className='text-start text-black text-base'>©  All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
