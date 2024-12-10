import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const Review = ({name,image,possition,description}:{name:string,image:any,possition:string,description:string}) => {
  return (
    <div>
      <div className='md:flex justify-between gap-3 item-center items-start mt-10'>
        <div className='flex justify-center item-center items-start gap-5 px-5'>
          <Image
          src={image}
          alt='thisisiamge'
          height={80}
          width={80}
          className='rounded-full mt-10 '
          />
            <div className='mt-10'>
          <h1 className='font-bold uppercase text-2xl'>{name}</h1>
          <p>{possition}</p>
          <p className='lg:w-[50%] w-[-10px] mt-5'>{description}</p>

        </div>
        </div>
        <div className='w-[20%] '> 21-july-2021</div>
        <div className='flex gap-2'>
        <FaStar  className='text-2xl text-yellow-400'/>
        <FaStar  className='text-2xl text-yellow-400'/>
        <FaStar className='text-2xl text-yellow-400'/>
        <FaStar className='text-2xl text-yellow-400'/>
        <FaStar className='text-2xl   text-gray-200'/>

        </div>
       
       

      </div>
        
    </div>
  )
}

export default Review