import React from 'react'
import first from '../assets/4.png'
import Sphere from '../assets/sphere.png'
import Game from '../assets/game.png'
import Lorem from '../assets/Lorem.png'
import Maze from '../assets/maze.png'
import Infin from '../assets/Infinity.png'
import Gamey from '../assets/game.png'
import Member from '../assets/Member.png'
import National from '../assets/National.png'
import Club from '../assets/Club.png'

function clients() {
  return (
    <>
      <div className='flex justify-center items-center text-[#4D4D4D] font-medium text-4xl mt-8'>
        <h1>Our Clients</h1>
      </div>
      <div className='flex justify-center items text-[#4D4D4D] text-xs'>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className='flex justify-center gap-36 py-8 mb-9'>
        <img src={first} />
        <img src={Sphere} />
        <img src={Game} />
        <img src={Lorem} />
        <img src={Maze} />
        <img src={Infin} />
        <img src={Gamey} />
      </div>
      <div className='flex justify-center items-center text-[#4D4D4D] font-medium text-4xl'>
        <h2>Manage your entire community</h2>
      </div>
      <div className='flex justify-center items-center text-[#4D4D4D] font-medium text-4xl'>
        <h3 className='ml-14'>in a single system</h3>
      </div>
      <p className='flex justify-center text-xs mt-2 mb-9 text-[#717171]'>Who is Nextcent suitable for?</p>

      <div className='flex gap-32 justify-center mb-12'>

        <div className='shadow-3xl bg-white px-4 py-5 shadow-2xl rounded-md'>
          <div className='justify-center items-center'>
            <img className='ml-[88px]' src={Member} />
          </div>

          <h1 className='text-[#4D4D4D] font-medium text-3xl text-center'>Membership</h1>
          <h2 className='text-[#4D4D4D] font-medium text-3xl text-center mb-3'>Organisations</h2>
          <div className='block'>
            <p className='text-center'>Our membership management </p>
            <p className='text-center'>software provides full automation of </p>
            <p className='text-center'>membership renewals and payments</p>
          </div>
        </div>

        <div className='shadow-3xl bg-white px-4 py-5 shadow-2xl rounded-md'>
          <div className='justify-center items-center'>
            <img className='ml-[88px]' src={National} />
          </div>

          <h1 className='text-[#4D4D4D] font-medium text-3xl text-center'>National</h1>
          <h2 className='text-[#4D4D4D] font-medium text-3xl text-center mb-3'>Associations</h2>
          <div className='block'>
            <p className='text-center'>Our membership management </p>
            <p className='text-center'>software provides full automation of </p>
            <p className='text-center'>membership renewals and payments</p>
          </div>
        </div>

        <div className='shadow-3xl bg-white px-4 py-5 shadow-2xl rounded-md'>
          <div className='justify-center items-center'>
            <img className='ml-[88px]' src={Club} />
          </div>

          <h1 className='text-[#4D4D4D] font-medium text-3xl text-center'>Clubs And</h1>
          <h2 className='text-[#4D4D4D] font-medium text-3xl text-center mb-3'>Groups</h2>
          <div className='block'>
            <p className='text-center'>Our membership management </p>
            <p className='text-center'>software provides full automation of </p>
            <p className='text-center'>membership renewals and payments</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default clients
