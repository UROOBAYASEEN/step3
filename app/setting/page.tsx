

"use client"
import bcrypt from "bcryptjs";

// import * as React from "react"
import React, { useState } from "react"

import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"
 
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"
import { toast } from "react-toastify"
import { BiSolidPencil } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
 
const AlertDialog = AlertDialogPrimitive.Root
 
const AlertDialogTrigger = AlertDialogPrimitive.Trigger
 
const AlertDialogPortal = AlertDialogPrimitive.Portal
 
const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName
 
const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName
 
const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"
 
const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"
 
const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName
 
const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName
 
const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName
 
const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName
 
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}






const Page = () => {
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
        <AlertDialogTitle><h1 className="font-bold text-2xl ">Please Update Your Name</h1></AlertDialogTitle>
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
        <AlertDialogTitle><h1 className="font-bold text-2xl ">Please Update YourEmale</h1></AlertDialogTitle>
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
        <AlertDialogTitle><h1 className="font-bold text-2xl ">Please Update Passward</h1></AlertDialogTitle>
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
        <AlertDialogTitle><h1 className="font-bold text-2xl ">Do You Want to logout Your Account</h1></AlertDialogTitle>
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
        <AlertDialogTitle><h1 className="font-bold text-2xl text-red-700 ">Do you want to delete your account  </h1></AlertDialogTitle>
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

export default Page