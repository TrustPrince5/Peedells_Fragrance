import React from 'react'
import { Link } from 'react-router'

function Banner() {
  return (
    <div className='banner w-full h-[70vh] md:h-[80vh] relative'>
      <img src="/img/irrisitable.jpg" alt="" className='w-full h-full object-cover' />
      <div className=' absolute md:top-1/2 bottom-1/4 md:left-3/4 left-1/2 transform md:-translate-x-1/12 md:-translate-y-1/12 -translate-y-3/4 -translate-x-1/12 space-y-4 text-sm md:text-left'>
        <h2 className='text-4xl hidden md:block banner-text font-extrabold text-slate-800'> PeeDELL's Fragrances..</h2>
        <Link to="/products" className='banner-button  bg-[#ac7064] hover:bg-[#9b5b54] hover:text-amber-500 text-white py-3 px-4 rounded cursor-pointer'>Shop now...</Link>

      </div>
    </div>
  )
}

export default Banner;
  


 