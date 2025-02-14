"use client"
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'sonner';

const Page = () => {
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

  const [cartdata, setCartData] = useState<AddingData[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("carddata");
      if (data) {
        try {
          const parsedData: AddingData[] = JSON.parse(data);
          setCartData(parsedData);
        } catch (error) {
          console.error("Failed to parse localStorage data:", error);
        }
      }
    }
  }, []);

  const removeItem = (id: string) => {
    const storedData = localStorage.getItem("carddata");
    if (storedData) {
      const parsedData: AddingData[] = JSON.parse(storedData);
      const updatedData = parsedData.filter(item => item.id !== id);
      localStorage.setItem("carddata", JSON.stringify(updatedData));
      setCartData(updatedData); // Update the state after deleting
     
      toast.success("Item deleate from Cart", { position: "bottom-right"});
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100">
      {cartdata.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold text-gray-800">Cart is Empty</h1>
         <Link href="/Car"><button className="mt-5 py-3 px-7 bg-red-500 text-white font-bold rounded-md hover:bg-red-600 transition duration-300">
            View Cars
          </button></Link>
        </div>
      ) : (
        <div className="max-w-screen-lg mx-auto py-10 px-4">
          <h1 className="font-bold text-3xl text-center bg-blue-700 text-white py-3 rounded-md">
            Cart Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {cartdata.map((val, ind) => (
              <div key={ind} className="bg-white shadow-md rounded-lg p-5 border border-blue-300 flex flex-col items-center text-center">
                <p className="text-xl font-bold text-blue-700">{val.carname}</p>
                <Image
                  src={urlFor(val.carimaage).url()}
                  height={200}
                  width={200}
                  alt="Car Product"
                  className="rounded-md my-3"
                />
                <p className="text-lg font-semibold text-gray-600">Price: {val.price}</p>
                <div className="flex justify-between items-center w-full mt-3">
                  <MdDelete
                    className="text-red-600 text-2xl cursor-pointer hover:scale-110 transition-transform  "
                    onClick={() => removeItem(val.id)}
                  />
               
               <div className='flex gap-3 mx-3'>
               <Link href={`/Rentacar/${val.id}?index=1`}>  <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
                    Rent A Car
                  </button></Link>
                  <Link href={`/Car/${val.id}`}>  <button className="px-6 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
                    View Details
                  </button></Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;

// "use client"
// import { urlFor } from '@/sanity/lib/image';
// import Image from 'next/image';
// import React, { useEffect, useState } from 'react'
// import { MdDelete } from 'react-icons/md';
// import { toast } from 'sonner';

// const Page = () => {
 
//   interface AddingData {
//     carname: string;
//     purpose: string;
//     length: number;
//     price: string;
//     carimaage: {
//       _type: "image";
//       asset: {
//         _type: "reference";
//         _ref: string;
//       };
//     };
//     carDescription: string;
//     id: string;
//   }
//   const [cartdata, setcartdata] = useState<AddingData[]>([])
//   useEffect(()=>{
//     if (typeof window !== "undefined") {
//       const data = localStorage.getItem("carddata");
//       if (data) {
//         try {
//           const parsedData: AddingData[] = JSON.parse(data);
//           setcartdata(parsedData)
      
//         } catch (error) {
//           console.error("Failed to parse localStorage data:", error);
//         }
//       }
//     }
  
//   },[])
  
//   const removeitem=(id:string)=>{
   
//     const storedData = localStorage.getItem("carddata");
//     if (storedData) {
  
  
//       const parsedData: AddingData[] = JSON.parse(storedData);
//       const updatedData = parsedData.filter(item => item.id !== id);
  
    
  
//       localStorage.setItem("carddata", JSON.stringify(updatedData));
//       toast("Data Is delete from Cart")

//   }
// }
//   return (
//     <div className='h-screen w-screen '>
//       {
//         cartdata &&<div>
//           {
//             cartdata.length==0?<div className='w-screen
//              text-center item-center p-2 flex items-center justify-center h-screen'>
//               <div className='rounded-md  '> 
//                 <h1 className='text-3xl font-bold '>Card Data Is Empty</h1>
//                 <p className='mt-10 py-3 px-7 bg-red-600 font-bold '>Veiw Car</p>


//               </div>
//             </div>:<div className='flex justify-center items-center text-center h-screen overflow-y-scroll'>
//               <div className=''>
//                 <h1 className='font-bold text-2xl mt-5 bg-red-700 text-white'>Cart Product</h1>
//                 {
//                   cartdata.map((val,ind)=>
//                     <div  key={ind}  className="flex justify-evenly  mt-10 border border-black p-4 gap-10 ">
//                       <p className='text-2xl font-bold hover:text-3xl'>{val.carname}</p>
//                      <Image 
//                     src={urlFor(val.carimaage).url()}
//                     height={200}
//                     width={200}
//                     alt='Car Product'/>
                   
//                       <p className='text-2xl font-bold  hover:text-3xl'>{val.price}</p>
              
//               <p><MdDelete className='text-red-600 text-2xl' onClick={()=>{
//                 removeitem(val.id)

//               }}/></p>
//               <button className='px-7 py-3 bg-blue-500 text-white font-bold'> Rent A Car</button>
         
         

            
            


//                     </div>

//                   )
//                 }
//               </div>
              
//             </div>
          
//           }
//         </div>
//       }
    


//     </div>
//   )
// }

// export default Page