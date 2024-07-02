import React, {useState} from 'react'


const useContador = () => {
  const [contador, setContador] = useState (0);
  const incrementar = () => {
    setContador (contador + 1)
  }
  const disminuir = () => {
    setContador (contador - 1)
  }

  return {contador, incrementar, disminuir}
}

const Hero = ({title}) => {



  const she = { 
    name:'Maria',
    age:18};

    const {contador, incrementar, disminuir} = useContador(); 

  return (
    <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8'>
      <div className='bg-red-400 md:col-span-5 flex items-center justify-center p-8'>
        <div className=''>
          <h1 className='text-7xl font-bold'>We Design Impactful Digital <span className='text-primary border-8 border-primary p-2'>Products</span></h1>
          <p className='ml-4 mt-2'>{she.name}</p>
          <p className='ml-4'> {title} </p>
          <p className='text-center text-8xl'>{contador}</p>
          <div className='flex justify-center gap-2 mt-8'>
            <button onClick={disminuir} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>-</button> 
            <button onClick={incrementar} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+</button>
          </div>
        </div>
      </div>
      <div className='bg-red-200 md:col-span-3'>img</div>

    </section>
  )
}

export default Hero