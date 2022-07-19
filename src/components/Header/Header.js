import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';
 
function Header() {
  
  const location = useLocation();
  return (
    <div className='header' >
        <div className='header-container'>
        <Link to='/'>HOME</Link>
        <Link to='/about'>ABOUT ME</Link>
        <Link to='/contact'>CONTACT </Link>
        <Link to='/projects'>PROJECTS</Link>
        </div>    
    </div>
  )
}

export default Header