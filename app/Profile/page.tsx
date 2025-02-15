"use client"
import { truncate } from 'node:fs/promises';
import React, { Suspense, useEffect, useState } from 'react'
import { BiSolidDashboard } from 'react-icons/bi';
import { CgInsights } from 'react-icons/cg';
import { FaCarAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { MdDarkMode, MdMessage, MdOutlineCenterFocusStrong } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
import { a, b, c, d, imageis } from '../models/mongomethod';
import Image from 'next/image';
import { LucidePencil } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router=useRouter()
  const user = {
    name: "Nora Tauunda",
    role: "Security Lead",
    avatar: "/avatar.jpg",
    tasks: [
      "Product Infrastructure",
      "Network Security",
      "Security Testing",
      "Security Audit Outsourcing",
      "Blogs",
    ],
    team: [
      { name: "Jack S", avatar: a },
      { name: "Sufan C", avatar: b },
      { name: "Ethan C", avatar: c },
      { name: "Jacob B", avatar: d },
    ],
  };
   const [Dashboard, setDashboard] = useState(true) 
   const [CarRent, setCarRent] = useState(false)
   const [Inbox, setInbox] = useState(false)
   const [Setting, setSetting] = useState(false)
   const [HelpCenter, setHelpcenter] = useState(false)
   interface User {
    _id:string,
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
  
  const data=[
          {
              name:"Dashboard",
              icon:<BiSolidDashboard />
  
          },{
              name:"Car Rent",
              icon:<FaCarAlt />
          },{
              name:"Inbox",
              icon:<MdMessage />
          },  {
            name:"Setting",
            icon:<IoSettingsSharp/>
        },{
            name:"Help & Center",
            icon:<MdOutlineCenterFocusStrong />
        },
  
      ]
  const [mydata, setmydata] = useState<User>()
    useEffect(()=>{
        if(window != undefined){
            const localdata=localStorage.getItem("Rentallogin")
            if(localdata!= "false"){
                async function gettingdata(){
                    let data=await fetch("http://localhost:3000/api/users/signin")
                    data=await data.json()
                    if(Array.isArray(data)){
                        const mydata0=data.filter((val)=>val._id==localdata)
                        setmydata(mydata0[0])
                        console.log("this is my data ",mydata0[0])

                    }


                }
                gettingdata()

            }
            return () => {
                console.log('Cleanup');
              };
            

        }
       
        
    },[])
    function display(val:any){
        console.log(val)
        if(val=="Dashboard"){
            setDashboard(true)
             setCarRent(false)
             setInbox(false)
             setSetting(false)
             setHelpcenter(false)
             

        }
        else if(val=="Car Rent"){
            setDashboard(false)
            setCarRent(true)
            setInbox(false)
            setSetting(false)
            setHelpcenter(false)

        }
        else if(val=="Inbox"){
            setDashboard(false)
            setCarRent(false)
            setInbox(true)
            setSetting(false)
            setHelpcenter(false)

        }
        else if(val=="Setting"){
            setDashboard(false)
            setCarRent(false)
            setInbox(false)
            setSetting(true)
            setHelpcenter(false)

        }
        else if(val==="Help & Center"){
            setDashboard(false)
            setCarRent(false)
            setInbox(false)
            setSetting(false)
            setHelpcenter(true)

        }
        else{
            console.log("invalid data")
        }

    }
    
    function  gotosettingpage(){

      if(mydata){
        router.push(`/setting?id=${mydata._id}`)
      }

    }
    function checkorder(){
     
      if(mydata){
        router.push(`/checkorder?id=${mydata._id}`)
      }
    }
  return (
   
   <div><div className="flex min-h-screen bg-gray-100">
   {/* Sidebar */}
   <aside className="hidden md:flex flex-col w-20 bg-gradient-to-b bg-blue-700 text-white items-center py-10 space-y-6 shadow-lg">
    <div className="w-10 h-10 border-black border bg-white text-pink-500 flex items-center justify-center rounded-full shadow-md" onClick={gotosettingpage}>⚙️</div>
   
    <Suspense fallback={<div>Loading...</div>}>
    
    <div className="w-10 h-10 bg-white text-pink-500 flex items-center justify-center rounded-full shadow-md" onClick={checkorder}>📦</div>
   
    </Suspense>
    
    
     <div className="w-10 h-10 bg-white text-pink-500 flex items-center justify-center rounded-full shadow-md">⚡</div>
   </aside>
 
   {/* Profile Card */}
   <div className="flex-1 flex justify-center items-center p-5">
     <div className="bg-white border tracking-tighter border-black  shadow-lg p-8 w-full max-w-3xl relative">
       
       {/* Profile Image */}
       {/* style={{ backgroundImage: `url('${mydatadata?.Profilepic}')` }} */}
      
      {
        mydata &&  <div className="absolute right-10 -top-12">
        <img src={mydata.Profilepic} alt="User Profile"
          className="w-[100px] h-[100px] rounded-full border-black  shadow-md"/>
      </div>
      }
 
       {/* Profile Info */}
       <h1 className="text-3xl font-bold  mb-6">Profile</h1>
       
       <div className="space-y-4  text-gray-600 font-bold text-2xl ">
         <p className="border-b pb-2 ">Username: <span className="font-semibold uppercase">{`${mydata?.Firstname} ${mydata?.Lastname}`}</span></p>
         <p className="border-b pb-2">Email: <span className="font-semibold">{mydata?.Emale}</span></p>
         <p className="border-b pb-2">Pending Orders: <span className="font-semibold">0</span></p>
         <p className="border-b pb-2">Location: <span className="font-semibold">Sindh</span></p>
       </div>
 
       {/* Save Button */}
       <button className="mt-6 bg-blue-700 text-white py-3 px-8 font-bold  shadow-md hover:scale-105 transition">
         Save
       </button>
     </div>
   </div>
 </div>
 </div>
      

  )
}

export default Page