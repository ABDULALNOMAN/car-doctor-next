import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsFillFileEarmarkTextFill, FaBeer } from 'react-icons/bs';

const Download = () => {
  return (
    <div className='py-10'>
      <div className='bg-black text-white px-7 py-10 rounded-2xl'>
        <h4 className='text-2xl font-semibold pb-4'>download</h4>
        <div>
            <div className='flex flex-col gap-y-3'>
                <div className='flex justify-between items-center w-full'>
                   <div className='flex justify-start items-center gap-x-3'> 
                        <BsFillFileEarmarkTextFill className='text-3xl'></BsFillFileEarmarkTextFill>
                        <div className=''>
                            <h6>Our Brochure </h6>
                            <p className='text-sm'>Download</p>
                        </div>
                    </div> 
                    <AiOutlineArrowRight className='bg-orange-600 text-4xl rounded-full p-2 text-white'></AiOutlineArrowRight>
                </div>
                <div className='flex justify-between items-center w-full'>
                   <div className='flex justify-start items-center gap-x-3'>
                        <BsFillFileEarmarkTextFill className='text-3xl'></BsFillFileEarmarkTextFill>
                        <div>
                            <h6>Company Details</h6>
                            <p className='text-sm'>Download</p>
                        </div>
                    </div> 
                    <AiOutlineArrowRight className='bg-orange-600 text-4xl rounded-full p-2 text-white'></AiOutlineArrowRight>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Download
