import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import prime from '@/public/prime.png'
import { MdOutlineCheckCircle } from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { MdInfoOutline } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";

const page = () => {
  return (
    <div>
      {/* This is the main div  */}
      
      <div>
        {/* this is the container div  */}

        <div className='flex justify-between items-center bg-blue-50'>
          {/* this div is for the header  */}
          <Link href="/">
          <Image src={prime} alt='logo' width={50} className='cursor-pointer ml-2'></Image>
          
          </Link>

          <h1 className='text-sm font-semibold mr-6'>Queue Service</h1>
          
        </div>

      
      {/* this portion is for the company branding  */}

      <div className='bg-blue-100 mt-5 flex flex-col justify-center items-center w-[90%] ml-5 p-2 pb-5 rounded-xl'>
        <h1 className='text-3xl font-bold text-blue-600 py-2'>Welcome to Prime Bank</h1>
        <h1 className='text-xl font-semibold'>Gulshan Branch</h1>
      </div>


      {/* This section is for the react icons  */}

      <div className='grid grid-cols-2 gap-2 mt-5 p-6  ml-5'>
        <div className='flex flex-col items-center border-2 border-blue-200 rounded-xl w-[90%] p-10 mb-4'>
          <MdOutlineCheckCircle className='text-3xl font-bold mb-2' />
          <span className='font-semibold'>Check in</span>
        </div>

        <div className='flex flex-col items-center border-2 border-blue-200 rounded-xl w-[90%] p-10 mb-4'>
          <RiCalendarScheduleLine className='text-3xl font-bold mb-2' />
          <span className='font-semibold'>Schedule</span>
        </div>


        <div className='flex flex-col items-center border-2 border-blue-200 rounded-xl w-[90%] p-10 '>
          <SiAntdesign className='text-3xl font-bold mb-2' />
          <span className='font-semibold '>Branch  </span>
        </div>


        <div className='flex flex-col items-center border-2 border-blue-200 rounded-xl w-[90%] p-10 '>
          <MdInfoOutline className='text-3xl font-bold mb-2' />
          <span className='font-semibold'>Check in</span>
        </div>

      </div>

      {/* this section is for the lower section  */}

      <div className='flex justify-between items-center w-[80%] ml-11 mt-25'>
        <button className='border-2 border-blue-100 rounded-md py-1 w-[45%] text-center'>
          <span className='font-bold'>View Queue</span>
        </button>

        <button className='border-2 border-blue-100 rounded-md py-1 w-[45%] text-center'>
          <span className='font-bold px-8'>FAQ</span>
        </button>
        

      </div>

      {/* This is the Lower portion  */}

      <div className='flex gap-1 mt-4 p-2 justify-center items-center'>
        <span  className='text-[12px] text-blue-500 font-semibold'>Schedule of Charges</span>
        <span className='text-[12px] text-blue-500 font-semibold border-l-1 border-blue-300 '>Financial Literacy</span>
        <span className='text-[12px] text-blue-500 font-semibold border-l-1 border-blue-300 '>MyPrime App</span>
        <span className='text-[12px] text-blue-500 font-semibold border-l-1 border-blue-300 '>Download</span>
        <span className='text-[12px] text-blue-500 font-semibold border-l-1 border-blue-300 '>Contact Us</span>
      </div>





      </div>
    </div>
  )
}

export default page