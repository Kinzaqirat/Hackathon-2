import Image from 'next/image'
import React from 'react'
import { CiTimer } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";

export default function Blog() {
  return (
//     <div className='grid grid-cols-3 pl-[30px] max-sm:grid max-sm:grid-cols-1   md:grid-cols-2  '>
//       <div className='w-[393px] h-[555px] max-sm:w-[300px] max-sm:h-[400px] max-md:w-[300px]'>
//         <img src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' 
//         className='rounded-xl'
        
//         ></img>

// <p className='montserrat text-center'>Going all with-us in desgin</p>
// <br />
// <div className='items-center pl-[100px]'>
// <button className='montserrat text-center font-bold text-[20px] underline '>Read.more </button>
// </div>
// <div className='flex justify-center gap-3'>
// <CiTimer  className='text-[20px]'/><p>
//     15mins

// </p>
// <CiCalendar  className='text-[20px]' />
// <p>
//     oct 12,2022
// </p>
// </div>
//       </div>



//       <div className='w-[393px] h-[555px]  max-sm:w-[300px] max-sm:h-[400px]'>
//         <img src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' 
//         className='rounded-xl'
        
//         ></img>

// <p className='montserrat text-center'>Going all with-us in desgin</p>
// <br />
// <div className='items-center pl-[100px]'>
// <button className='montserrat text-center font-bold text-[20px] underline '>Read.more </button>
// </div>
// <div className='flex justify-center gap-3'>
// <CiTimer  className='text-[20px]'/><p>
//     15mins

// </p>
// <CiCalendar  className='text-[20px]' />
// <p>
//     oct 12,2022
// </p>
// </div>
//       </div>




//       <div className='w-[393px] h-[555px]  max-sm:w-[300px] max-sm:h-[400px]'>
//         <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='' 
//         className='rounded-xl'
        
//         ></img>

// <p className='montserrat text-center'>Going all with-us in desgin</p>
// <br />
// <div className='items-center pl-[100px]'>
// <button className='montserrat text-center font-bold text-[20px] underline '>Read.more </button>
// </div>
// <div className='flex justify-center gap-3'>
// <CiTimer  className='text-[20px]'/><p>
//     15mins

// </p>
// <CiCalendar  className='text-[20px]' />
// <p>
//     oct 12,2022
// </p>
// </div>
//       </div>
//       <br />
//      <div className='flex justify-center'>
//      <button className='montserrat underline font-bold text-[30px] max-sm:text-[20px] md:pl-[300px]'>Veiw all post</button>
//      </div>
//     </div>

<div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 sm:px-8">
  {Array(3)
    .fill("")
    .map((_, index) => (
      <div key={index} className="w-full max-w-[393px] h-auto mx-auto">
        <img
          src={`https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
          alt=""
          className="w-full h-[555px] max-sm:h-[400px] object-cover rounded-xl"
        />
        <p className="montserrat text-center mt-4">Going all with-us in design</p>
        <div className="flex justify-center mt-2">
          <button className="montserrat font-bold text-[20px] underline">Read more</button>
        </div>
        <div className="flex justify-center items-center gap-3 mt-4">
          <CiTimer className="text-[20px]" />
          <p>15 mins</p>
          <CiCalendar className="text-[20px]" />
          <p>Oct 12, 2022</p>
        </div>
      </div>
    ))}
  <div className="flex justify-center mt-8">
    <button className="montserrat underline font-bold text-[30px] sm:text-[25px] max-sm:text-[20px]">
      View all posts
    </button>
  </div>
</div>

</div>
  )
}
