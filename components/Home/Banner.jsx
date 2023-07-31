"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Pagination, Navigation } from 'swiper/modules';
import items from '../../app/api/banner.json'
import Image from 'next/image';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Banner = () => {
  return (
    <section className='h-[90vh] relative'>
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl:'.review-swiper-button-next',
          prevEl:'.review-swiper-button-prev'
        }}
        modules={[Pagination, Navigation]} 
        className="w-full h-full"
      >
        {items?.map((item)=>(
          <SwiperSlide>
            <div key={item?.id}>
                <div className='relative h-[90vh] w-full'>
                    <div className='radialContainer'></div>
                    <Image src={item.imageUrl} className='' fill={true} priority style={{ objectFit:"cover"}} quality={100} alt='image'></Image>
                    <div className=' absolute w-full h-[90vh] z-10 '>
                        <div className='flex flex-col items-start justify-center h-full w-10/12 mx-auto text-start gap-y-4 capitalize text-white'>
                        <h2 className='text-5xl font-bold tracking-wide leading-tight'>Affordable <br /> Price For Car <br /> Servicing</h2>
                        <p>There are many variations of passages of  available, but <br className='md:block hidden' /> the majority have suffered alteration in some form</p>
                        <div className='flex gap-6'>
                            <button className='btn_primary'>discover more</button>
                            <button className='btn rounded-sm bg-transparent hover:bg-transparent text-white border-2'>latest project</button>
                        </div>
                        </div>
                    </div>
                </div>    
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='h-full absolute md:right-10 right-6 md:bottom-14 bottom-10 z-20 flex gap-x-4 justify-end items-end'>
        <i className="review-swiper-button-prev "><AiOutlineArrowLeft className='text-3xl p-3 btn_primary rounded-full btn btn-circle'></AiOutlineArrowLeft></i>
        <i className=" review-swiper-button-next"><AiOutlineArrowRight className='text-3xl p-3 btn_primary rounded-full btn btn-circle'></AiOutlineArrowRight></i>
      </div>
    </section>
  )
}

export default Banner


