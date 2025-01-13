"use client"
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaCcMastercard, FaHeart } from 'react-icons/fa'
import { IoPeople } from 'react-icons/io5'
import { MdFiberManualRecord } from 'react-icons/md'
type SanityImage = {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string; // Reference ID of the image asset
  };
};
const Products = ({carName, carImage,price, length, purpose,id}:{carName:string, carImage:SanityImage,price:string, length:number,purpose:string,id:string}) => {

  const [white, setwhite] = useState(" text-gray-200 ")
  return (
    <div className='   mt-10 border bg-white py-5 px-5  w-[300px] rounded-xl '>
        
        <div className='flex justify-between px-3 items-center text-center ' >
            <h1 className='font-bold text-2xl'>{carName}</h1>
            <p>{<FaHeart  className={`text-2xl ${white}`} onClick={()=>{

              setwhite("text-red-700")
            }}/>}</p>
        </div>
        <p className='mb-14 text-gray-500'>{purpose}</p>
       
       {carImage &&  <Image
        src={urlFor(carImage).url()}
        alt='thisisimage'
        height={300}
        width={300}
        className=''
        />}
        <div className='flex gap-3 mt-14 text-gray-500'>
            <div className='flex items-center text-center gap-2 '><span><FaCcMastercard /></span><span>{length}L</span></div>
            <div className='flex items-center text-center gap-2 '><span><MdFiberManualRecord /></span><span>Manual</span></div>
            <div className='flex items-center text-center gap-2 '><span><IoPeople /></span><span> 2 People</span></div>
       
        </div>
        <div className='flex justify-between mt-14'>
            <p className=' font-bold'>{price}/Day</p>

          <Link href={`/Car/${id}`}> <button className='text-white bg-blue-700 px-7 py-4  font-bold'>View Details</button></Link>
        </div>

    </div>
  )
}

export default Products