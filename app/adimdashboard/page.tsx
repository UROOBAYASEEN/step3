import React from 'react'
import { BiSolidDashboard } from 'react-icons/bi'
import { CgInsights } from 'react-icons/cg'
import { FaCarAlt, FaDotCircle, FaEnvelopeOpenText } from 'react-icons/fa'
import { IoSettingsSharp } from 'react-icons/io5'
import { MdDarkMode, MdMessage, MdOutlineCenterFocusStrong } from 'react-icons/md'
import { SlCalender } from 'react-icons/sl'
import address from '../../public/address.jpeg'
import Image from 'next/image'
import mycar from '../../public/Car (11).png'
import { IoIosArrowDown } from 'react-icons/io'
import { PiDotsThreeOutlineFill } from 'react-icons/pi'





const page = () => {
    const nextdata=[
    {
        name:"Setting",
        icon:<IoSettingsSharp/>
    },{
        name:"Help & Center",
        icon:<MdOutlineCenterFocusStrong />
    },
    {
        name:"Dark Mood",
        icon:<MdDarkMode />
    }
    ]
    const data=[
        {
            name:"Dashboard",
            icon:<BiSolidDashboard />

        },{
            name:"Car Rent",
            icon:<FaCarAlt />
        },
        {
            name:"Insight",
            icon:<CgInsights />
        },
        {
            name:"Reimburse",
            icon:<FaEnvelopeOpenText />
        },{
            name:"Inbox",
            icon:<MdMessage />
        },{
            name:"Calender",
            icon:<SlCalender />
        }

    ]
    const admindata=[
        {
         name:"Sport Car",
            value:"17439"
        },{
            name:"SUV",
            value:"9478"
        },{
            name:"Coupe",
            value:"5436"
        },{
            name:"HAtchback",
            value:"12509"
        },{
            name:"MPV",
            value:"53678"
        }
    ]
  return (
    <div className=' lg:flex gap-3 bg-gray-200  overflow-x-hidden'>
        <div className=' firstdiv w-[286px]  p-10 text-gray-300 border rounded-2xl bg-white'>
            <h1 className='text-gray-400 text-2xl'>Main Menu</h1>
            {data.map((val)=>
            <div className={`flex gap-3 mt-10 text-2xl text-gray-400 hover:bg-blue-700 py-4 px-5 ${val.name=="Dashboard"&& "bg-blue-700"} `}><span>{val.icon}</span><span>{val.name}</span></div>
            )}
              <h1 className='text-gray-400 text-2xl mt-10'>Preferance</h1>
            {nextdata.map((val)=>
            <div className={`flex gap-3 mt-10 text-2xl text-gray-400 hover:bg-blue-700 py-4 px-5 ${val.name=="Dashboard"&& "bg-blue-700"} `}><span>{val.icon}</span><span>{val.name}</span></div>
            )}
        </div>
        <div className='secondiv border  bg-white pt-10 rounded-2xl'> 
            <Image
            src={address}
            alt='thisis image'
            height={200}
            width={400}

            />
            <div className='flex mt-10 justify-between'>
                <div className='flex justify-between'>
                   <div className='bg-blue-700 py-3 px-3 mx-5 rounded-md'> <Image 
                    src={mycar}
                    alt='thisnis image'
                    height={200}
                    width={200}
                    /></div>
                
                </div>
                <div  className='mr-4'>
                    <h1 className='text-2xl font-bold '>Nissan GT-R</h1>
                    <p>Sport car</p>
                </div>

            </div>
            <div className=' gap-10 justify-end mx-5 mt-6  '>
      <div className='w-[450px]  border border-gray-500 bg-white px-5 mb-10'>
        <div className='flex items-center gap-2 mt-5 ml-5'><span className='h-2 w-2 bg-blue-700 rounded-full'></span><span>Pick-Up</span></div>
        <div className='flex justify-center gap-3 mt-4'>
          <div>
          <h1 className='font-bold'>Locations</h1>
          <div className='flex items-center gap-5 text-gray-400 mt-2'><span>Select your city</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Date</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your date</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Time</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your time</span><span>
          <IoIosArrowDown /></span></div>
          </div>


        </div>
      </div>
      <div className='w-[450px]  border border-gray-500'>

      <div className='  border  bg-white px-5'>
        <div className='flex items-center gap-2 mt-5 ml-5'><span className='h-2 w-2 bg-blue-700 rounded-full'></span><span>Drop-OF</span></div>
        <div className='flex justify-center gap-3 mt-4'>
          <div>
          <h1 className='font-bold'>Locations</h1>
          <div className='flex items-center gap-5 text-gray-400 mt-2'><span>Select your city</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Date</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your date</span><span>
          <IoIosArrowDown /></span></div>
          </div>
          <div>
          <h1 className='font-bold'>Time</h1>
          <div className='flex items-center gap-5  text-gray-400 mt-2'><span>Select your time</span><span>
          <IoIosArrowDown /></span></div>
          </div>


        </div>
      </div>
      </div>
    </div>
    <div className='flex justify-between p-5 m-5'>
    <div>
        <h1 className=' text-2xl font-bold'>Total Rental Price</h1>
        <p className='mt-5'>Overall Price and inculde Rental Discount</p>


    </div>
    <div>
        <p className='font-bold text-2xl'>$80.00</p>
    </div>
    </div>

        </div>
        <div className='third bg-white w-[500px] px-5'>
            <div className='flex justify-between  p-5'>
                <h1>Top 5 Car Rental</h1>
                <p><PiDotsThreeOutlineFill /></p>
            </div>
            <div className=' justify-between text-center items-center'>
                <div className='h-[150px] w-[150px]  border-b-blue-600 border-t-blue-400 border-l-blue-300 border-r-black border-8 m-10 rounded-full items-center text-center flex justify-center'>
<div className='text-1xl text-black'>72,030
    <p>Rental Car</p>

</div>

            
                </div>
                <div className='   text-center  py-10 px-10'>
                    {
                        admindata.map((val:any)=>
                        
                        <div className='flex justify-between items-center text-center mt-5
                        '>
                            <div className='flex gap-2'>
                            <FaDotCircle />
                            <p>{val.name}</p>

                            </div>
                            <div>
                                <h1>{val.value}</h1>
                                </div>
                        </div>
                        )
                    }


                </div>
            </div>

        </div>
    </div>
  )
}

export default page