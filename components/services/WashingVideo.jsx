
"use client"
import { getRouteMatcher } from 'next/dist/shared/lib/router/utils/route-matcher'
import React, { useEffect, useRef } from 'react'
import { BsPlay } from 'react-icons/bs'
import {  CiPause1 } from 'react-icons/ci'

const WashingVideo = () => {
  const videoRef = useRef()
  const [condition ,setCondition] = React.useState(false)
  const [timing ,setTiming] =React.useState(false)
  const handlePlay = ()=>{
    videoRef.current.play()
    setCondition(true)
    setTimeout(() =>setTiming(true), 6000);
  }
  const handlePause =()=>{
    videoRef.current.pause()
    setCondition(false)
    setTiming(false)

  } 
  return (
    <div className='mt-12'>
      <div className='w-full lg:h-[80vh] relative'>
         <video fill onClick={handlePause} ref={videoRef} className='w-full h-full cursor-pointer lg:object-fill' src="/video/wash.mp4"></video>
         <div className=" absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]" >
            <button>{condition ? <CiPause1 onClick={handlePause} className={`text-[#ff3811] text-8xl p-4 border-4 rounded-full border-[#ff3811] ${timing ? "hidden":"block"}`}></CiPause1> : <BsPlay onClick={handlePlay} className='text-[#ff3811] text-8xl p-4 border-4 rounded-full border-[#ff3811]'></BsPlay> }</button>
         </div>
      </div>
    </div>
  )
}

export default WashingVideo
