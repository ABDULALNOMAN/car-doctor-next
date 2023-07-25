import Link from 'next/link'
import React from 'react'

const DashboardNavbar = () => {
  return (
    <div className='w-full text-white capitalize bg-sky-800'>
      <div className='flex items-center h-16 justify-between mx-4'>
         <h2 className='text-4xl'>noman</h2>
         <ul className='flex items-center justify-end gap-7 cursor-pointer'>
            <li><Link href={"/"}>home</Link></li>
            <li><Link href={"/dashboard/about"}>about</Link></li>
            <li>contact</li>
            <li>dashboard</li>
         </ul>
      </div>
    </div>
  )
}

export default DashboardNavbar
