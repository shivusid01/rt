import React1, {useEffect} from 'react'

const Navbar = ({color}) => {
  useEffect(() => {
   alert("color was changed")
  
    
   
  }, [color])
  
  return (
    <div>
        i am navbar {color} color hehe...
    </div>
  )
}

export default Navbar