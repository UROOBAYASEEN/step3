"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaBell, FaExchangeAlt, FaFileInvoiceDollar, FaHeart } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'


import SideBar from './SideBar'
import { FaCartShopping } from 'react-icons/fa6'


const Header = () => {
  const [hamburguer, sethamburguer] = useState(false)
  const [userdata, setuserdata] = useState<any>()
  const [clickprofile, setclickprofile] = useState(false)

  

  interface User {
    Firstname: string;
    Lastname: string;
    passward: string;
    description: string;
    Profilepic: string;
    location: string;
    Emale: string;
    posts: string[];
    savepost: string[];
    coverphoto: string;
    Isverified: boolean;
    IsAdmin: boolean;
    ForgotPAsswardToken?: string;
    FOrgotPAsswardTokenExpiry?: Date;
    verifyToken?: string;
    verifyTokenExpiry?: Date;
  }
  
  const [mydatadata, setmydatadata] = useState<User>()
useEffect(()=>{
  if (typeof window !== "undefined"){
    const getuserid=localStorage.getItem("Rentallogin")
    if(getuserid !== "false"){
    async function gettingdata(){
      let mydata=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/signin`)
      mydata=await mydata.json()
  if(Array.isArray(mydata)){
    const filterdata=mydata.filter((val)=>val._id==getuserid)
    setmydatadata(filterdata[0])
    // console.log("my data is here" ,filterdata)
  }}
    gettingdata()
    
      
    }
  }
  
})
useEffect(()=>{

  
},[mydatadata])
 
  useEffect(()=>{
    if (typeof window !== "undefined") {
      try {
        const authenticationdata = localStorage.getItem("Rentallogin");
        const gettingdata = authenticationdata ? authenticationdata : null;
        
  
        
        if(gettingdata){
          
        setuserdata(gettingdata);
        }
      } catch (error) {
        console.error("Error parsing authentication data:", error);
      }
    }
    
  
    
  },[userdata])

  
  return (
    <div className=' flex justify-between mx-2 px-2 py-3 gap-3 items-center mb-3'>
      
      <div className='flex justify-between relative gap-10'>
        
        
      <div><GiHamburgerMenu className="font-bold text-3xl mt-5 " onClick={()=>{sethamburguer(!hamburguer)}} /></div>
      {
        hamburguer &&  <div className='absolute top-14 w-[500px] bg-white h-[400px] z-10 '>
          <div className=''>
            <SideBar/>
          </div>

          </div>
      }
     
     
       <Link href="/"> <h1 className='text-2xl font-bold text-blue-700 text-center mt-4'>Mornet</h1></Link>
        <div className=' mt-20 md:mt-1  absolute md:left-[300px] hidden md:inline'>
        <input type='text' placeholder='search some thing here' className='md:w-[400px] w-screen  py-2 items-center  text-center border border-gray-300  p rounded-lg my-5'></input>
        <CiSearch className='text-2xl absolute  top-7' />
        <Link href="/Payment">   <FaExchangeAlt  className='text-2xl absolute right-3 top-7' /></Link></div>

      </div>
      <div className='flex gap-5 md:gap-8'>
      
    
    
    
     <Link href="/Addtocart">  <FaCartShopping className='text-2xl mt-5
      ' /></Link>

  
      <FaBell className='text-2xl mt-5 ' />
     
     
    
    
     
    
    
     
     
     {
      userdata=="false"  && <div>
         <Link href={"/signin"}> <p className='rounded-full px-3 border border-black font-bold py-3  mt-3 '>
        login
      </p></Link>
      </div>
     }
     {
      userdata !="false" && <div>
       <div className={`bg-black border border-white h-12 w-12 px-3 mt-3 rounded-full py-3 bg-cover bg-center bg-no-repeat`}   style={{ backgroundImage: `url('${mydatadata?.Profilepic}')` }}  onClick={()=>{setclickprofile(!clickprofile)}}>

        </div>
        {
        clickprofile && <div className='h-[400px] w-[300px] bg-white border border-black  fixed mt-4 right-9 z-10'>
          <div className='mt-10 px-4'>
{
  mydatadata && <div>
     <div className='h-14 w-14 bg-black border rounded-full border-white  bg-cover bg-center bg-no-repeat ' style={{ backgroundImage: `url('${mydatadata?.Profilepic}')` }}></div>
            <h1 className='text-2xl font-light my-2 tracking-tighter uppercase'>{`${mydatadata.Firstname} ${mydatadata.Lastname}`}</h1>
            <h1 className='text-2xl font-light my-2 tracking-tighter'>{mydatadata.Emale}</h1>
            <p className='text-2xl font-light my-2 hover:text-blue-700' onClick={()=>{ localStorage.setItem("Rentallogin","false"),window.location.reload()}}>Logout</p>
           <Link href="/Profile"><p className="bg-blue-700 text-white font-bold py-3  text-2xl">View Profile</p></Link>

    </div>
}
           
           



          </div>

        </div>
        }
      </div>
     }
     

      </div>

    </div>
  )
}

export default Header