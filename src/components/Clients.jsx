import React from 'react'

const Clients = () => {
  return (
    <div className='bg-gray-100 p-8'>
        <h1>Trusted by greatest companies</h1>
        <div className='flex flex-wrap justify-center items-center gap-20'>
            <img src="src/assets/google.jpg" alt="" className='w-40' />
            <img src="src/assets/linux.jpg" alt="" className='w-40' />
            <img src="src/assets/apple.png" alt="" className='w-40' />
            <img src="src/assets/windows.png" alt="" className='w-40' />
        </div>
    </div>
  )
}

export default Clients