"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import './Navbar.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [nav, setNav] = useState(false);
 
  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src='/assets/logo/SCA.png' alt="/" />
      <h1 className='text-lg lg:text-lg uppercase font-bold'><Link href='/'>Senior Citizens Association</Link></h1>
      </div>
      <ul className='navbar-links uppercase lg:text-center text-lg lg:text-lg font-semibold'>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/events'>News and Events</Link>
        </li>
        <li>
          <Link href='/benefits'>Senior Discounts and Benefits</Link>
        </li>
        <li>
          <Link href='/projects'>Services and Programs</Link>
        </li>
        <li>
          <Link href='/contact'>Contact Us</Link>
        </li>
      </ul>
     
      <div onClick={handleNav} className='md:hidden'>
          <AiOutlineMenu color='black' fontSize={27}/>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
        <div>
          <div className='flex w-full items-center justify-between'>
            <img src="/assets/logo/SCA.png" 
            width={87}
            height={35}
            alt=""/>
            <div onClick={handleNav} className='rounded-full font-bold shadow-lg shadow-[#affd2d] p-3 cursor-pointer'>
              <AiOutlineClose size="20"/>
            </div>
          </div>
          <div className='border-b border-[#affd2d] my-4 '>
          <p className='w-[85%] md:w-[90%] py-1'>Brgy. San Antonio Senior Citizens Association</p>
          
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <li className='py-4 text-m'><Link href='/about'>About Us</Link></li>
            <li className='py-4 text-m'><Link href='/events'>News and Events</Link></li>
            <li className='py-4 text-m'><Link href='/benefits'>Senior Discounts and Benefits</Link></li>
            <li className='py-4 text-m'><Link href='/projects'>Services and Programs</Link></li>
            <li className='py-4 text-m'><Link href='/contact'>Contact Us</Link></li>
          </ul>
          <Link href='/signup'>
              <button type='submit' className="bg-white text-blue-900 text-m lg:text-lg font-semibold px-6 py-2 shadow-md shadow-[#affd2d] rounded-full">
                Join Us
              </button>
            </Link>
          </div>
          </div> 
        </div>
      
    </nav>
  )
}

export default Navbar;