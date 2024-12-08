import React from 'react'
import mycar from '../../public/Car (5).png'
import paypal from '../../public/PayPal.png'
import visa from '../../public/Visa.png'
import Image from 'next/image'
import bitcoin from '../../public/Bitcoin.png'
import { AiOutlineSafety } from 'react-icons/ai'
import { FaStar } from 'react-icons/fa'

const Pyment = () => {
  return (
    <div className='flex  bg-white py-5 rounded-lg'>
        <div className='billdiv w-[852px]  '>
            <div className='firstportion  m-5 p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>Biling Info</h1>
                        <p className='text-gray-300'>Please Enter your billing Info</p>
                    </div>
                    <div> Step 1 to4</div>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <h1 className='mt-5 font-bold'>NAME</h1>
                        <input type='text' placeholder='Enter Name' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                    <div>
                        <h1 className='mt-5 font-bold'>Phone Number</h1>
                        <input type='text' placeholder='Phone Number' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                    <div>
                        <h1 className='mt-5 font-bold'>Address</h1>
                        <input type='text' placeholder='Address ' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div> <div>
                        <h1 className='mt-5 font-bold'>Town/City</h1>
                        <input type='text' placeholder='Town/City' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                </div>
            </div>
            <div className='secondportion m-5 p-5'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='font-bold mt-5 text-2xl'>Rental Into</h1>
                        <p className='mt-2 text-gray-300'>Please Select YOur Rental Details</p>
                    </div>
                    <div>Step 2 to 4</div>
                </div>
                <div className='flex gap-3 text-center items-center mt-5'>
                    <span className='bg-blue-600 h-4 w-4 rounded-full'></span>
                    <span className='text-2xl font-bold'>Pick-up</span>
                </div>
                <div className='grid grid-cols-2'>
                <div>
                        <h1 className='mt-5 font-bold'>Location</h1>
                        <input type='text' placeholder='select your city' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div><div>
                        <h1 className='mt-5 font-bold'>Date</h1>
                        <input type='text' placeholder='select your date' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div><div>
                        <h1 className='mt-5 font-bold'>Time</h1>
                        <input type='text' placeholder='Select your time' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                </div>
                <div className='flex gap-3 text-center items-center mt-5'>
                    <span className='bg-blue-600 h-4 w-4 rounded-full'></span>
                    <span className='text-2xl font-bold'>Drop-OF</span>
                </div>
                <div className='grid grid-cols-2'>
                <div>
                        <h1 className='mt-5 font-bold'>Location</h1>
                        <input type='text' placeholder='select your city' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div><div>
                        <h1 className='mt-5 font-bold'>Date</h1>
                        <input type='text' placeholder='select your date' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div><div>
                        <h1 className='mt-5 font-bold'>Time</h1>
                        <input type='text' placeholder='Select your time' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                </div>
            </div>
            <div className='thirdportion p-5 m-5'>
            <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>PYMENT METHOD</h1>
                        <p className='text-gray-300'>Please Enter your pyment methods</p>
                    </div>
                    <div> Step 3 to4</div>
                </div>
                <div className='flex justify-between'>
            <div className='flex gap-3 text-center items-center mt-5'>
                    <span className='bg-blue-600 h-4 w-4 rounded-full'></span>
                    <span className='text-2xl font-bold'>Credit Cart</span>
                </div>
                <div>
                    <Image
                    src={ visa}
                    alt='thidid imae'
                    width={100}
                    height={100}
                    className='text-center items-center '
                    />


                </div>
                </div>
                <div className='grid grid-cols-2'>
                <div>
                        <h1 className='mt-5 font-bold'>Card Number</h1>
                        <input type='text' placeholder='Card number' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div><div>
                        <h1 className='mt-5 font-bold'>Expiration Date</h1>
                        <input type='text' placeholder='DD/MM/YY' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                    <div>
                        <h1 className='mt-5 font-bold'>CARD HOLDER</h1>
                        <input type='text' placeholder='Card holder' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                    <div>
                        <h1 className='mt-5 font-bold'>CVC</h1>
                        <input type='text' placeholder='CVC' className='text-center bg-gray-200 text-gray-300 w-[360px] mt-5 h-[50px]'></input>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='flex justify-between bg-gray-200 py-3 px-4'>
                       
                       <div  className='flex justify-between gap-10 mx-5 '>
<span><input type='radio' className='text-4xl'></input></span><span className='text-bold text-2xl '>Paypal</span>

                       </div>
                       <div>
                        <Image
                        src={paypal}
                        alt='thisisimage'
                        width={100}
                        height={100}
                        />
                       </div>
                    </div>
                    <div className='flex justify-between bg-gray-200 py-3 px-4 mt-5'>
                       
                       <div  className='flex justify-between gap-10 mx-5 '>
<span><input type='radio' className='text-4xl'></input></span><span className='text-bold text-2xl '>Bitcoin</span>

                       </div>
                       <div>
                        <Image
                        src={bitcoin}
                        alt='thisisimage'
                        width={100}
                        height={100}
                        />
                       </div>
                    </div>
                    
                </div>
            </div>
            <div className='forthportion mx-5'>
            <div className='flex justify-between'>
                    <div className='mx-5'>
                        <h1 className='text-2xl font-bold '>Confirmation</h1>
                        <p className='text-gray-300'>We are getting to the end.just few clicks and your rental is ready!</p>
                    </div>
                    <div> Step 4 to4</div>
                </div>
                <div  className='flex justify-between gap-10 mx-5  bg-gray-200 py-2 px-5 mt-5'>
<span><input type='checkbox' className='text-4xl'></input></span><span className='text-bold text-2xl '>i agree with sending an marketing and newsletters emails no spam promised!</span>

                       </div>
                       <div  className='flex justify-between gap-10 mx-5  bg-gray-200 py-2 px-5 mt-5'>
<span><input type='checkbox' className='text-4xl'></input></span><span className='text-bold text-2xl '>i agree with  our tearms and conditions and privicy policy</span>

                       </div>
                       <button className='bg-blue-700 text-white font-bold rounded-md mt-5 px-8 py-3 mx-5'>Rent now</button>
                       <AiOutlineSafety className='mx-5 mt-5 text-4xl font-bold text-blue-700' />
                       <h1 className='font-bold mx-5 mt-5 '>All your data are save </h1>
                       <p className='text-gray-300 mx-5 mt-2'>We are using the mostadvance security to provide you the best experiance ever</p>

            </div>

        </div>
        <div className='w-[492px] py-3 bg-white'>
            <h1 className='font-bold'>Rental summary</h1>
            <p className='text-gray-200 mt-3'> Price may chnage depend on the length of rental and price of the rental car </p>
       <div className='flex gap-4 mb-5'>
       
       <div className='mt-10 bg-blue-600 px-6 py-6'>
       <Image
        src={mycar}
        alt="this is image"
        height={200}
        width={200}
        />
       </div>
       <div className='mt-14'>
       <h1 className='font-bold text-2xl'>NISSAN GT -R</h1>
       <div className='flex gap-3'>
       <FaStar  className='text-2xl text-yellow-400'/>
       <FaStar className='text-2xl text-yellow-400'/>
       <FaStar className='text-2xl text-yellow-400'/>
       <FaStar className='text-2xl text-yellow-400'/>
       <FaStar className='text-2xl text-yellow-400'/>
       </div>
       </div>


       </div>
       <div className='border-b border-b-1'></div>
       <div>
        <div className='flex justify-between'>
            <h1>Subtotal</h1>
            <h1>$80.00</h1>


        </div>
        <div className='flex justify-between'>
            <h1>Tax</h1>
            <h1>$0</h1>

            

        </div>
       </div>
       <div>
       
    <div className='flex justify-between bg-gray-200 px-5 mt-5 py-5'>

        <h1>Apply promocode</h1>
        <h1 className='font-bold '>Apply now</h1>

    </div>
    <div className='flex justify-between bg-gray-200 px-5 mt-5 py-5'>
        <div>
            <h1 className='font-bold  text-2xl'>Total Rental Price</h1>
            <p className='text-gry-300'>Overall price and include Rental Discount</p>
        </div>
        <div className='text-2xl font-bold'>$80.00</div>

    </div>
       </div>
        </div>

    </div>
  )
}

export default Pyment