import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import AboutUs from './components/AboutUs.jsx'
import Experience from './components/Experience.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-[linear-gradient(180deg,#0D0E0D_0%,#071210_50%,#001512_100%)]">
        <Header/>
        <Hero/>
        <AboutUs/>
        <Experience/>
      </div>
      
    </>
  )
}

export default App
