import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()
  useEffect(() => {
   
    console.log(`first rendering`)
    ref.current.style.backgroundColor = "red"
  
   
  },[]);
  

  return (
    <>
    
    </>
  )
}

export default App
