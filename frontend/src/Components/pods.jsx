import React from 'react'
import Pod from '../assets/image 9.png'
import Logo from '../assets/Logo.png'
import Sphere from '../assets/sphere.png'
import Game from '../assets/game.png'
import Lorem from '../assets/Lorem.png'
import Maze from '../assets/maze.png'
import Infin from '../assets/Infinity.png'
import Frame from '../assets/Frame 13.png'

function pods() {
    return (
        <>
            <div className='flex  justify-center items-center mt-20 bg-[#F4F7FA] gap-32'>
                <div className='mt-10 mb-10'>
                    <img src={Pod} />
                </div>

                <div className='mt-10 mb-10'>
                    <div className='text-[#717171] mb-5'>
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus</p>
                        <p>tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida </p>
                        <p> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie</p>
                        <p>mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse </p>
                        <p>eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien,</p>
                        <p>vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum </p>
                        <p>id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    </div>
                    <p className='text-[#4CAF4F] font-medium mb-5'>Tim Smith</p>
              <p className='text-[#89939E]'>British Dragon Boat Racing Association</p>
             
             <div className='flex gap-10 mt-6'>
                <img src={Logo} />
                <img src={Sphere} />
                <img src={Game} />
                <img src={Lorem} />
                <img src={Maze} />
                <img src={Infin} />
                <img src={Frame} />

             </div>
            </div>
            </div>
        </>
    )
}

export default pods
