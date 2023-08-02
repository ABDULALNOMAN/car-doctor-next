import Image from 'next/image'
import React from 'react'
import carengine from '../../public/images/banner/3.jpg'

const CarEngineService = () => {
  return (
    <div>
      <div>
        <div className=''>
            <Image src={carengine} className='w-full h-[70vh] rounded-lg'  style={{objectFit:"cover"}} alt='carengineservice'></Image>
            <div className='flex flex-col gap-y-3'>
                <h2 className='text-3xl font-bold mt-6'>Unique Car Engine Service</h2>
                <p className='text-slate-600'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <div className='grid grid-cols-2 grid-rows-2 gap-6'>
                    <div className='bg-slate-200 p-8 border-t-orange-500 rounded-lg border-t  flex flex-col gap-y-2'>
                        <h5 className='text-xl font-bold'>Instant Car Services</h5>
                        <p className='text-slate-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    <div className='bg-slate-200 p-8 border-t-orange-500 rounded-lg border-t  flex flex-col gap-y-2'>
                        <h5 className='text-xl font-bold'>24/7 Quality Service</h5>
                        <p className='text-slate-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    <div className='bg-slate-200 p-8 border-t-orange-500 rounded-lg border-t  flex flex-col gap-y-2'>
                        <h5 className='text-xl font-bold'>Easy Customer Service</h5>
                        <p className='text-slate-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                    <div className='bg-slate-200 p-8 border-t-orange-500 rounded-lg border-t  flex flex-col gap-y-2'>
                        <h5 className='text-xl font-bold'>Quality Cost Service</h5>
                        <p className='text-slate-600'>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                    </div>
                </div>
                <p className='text-slate-700'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CarEngineService
