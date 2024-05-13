import React from 'react'
import Nexcent from '../assets/nexcent.png'

function navbar() {
  return (
    <>

    <nav className='flex justify-center items-center gap-36 bg-[#F5F7FA]'>
    <div> 
      <img src={Nexcent} className='mt-8 '/>
      </div>  

      <ul className='flex gap-10 mt-8'>
        <li>
            <a href="/">Home</a> 
        </li>
        <li>
            <a href="/tech.html">Service</a>
        </li>
        <li>
            <a href="/">Feature</a> 
        </li>
        <li>
            <a href="/">Product</a> 
        </li>
        <li>
            <a href="/">Testimonial</a> 
        </li>
        <li>
            <a href="/">FAQ</a> 
        </li>
       
      </ul>
     <div className='flex gap-10 mt-8 px-6'>
        <button className='text-green-700'>Login</button>
     <button className='px-6 py-2 bg-[#4CAF4F] rounded-md text-white mb-3.5'>Sign up</button>
     </div>

    </nav>
      

    </>
  )
}

export default navbar
