"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import testimonials from '../../app/api/testimonial.json'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import quote from "../../public/icons/quote.svg"
import Image from 'next/image';

const Testimonial = () => {
  
  return (
    <div className='py-24'>
      <div>
        <div className='component_heading'>
            <h5 className='main_color'>Testimonial</h5>
            <h2 className='text-4xl font-bold'>What Customer Says</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
        </div>
        <div className='relative w-full mx-auto lg:h-[50vh] h-[60vh]  border-red-800'>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                navigation={{
                  nextEl:'.review-swiper-button-next',
                  prevEl:'.review-swiper-button-prev'
                }}
                modules={[Pagination, Navigation]}
                className="h-full w-10/12"
            >
              {testimonials?.map((item)=>(
                <SwiperSlide className='h-full shadow-inner shadow-slate-500'>
                    <div className='p-8 flex flex-col justify-start items-start gap-y-5 h-full'>
                      <div className='flex justify-between items-center gap-x-8 w-10/12'>
                          <div className='flex justify-start items-center gap-x-4'>
                              <img src={item?.picture} className='w-14 h-14 rounded-full' alt="person" />
                              <div>
                                <h3 className='text-2xl font-bold'>{item?.name}</h3>
                                <h6 className='text-lg font-semibold text-slate-600'>{item?.title}</h6>
                              </div>
                          </div>
                          <Image src={quote} objectFit='contain' className='w-16 h-16' alt="quote" />
                        </div>
                        <p className='text-base'>{item?.body}</p>
                        <div className='text-orange-500 flex items-center justify-start text-2xl'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                    </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className=''>
              <i className="review-swiper-button-prev flex flex-col justify-center h-full absolute top-0 lg:left-4 md:left-2 left-1 z-10 "><AiOutlineArrowLeft className='text-3xl p-3 btn_primary rounded-full btn btn-circle'></AiOutlineArrowLeft></i>
              <i className=" review-swiper-button-next flex flex-col justify-center h-full  absolute top-0 lg:right-4 md:right-2 right-1 z-10"><AiOutlineArrowRight className='text-3xl p-3 btn_primary rounded-full btn btn-circle'></AiOutlineArrowRight></i>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
