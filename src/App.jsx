import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Hero from './components/Hero'
import Clients from './components/Clients'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Header />
      <Hero title='We are working for you!' />
      <Clients/>
    </div>


  )
}

export default App
