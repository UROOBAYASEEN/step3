"use client"
import Link from 'next/link'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const page = () => {
    const date= new Date().toLocaleDateString()
    console.log("this is date",date)
    const tilimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQADsnTGvrKMR4EqGZ9v0jSe494HdYDXUFJSg&s'
    
  return (
    <div className='flex justify-center h-screen w-screen mx-3'>
        <div className='mt-10'>
          <p><AiFillCheckCircle className='text-[150px] font-bold text-blue-700'/></p>
          
          
            <h1 className='font-bold text-2xl mt-7'>Payment Successful !</h1>
            <p className='font-bold mt-4'>We send you Emale please check.</p>
            <p className='font-bold mt-4'>Date</p>
            <p>{date}</p>
            <p className='font-bold mt-4'>Status</p>
            <p className='font-bold mt-4'>
            Successful</p>
           <Link href="/"><p className='mt-10 font-bold text-white bg-blue-600 py-3 px-5 uppercase'>back to home </p></Link>
           
           
        </div>
      
    </div>
  )
}

export default page
