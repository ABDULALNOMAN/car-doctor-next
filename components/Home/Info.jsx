import React from 'react'
import shedule from '../../public/images/info/shedule.png'
import phone from '../../public/images/info/chat.png'
import location from '../../public/images/info/map.png'

import Image from 'next/image'

const Info = () => {
  return (
    <div className='py-24'>
      <div className='py-16 px-10 bg-black text-white w-10/12 mx-auto h-full rounded-md'>
        <div className='flex justify-around items-center'>
            <div className='flex justify-start items-center gap-2'>
                <Image src={shedule} className='w-10 h-full' alt="shedule" />
                <div>
                    <p className='text-sm'>We are open monday-friday</p>
                    <h4 className='text-lg font-bold'>7:00 am - 9:00 pm</h4>
                </div>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <Image src={phone} className='w-10 h-full' alt=" phone" />
                <div>
                    <p className='text-sm'>Have a question?</p>
                    <h4 className='text-lg font-bold'>+8801639941361</h4>
                </div>
            </div>
            <div className='flex justify-start items-center gap-2'>
                <Image src={location} className='w-10 h-full' alt="" />
                <div>
                    <p className='text-sm'>Need a repair? our address</p>
                    <h4 className='text-lg font-bold'>c Street, New York</h4>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info
