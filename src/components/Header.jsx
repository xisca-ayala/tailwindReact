import React from 'react';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className='flex w-full p-4 items-center h-[90] sm:h-[12vh]'>
        <div className='w-1/6 text-center'>
            <a href='#' className='text-2xl font-bold relative p-1 bg-white'>
                  Power <span className='text-primary text-5xl'>.</span>{''}
                  <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10'/> 
            </a>
        </div>
        <nav className='flex-1 flex items-center justify-center gap-10 sm:gap-20 flex-col sm:flex-row'>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Services</a>
            <a href="#">Products</a>
        </nav>
    </header>
    
  )
}

export default Header;