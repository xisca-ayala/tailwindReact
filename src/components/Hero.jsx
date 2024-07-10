import React, {useState} from 'react'
import { FaCircle } from "react-icons/fa";
import { TiStarFullOutline } from "react-icons/ti";
import { FaRegSquareFull } from "react-icons/fa6";


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
      <div className=' md:col-span-5 flex items-center justify-center p-6 2xl:px-40'>
        <div className='p-12'>
          <h1 className='text-3xl leading-[6.5rem] lg:text-7xl font-bold lg:leading-[8rem]'>We Design Impactful Digital {""}
            <span className='text-primary border-8 border-primary relative py-2 px-6'>Products
              <FaCircle className='text-white text-base bg-primary rounded-full box-content 
              absolute -top-5 -left-5 p-2 '/>
              <FaCircle className='text-white text-base bg-primary rounded-full box-content 
              absolute -top-5 -right-5 p-2 '/>
              <FaCircle className='text-white text-base bg-primary rounded-full box-content
              absolute -bottom-5 -right-5 p-2 '/>
              <FaCircle className='text-white text-base bg-primary rounded-full box-content
              absolute -bottom-5 -left-5 p-2 '/>
            </span>
            
          </h1>
          <div className='pt-6'>
            <span className='ml-4 mt-2'>Hello {she.name}...</span>
            <span className='ml-4'> {title} </span>
          </div>
          <div className='pt-6 p-3'>
            <button className='bg-primary text-white size-sm rounded p-2'>CONTACT US</button>
          </div>
          
          <div className=' text-center py-10 px-2'>
              <span className='text-center text-8xl'>{contador}</span>
              <div className='flex justify-center gap-2 mt-8'>
                <button onClick={disminuir} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>-</button> 
                <button onClick={incrementar} className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>+</button>
              </div>
          </div>
        </div>
      </div>
      <div className='md:col-span-3  flex items-center justify-center relative pr-1 h-[90vh] md:h-[70vh]'>
        <div className='relative'>
          <img src="../src/assets/woman.png" alt="" className=' w-[490px] h-[400px] object-cover -mt-28' />
          <div className='bg-white w-[200px] shadow-xl rounded-lg p-1 pt-2 pl-2 flex flex-col max-w-[250px] mx-auto gap-2 relative'>
            <div className='flex relative'>
              <img src="../src/assets/person2.jpg" alt="" className='w-12 h-12 object-cover rounded-full border-[2px] border-white ' />
              <img src="../src/assets/person1.jpg" alt="" className='w-12 h-12 object-cover rounded-full absolute left-6 border-[2px]  border-white' />
              <img src="../src/assets/person2.jpg" alt="" className='w-12 h-12 object-cover rounded-full border-[2px] absolute left-12 border-white ' />
              <img src="../src/assets/person1.jpg" alt="" className='w-12 h-12 object-cover rounded-full absolute left-16 border-[2px]  border-white' />
            </div>
            <h2 className='text-lg font-bold tracking-[1px] text-gray-800'>120 + employees</h2>
            <div className='flex text-gray-500'>
              <TiStarFullOutline className='text-primary w-6 h-6 mr-2 ' />
              5.0 (3.1k Reviews)
            </div>
            <div className='absolute -right-8 -bottom-8 -z-10'>
                <div className='relative'>
                  <FaCircle className='text-primary text-6xl '/> 
                  <FaRegSquareFull className='absolute text-6xl text-white bg-white -top-7 -left-7' />
                </div>
            </div>
            
            
          </div>
        </div>
        <FaCircle className='text-white text-[370px] bg-primary rounded-full border-[8px] border-primary
        absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 -z-10 '/>

        <img src="src/assets/figma.png" alt="" className='w-10 h-10 object-cover rounded-full border-l-8 border-gray-200 bg-gray-900 absolute top-[1%] right-[30%] rotate-45'/>
        <img src="src/assets/adobe.png" alt="" className='w-10 h-10 object-cover rounded-full border-l-8 border-gray-200 bg-gray-900 absolute top-[25%] left-[0%] rotate-6'/>
        <img src="src/assets/sketch.png" alt="" className='w-10 h-10 object-cover rounded-full border-l-8 border-gray-200 absolute bottom-[2%] left-[0%] rotate-12'/>




      </div>
    </section>
  )
}

export default Hero