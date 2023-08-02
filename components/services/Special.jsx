import Image from 'next/image'
import React from 'react'
import logo from '../../public/logo.svg'

const Special = () => {
  return (
    <div>
      <div className='bg-black text-white px-6 py-10 flex items-center flex-col gap-y-3 text-center rounded-2xl'>
        <Image src={logo} className='w-24 h-24' style={{objectFit:"contain"}} quality={100} alt=''></Image>
        <h2 className='text-xl'>car doctor</h2>
        <p>Need Help? We Are Here To Help You</p>
        <div className='relative p-4 '>
            <div className=' px-4 py-6 rounded-xl bg-white text-black  w-full'>
                <h5><span className='text-[#ff3811]'>car doctore</span> special</h5>
                <p>save up to <span className='text-[#FF3811]'>80% offf</span></p>
                <div className='absolute bottom-0 left-14 bg-[#ff3811] px-2 py-1 rounded-lg '>
                    <p className='text-white'>get a quote</p>
                </div>
            </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-3 mt-8'>
        <h3 className='text-2xl font-bold'>price: $250.00</h3>
        <button className='btn_primary'>proceed checkout</button>
      </div>
    </div>
  )
}

export default Special
