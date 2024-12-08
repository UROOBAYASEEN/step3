import React from 'react'
import background from "../../public/image 7.png"
import car  from "../../public/BG.png"
import Image from 'next/image'
import image8 from '../../public/image 8.png'
import { IoIosArrowDown } from 'react-icons/io'

const Headerone = () => {
  return<div className=' mt-10 bg-gray-200  overflow-x-hidden'>
<div className='flex gap-10 justify-center'>
    <div className=' one w-[640px] h-[360px] bg-blue-400 rounded-md  relative'>
      <div className='absolute  bottom-0 left-[100px]'>
        <Image
        src={car}
        alt='thisisiameg'
        width={600}
        height={900}
        className=''
        
        />
      </div>
        <h1 className='text-white text-3xl w-[60%] leading-[43px] mt-5 ml-5 font-[500]'>The Best Plateform For Car Rental</h1>
        <p className='text-white ml-5 w-[60%] mt-4 text-[300]'>Ease of Doing a Car Rental Sefely and reliably.Of course at a low price</p>
        <button className='bg-blue-800 text-white px-9 py-3 mt-5 ml-5 rounded-md'>Rental Car</button>
    </div>
    <div className=' two w-[640px] h-[360px] bg-blue-700 rounded-md  relative  hidden md:inline'>
      <div className='absolute  bottom-0 left-[200px] '>
        <Image
        src={image8}
        alt='thisisiameg'
        width={400}
        height={600}
        className=''
        
        />
      </div>
        <h1 className='text-white text-3xl w-[60%] leading-[43px] mt-5 ml-5 font-[500]'>Easy Way To Rent a Car At Low Price</h1>
        <p className='text-white ml-5 w-[60%] mt-4 text-[300]'>Providing Cheap car rental Service and safe and comfortable sevices</p>
        <button className='bg-blue-800 text-white px-9 py-3 mt-5 ml-5 rounded-md'>Rental Car</button>
    </div>
    </div>
    <div className=' gap-10 justify-end mx-5 mt-6  md:flex'>
      <div className='w-[450px] py-5 border border-gray-500 bg-white px-5 mb-10'>
        <div className='flex items-center gap-2 mt-5 ml-5'><span className='h-2 w-2 bg-blue-700 rounded-full'></span><span>Pick-Up</span></div>
        <div className='flex justify-center gap-3 mt-4'>
          <div>
          <h1 className='font-bold'>Locations</h1>
          <div className='flex items-center gap-5 text-gray-400 mt-2'><span>Select your city</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Date</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your date</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Time</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your time</span><span>
          <IoIosArrowDown /></span></div>
          </div>


        </div>
      </div>
      <div className='w-[450px] py-5 border border-gray-500'>

      <div className='  border  bg-white px-5'>
        <div className='flex items-center gap-2 mt-5 ml-5'><span className='h-2 w-2 bg-blue-700 rounded-full'></span><span>Drop-OF</span></div>
        <div className='flex justify-center gap-3 mt-4'>
          <div>
          <h1 className='font-bold'>Locations</h1>
          <div className='flex items-center gap-5 text-gray-400 mt-2'><span>Select your city</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Date</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your date</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Time</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your time</span><span>
          <IoIosArrowDown /></span></div>
          </div>


        </div>
      </div>
      </div>
    </div>
    </div>
   
   

  
   
   
  
}

export default Headerone