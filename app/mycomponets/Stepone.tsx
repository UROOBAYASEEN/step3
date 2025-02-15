"use client"
import SelectField from '@/components/Cityselect'
import Cityselect from '@/components/Cityselect'
import { DatePickerWithPresets } from '@/components/Datepiker'
import Map from '@/components/Map'


import Selectform from '@/components/Selectform'
import {Country,State,City}  from "country-state-city"
import dynamic from 'next/dynamic'


import React, { Suspense, useEffect, useMemo, useState } from 'react'
const totalpeople=["1",'2','3','4','5','6','7','8','9','10'

]
const timearry=["00:00", "00:15", "00:30", "00:45", "01:00", "01:15", "01:30", "01:45", 
  "02:00", "02:15", "02:30", "02:45", "03:00", "03:15", "03:30", "03:45", 
  "04:00", "04:15", "04:30", "04:45", "05:00", "05:15", "05:30", "05:45", 
  "06:00", "06:15", "06:30", "06:45", "07:00", "07:15", "07:30", "07:45", 
  "08:00", "08:15", "08:30", "08:45", "09:00", "09:15", "09:30", "09:45", 
  "10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", 
  "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", 
  "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", 
  "16:00", "16:15", "16:30", "16:45", "17:00", "17:15", "17:30", "17:45", 
  "18:00", "18:15", "18:30", "18:45", "19:00", "19:15", "19:30", "19:45", 
  "20:00", "20:15", "20:30", "20:45", "21:00", "21:15", "21:30", "21:45", 
  "22:00", "22:15", "22:30", "22:45", "23:00", "23:15", "23:30", "23:45"]
  
const Stepone = ({getdate,gettime,totalperson,startingplace,destination,totalhour}:any) => {
  const getcity=City?.getCitiesOfState("PK","SD")

  
  
  const [getsource, setgetsource] = useState<[number,number]>([25.78497, 25.78497])
  const [Destination, setDestination] = useState<[number,number]>([26.58761, 26.58761])
  const [Totalhour, setTotalhour] = useState<number>(1)
  // const Map=useMemo(()=>dynamic(()=>import("@/components/Map"),{ ssr: false }),[getsource,Destination])
 
  useEffect(()=>{
  
    
  
    console.log(getsource)
    console.log(Destination)

  },[getsource,Destination])
  
  
  return (

    
  
    <div className='md:flex justify-between items-center mx-3' >
     <div className='border border-black py-4 px-3 lg:w-[50%] mx-4 bg-blue-200'>
     <DatePickerWithPresets setvalue={getdate}/>
       < Selectform label="Time Select" placeholder="Select Time " list={timearry} setvalue={gettime}/>
       < Selectform label="How Many Person" placeholder="Select People" list={totalpeople} setvalue={totalperson}/>
      < SelectField label="Starting Place" id="Starting place" list={getcity} setvalue={setgetsource} setplace={startingplace}/>
      < SelectField label="Destination" id="Ending place" list={getcity} setvalue={setDestination} setplace={destination}/>
      {/* < Selectform label="Transport Type" placeholder="Please Select Here" list={["One Way","Both Side "]} /> */}
      <input type='number'  placeholder='How Many Hours You Want'  className='border border-black h-full w-full mt-4 py-3' onChange={(e:any)=>{totalhour(e.target.value)}}/>
     </div>
     <div>
    
    {/* {
      getsource && Destination && <div className='mt-10'>
       
     
     
       <Map getsource={getsource} Destination={Destination}/>
     
     
      </div>
    } */}
     </div>
    </div>
  )
}

export default Stepone