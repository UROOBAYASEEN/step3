import React from 'react'
// import car1 from '../../public/car (1).png'
// import car2 from '../../public/Car (2).png'
// import car3 from '../../public/Car (3).png'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'
// import { MdDescription } from 'react-icons/md'
import Review from './Review'
import { IoIosArrowDown } from 'react-icons/io'
import { urlFor } from '@/sanity/lib/image'
import { useStateLink } from 'sanity/router'
import { toast, Toaster } from 'sonner'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
interface imagetype{
    _type: "image";
    asset: {
      _type: "reference";
      _ref: string; // Reference ID of the image asset
    };
  };
const ProductDetails = ({carName,purpose,length,price,carImage,carDescription,id}:{carName:string,purpose:string,length:number,price:string,carImage:imagetype,carDescription:string,id:string}) => {

const router=useRouter()


   
    


    const addingdata={
        carname:carName,
        purpose:purpose,
        length:length,
        price:price,
        carimaage:carImage,
        carDescription:carDescription,
        id:id
    
        }

    const dataAddtocart=()=>{
      
        
    if(window!==undefined){
       
        const storedArray = localStorage.getItem("carddata");
        const cardData = storedArray ? JSON.parse(storedArray) : [];

        // Append the new object to the array
        const updatedCardData = [...cardData, addingdata];

        // Update localStorage with the updated array
        localStorage.setItem("carddata", JSON.stringify(updatedCardData));
    }
   
    toast.success("Item added to cart!", { position: "top-right"});
  }
    const Reviewdata=[
        {name:"alex bird",
            image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA0QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xABBEAABAwMCAwUFBgIHCQAAAAABAAIDBAUREiEGMUETIlFhcRQygZGhBxVSscHRI+EkQmKCorLwFiUzNUNyksLx/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QAKREAAwACAQMDBAEFAAAAAAAAAAECAxESBCEiEzEyM0FRcYEUIzRCRP/aAAwDAQACEQMRAD8A9bCXKalCAcEFIlCAAhIlQBlCEm6AXKUJEAoBw54Uc08NO0OnmjiaTgF7g0Z+KzPHPFg4XpoKpsBqW6y2WNrmjAxsTv4rxLiXji98Rw+yVDw6AnLo2N0gOByD6hRsnR7O77TeF21clKa2TVHJoLuyOknOCQfDzWopq6lq4u1paiOVn4mvGy+VIbVVPDXSANb5HcKxoYJ6Jx9lqpYSebWvIDhkH9FHItxPqHKYeY814xwbx3UW9zaKtnfNA7Z2s96I/iHl4jz2XoHDd2jq7rOynrxUxPbkMLwTG5pxtvyKlMro1A5JMJcpBzUkAhKghANSFOwkcgGFNKdhIUBE5ROCmeoyEBDpQpNKFIO4JQjCBzUAVIeaVGEAIKEIBMpUYSIBVwX+5Ns9mqq9xA7GMkZ8ei7wsn9quf8AYO6nA7rAd+m4QHg/FHE9fxJXdvVPaQ3IaWR6MjpkZO6gt9LUEsNHD20rtwQMhoVbT009bMIqduXHoNsL1/gSyCjpx2zf4p/JY3fFHRix8vcxbOF+I65mp9Pk9Ds0/RJLwVxGIxJLA8tHg7de8UsUYxgD5LsIaegWatmriT51n4YvVDGah8BIDd9zqwu/gusMF0t79RikbVN/iNdgAHmD5br2yvgjljLXtBadjtzXh/ENG6y3Wsp424bryzbodwrRb3plbha2j6MCULN/Z5dpb1wnR1U+TM0Oic4/19BwD8RgrSDmug5WKlQhCASFKOaQoBpTCpE0oCJwUTlM5ROCAYkSoQHeEoQhABQOSRIEA5IjKEAJClSFAGVlvtShdUcA3gM1ZZCHkN8AQT9FqVx3ktbZ69z4jM0U0hMYGdY0nZAfN3BLMVcj3Y6DfovT6DiC1UmGzVTWnOM6TgfFebcH0LqmKeBp5vDct5keS1sVvro5DTmkpmQch27cl30/Jcl96PRxbUHo9uulDV709THIOhacrpqLhSUoLqmYMaB1KwFotU9ru1M5sjRG527A3G3llaLii0zXIH2ZwGAMtxnI6quy3E6HcS2moJZBWMfvjIzhedfaez+PFUMP/EZgO8d1o7VbLkxjKd8NJ2XJwZGWkj453VR9o1rdTWKnaO92c2kZJOAR/JTL8itz4m8+ypgbwFbNsF7XvI89bsrWhU/CVNHScLWmnia5rWUsezufLJz55KuAF2I84UIQEqAEYS5SIBpCaQnpHICJyhepnqF6AjQlQgO5CanBAKkwlQgEwhCEAhR0QUIBqUjUxzdtxjdInN5hAfP1hY+3Xipp5wGPhlIcByzyP5L1OhrYhTayemRhYz7Q7bHZuLYqlryY7lG+TTpxoc0gEZ+I+aq7ndKqC2W91GHOdUMduN8ObsR9Vx3PkelitOTRVvElHDem+1a42tfgkjbHjlaOn4goqqs0UMhlcRkBrTj58l5XZrLLfK1stbWU8OXAls8ml3phXUnDFTQSslpblTueO+xrZTqGd8Zxv/JNE8ts9NjroZmu3DXt5tPMFZnilkdZLRU8m+uqZy8jn9FSWSsub71J96ROg7ODW8v546ZK7qGX754utdNuGxh8ri0Z2Df5qF3eiKalbPS6RmilhbjGGDbwUyOWyF2/Y85vb2KEIQhAqEIQCFI5OITCgI3KF6mcoXIBiEIQHWEqZlLlASJCkQgHJEiVAHJCRKgECcmp2QgMX9q1lmuvDhqqNhfVUBMzQBklv9YDzwPovH7NfmxxR08re0iEvaNB6Eg/uvoW/wB3pLFaai4V5/gxN90Yy89GjzJ2XzDcaR1DM10YHZnoNh/8WdpG2N0ltHoQvPsbw+FscjCMjI3x8Fc2fiKa5T6TEyCNudby3Bx6leW229mnO4zq2z5Kxqr8HwdnHIcuzkjbwWPBo6lmTRfcTcQumuNUIHaYsNjyDjU0Z/dbX7KbVKaee+1TC01Q0U4cMERjmR6leYWCyVF3qRUVEbmUbcvdtu8eA9fFe+8NXajvVohqre1zIQNHZuABZjbG3otMaWzny8nOyyyhKRlGFsc4JQhCAAhKkQAmOSkpjigGOUTk9xUTigEQkykQHS1OCY1PCAcEuEiUFACMpUiAEoTXuaxpe9wa1oyS44CqKniKjicY6cOmk8QCG/Pr/rdRtFpin7IuccsKtud9tlrJbV1TRJjIjZ3nfIcliLpxXdqyOpEDhSxtJa3ScEnzKrjTH2SBkz8yOgMzy93ecT5qtVpbOnD0yutNnLxjfZOLKiaKna5lHTMBp2OG7jvqcfPu48lSS25lXTNOnOW75Ce0uorhFG14a58joHFvQE6mknz1Y+BV9T0rXOL6cl0fp+Sxyb3s3hTrS+xiv9l2uOxLPQcloLNwlTCVrpS6QgbagtXFbBIzIAz6LuoqYxOwRt4hZ8mOMofT0EdPTaWNDWhuPQKHhyeLhw0kQY/spo3GVgO4y/IPwyV1105ZoiazVk9/vYw1UQqIrxcjNTnVGHiJrfAA/rhaY5a7kVp+D+56XTVlPU47CVrs9M7/ACXR9Fi3QGeB8ceA4g6S07tdzC4bZxRcqeja6TTUujdokY494f63W03swy9MofZnoSRVtHeoKiNj5Gui1AEE7jB9FZMc14DmEFp6g7Kyezncte4qaUpKQqSo0qNykKiegGEqFxUrioXoBNSEzKEB1tUgULSpBugHpU0J6AFU36/0lliBndrnkBMMDfefj9PFWpIaMnYDcryO+e03m7SXUSf0d8joYR0bHgsB9MnP1TaLSm2df3tXX2ndV1c5ijfI4CJh9wA4x4Z+SSm9mdG6R0j+4x2dTicbFM4Wp6YUM8UrTM+GbJJOAA4Z/NWGqJnD9Y4QR4ayQNyP7RWNNKtHpY5p4NoxDGUj7WXF7gXn6knz8h1Wi7KB0skTgXiOBg1HG31K5SyGSiiifTQnXIBsMcw0fnqWkoIohPXtbEzQSG6SM5wP5q2Slop02GuZgrqWyV8opm94Bo2x3XNGQ78+itbLXGCtzETI582JonN5MyQ3T4DGN/H4qW6UVPPV3WmMIaWxtkYWOLT7p8OYyOSmhoSyrobjbIe2a5jJZacvxkY30k8jkJTTRXFjvk9HpsdohHcBOPEFLNb6Wlp3yyOeQ0chzKfbqllZSx1DGvZqG7H7Fp6g42TL7BLWWqaKndiXAcw+YOQp4Trsc/OlWqPObpcKymdVsMT+0meW08hHccDnLQfEAcuoUdtbCy5QU4zG5sLpMgczpB8uhz6hdd2pJa62Sz10jdTYiTGNuyI/D5jxXLZqGBnEELppJqh8sLjqleerUl6TN7lu09FvDHTNIw52QeeRn/MstK2kjqLrC450z5O/RzwOmfxrdtgpAC0UzMc/P5rPVjIor3coWwRAPYHt7uc9zV/maFGO1vRp1GGnoSzS0z7LTSNe9ukFuQ5wOxwOiuKS7VFuifU08rp2RjVJE87uaOYHwXPY5v8AcbwGRgxSua4aRyS35kT7TM4O7KeRoja8ct/EKu1yJ9NrB3N5ba+nuVKyppHBzHDkebT4ELpKwvA5qaKoLagNbHLpjO/vPxkH6hq3BK2POqWmI5QuKlcVA8oVGOKhkKkcVA/ZANQkyhAdrVIOSiaVI0oB4SpqEBT8Z3E2zhmuqWH+KWdlF5vedLfqVh6VnZtmomHaGjYxo8xv+avvtFqmNNmo3tJZNWdrI0eEbSfzIWdtckdRdqoxP1hzQHDqFjlPS6BSlTojskop7xVQchPTlzW+bd/ngj6ruqNUfDTm6HEyBoxjxOSs6+4SwVdFUs06u1fGXn8Li5oHzJ+SlvDf6JRwGpIL3ZOJP6oHlnzU8NtMPO5ipSOylge+roItB99ucjwJf/7LQW9p7Koka5pd2rjjO/gspb4C+9PeaglsELjtq2PTp6K2oYG+xtxI5rnDmc7/AETJPfRbpstab0R3Nj4+J5nBjtEkTYjt6fuV00T2UtBSPJALS5ob478vqqGqbLNcLi6Op1FjwWjWOnxVtaayrdZ6Iy6Hscwg9ozOd1Nx4lMGZ+p7G64bnE1tinYHaZCdjzVxUvEVO95IAAys7wvNK+kd22Np8DSCBggK04kl7G1zu0lwDRsOu6tPaTmy98z2Ya5T9tbKyQZDTlu/Uk7rnoiRd7eW9W6cD1cFJeq4fddTopiHacgu5cwqdldWyz2uVrgGh7d4m+O6rE7TOvqMyVpI3YjeTsx3yVDeIXsv8UhaAJIWA5cByduppGzGRwlqSHZ5axn5A5VNxFBqnoZTUOPvMzl37KsR3LdRlrinotLRGYqW4wZbnUHDvg7Eevoob1MZJqakJ09i3tHnwJ5Z9Bv6KqpIWRvrczkEuYBkkbAkeA8FN2bpPa27uIYB2xdscgDH1HzVnPkVnK/S7/k0L3iOkaaYkEMErD/aHeH1AW6pahtXSQ1LDlsrA4H1Xm1FX0zaGjDnue4wtOGDzIWn4CrmVVmNOCdVJIY8Hw6fqPgkbTZj1Tmplr8GkKhkUrioHnK0OIjcVBI5SuUD0A3UhNQgOxr1M1y4mSBTskQHTlLlRBycEB5rx5W545oaZzSWU9G9x8NTz6+AVHDUez3upfA8teIXHB5nb68/BTXOsdJ9o1dLkY7V0IHP3Rj9Fz8VUrdU00bGxy6CcjkdljVdz0sGKnhpopp6+VtvpoagASGoOHtPuuDgR6ZGyvrxRtNxt8b6t+l0Z+Z2/VUNxlnkpre17Mh0jdTjvnvaRg+jQr+8E/etrPTOP8TVpT1S0ZYsfLHTY+z0tNL96VPbSEkBox5q+o7fSFkIZLMw5b1Hks1w/L/uyp8XTNH+EFaeifkx+mVjdPZ24MM+k3+zNw0gdLcHsrTntHZDh4EfurKx0VXFZaeJj43gOeDhwHgq2mk7te78TpHfVquLRI0WeBxcBu4bnHIhXuno58GFeou5qeEoZoaaZk5ye3aQM56Kx4neRbKnS0uLWt2Az1CreFZQ9lQWkEBzTt8V3X+XNurXZ90tAx6hWl+BlljXUcTBXEzSUUwhhdqLTzaBn6BVE9LWyW6lfK5jOzcHd93hgdVpKipMtJOA8kCJw8Fny8OsvdJ2z+Y/ZRF9ma9Rh8+7+xrHW86i6SrOHDOGct1WcRW2n9ip5HVEx0TcxjqP5LpoKhzqKmcX5LoGn9E27SN+7KrtMEMiLwDyDhyKzVNUdF4JrDts4ILZTvlqS2eZm7DnAPMuP6qrq4S2vqI5KkvZ2LHYJOTgg/oV2Wqpl9pfmQ6OwaXdMnOByXPcIYJbrM+Z8jiKU4Y3ls155rRVq+5jkxL+nTkls1RA2hpmtGsti09eYPgCPzWh4BrxHxHWUeA0TmTAwRu0hw6/2yqLhh7GUsxijawCXQOp2Pj8V3WWrMPF8Tn40mu7M/3mEfnhTNeTMcuKlik9QcopFM/YkLnkVzhIXHdQvUruageUAmUJiEA2NxXQwlKhATtJUrSUIQHh1W9x4vqX57xuE36q04oP9AqHdTCN/khC57+SPa6b6FGb1Of92NJOl00ZI6e8tLf2MZcbVhv/AFOp/wC1CFd/JHLXbG9HJYSBTzt0jHb+f4AtRRkYb3B7h6nwQhZ18i+Kn6DKCkp2Ot1Q/LgSBnB8crsjpmS2iCJxeGhpcC04OQdkIV8nsT0b3a2a/g+JkVNMxg2DwN/QH9VNeHE2StdnfWDn4hCFafpmOT/K/lGPnaBDUEDGWvJ+Sz8bj90480qFTH7HZ1X1DT0kTBbrd3QdUQBXNdGD7tuDejY9vmhCqvma/wDO/wBEVkjjML3lgLtMYz/cCrrj/wA4mA2Hs52HL3HfulQr/wCzOff9pE/D21syNszvJ/8AJIx7m38OB3bc4SPmxCEj5MnqPpI9jk94+a55UIWx5DOdyhehCEDEIQgP/9k="

            ,possition:"CEO at BOKALAPAK",
            description:"Fantastic website! Sleek design, user-friendly interface, and lightning-fast performance. Perfectly optimized for all devices. Exceeded my expectations—highly recommend for anyone needing a professional online presence!"

        
            },{
                name:"Mikeal Jekson",
                possition:"CEO At Microsoft",
                image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzqC0Yk2EdPxA71JDBtbYuKdmmbmvU8mi1Q&s",
                description:"Exceptional website! Sleek design, seamless navigation, and responsive performance. Truly a professional touch with attention to detail. Highly recommend for anyone seeking top-tier web solutions"
            }
                
                
    ]
  return (
    <div className=' my-5'>
        <div className='  gap-5 justify-end md:flex'>
            <div className='border border-black'>
            <div className='bg-blue-700 h-[300px]    relative rounded-md'>
               
               <Image
               src={urlFor(carImage).url()}
               height={250}
               width={250}
               alt='thisisimage'
               className='absolute bottom-[20px] left-[100px]'
               />
               <h1 className='text-white font-bold w-[50%] pt-10 ml-5 text-2xl'>{carName}</h1>
               <p className='text-white font-light mt-5 ml-5 w-[70%]'>{carDescription}</p>

            </div>
            <div className='flex justify-between gap-3 mt-10'>
                <div className='bg-blue-700 h-[100px] w-[150px] border border-black rounded-md'>
                <Image
               src={urlFor(carImage).url()}
               height={180}
               width={180}
               alt='thisisimage '
               className='mt-10'
               />
                </div>
                <div className='bg-blue-700 h-[100px] w-[150px] border  rounded-md'>
                <Image
               src={urlFor(carImage).url()}
               height={180}
               width={180}
               alt='thisisimage '
               className='mt-10'
               />
                </div>
                <div className='bg-blue-700 h-[100px] w-[150px] border  rounded-md'>
                <Image
               src={urlFor(carImage).url()}
               height={180}
               width={180}
               alt='thisisimage '
               className='mt-10'
               />
                </div>
              
              

            </div>
            </div>
            <div className='bg-white border border-blue-700 px-5 py-5 mt-10 md:mt-1'>
                <div className='flex justify-between  mx-5 '>
                    <h1 className='text-2xl font-bold'>{carName}</h1>
                    <p><FaHeart className='text-red-800' /></p>
                </div>
                <div className='flex gap-3 mt-2 mx-5 items-center text-center'>
                    <FaHeart className='text-yellow-600' />
                    <FaHeart   className='text-yellow-600' />
                    <FaHeart   className='text-yellow-600' />
                    <FaHeart   className='text-yellow-600' />
                    <FaHeart   className='text-yellow-600' />
                    <p>440+ Reviews</p>
                </div>
                <p className='mx-5 mt-7 w-[70%] z-20'>
                
                {carDescription}
                </p>
                <div className=' lg:flex justify-between mx-5 mt-10'>
                    <div>
                        <p>Type car</p>
                        <h1 className='mt-5'>Steering</h1>
                    </div>
                    <div>
                        <p>Sport</p>
                        <h1 className='mt-5'>Manual</h1>
                    </div>
                    <div>
                        <p>Capacity</p>
                        <h1 className='mt-5'>Gasoline</h1>
                    </div>
                    <div>
                        <p>2 Person</p>
                        <h1 className='mt-5'>70L</h1>
                    </div>
                </div>
                <div className=' mx-5 mt-10 items-center text-center justify-between'>
                    <div className='flex'><span className='font-bold text-2xl'>{price}/</span><span>days</span></div>
               
               <div className='flex gap-5'>
             
           <Link href={`/Rentacar/${id}?index=1`}><p className='bg-blue-700 px-12 py-4 text-white font-bold' >Rent now</p></Link>
                 <div className='bg-blue-700 px-12 py-4 text-white font-bold'onClick={dataAddtocart}> Add To cart</div>
               
           
           
               
           
               </div>
                </div>
            </div>
        </div>
        <div className='mt-20 bg-white p-10'>
            <div className='flex gap-3  items-center text-center'><span className='text-2xl font-bold'>Reviews</span><span className='bg-blue-700 px-9 py-3 text-white '>13</span></div>
{Reviewdata.map((val,ind)=>
<div key={ind}>
    <Review {...val}/>
    </div>
)}
<div className='text-blue-500 text-2xl flex justify-center text-center items-center mt-10 gap-3 px-5'>
    
    <span className=''>Show All</span>
    <IoIosArrowDown className='text-2xl text-black' />
</div>
        </div>
    </div>
  )
}
export default ProductDetails