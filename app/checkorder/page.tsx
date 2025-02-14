"use client"

import { ToastContainer, toast } from 'react-toastify';
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { array } from 'zod'

const Page = () => {
   
   
    interface Order {
        orderID: string;
        startingplace: string;
        destination: string;
        Totalprice: number;
        _id:string
        orderposition?: boolean;
       
        
      }
      
    const [myorders, setmyorders] = useState<Order[]>()
    const [confirmorder, setconfirmorder] =useState<Order[]>()
    const [pendingorder, setpendingorder] = useState<Order[]>()
    const [falsee, setfalsee] = useState(false)

  
  
    const quaryparams=useSearchParams()
    const myid=quaryparams.get("id")
    console.log(myid)
  
    useEffect(()=>{
      
        const myfun=async()=>{
            let mybookingdata=await fetch("http://localhost:3000/api/getorder")
            mybookingdata=await mybookingdata.json()
            console.log("this is my booking data",mybookingdata)
         
            if(Array.isArray(mybookingdata)){
                let mydata =mybookingdata.filter((val)=>val.orderID==myid)
                console.log("this is my data of order",mydata)
                setmyorders(mydata)
                
                
            }
            else{
                console.log("no  order found")
            }
        }
        myfun()
    },[myid])
    useEffect(()=>{
      const confirmorder=myorders?.filter((val)=>val.orderposition)
      console.log("kese are confirm order",confirmorder)
      setconfirmorder(confirmorder)
      const pendingorder=myorders?.filter((val)=>val.orderposition==false)
      console.log( "these are pending orders",pendingorder)
      setpendingorder(pendingorder)
      



    },[myorders])

async function cencelorder(id:any){
  let cencelorder=await fetch(`http://localhost:3000/api/getorder/${id}`,{
    method:"DELETE"
  })
  let datas=await cencelorder.json()
  toast.success("Order Cancel")
  window.location.reload()
  

}
async function completeorder(id:any){
  let completeorder=await fetch(`http://localhost:3000/api/getorder/${id}`,{
    method:"PUT",
    body:JSON.stringify({orderposition:true})
  })
  completeorder=await completeorder.json()
  toast.success("Order Complere sucessfully")
  window.location.reload()

}

    return<div>
      {myorders?<div>

 
 
    {
      pendingorder && <div className='mx-3'>
       
       {
        pendingorder[0] &&  <h1 className='font-bold text-2xl mb-10'>Pending Order</h1>
       }
        {
          pendingorder.reverse().map((val,ind)=><div key={ind} className='flex justify-between  mb-10'>
            <h1 className=''>Order id: {val._id}</h1>
            <p>Price : ${val.Totalprice}</p>
            <p className='bg-blue-700 py-3 px-6 ' onClick={
              ()=>{
                cencelorder(val._id)
              }
            }>Cencel</p>
            <p className='bg-blue-700 py-3 px-6' onClick={()=>{completeorder(val._id)}}>Complete</p>

          </div>)
        }


  </div>

   
}
<h1 className='mx-3 text-2xl font-bold'>Order History</h1>
{
  confirmorder && <div className="mt-10">
    {
      confirmorder.reverse().map((val,ind)=>

      <div className='flex justify-evenly  'key={ind}>
        <h1 className='font-bold'>Order id:{val._id}</h1>
        <h1 className='font-bold'>Total Price {val.Totalprice}</h1>
        <h1 className='font-bold'> Starting Place:{val.startingplace}</h1>
        <h1 className='font-bold'>Destination :{val.destination}</h1>
        <h1 className='font-bold'>Status : Sucess</h1>






      </div>)
    }
  </div>

}

      </div>:<div className='flex h-screen w-full justify-center'><div>
        <h1 className='text-2xl font-bold uppercase mt-10 '>
          No order found
        </h1>
        <Link href="/Car"><p className='text-2xl font-bold uppercase mt-10 bg-blue-700 py-3 px-5'>order now</p></Link>
        </div></div>}
    </div>
    
  }


  export default Page
  


