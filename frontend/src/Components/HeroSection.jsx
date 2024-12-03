import React from 'react'
import product1 from "../assets/product1.png"
const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-lg:mt-20'>
    <h1 className='text-4xl sm:text-4xl lg:text-6xl text-center tracking-wide'>
        Annotix data labelling tools for 
        <span className='bg-gradient-to-r from-purple-500 to-orange-800 text-transparent bg-clip-text'> {" "}AI and ML Teams</span>
    </h1>
    <p className='mt-10 text-lg text-center text-neutral max-w-4xl'>
      Empower your AI models with accurate data,with our tools data labelling has become much easier.
      Get started Today
    </p>
    <div className='flex justify-center my-10'>
     <a href='#' className='bg-gradient-to-r from-purple-500 to-orange-800 py-3 px-4 mx-3 rounded-md'>
       Start for free
     </a>
     <a href='#' className='py-3 px-4 mx-3 rounded-md border'>
       Start for free
     </a>
    </div>
    <div className='flex mt-10 justify-center'>
    <img className= "rounded-lg w-1/2 border border-purple-500 shadow-purple-800 mx-2 my-4 "src={product1} alt-=""/>
    </div>
    </div>
  )
}

export default HeroSection