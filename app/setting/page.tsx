

"use client"
import bcrypt from "bcryptjs";

// import * as React from "react"
import React, { Suspense, useState } from "react"

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
 
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
 






const SettingpagePage = () => {
  const [firstname, setfirstname] = React.useState("")
  const [lastname, setlastname] = React.useState("")
  const [emaiil, setemaiil] = useState("")
  const searchparams=useSearchParams()
  const gettingid=searchparams.get("id")
  const [passward, setpassward] = useState("")
  const [profileimage, setprofileimage] = useState("")
  console.log(gettingid)
  const router=useRouter()
  const sendimage=async()=>{
    let  updateimage=await fetch(`http://localhost:3000/api/users/signin/${gettingid}`,{
      method:"PUT",
      body:JSON.stringify({Profilepic:profileimage})
    })
    updateimage=await updateimage.json()
    toast.success("Profile Image Update")
  }
  
  async function updatimage(e:React.ChangeEvent<HTMLInputElement>){
    let file=e.target.files?.[0]
  if(file){
      const reader=new FileReader()
      reader.onloadend=()=>{
        setprofileimage(reader.result as string)
      }
      reader.readAsDataURL(file)
  }
  }
  async function updatename(){
    let updatedata=await fetch(`http://localhost:3000/api/users/signin/${gettingid}`,{
      method:"PUT",
      body:JSON.stringify({Firstname:firstname,Lastname:lastname})
    })
    updatedata=await updatedata.json()
    toast.success("Your Name update")

    
  }
  async function updatEmail(){
    let updatedata=await fetch(`http://localhost:3000/api/users/signin/${gettingid}`,{
      method:"PUT",
      body:JSON.stringify({Emale:emaiil})
    })
    updatedata=await updatedata.json()
    toast.success("Your Email update")

  }
  async function updatpassward(){
    const hashedpassward= await bcrypt.hash(passward,10)
    let updatedata=await fetch(`http://localhost:3000/api/users/signin/${gettingid}`,{
      method:"PUT",
      body:JSON.stringify({passward: hashedpassward})
    })
    updatedata=await updatedata.json()
    toast.success("Your Passward update")

  }
  function logout(){
    localStorage.clear()
  }
  async function  deleteaccount(){
     let updatedata=await fetch(`http://localhost:3000/api/users/signin`,{
      method:"DELETE",
      body:JSON.stringify({_id:gettingid})
     })
     updatedata=await updatedata.json()
     toast.warn("Your Account was Delete");
     router.push("/")


  }

  return (
    <div  className="flex justify-start items-center mx-5  ">
      <div className="mt-10">
     
     <div className="mt-5 underline  hover:text-red-600 ">
       <AlertDialog>
    <AlertDialogTrigger>
     
     <div className="flex gap-3 mb-6 border-b border-black w-screen">
     <p className="font-bold text-2xl mb-2 ">Update Name</p> <p><BiSolidPencil  className="text-2xl font-bold"/></p>
      
     </div>
      </AlertDialogTrigger>
    <AlertDialogContent>
     
     <form>
     <AlertDialogHeader>
        <AlertDialogTitle className="font-bold text-2xl "> 
           Please Update Your Name</AlertDialogTitle>
        <AlertDialogDescription>
          <form>
            <input type="text" placeholder="Enter First Name" value={firstname} onChange={(e)=>setfirstname(e.target.value)} className="w-full border border-black font-bold mt-3 py-3"/>
            <input type="text" placeholder="Enter Last Name" value={lastname} onChange={(e)=>setlastname(e.target.value)} className="w-full border border-black font-bold mt-3 py-3 mb-5"/>
          </form>
         
         
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={updatename}>Continue</AlertDialogAction>

      </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog></div>

 
 <div className="mt-5  hover:text-red-600 ">
 <AlertDialog>
    <AlertDialogTrigger>
     
     <div className="flex gap-3 border-b border-black w-screen mb-6">
     <p className="font-bold text-2xl mb-2 ">Update Emale</p> <p><BiSolidPencil className="text-2xl font-bold" /></p>
     
      
     </div>
      </AlertDialogTrigger>
    <AlertDialogContent>
     
     <form>
     <AlertDialogHeader>
        <AlertDialogTitle className="font-bold text-2xl ">Please Update YourEmale</AlertDialogTitle>
        <AlertDialogDescription>
          <form>
            <input type="email" placeholder="Enter Email" value={emaiil} onChange={(e)=>setemaiil(e.target.value)} className="w-full border border-black font-bold mt-3 py-3 mb-5"/>
           
           
          </form>
         
         
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={updatEmail}>Continue</AlertDialogAction>

      </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog>
 </div>
 <div className="mt-5  hover:text-red-600 ">
 <AlertDialog>
    <AlertDialogTrigger>
      
      <div className="flex gap-3 border-b border-black w-screen mb-6">
      <p className="font-bold text-2xl mb-2">Update Passward</p> <p><BiSolidPencil  className="text-2xl font-bold"/></p>
      
      
      </div>
      </AlertDialogTrigger>
    <AlertDialogContent>
     
     <form>
     <AlertDialogHeader>
        <AlertDialogTitle className="font-bold text-2xl ">Please Update Passward</AlertDialogTitle>
        <AlertDialogDescription>
          <form>
            <input type="email" placeholder="Enter Passward" value={passward} onChange={(e)=>setpassward(e.target.value)} className="w-full border border-black font-bold mt-3 py-3 mb-5"/>
           
           
          </form>
         
         
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={updatpassward}>Continue</AlertDialogAction>

      </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog>
 </div>
 <div className="mt-5  hover:text-red-600 ">
 <AlertDialog>
    <AlertDialogTrigger>
      <div className="flex gap-3 border-b border-black w-screen mb-6"><p className="font-bold text-2xl mb-2 ">Logout </p> <p><IoIosLogOut  className="text-2xl font-bold"/></p></div>
    </AlertDialogTrigger>
    <AlertDialogContent>
     
     <form>
     <AlertDialogHeader>
        <AlertDialogTitle className="font-bold text-2xl ">Do You Want to logout Your Account</AlertDialogTitle>
        <AlertDialogDescription>
          <form>
           
           
           
          </form>
         
         
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={logout}>Continue</AlertDialogAction>

      </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog>
 </div>
 <div className="mt-5  hover:text-red-600 ">
 <AlertDialog>
    <AlertDialogTrigger>
   
   <div className=" flex gap-3 border-b border-black w-screen mb-6">
   <p className="font-bold text-2xl mb-2  ">delete  Account</p><p><MdDelete className="text-2xl font-bold text-red-700"/></p>
      
   </div>
      </AlertDialogTrigger>
    <AlertDialogContent>
     
     <form>
     <AlertDialogHeader>
        <AlertDialogTitle  className="font-bold text-2xl text-red-700 ">Do you want to delete your account</AlertDialogTitle>
        <AlertDialogDescription>
          <form>
           
           
           
          </form>
         
         
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={deleteaccount}>Continue</AlertDialogAction>

      </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog>
 </div>
 <div className="mt-5  hover:text-red-600 ">
 <AlertDialog>
    <AlertDialogTrigger>
     
     <div className="flex gap-3 border-b border-black w-screen mb-6">
     <p className="font-bold text-2xl mb-2">Update Image</p> <p><BiSolidPencil className="text-2xl font-bold" /></p>
     
      
     </div>
      </AlertDialogTrigger>
    <AlertDialogContent>
     
     <form>
     <AlertDialogHeader>
        <AlertDialogTitle><h1 className="font-bold text-2xl ">Update Your Profile Image</h1></AlertDialogTitle>
        <AlertDialogDescription>
          <form>
           
           <input  type="file" onChange={updatimage}/>
           
          </form>
         
         
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction  onClick={sendimage}>Continue</AlertDialogAction>

      </AlertDialogFooter>
      </form>
    </AlertDialogContent>
  </AlertDialog>
 </div>


      </div>



  </div>
  )
}
const Page=()=>{
  <Suspense fallback={<div>Loading...</div>}>
    <SettingpagePage/>
  </Suspense>
}

export default Page