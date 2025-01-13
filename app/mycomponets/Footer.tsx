import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='bg-white  justify-between mx-10 py-10 overflow-x-hidden  lg:flex pb-10'>
        <div className='border-b border-b-1'> 
            <h1 className='uppercase text-2xl  text-blue-800 mt-10  font-bold '>morent</h1>
            <p className='uppercase  text-black  mt-10  font-bold leading-[25px] mb-10'>Our vision is to provide convenius and help to increase your sale and busniness</p>
        </div>
        <div className='lg:flex justify-between gap-5 md:mx-5'>
            <div>
                <h1 className='font-bold mt-10 text-2xl '>About</h1>
                <p className='text-black mt-10 '>How it work</p>
                <p  className='text-black mt-10 '>Featured</p>
                <p  className='text-black mt-10 '>Partnership</p>
                <p  className='text-black mt-10 '>Bussines Relation</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-10 '>Community</h1>
                <p className='text-black mt-10 '>Events</p>
                <p  className='text-black mt-10'>Blogs</p>
                <p  className='text-black mt-10 '>Podcasts</p>
                <p  className='text-black mt-10 '>Invite a Friends</p>
            </div>
            <div>
                <h1 className='font-bold text-2xl mt-10 '>Socials</h1>
                <p className= 'text-black mt-10 '>Discords</p>
                <p  className='text-black mt-10'>Instagram</p>
                <p  className='text-black mt-10 '>Twitter</p>
                <p  className='text-black mt-10 '>Facebook</p>
            </div>
            
            

        </div>

    </div>
    <div className=' justify-between mx-10 font-bold md:flex py-10 text-black'>
        <h1>2022  MORENT ALL Right Reserved</h1>
        <div className='flex gap-10'>
            <h1>Privicy and Policy</h1>
            <h1>Terms and Condition</h1>

        </div>
    </div>
    </div>
    
        


  )
}

export default Footer