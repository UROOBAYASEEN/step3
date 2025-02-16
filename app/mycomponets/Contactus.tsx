"use client"
import React, { useState } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import { IoCallSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { toast } from 'react-toastify'
import SendingcontactEmail from '../models/contactusEmail'

const Contactus = () => {

    const [name, setname] = useState<string>()
    const [Email, setEmail] =useState<string>()
    const [phonenumber, setphonenumber] = useState<string>()
    const [message, setmessage] = useState<string>()
    const contactus=[
        {
            name:"address",
            icon:<FaLocationDot />,
            detail:"North Karach Pakistan"
        },{
            name:"Phone",
            icon:<IoCallSharp/>,
            detail:"03121003042"
        },
        {
            name:"Email",
            icon:<MdEmail />,
            detail:"uroobanawal74@gmail.com"
        },
        {
            name:"Website",
            icon:<CgWebsite />,
            detail:"impleblogwebsite-lemon.vercel.app"
        }
    ]
  async  function sendmessage(e:any){
        e.preventDefault()
       let senddata=await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users/contactus`,{
        method:'POST',
        body:JSON.stringify({
            fullName:name,
            emale:Email,
            phonenumber:phonenumber,
            messgae:message
        })
       })
senddata=await senddata.json()
        
        toast.success("Thanks For Contact me");
    }
  return (
   <div>
      <h1 className='text-2xl font-bold items-center text-center py-3'>Get In Touch</h1>
      <div className='h-screen w-screeen overflow-x-hidden md:flex rounded-2xl'>
         
         
        <div className='md:w-[50%] mx-3 '>
            <h1 className='text-center font-bold '>Write Us</h1>
            <form onSubmit={sendmessage}>
                <input type='text'placeholder='Full Name' value={name} onChange={(e)=>setname(e.target.value)} className=' mt-2  py-2 w-full border border-black'/>
                <input type='email'placeholder='Email' value={Email} onChange={(e)=>setEmail(e.target.value)} className=' mt-2  py-2 w-full border border-black'/>
                <input type='text'placeholder='Phone Number' value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} className=' mt-2  py-2 w-full border border-black'/>
                <input type='text'placeholder='Write Message' value={message} onChange={(e)=>setmessage(e.target.value)} className='mt-2   py-2 w-full h-[150px] border border-black'/>
                <button type='submit' className='bg-blue-600 text-white font-bold py-2 px-5 mt-2 rounded-md'>Send</button>
           
            </form>
        </div>
        <div className='md:w-[50%] bg-blue-700 mx-3 text-white mt-5 py-3'>
        <h1 className='text-center font-bold '>Contact Us</h1>
        <div className='px-3'>
            {
                contactus.map((val,ind)=><div key={ind} className='flex justify-start gap-2 mt-6 font-light md:text-2xl tracking-tighter'>
                    <p>{val.icon}</p>
                    <p>{val.name}:</p>
                    <p>{val.detail}</p>

                </div>)
            }
        </div>

        </div>
        
    </div>
    </div>
  )
}

export default Contactus