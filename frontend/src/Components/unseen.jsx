import React from 'react'
import Unseen from '../assets/Unseen.png'

function unseen() {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div>
                    <img src={Unseen} />
                </div>
                <div>
                <div className='text-[#4D4D4D] font-medium text-4xl mb-6'>
                    <h1>The unseen of spending three</h1>
                    <h2> years at Pixelgrade</h2>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed</p>
                       <p>accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed </p>
                        <p>porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam</p>
                        <p>quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

                </div>
                <button className= 'px-6 py-2 bg-[#4CAF4F] rounded-md text-white mb-3.5 mt-8 text-center'>Learn More</button>
              </div>
            </div>
        </>
    )
}

export default unseen
