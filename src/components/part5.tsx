import React from 'react'

export default function Part5() {
  return (
    <div>
      <div className="relative py-16 font-[sans-serif]">
      <div className="absolute inset-0 max-sm:w-[400px]">
        <img src="https://images.unsplash.com/photo-1495774856032-8b90bbb32b32?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white mt-8 max-sm:w-[200px]">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-black">Welcome Instagram</h1>
        <p className="text-lg md:text-xl mb-12 text-black">Foolow our store on instagram</p>
        <button type="button" className="bg-white text-black text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl">Follow us</button>
      </div>
    </div>
    </div>
  )
}
