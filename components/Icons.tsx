import React from 'react'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdLocalOffer, MdOutlineInventory } from 'react-icons/md'
import { RiCalculatorFill } from 'react-icons/ri'

const App = () => {
    const mydata=[{
        name:"Build & Price",
        icons:<IoSettingsSharp />},
        {
            name:'Search Invantory',
            icons:<MdOutlineInventory />

        },{
            name:"View Offers",
            icons:<MdLocalOffer />
        },{
            name:"Estimate Payments",
            icons:<RiCalculatorFill />
        }
    ]
  return (
    <div className=' inline md:flex border justify-evenly text-3xl font-bold  py-7 my-10 mx-3'>
        {
            mydata.map((val,ind)=><div key={ind} className='border-b  mb-10 '>
                <div className=' hover:text-red-600 '>
                    <p className='mb-3
                    '>{val.icons}</p>
                    <p>{val.name}</p>
                    </div>
            

            </div>)
        }
    </div>
  )
}

export default App