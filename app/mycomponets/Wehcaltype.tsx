"use client"
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import React, { useEffect, useState } from 'react'

const getdata= async()=>{
    const mydata= await client.fetch(`*[_type == 'car']`).then(data=>{
return data
    }).catch(erro=>{console.log(erro)})
    return mydata
}
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
const Wehcaltype = ({carid}:{carid:string}) => {
  const [alldata, setalldata] = useState<CarDatas[]|undefined>(undefined)
 
  useEffect(()=>{
    try{
      getdata().then(data=>{
       
        
        const filterdata=data.filter((val:any)=>val.id==carid)
        setalldata(filterdata)
        
      })
    }catch(err){
      console.log(err)
    }
  },[carid])
  console.log(alldata)

  
  return (
    <div>
      {
        alldata && <div className=' py-4 px-5  rounded-md  m-3 flex justify-center items-center  h-screen'>
        
        <div>
        <img src={urlFor(alldata[0].carImage).url()} alt='thisisiamge'  className='h-[60%] w-[60%] bg-center bg-cover  '/>
        
        <p className='text-3xl font-bold text-red-600 my-10'>{alldata[0].carName}</p>

        <p className='md:text-2xl font-light text-blue-700 mb-10 md:w-[50%]'>{alldata[0].carDescription}</p>
        <p className='md:text-2xl bg-blue-600 py-5 px-2 font-bold mb-10 inline-block'>${alldata[0].price}/Hour</p>
        </div>
          
        </div>
      }
    </div>
  )
}

export default Wehcaltype


