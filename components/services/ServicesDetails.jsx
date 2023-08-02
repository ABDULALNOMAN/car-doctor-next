import Image from 'next/image'
import React from 'react'
import checkout from '../../public/images/checkout/checkout.png'

const ServicesDetails = () => {
  return (
    <div className='relative w-full h-[40vh] bg-[#FF3811] '>
      <div className='h-[40vh] w-full relative clip_path rounded-lg'>
        <div className='radialContainer '></div>
        <Image src={checkout} fill={true} className='rounded-lg' style={{objectFit:"cover"}} quality={100}  alt='cover'></Image>
        <div className='absolute w-full h-full z-20 flex flex-col justify-center pl-20 '>
          <h1 className='text-white text-5xl font-bold'>Service Details</h1>
        </div>
      </div>
        <div className='absolute w-full h-full z-40 top-0 flex flex-col justify-end items-center '>
          <h2 className='text-white font-semibold mb-1'>home/service details</h2>
        </div>
    </div>
  )
}

export default ServicesDetails
