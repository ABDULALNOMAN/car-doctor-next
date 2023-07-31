// import Image from 'next/image'
import React from 'react'
import parts from '../../public/images/about_us/parts.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <div>
      <div className='h-full py-24'>
        <div className='flex justify-between items-start gap-x-16'>
            <div className='w-full h-[65vh] relative'>
                <div className='about_background'> 
                    <Image className='absolute bottom-0 right-0 w-96 border-8 border-white rounded-sm' objectFit='contain' src={parts} alt='image'></Image>
                </div>
            </div>
            <div className='w-full flex flex-col gap-y-4 items-start'>
                <h6 className='main_color'>about us</h6>
                <h3 className='text-4xl leading-snug font-bold'>We are qualified <br /> & of experience <br /> in this field</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btn_primary capitalize'> get more info</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
