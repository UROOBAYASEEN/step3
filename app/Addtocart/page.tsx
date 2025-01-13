"use client"
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';
import { toast } from 'sonner';

const page = () => {
 
  interface AddingData {
    carname: string;
    purpose: string;
    length: number;
    price: string;
    carimaage: {
      _type: "image";
      asset: {
        _type: "reference";
        _ref: string;
      };
    };
    carDescription: string;
    id: string;
  }
  const [cartdata, setcartdata] = useState<AddingData[]>([])
  useEffect(()=>{
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("carddata");
      if (data) {
        try {
          const parsedData: AddingData[] = JSON.parse(data);
          setcartdata(parsedData)
      
        } catch (error) {
          console.error("Failed to parse localStorage data:", error);
        }
      }
    }
  
  },[])
  
  const removeitem=(id:string)=>{
   
    const storedData = localStorage.getItem("carddata");
    if (storedData) {
  
  
      const parsedData: AddingData[] = JSON.parse(storedData);
      const updatedData = parsedData.filter(item => item.id !== id);
  
    
  
      localStorage.setItem("carddata", JSON.stringify(updatedData));
      toast("Data Is delete from Cart")

  }
}
  return (
    <div className='h-screen w-screen '>
      {
        cartdata &&<div>
          {
            cartdata.length==0?<div className='w-screen
             text-center item-center p-2 flex items-center justify-center h-screen'>
              <div className='rounded-md  '> 
                <h1 className='text-3xl font-bold '>Card Data Is Empty</h1>
                <p className='mt-10 py-3 px-7 bg-red-600 font-bold '>Veiw Car</p>


              </div>
            </div>:<div className='flex justify-center items-center text-center'>
              <div>
                <h1>Cart Product</h1>
                {
                  cartdata.map((val)=>
                    <div className="flex justify-evenly  mt-24 border border-black p-2">
                      <p className='text-2xl font-bold hover:text-3xl'>{val.carname}</p>
                     <Image 
                    src={urlFor(val.carimaage).url()}
                    height={200}
                    width={200}
                    alt='Car Product'/>
                   
                      <p className='text-2xl font-bold  hover:text-3xl'>{val.price}</p>
              
              <p><MdDelete className='text-red-600 text-2xl' onClick={()=>{
                removeitem(val.id)

              }}/></p>
         
         

            
            


                    </div>

                  )
                }
              </div>
              
            </div>
          
          }
        </div>
      }
    


    </div>
  )
}

export default page