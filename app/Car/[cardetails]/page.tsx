"use client"
import ProductDetails from '@/app/mycomponets/ProductDetails'
import Products from '@/app/mycomponets/Products'
import { client } from '@/sanity/lib/client'
import React, { use, useEffect, useState } from 'react'
const getdata= async()=>{
    const mydata= await client.fetch(`*[_type == 'car']`).then(data=>{
return data
    }).catch(erro=>{console.log(erro)})
    return mydata
}

const Page = ({ params }: { params: Promise<{ cardetails: string }> }) => {
  const { cardetails } = use(params);
  const dynamicnumber = cardetails;

  interface CarDatas {
    carName: string; 
    purpose: string; 
    length: number; 
    price: string; 
    carImage: {
        _type: "image";
        asset: {
          _type: "reference";
          _ref: string; 
        };
      };
    
    carDescription: string; 
    id: string; 
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
   
    

  },[])
  useEffect(()=>{

    if(alldata){
      const filteringdata=alldata.filter((val)=>val.id==dynamicnumber)
      console.log(filteringdata)
      setfilterdata(filteringdata)
    }
  },[alldata,dynamicnumber])
  return (
    <div>
    
    {filterdata && <div>
    {
      filterdata.map((val,ind)=>
  
        <ProductDetails {...val} key={ind}/>
      )
    }
      </div>}
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3'>
        {
          alldata.map((val,ind)=> <div key={ind} className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3'>
            <Products {...val}/>
          </div>)
        }
      </div>
    </div>
  )
}

export default Page