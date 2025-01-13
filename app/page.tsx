"use client"
import React, { useEffect, useState } from 'react'
import Headerone from './mycomponets/Headerone'
import Popolarcar from './mycomponets/Popolarcar'
import RecomdeCar from './mycomponets/RecomdeCar'
import SideBar from './mycomponets/SideBar'
import { client } from '@/sanity/lib/client'

async function getdata(){
  const fetchdata=await client.fetch(`*[_type == 'car']  `)
  return fetchdata
}


const page =async () => {
  interface CarDatas {
    carName: string; // Name of the car
    purpose: string; // Purpose of the car
    length: number; // Length of the car
    price: string; // Rental price of the car
    carImage: {
        _type: "image";
        asset: {
          _type: "reference";
          _ref: string; // Reference ID of the image asset
        };
      };
    
    carDescription: string; // Detailed description of the car
    id: string; // Unique ID for the car
  }
  const [localdata, setlocaldata] = useState<CarDatas[]>([])
  useEffect(()=>{

    if(window!==undefined){
   
      
      localStorage.setItem("carddata",JSON.stringify([]))
    }
  })
  const sanitydata= await getdata()
  return (
    <div className='bg-gray-200 overflow-x-hidden'>
     
     <div>
      
     </div>
      < Headerone/>
      
      
      <Popolarcar/>
      {/* <RecomdeCar/> */}
     
     
      
         {/* <div className='fixed w-[25%] top-0 left-0 bg-white h-[1000px] mx-10 mt-4'>
          <h1 className='ml-5 mt-5'>Type</h1>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p >Spots (10)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>SUV(12)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>MPV(16)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Sedan(20)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Coupe(14)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Hatchback(14)</p>
          </div>
          <h1 className='mt-10 mx-5'>CAPACITY</h1>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>2 Person(10)</p>
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>4 Person (14)</p>
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p></p>6 Person(12)
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>8 or More16()</p>
          </div>
          <h1 className='mt-10 mx-5'>Price</h1>
          <div className='h-[20px] w-[300px] bg-gray-300 mt-5 mb-10'>
            <div className='h-[20px] w-[200px] bg-blue-800'></div>
          </div>
          <h1>Max.$100.00</h1>
          

        </div>  */}
         {/* <SideBar/>  */}
{/* <Pyment/> */}
       {/* <ProductDetails/> 
       <Headerone/>
       <Popolarcar/>
       <RecomdeCar/>
       <Footer/> */}
      
    </div>
  )
}

export default page