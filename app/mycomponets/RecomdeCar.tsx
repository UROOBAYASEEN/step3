import React from 'react'
import car4 from '../../public/Car (4).png'
import car5 from '../../public/Car (5).png'
import car6 from '../../public/Car (6).png'
import car7 from '../../public/Car (7).png'
import car8 from '../../public/Car (8).png'
import car9 from '../../public/Car (9).png'
import car10 from '../../public/Car (10).png'
import car11 from '../../public/Car (11).png'
import Products from './Products'
import Link from 'next/link'
const RecomdeCar = () => {
    const data=[
         { name:"All New Rusia",
            image:car4,
            rent:'$72',
            lenght:"20",
            purpose:"SUV"
        },
        { name:"CR-V",
            image:car5,
            rent:'$80',
            lenght:"80",
            purpose:"SUV"
        },
        { name:"All NEW  Terios  ",
            image:car6,
            rent:'$74',
            lenght:"90",
            purpose:"SUV"
        },
        { name:"CR-V",
            image:car7,
            rent:'$80',
            lenght:"80",
            purpose:"SUV"
        },
        { name:"MG ZX",
            image:car8,
            rent:'$76',
            lenght:"70",
            purpose:"Hatchback"
        },
        { name:"NEW MG ZS",
            image:car9,
            rent:'$80',
            lenght:"80",
            purpose:"Hatchback"
        },
        { name:"MG ZX EXCITE",
            image:car10,
            rent:'$74',
            lenght:"90",
            purpose:"HATCHBACK"
        },
        { name:"New MG ZS",
            image:car11,
            rent:'$80',
            lenght:"80",
            purpose:"SUV"
        },
    ]
  return (
    
    <div className=' mt-10 bg-gray-100 overflow-x-hidden'>
        <div>
        <h1 className='ml-10 text-2xl mt-4'>Recommendation Car</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4'>
        {data.map((val,ind)=>
        <div key={ind} className='ml-5'>
        {/* <Products {...val}/> */}
        </div>
        
        )}
    </div>
    <div className="flex justify-center items-center text-center">
<Link href="/Car"><p className='bg-blue-700 text-white font-bold px-10 py-3  rounded-md mt-10 mb-10'>Show More Car</p></Link>

    </div>
    </div> 
  )
}

export default RecomdeCar