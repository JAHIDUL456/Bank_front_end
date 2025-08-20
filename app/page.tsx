import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import prime from '@/public/prime.png'

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





      </div>
    </div>
  )
}

export default page