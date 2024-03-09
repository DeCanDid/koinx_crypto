import React from 'react'
import logo from './logo.jpg'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='navbar'>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
        <a href="#">Crypto Taxes</a>
        <a href="#">Free Tools</a>
        <a href="#">Resources Center</a>
        <button>Get Started</button>
        </div>
      </header>
    </>
  )
}

export default Navbar