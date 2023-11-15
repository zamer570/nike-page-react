import React from 'react'
import logo from '../assets/brand_logo.png'

import '../css/header.css';

function Header() {
  return (
    <div className='header'>
      <img src={logo} alt='logo' className='logo-img'></img>
      <div className='nav'>
            <p>Menu</p>
            <p>Location</p>
            <p>About</p>
            <p>Contact</p>
      </div>
      <button className='login'>Login</button>
    </div>
  )
}

export default Header
