import React from 'react'

const SideBar = () => {
  return (
    <div className='bg-white pb-[800px]'>
<div className='w-[26%]  left-0 bg-white h-[1900px]   hidden lg:inline'>
          <h1 className='ml-5 mt-3 pt-10'>Type</h1>
          <div className='flex justify-center gap-3 mt-3'>
            <input type='checkbox' ></input>
            <p >Spots (10)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5 '>
            <input type='checkbox' ></input>
            <p>SUV(12)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>MPV(16)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Sedan(20)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Coupe(14)</p>
          </div>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>Hatchback(14)</p>
          </div>
          <h1 className='mt-10 mx-5'>CAPACITY</h1>
          <div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>2 Person(10)</p>
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>4 Person (14)</p>
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p></p>6 Person(12)
          </div><div className='flex justify-center gap-3 mt-5'>
            <input type='checkbox' ></input>
            <p>8 or More16()</p>
          </div>
          <h1 className='mt-10 mx-5'>Price</h1>
          <div className='h-[20px] w-[300px] bg-gray-300 mt-5 mb-10 mx-5 '>
            <div className='h-[20px] w-[200px] bg-blue-800 '></div>
          </div>
          <h1 className='mx-5'>Max.$100.00</h1>
          

        </div>

    </div>
  )
}

export default SideBar