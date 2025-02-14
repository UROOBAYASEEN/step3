
"use client"
import React, { useEffect } from 'react'

const Selectform = ({ label,placeholder,list,setvalue}:any) => {

  
  
  return (

    <div className='border border-black py-3 text-center mt-10'>
    
    <p className='text-1xl '>{label}:</p>
    <select id="options" name="option" onChange={(e)=>{
      setvalue(e.target.value)
    }}>
  
  {
    list.map((val:any,ind:any)=><option className='px-6 py-3' key={ind}>{val}</option>)
  }
   

    </select>
    </div>
  )
}

export default Selectform