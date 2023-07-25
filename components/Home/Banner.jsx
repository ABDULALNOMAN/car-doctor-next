import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Responsive.module.css";
import Image from 'next/image';

const Banner = () => {
    const items = [
        {
          "id": 1,
          "imageUrl": "/images/banner/5.jpg"
        },
        {
          "id": 2,
          "imageUrl": "/images/banner/4.jpg"
        },
        {
          "id": 3,
          "imageUrl": "/images/banner/3.jpg"
        },
        {
          "id": 4,
          "imageUrl": "/images/banner/2.jpg"
        },
        {
          "id": 5,
          "imageUrl": "/images/banner/1.jpg"
        }
      ]
  
  return (
    <div className={''}>
      <div className='h-[90vh]'>
          <Carousel
          showArrows={true}
          showIndicators={false}
          infiniteLoop={true}
          dynamicHeight={false}
          autoPlay = {true}
          className={styles.mySwiper}
          >
            {items?.map((item)=>(
                <div key={item?.id} className=''>
                    <div className={''}>
                        <div className='relative h-[90vh] w-full'>
                            <div className='radialContainer'></div>
                            <Image src={item.imageUrl} className='' fill={true} priority style={{ objectFit:"cover"}} quality={100}></Image>
                          <div className='absolute w-full h-[90vh] z-10'>
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
                </div>
            ))}
          </Carousel>
      </div>
    </div>
  )
}

export default Banner
