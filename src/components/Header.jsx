import React from 'react';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <header className='flex w-full p-4'>
        <div className='w-1/6 text-center'>
            <span className='text-2xl font-bold relative p-1 bg-white'>
                Power <span className='text-primary text-5xl'>.</span>{''}
                 <RiCheckboxBlankCircleFill className='absolute -left-3 -bottom-3 text-primary -z-10'/> 
            </span>
        </div>
        <nav className='bg-red-500 flex-1'>
            <nav>Nav</nav>
        </nav>
    </header>
    
  )
}

export default Header;