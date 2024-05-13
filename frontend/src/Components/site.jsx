import React from 'react'
import Pana from '../assets/pana.png'

function site() {
    return (
        <>
            <div className='flex justify-center items-center mt-20'>
                <div>
                    <img src={Pana} />
                </div>
                <div>
                    <div className='text-[#4D4D4D] font-medium text-4xl mb-6'>
                        <h1>How to design your site footer like</h1>
                        <h2>we did</h2>
                    </div>
                    <div>
                        <p>Donec a eros justo.Fusce egestas tristique ultrices.Nam tempor, augue nec tincidunt</p>
                        <p>molestie, massa nunc varius arcu, at scelerisque elit erat a magna.Donec quis erat at</p>
                        <p>libero ultrices mollis.In hac habitasse platea dictumst.Vivamus vehicula leo dui, at porta</p>
                        <p>nisi facilisis finibus.In euismod augue vitae nisi ultricies, non aliquet urna tincidunt.Integer</p>
                        <p>in nisi eget nulla commodo faucibus efficitur quis massa.Praesent felis est, finibus et nisi</p>
                        <p>ac, hendrerit venenatis libero.Donec consectetur faucibus ipsum id gravida.</p>

                    </div>
                    <button className='px-6 py-2 bg-[#4CAF4F] rounded-md text-white mb-3.5 mt-8 text-center'>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default site
