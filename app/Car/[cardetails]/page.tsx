"use client"
import ProductDetails from '@/app/mycomponets/ProductDetails'
import { client } from '@/sanity/lib/client'
import React, { useEffect, useState } from 'react'
const getdata= async()=>{
    const mydata= await client.fetch(`*[_type == 'car']`).then(data=>{
return data
    }).catch(erro=>{console.log(erro)})
    return mydata
}

const Page = ({params}:{params:{cardetails:string}}) => {
  const dynamicnumber=params.cardetails


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
  
  const [alldata, setalldata] = useState<CarDatas[]>([])
  const [filterdata, setfilterdata] = useState<CarDatas[]>([])
  useEffect(()=>{
   
    try{
      getdata().then(data=>{
        setalldata(data)
        
      })
    }catch(err){
      console.log(err)
    }
   
    

  })
  useEffect(()=>{

    if(alldata){
      const filteringdata=alldata.filter((val)=>val.id==dynamicnumber)
      console.log(filteringdata)
      setfilterdata(filteringdata)
    }
  })
  return (
    <div>
    
    {filterdata && <div>
    {
      filterdata.map((val,ind)=>
  
        <ProductDetails {...val} key={ind}/>
      )
    }
      </div>}
    </div>
  )
}

export default Page