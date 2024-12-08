import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='bg-white  justify-between mx-10 py-10 overflow-x-hidden md:flex'>
        <div className='border-b border-b-1'> 
            <h1 className='uppercase text-2xl  text-blue-800 mt-10 mx-10 font-bold '>morent</h1>
            <p className='uppercase  text-gray-300 w-[50%] mt-10 mx-10 font-bold '>Our vision is to provide convenius and help to increase your sale and busniness</p>
        </div>
        <div className='flex justify-between gap-5 mx-5'>
            <div>
                <h1 className='font-bold mt-10 text-2xl '>About</h1>
                <p className='text-gray-300 mt-5 '>How it work</p>
                <p  className='text-gray-300 mt-5 '>Featured</p>
                <p  className='text-gray-300 mt-5 '>Partnership</p>
                <p  className='text-gray-300 mt-5 '>Bussines Relation</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-10'>Community</h1>
                <p className='text-gray-300 mt-5 '>Events</p>
                <p  className='text-gray-300 mt-5 '>Blogs</p>
                <p  className='text-gray-300 mt-5 '>Podcasts</p>
                <p  className='text-gray-300 mt-5 '>Invite a Friends</p>
            </div>

        </div>

    </div>
    <div className=' justify-between mx-10 font-bold md:flex'>
        <h1>2022  MORENT .ALL Right Reserved</h1>
        <div className='flex gap-10'>
            <h1>Privicy and Policy</h1>
            <h1>Terms and Condition</h1>

        </div>
    </div>
    </div>
    
        


  )
}

export default Footer