"use client"
import React, { useEffect, useState } from 'react'
import car1 from '../../public/image 7.png'
import Products from './Products'
import car2 from '../../public/car (1).png'
import car3 from '../../public/Car (2).png'

import car4 from '../../public/Car (3).png'
import { client } from '@/sanity/lib/client'
import Link from 'next/link'
export interface CarDatas {
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
  
  

  
const getdata= async()=>{
    const mydata= await client.fetch(`*[_type == 'car']`).then(data=>{
        // console.log(data)
return data
    }).catch(erro=>{console.log(erro)})
    return mydata
}

const Popolarcar = () => {
    const [alldatas, setalldatas] = useState<CarDatas[]>([])
     const imageData=[
        {
            name:"keegnseeg",
            image:car1,
            rent:'$99.00',
            lenght:"90",
            purpose:"Sport",
            id:"one"
        },
        {
            name:"Nisaan G-T-R",
            image:car2,
            rent:'$80.00',
            lenght:"80",
            purpose:"Sport",
            id:"two"
        },  {
            name:"Rolls-Royce",
            image:car3,
            rent:'$96.00',
            lenght:"70",
            purpose:"Shdan",
            id:'three'
        },  {
            name:"Meesan G-Y R",
            image:car4,
            rent:'$80.00',
            lenght:"80",
            purpose:"Sport",
            id:"four"
        },
    ]

   
    
    

useEffect(()=>{

//     let getalldata=async()=>{
//         // const alltoalldata=await getdata()

//         // setalldata(alltoalldata)
//         await getdata()
//     }
// getalldata()

try{
    getdata().then(data=>{
        setalldatas(data)
    })
    
    
}catch(err){
    console.log(err)
}

    
  
    
},[])
console.log(alldatas)
// useEffect(()=>{  

    
// if(alldata &&imageData){
    
//     // console.log(alldata)
// //     Object.keys(imageData).forEach(key=>{
// //         if(alldata.hasOwnProperty(key)){
// //             imageData[key]=alldata[key]
// //             console.log(imageData)
// //             console.log("sucess")
// //         }}
// // ) 


// }
// },[])
    
  return (
    <div className=' mt-5 overflow-x-hidden'>
        <div className='flex justify-between'>
        <h1 className='mt-10 mx-10 mb-5 text-2xl'>Popular Car</h1>
        <h1 className='mt-10 mx-10 mb-5 text-2xl'>View All</h1>
        </div>


    <div className=' '>


{
    alldatas && <div className=' grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-3 '>
        {
alldatas.map((val,ind)=>
<div key={ind} className='mx-3'>
<Products {...val}/>
</div>

)}
<div className='flex items-center justify-center text-center'>
  <Link href="/Car"> <p className='mt-10 py-3 px-7 bg-blue-800 text-white font-bold mb-10'>View More Cars</p></Link>

</div>
    </div>
}
    </div></div>
  )
}

export default Popolarcar