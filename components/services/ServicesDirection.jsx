import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const ServicesDirection = () => {
  return (
    <div className='w-full md:mt-0 mt-10'>
      <div className='w-full px-6 py-10 bg-slate-200 rounded-3xl'>
        <h2 className='text-2xl font-bold mb-5'>serviecs</h2>
        <div className='flex flex-col w-full gap-y-4'> 
          <button className='btn hover:bg-[#FF3811] hover:text-white flex bg-white justify-between text-sm'>Full Car Repair <AiOutlineArrowRight className=" text-orange-600"></AiOutlineArrowRight> </button>
          <button className='btn hover:bg-[#FF3811] hover:text-white  flex justify-between bg-white text-sm'>Engine Repair <AiOutlineArrowRight className="text-orange-600"></AiOutlineArrowRight> </button>
          <button className='btn hover:bg-[#FF3811] hover:text-white  flex justify-between bg-white text-sm'>Automatic Services <AiOutlineArrowRight className="text-orange-600"></AiOutlineArrowRight> </button>
          <button className='btn hover:bg-[#FF3811] hover:text-white  flex justify-between bg-white text-sm'>Engine Oil Change <AiOutlineArrowRight className="text-orange-600"></AiOutlineArrowRight> </button>
          <button className='btn hover:bg-[#FF3811] hover:text-white  flex justify-between bg-white text-sm'>Battery Charge <AiOutlineArrowRight className="text-orange-600"></AiOutlineArrowRight> </button>
        </div>
      </div>
    </div>
  )
}

export default ServicesDirection
