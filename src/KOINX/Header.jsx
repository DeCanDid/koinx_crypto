import React from 'react';
import './Header.css'
import logo from '../navbarcomponent/logo.jpg'

const Header = () => {
  return (
    <>
 <header class="top-nav shadow">
    <div>
      <img src={logo} alt="" />
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label class='menu-button-container' for="menu-toggle">
    <div class='menu-button'></div>
  </label>
    <ul class="menu">
      <li><a href="">Crypto Taxes</a></li>
      <li><a href="">Free Tools</a></li>
      <li><a href="">Resource Center</a></li>
      <li><a href=""><button>Get started</button></a></li>
    </ul>
  </header>

    </>
  )
}

export default Header