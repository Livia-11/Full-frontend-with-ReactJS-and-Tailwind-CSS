import React from 'react'
import Club from '../assets/Club.png'
import Finger from '../assets/Finger.png'
import Pay from '../assets/Pay.png'
import Ppl from '../assets/Ppl.png'

function help() {
    return (
        <>
            <div className='flex gap-48 bg-[#F4F7FA] justify-center'>
                <div className='m-20'>
                    <div className='font-medium text-3xl mb-1'>
                        <h1 className='text-[#4D4D4D]'>Helping a local</h1>
                        <h2 className='text-[#4CAF4F]'>business reinvent itself</h2>
                    </div>
                    <p className='text-xs'>We reached here with our hard work and dedication</p>
                </div>
                <div className='flex mt-10 ml-5'>
                <div className='flex gap-3 mr-36'>
              <div>
                <img src={Ppl} className='mb-10' />
                <img src={Finger} />
                </div>
                <div className='mb-5'>
                <p className=' font-bold text-2xl text-[#4D4D4D]'>2,245,341</p>
                <p className='text-[#4D4D4D] text-xs mb-10'>Members</p>
                <p className=' font-bold text-2xl text-[#4D4D4D]'>828,867</p>
                <p className='text-[#4D4D4D] text-xs'>Event Bookings</p>
              </div>
              </div>

              <div className='flex gap-3'>
              <div>
                <img src={Club} className='mb-10'/>
                <img src={Pay} />
                </div>
                <div>
                <p className=' font-bold text-2xl text-[#4D4D4D]'>46,328</p>
                <p className='text-[#4D4D4D] text-xs mb-10'>Clubs</p>
                <p className=' font-bold text-2xl text-[#4D4D4D]'>1,926,436</p>
                <p className='text-[#4D4D4D] text-xs'>Payments</p>
              </div>
              </div>
              </div>
            </div>
        </>
    )
}

export default help
