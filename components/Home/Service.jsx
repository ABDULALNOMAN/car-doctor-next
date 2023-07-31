import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import services from '../../app/api/services.json'

const Service = () => {
  return (
    <section>
      <div className='h-full w-full mx-auto'>
        <div className=''>
            <div className='component_heading'>
                <h6 className='main_color'>service</h6>
                <h3 className='text-4xl font-bold '>our service area</h3>
                <p className='text-center'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:w-full w-8/12 mx-auto'>
                {services?.map((service)=>(
                    <div className='' key={service.index}>
                        <div className="card card-compact p-4 shadow-md shadow-slate-200">
                            <img src={service?.picture} className='w-full h-44 rounded-md' alt="" ></img>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">{service?.title}</h2>
                                <div className="card-actions justify-end">
                                    <p className='main_color text-base'>price: {service?.price}</p>
                                    <AiOutlineArrowRight></AiOutlineArrowRight>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button className='btn_secondary mt-12'>more service</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Service
