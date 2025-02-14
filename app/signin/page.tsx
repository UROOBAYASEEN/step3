
"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import  bcryptjs from  "bcryptjs"
import {

  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import usermodel from "../models/usersignin"
import ToastDestructive from "@/components/Toast"
import mongoose from "mongoose"
import { connectionstring } from "../models/connectionstring"
import { checkbymongomethode } from "../models/mongomethod"
const formSchema = z.object({
  userEmail:  z.string().email("Invalid email").min(2,{message:"please Enter valid Emale"}).max(50),
  passward : z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number"),
  FirstName:z.string().min(3,{message:"Enter First Name"}).max(50),
  LastName:z.string().min(3,{message:"Enter First Name"}).max(50),
  





});
  function ProfileForm() {

  const [login, setlogin] = useState(true)
  const [signup, setsignup] = useState(false)
  const [forgot, setforgot] = useState(false)
  const [showalertdialog, setshowalertdialog] = useState(false)
  const [shownpasswrdinterface, setshownpasswrdinterface] = useState(false)
  const [takecodeformuser, settakecodeformuser] = useState('')
  const [userid, setuserid] = useState<string|null>(null)
  const [userEmail, setuserEmail] = useState("")
  const [userPassward, setuserPassward] = useState("")
  const [showtoaste, setshowtoaste] = useState(false)
  const [fogetEmale,setForgetEmale]=useState<any>("")
  const [forgetuserid,setforgetuserid]=useState<any>("")



  interface User {
    _id: string;
    Firstname: string;
    Lastname: string;
    password: string; // Adjust if you mean `passward` is a typo
    Email: string; // Adjust if `Emale` is a typo
    posts: any[]; // Replace `any` with the type of your posts if known
    savepost: any[]; // Replace `any` with the type of saved posts if known
    Isverified: boolean;
    IsAdmin: boolean;
    __v: number;
    verifyToken: string;
    verifyTokenExpiry: string; // Use `Date` if you want to handle it as a Date object
  }
  
  const [Entervarificationid, setEntervarificationid] = useState("")
  const [mydata, setmydata] = useState<User>()
  const router=useRouter()
 
  
  
  
  const checkocode=()=>{

    alert(`your input code is ${takecodeformuser}`)
    if(takecodeformuser=="pakistan"){
      toast("your Account was create")
    }
    else{
      toast("invalid code ")
      router.push("/signin")
      
    }
  }
  useEffect(()=>{
    async function alldataget(){
      let mydata=await fetch("http://localhost:3000/api/users/signin")
      mydata=await mydata.json()
     if(Array.isArray(mydata)){
      const profiledata=mydata.filter((val)=>val._id==userid)
      if(profiledata){
        setmydata(profiledata[0])
      }
      
      
     }
      



    }
    alldataget()
    
  })
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), 
   
  
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
  setshownpasswrdinterface(true)
    setshowalertdialog(true)
    let userlogin=await fetch("http://localhost:3000/api/users/signin",{
      method:"POST",
      body:JSON.stringify({Firstname:values.FirstName,Lastname:values.LastName,Emale:values.userEmail,passward:values.passward})
    })
     const getdata= await userlogin.json()
     const {saveduser}=getdata
     setuserid(saveduser._id)

   
  }
   async function verifyByvarificationCode(){
    let alldata=await fetch("http://localhost:3000/api/users/signin")
    alldata= await alldata.json()

    if(Array.isArray(alldata)){
  const filterdata=alldata.filter((val)=>val._id==userid)
  // if(filterdata.verifyToken==Entervarificationid){

  // }
  console.log(filterdata)
if(filterdata[0].verifyToken==Entervarificationid){
  console.log("user verifeid")
  let verifyaccount=await fetch(`http://localhost:3000/api/users/signin/${userid}`,{
    
    method:"PUT",
    body:JSON.stringify({Isverified:true})
  })
  verifyaccount= await  verifyaccount.json()
  toast.success("Congratulation Your Account Verify Please Login")
  window.location.reload()


}else{
  console.log("usernot verifeid")
  console.log(filterdata[0].verifyToken)
  console.log(Entervarificationid)
}
    }
    else{
      console.log("this is all data ", alldata)
    }
  
    

   }
   async function loginfunctionality(e: any) {
    e.preventDefault(); // Prevent default form submission behavior
    let  alldata=await fetch("http://localhost:3000/api/users/signin")
    alldata=await alldata.json()
  
    
    if(Array.isArray(alldata)){
      const mydata=alldata.filter((val)=>val.Emale== userEmail)
      console.log(mydata[0])
      if(mydata[0]){
        console.log("user is verified")
        if(window !=undefined){
          localStorage.setItem("Rentallogin",mydata[0]._id)
          alert("data is send to local storage")
          router.push("/")
        
          
        }
      }

    }

    
    // await checkbymongomethode(userEmail)
//     try{
//       await mongoose.connect(connectionstring)
//       const data=await  usermodel.findOne({Emale:userEmail})
//       if(data){
//        console.log(data)
//       }



// }catch(err){
//   console.log(err)
// }
   }
//   let alldata=await fetch("http://localhost:3000/api/users/signin")
//   alldata=await alldata.json()

//   if(Array.isArray(alldata)){
//     const myiddata=alldata.filter((val:any)=>val.Emale==userEmail)
//     console.log(myiddata)
//     setmydata(myiddata[0])
//     setuserid(myiddata[0]._id)
//   if(myiddata[0].Isverified){
//     const isMatch = await bcryptjs.compare(userPassward,myiddata[0].passward)
//     if(isMatch){
//       alert("user verifed")
//       if(typeof window !== "undefined"){
     
//         if(userid){
//           localStorage.setItem("Rentallogin",userid)
//           console.log("thhis is user id",userid)
//         }
//         window.location.reload();

//       }
//     } else{

//       alert("user not verifed")

//       setshowtoaste(true)
//     }
//   }
//   else{
//     alert("user in not found")
//   }
    
  
    

  
// }

    // console.log("User Email:", userEmail);
    // console.log("User Password:", userPassward);
  
    // try {
    //   // Find the user by email
    //   const user = await usermodel.findOne({ Email: userEmail });
  
    //   if (user) {
    //     // Compare the entered password with the hashed password
    //     const isPasswordMatch = await bcryptjs.compare(userPassward, user.password);
  
    //     if (isPasswordMatch) {
    //       alert("Congratulations, you have successfully logged in!");
    //     } else {
    //       alert("Password does not match. Please try again.");
    //     }
    //   } else {
    //     alert("No user found with this email.");
    //   }
    // } catch (err: any) {
    //   console.error("Error during login:", err);
    // }
  
                                                                                           

//    async function loginfunctionality(e:any){
//     e.preventDefault()
// alert("fdjhdgh")
// console.log(userEmail)
// console.log(userPassward)
//     try{
//       await usermodel.findOne({ Emale:userEmail  }).then((val)=>
//         const ispasswardmatch= await  bcryptjs.compare(val.passward,userPassward )
//         if(ispasswardmatch){
//           alert("congraturaltion your account login")}
//         else{
//           alert("your account was not match") })
//     }catch(err:any){
//       console.log(err)
//     }
//   }

  
    
    // if(data){
    //   const matcheduser=await bcryptjs.compare(data.passward,userPassward)
    //   if(matcheduser){
    //     alert("congratulation your account was create ")
    //   }
    //   else{
    //     console.log("passward not match")
    //   }
    // }
    
 async function forgetpassward(event:any){
  event.preventDefault()
  let  alluser=await fetch("http://localhost:3000/api/users/signin")
  alluser=await alluser.json()
  if(Array.isArray(alluser)){
    const mydata=alluser.filter((val)=>val.Emale==fogetEmale)
    if(mydata[0]){
      setforgetuserid(mydata[0]._id)
        let updatedata=await fetch(`http://localhost:3000/api/users/signin/${mydata[0]._id}`,{
            method:"PUT",
            body:JSON.stringify({passward:fogetEmale })
          })
          updatedata=await updatedata.json()
          toast.success("Your Passward update")
      
        }

      let sendPassward=await fetch("http://localhost:3000/api/forgetpassward",{
        method:"POST",
        body:JSON.stringify({Emale:fogetEmale})
      })
      sendPassward=await sendPassward.json()
      console.log("this is code which is send to user",sendPassward)
      toast.success("PLease Check Emale Passward Send Sucessfully")

     
      

    }
    else{
   

      toast.error("User Does Not Exit")
    }
  }



 
   
  
   return <div className="mt-10 md:mt-4">
     <div className={`h-screen w-screen  flex justify-center items-center  p-8 rounded-lg`}>
    <div className={`border border-black rounded-md bg-white py-3 px-5 shadow-lg shadow-black-500/50 ${login==false &&  "hidden"}`}>
      <h1 className="font-bold text-4xl  uppercase mb-10">Login</h1>
  <form  onSubmit={loginfunctionality} >
    <h1 className="mb-3">Enter Emale:</h1>
    <input type="Emale" value={userEmail} onChange={(e)=>setuserEmail(e.target.value)}  placeholder="Enter Emale" className="border rounded-md border-black text-center   py-3" /><br></br>
    <h1 className="mt-5">Enter Passward:</h1>
    <input type="password" value={userPassward} placeholder="Enter Passward" className="border rounded-md border-black text-center py-3 mt-4" onChange={(e)=>{
      setuserPassward(e.target.value)
    }}/><br></br>
    <button type="submit" className="text-center font-bold bg-blue-600 text-white px-7 py-3 mt-5 hover:bg-blue-800 cursor-pointer ">Login</button>
  
  
  
  </form>

  
        
        
   
   
    <div className="flex justify-evenly px-4 py-3">
      <p className="font-light " onClick={()=>{
       
       setlogin(false)
       setsignup(true)

      }}>Sing In? </p>
      <p className="text-blue-700 font-light" onClick={()=>{
        setlogin(false)
        setforgot(true)
        setsignup(false)

      }}>Forgot Passward?</p>

    </div>
    </div>
    <div className={` forgot ${forgot ==false && "hidden"}`}>
     
      <div className="forgot">
       <h1>Forget Passward</h1>
     
     <form>
     <input type="email" placeholder="Enter Email" value={fogetEmale} onChange={(e:any)=>{
      setForgetEmale(e.target.value)
     }}/>
     <button type="submit" onClick={forgetpassward}>Get Passward</button>
     </form>
       
      
      </div>

     </div>
     <div className={` signup ${signup==false && "hidden"}`}>
    
       <div className="border border-black py-3 px-3">
         <h1 className="font-bold text-2xl mb-6 text-center uppercase "> Sign In</h1>
         <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className=" one md:flex justify-between gap-3 text-2xl">
            <div>
            <FormField
          control={form.control}
          name="FirstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Firstname" {...field}  className="border border-black text-center font-bold  text-blue-700"/>
              </FormControl>
              <FormDescription>
                Enter your First Name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
        <div>
          
           
        
        <FormField
          control={form.control}
          name="LastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="firstName" {...field} className="border border-black text-center font-bold text-blue-700"/>
              </FormControl>
              <FormDescription>
                Enter Last Name
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>


        </div>
        <div className="two  md:flex justify-between gap-3 text-2xl ">
     
     <div>
     <FormField
          control={form.control}
          name="userEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>UserEmale</FormLabel>
              <FormControl>
                <Input placeholder="useremale" {...field}  className="border border-black text-center font-bold  text-blue-700"/>
              </FormControl>
              <FormDescription>
             Enter Your Emale
             
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
     </div>
     <div>
     <FormField
          control={form.control}
          name="passward"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passward</FormLabel>
              <FormControl>
                <Input placeholder="Passward" {...field}  className="border border-black text-center font-bold  text-blue-700"/>
              </FormControl>
              <FormDescription>
             Enter Passward
             
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
       
     </div>

        </div>
    
    
       
       
       
     
     
     
          <Button type="submit" className="bg-blue-700 text-white">Submit</Button>
        {/* <Button type="submit">Submit</Button> */}<AlertDialog>
        <AlertDialogTrigger>
        
        {shownpasswrdinterface &&<div className="font-bold mx-3">
        Verify Account
          </div>}
         
        </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Enter Code</AlertDialogTitle>
      <AlertDialogDescription>
    
    Please Enter Code to active Your Account
    <h1>Passward is Send in your Email</h1>
 
 <input  value={Entervarificationid}  className="text-2xl   font-bold text-center text-blue-700 mt-3 py-4 px-7" placeholder="Enter Verfication id" onChange={(e)=>{
  setEntervarificationid(e.target.value)
 }} />
       
       
       
      </AlertDialogDescription> 
    </AlertDialogHeader>
    <AlertDialogFooter> 
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction > 
       
       <h1 onClick={verifyByvarificationCode}> Create Account</h1>
      </AlertDialogAction>


    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
       
      </form>
    </Form>


      </div>
     
     {
      showtoaste && <div>
        <ToastDestructive/>
      </div>
     }
     

    </div>
   
   
    </div>
   </div>
  
  
  
}
export default ProfileForm