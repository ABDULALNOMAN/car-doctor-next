import React from 'react'
import corefeatures from '../../app/api/corefeatures.json'

const CoreFeatures = () => {
  return (
    <div>
      <div>
        <div className='component_heading'>
            <h5 className='main_color'>core features</h5>
            <h2 className='text-4xl font-bold'>why choose us</h2>
            <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='grid sm:grid-cols-6 grid-cols-3 sm:gap-x-3 gap-3 lg:w-9/12 md:w-10/12 w-11/12 mx-auto'>
            {corefeatures?.map((feature)=>(
                <div className='border flex flex-col justify-center items-center gap-y-2 px-3 py-2 text-center'>
                    <img className='w-16 h-16' src={feature?.image} alt="features" />
                    <p className='font-semibold'>{feature?.status}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CoreFeatures
