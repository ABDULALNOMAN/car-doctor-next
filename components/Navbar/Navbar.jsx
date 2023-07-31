import Link from 'next/link'
import React from 'react'
import search from '/public/images/navbar/search-interface-symbol.png'
import bag from '/public/images/navbar/bag.png'
import logo from '/public/logo.svg'
import Image from 'next/image'

const Navbar = () => {
    const listItem = <>
            <li><Link href={""}>Home</Link></li>
            <li><Link href={""}>About</Link></li>
            <li><Link href={""}>services</Link></li>
            <li><Link href={""}>Blog</Link></li>
            <li><Link href={""}>contact</Link></li>
        </>
  return (
    <div className="navbar bg-white text-black px-6 py-3">
        <div className="navbar-start">
            <Link href={"/"}><Image src={logo} className='w-20 h-full' alt='logo'></Image></Link>
        </div>
        <div className='navbar-center'>
            <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 right-0 bg-gray-800">
                    {listItem}
                </ul>
            </div>
            <div className="hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-base">
                    {listItem}
                </ul>
            </div>
        </div>
        <div className='navbar-end'>
            <div className='flex items-center gap-x-5 justify-center h-full'>
                <Image src={bag} style={{objectFit:'contain'}} className='w-6 h-full' alt='bag'></Image>
                <Image src ={search} style={{objectFit:"contain"}} className="w-5 h-full " alt='search'></Image>
                <button className='btn block rounded-none border-2 bg-transparent border-orange-600 text-orange-600 hover:bg-transparent hover:border-orange-600  '>appoinment</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
