import React from 'react';
import Illustration from '../assets/Illustration.png';
import Dot from '../assets/Dot.png';

function Home() {
  return (
    <>
      <div className='md:autofill bg-[#F5F7FA]'>
        <div className='flex'>
          <div className='px-80 py-6 ml-10 mt-16'>
            <div className='text-5xl'>
              <h1 className='font-medium text-[#4D4D4D]'>Lessons and insights</h1>
              <h2 className='text-[#4CAF4F] mt-3'>from 8 years</h2>
            </div>
            <p className='text-xs mt-5'>Where to grow your business as a photographer: site or social media?</p>
            <button className='px-6 py-2 bg-[#4CAF4F] rounded-md text-white mb-3.5 mt-8'>Register</button>
          </div>
          <div className='mt-10 h-60 w-60'>
          <img src={Illustration} />
          </div>
        </div>
        <div className='flex justify-center items-center'> {/* Added a container to center the Dot image */}
          <img src={Dot} alt="Dot" /> {/* Centered Dot image */}
        </div>
      </div>
    </>
  );
}

export default Home;
