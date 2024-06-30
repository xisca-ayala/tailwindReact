import React from 'react'

const Hero = () => {
  return (
    <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
      <div className='bg-red-400 md:col-span-5 flex items-center justify-center p-8'>
        <div className=''>
          <h1 className='text-7xl font-bold'>We Design Impactful Digital <span className='text-primary border-8 border-primary p-2'>Products</span></h1>
          <p className=''>description</p>
          <p className=''>buttons</p>
        </div>
      </div>
      <div className='bg-red-200 md:col-span-3'>img</div>

    </section>
  )
}

export default Hero