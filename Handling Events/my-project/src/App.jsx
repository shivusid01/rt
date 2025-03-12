import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // const [name, setname] = useState("Shiv")
  const [form, setform] = useState({email: '', phone: ''})
  
const handleClick = () => {
  alert('hey i am clicked')
} 
const handleMouseOver = () => {
  alert('hey i am mouse over')
}
const handleChange = (e) => {
  // setname(e.target.value)
  setform({...form, [e.target.name]: e.target.value})
  console.log(form)
 
}
  return (
    <>

<div className="button">
      <button onClick={handleClick}>click me</button>
    </div>


    <div className="red bg-red-600 text-white h-32 w-32 flex justify-center items-center"  onMouseOver={handleMouseOver}>  
      i am a red div
    </div>

    <input className='bg-red-600' type="text" name='email' value={form.email} onChange={handleChange}/>
    <input className='bg-blue-600' type="text" name='phone' value={form.phone} onChange={handleChange}/>

  
    </>
  )
}

export default App
