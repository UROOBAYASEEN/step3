"use client"
import { User } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { IoMdMail } from 'react-icons/io';

const Contactdetails = () => {
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
  
  const [mydata, setmydata] = useState<User>()

  useEffect(()=>{
    if(window != undefined){
      const localdata=localStorage.getItem("Rentallogin")
      if(localdata != "false"){
        async function gettingdata(){
            let data=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/signin`)
            data=await data.json()
            console.log(data)
            if(Array.isArray(data)){
                const mydata0=data.filter((val)=>val._id==localdata)
                setmydata(mydata0[0])
                console.log("this is my data ",mydata0[0])
  
            }
  
  
        }
        gettingdata()
      }
  
      
    }
  },[])
  return (
    <div className='md:w-[50%] border border-black py-3 px-3'>
      {
        mydata && <div>
            <div className="max-w-md mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-6 space-y-4">
      <div className="flex justify-center">
        <Image
          src={mydata.Profilepic}
          alt="User Avatar"
          width={100}
          height={100}
          className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white uppercase">{`${mydata.Firstname}   ${mydata.Lastname}`}</h2>
        <p className="text-gray-500 dark:text-gray-400">{mydata.Emale}</p>
      </div>
      <div className="text-gray-600 dark:text-gray-300 space-y-2">
        <p><strong>Email: <IoMdMail /></strong> {mydata.Emale}</p>
        <p><strong>Location: <FaLocationDot /></strong> Sindh</p>
      </div>
    </div>
        </div>
      }

        
        

    </div>
  )
}

export default Contactdetails