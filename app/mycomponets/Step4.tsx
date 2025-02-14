"use client"
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Stripe, loadStripe } from "@stripe/stripe-js";
import CheckoutButton from './checkout'
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
const Step4 = ({carid,toplace,fromplace,totalhour,time,staringpoint,endpoint}:{carid:string,toplace:string,fromplace:string,totalhour:any,time:any,staringpoint:any,endpoint:any}) => {
 const [alldata, setalldata] = useState<CarDatas[]|undefined>(undefined)
 
 const [stripe, setStripe] = useState<Stripe | null>(null);
 const [paymentarry, setpaymentarry] = useState<any>([])

 
 const [price, setprice] = useState<any>()
 const [myid, setmyid] = useState("")

 
 
 

 

 useEffect(() => {
   loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!).then(setStripe);
 }, [])
  useEffect(()=>{
    if(typeof window != "undefined"){
      const data=localStorage.getItem("Rentallogin")
      
      console.log("my profile id is here",data)
      if(data){
        setmyid(data)
      }
     
      
      
  
    }
    if(alldata){
      const data=` ${parseFloat(alldata[0].price) * parseFloat(totalhour)}`
      setprice(parseFloat(data))
      const cartItems = [
        { name: alldata[0].carName,price:price,quantity: 1 },
      ]
      setpaymentarry(cartItems)
    }
    
    try{
      getdata().then(data=>{
        const filterdata=data.filter((val:any)=>val.id==carid)
        setalldata(filterdata)
        
      })
    }catch(err){
      console.log(err)
    }
  },[carid,price,totalhour,alldata])
  console.log(alldata)
 

  useEffect(() => {
    if (alldata?.length) {
      const car = alldata[0];
      const totalPrice = parseFloat(car.price) * parseFloat(totalhour);
      setprice(totalPrice);
      setpaymentarry([{ name: car.carName, price: totalPrice, quantity: 1,myid:myid,staringpoint:staringpoint,Endpoint:endpoint,totalprice:totalPrice,carid:car.id}]);
    }
  }, [alldata, totalhour,endpoint,myid,staringpoint]);
  

  
  return <div className='mt-10 flex justify-center mx-3 items-center '>
    {
        
        alldata && <div className=' px-12 py-10 relative'>
          <div className="flex flex-col items-center bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto space-y-4">
  {/* Car Image */}
  <Image
    src={urlFor(alldata[0].carImage).url()}
    alt="this is car"
    height={300}
    width={300}
    className="rounded-lg shadow-md"
  />

  {/* Car Details */}
  <h1 className="font-bold text-3xl tracking-tight uppercase text-gray-900">{alldata[0].carName}</h1>
  <h1 className="font-semibold text-xl tracking-tight text-gray-700">Total Time: {time}</h1>
  <h1 className="text-lg font-medium text-gray-600">Starting Point: {toplace}</h1>
  <h1 className="text-lg font-medium text-gray-600">Ending Point: {fromplace}</h1>
  <h1 className="text-lg font-medium text-gray-600">Traveling Hours: {totalhour}</h1>
  <h1 className="font-bold text-2xl text-blue-600">
    Total Price: ${parseFloat(alldata[0].price) * parseFloat(totalhour)}
  </h1>


<CheckoutButton cartItems={paymentarry}/>
  {/* Rent Button with Animation */}
  {/* <button onClick={handleCheckout} className="bg-blue-500 text-white text-lg font-semibold py-3 px-7 rounded-lg shadow-md transition-transform duration-300 hover:scale-105 hover:bg-blue-600">
    Rent a Car
  </button> */}
</div>

           {/* <div>
        <Image src={urlFor(alldata[0].carImage).url()} alt='this is car' height={300} width={300}/>
        <h1 className='font-bold text-3xl tracking-tighter uppercase mt-5'>{alldata[0].carName}</h1>
        <h1 className='font-bold text-3xl tracking-tighter mt-3 '>totalTime {time}</h1>
        <h1 className='font-bold text-3xl tracking-tighter mt-3 ' >Starting Point: {toplace}</h1>
        <h1 className='font-bold text-3xl tracking-tighter mt-3'>Ending Point: {fromplace}</h1>
        <h1 className='font-bold text-3xl tracking-tighter mt-3'>Travling Hours:{totalhour}</h1>
        <h1 className='font-bold text-3xl tracking-tighter mt-3 '>total price:{parseFloat(alldata[0].price)*parseFloat(totalhour)}</h1>
        <button className='bg-blue-500 text-white mt-10 py-3 px-7   '>Rent a Car </button>

        </div> */}
        </div>
    }
  </div>
   
   
  
}

export default Step4