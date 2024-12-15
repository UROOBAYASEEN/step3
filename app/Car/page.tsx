import React from 'react'
import Popolarcar from '../mycomponets/Popolarcar'
import RecomdeCar from '../mycomponets/RecomdeCar'
import SideBar from '../mycomponets/SideBar'

const page = () => {
  return (
    <div>
      
      <div className='flex bg-gray-100'>
        <div className=''><SideBar/></div>
        <div className=''>
        <Popolarcar/>
        <RecomdeCar/>
        </div>

      </div>
      
        
        
    </div>
  )
}

export default page