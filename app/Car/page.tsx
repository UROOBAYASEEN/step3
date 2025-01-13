"use client"
import React, { useState } from 'react'
import Popolarcar from '../mycomponets/Popolarcar'
import RecomdeCar from '../mycomponets/RecomdeCar'
import SideBar from '../mycomponets/SideBar'
import { RxHamburgerMenu } from 'react-icons/rx'

const page = () => {
  const [showinsidebar, setshowinsidebar] = useState(false)
  return (
    <div>
      
      <div className='flex bg-gray-100'>
    
  
        <div className=''>
        <Popolarcar/>
        <RecomdeCar/>
        </div>

      </div>
      
        
        
    </div>
  )
}

export default page