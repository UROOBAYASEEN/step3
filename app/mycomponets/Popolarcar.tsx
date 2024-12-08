import React from 'react'
import car1 from '../../public/image 7.png'
import Products from './Products'
import car2 from '../../public/car (1).png'
import car3 from '../../public/Car (2).png'

import car4 from '../../public/Car (3).png'
const Popolarcar = () => {
    const imageData=[
        {
            name:"keegnseeg",
            image:car1,
            rent:'$99.00',
            lenght:"90",
            purpose:"Sport"
        },
        {
            name:"Nisaan G-T-R",
            image:car2,
            rent:'$80.00',
            lenght:"80",
            purpose:"Sport"
        },  {
            name:"Rolls-Royce",
            image:car3,
            rent:'$96.00',
            lenght:"70",
            purpose:"Shdan"
        },  {
            name:"Meesan G-Y R",
            image:car4,
            rent:'$80.00',
            lenght:"80",
            purpose:"Sport"
        },
    ]
  return (
    <div className='mx-5 mt-5 bg-gray-200'>
        <div className='flex justify-between'>
        <h1 className='mt-10 mx-10 mb-5 text-2xl'>Popular Car</h1>
        <h1 className='mt-10 mx-10 mb-5 text-2xl'>View All</h1>
        </div>


    <div className='mx-5 grid grid-cols-4'>

{imageData.map((val,ind)=>
<div key={ind}>
<Products {...val}/>
</div>

)}
    </div></div>
  )
}

export default Popolarcar