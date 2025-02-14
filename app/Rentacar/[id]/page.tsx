
"use client"
import Step4 from '@/app/mycomponets/Step4';
import Stepone from '@/app/mycomponets/Stepone';
import Wehcaltype from '@/app/mycomponets/Wehcaltype';
import Contactdetails from '@/components/Contactdetails';
import Selectform from '@/components/Selectform';
import Link from 'next/link';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
const  Page=({params}: { params: Promise<{id: string }> }) => {
  const [date, setdate] = useState<any>()
  const [time, settime] = useState<any>()
  const [person, setperson] = useState<string>()
  const [startingplace, setstartingplace] = useState<any>()
  const [destinations, setdestinations] = useState<any>()
  const [totalhour, settotalhour] = useState<any>()
  useEffect(()=>{
    console.log(date)
    console.log(time)
    console.log(person)
    console.log(startingplace)
    console.log(destinations)
    console.log(totalhour)
  },[date,time,person,startingplace,destinations,totalhour])
const paramss=useParams()
const searchparams=useSearchParams()
  
const [current, setcurrent] = useState<number|undefined>()
const {id}=use(params)


const getsearchparams=searchparams.get("index")
  useEffect(()=>{
    if(getsearchparams){
      setcurrent(parseInt(getsearchparams))
    }
  },[getsearchparams])
  const steps=[
    {
      name:"Enter Travling Details"
    },
    {
      name:"Vehcel Details"
    },{
      name:"Enter Contact Details"
    },
    {
      name:"Booking Summary"
    }
  ]
  return (<div>
    {
      current && <div>
         <div className='mt-10'>
        <div className='flex justify-center'>
          <div className='grid grid-cols-4 gap-5 mx-3'>
            {steps.map((val,ind)=><div key={ind} className='flex items-center gap-5 '>
              <svg
    className="w-10 h-10 cursor-pointer"
  
    viewBox="0 0 38 38"
    fill=""
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 19C0 8.50547 8.50547 0 19 0C29.4945 0 38 8.50547 38 19C38 29.4945 29.4945 38 19 38C8.50547 38 0 29.4945 0 19Z"
      fill={current >= ind + 1 ? "#26d4e0" : "black"}
    />
  </svg>
  <div>
  <p className='uppercase font-bold text-slate-400'>Step {ind+1}</p>
  <p className='uppercase font-bold text-slate-400'>{val.name}</p>
  </div>
  {ind !==3 && <div className={`h-0.5 w-[150px] ${current >ind+1 ?"bg-blue-600":"bg-gray-500"} rounded`}></div>}
  
  
            </div>)}
          </div>
         
         
        </div>
       
       <div className="mt-10
       ">
       {
            current == 1 && <div>


  <Stepone getdate={setdate} gettime={settime} totalperson={setperson} startingplace={setstartingplace} destination={setdestinations} totalhour={settotalhour}/>
           
           
            </div>
          }
          {
            current == 2 && <div>

{
  id &&<div>
    
    <Wehcaltype carid={id} />
  </div>
}
                    </div>
          }
          {
            current==3 && <div>
              < Contactdetails/>
            </div>
          }
          {
            current ==4 && <div>
            
            <Step4 carid={id} toplace={startingplace} fromplace={destinations} totalhour={totalhour} time={time} staringpoint={startingplace} endpoint={destinations}/>
             
             <div>
              
              </div>
            </div>
          }
       </div>
        <div className={` mt-10 flex justify-between px-4 items-center text-center `}>
    
        <Link href={`/Rentacar/${id}?index=${current-1}`} className={`bg-slate-500 text-white px-10 py-3 rounded-full ${current == 1 ? "invisible": "flex"}`}>back</Link>
  
          <Link href={`/Rentacar/${id}?index=${current+1}`} className={`bg-blue-500 text-white px-10 py-3 rounded-full ${current == 4 ? "invisible": "flex"}`}>Next</Link>
  
        </div>
      </div>
        </div>
    }
  </div>
  )
}

export default Page



