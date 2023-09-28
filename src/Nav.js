import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
    const [show,handleShow]=useState(false)
    useEffect(()=>{
   window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
      
        handleShow(true)

    }
    else handleShow(false)
   });
   return ()=>{
    window.removeEventListener("scroll",handleShow);
   }
    },[])
  return (
    <div className={`nav${show&&""}`}>
        <img className='nav_logo'
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
        alt='Netflix Logo'
         />

         <img className='nav_avatar'
         src="https://pbs.twimg.com/profile_images/1356333120992149505/-qvakEK7_400x400.jpg"
         alt="Netflix Logo" 
         
         />
      
    </div>
  )
}

export default Nav
