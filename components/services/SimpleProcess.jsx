import React from 'react'

const SimpleProcess = () => {
  return (
    <div>
      <div className='pt-8'>
        <div className='flex flex-col gap-y-6'>
            <h2 className='text-3xl font-bold'>3 Simple Steps to Process</h2>
            <p className='text-slate-700'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 md:gap-y-0 gap-y-4'>
                <div className='flex flex-col justify-center items-center p-5 border border-slate-500 rounded-lg gap-y-4 text-center'>
                    <h2 className='bg-orange-500 p-4 rounded-full outline-8 outline outline-orange-100 text-white font-bold'>01</h2>
                    <h3 className='text-2xl font-bold'>Step One</h3>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className='flex flex-col justify-center items-center p-5 border border-slate-500 rounded-lg gap-y-4 text-center'>
                    <h2  className='bg-orange-500 p-4 rounded-full outline-8 outline outline-orange-100 text-white font-bold'>02</h2>
                    <h3 className='text-2xl font-bold'>Step two</h3>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
                <div className='flex flex-col justify-center items-center p-5 border border-slate-500 rounded-lg gap-y-4 text-center'>
                    <h2  className='bg-orange-500 p-4 rounded-full outline-8 outline outline-orange-100 text-white font-bold'>03</h2>
                    <h3 className='text-2xl font-bold'>Step three</h3>
                    <p>It uses a dictionary of over 200 .</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SimpleProcess
