import React, {useRef} from 'react'
import "../css/style.css"
import logo from "../assets/Layer.png"
import {FaBars, FaTimes} from "react-icons/fa"




const Navbar = () => {
  const navRef = useRef();
  const shownavbar = ()=>{
    navRef.current.classList.toggle('responsive-nav');


  }
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='logo' />
          <span>Producto</span>
        </div>
        <div className='links'>
          <ul ref={navRef}>
            <li>Home</li>
            <li>Product</li>
            <li>
              <button className='lgn-btn'>Login</button>
            </li>
            <li>
              <button onClick={shownavbar} className='nav-btn nav-close-btn'>  <FaTimes/> </button>
            </li>
          </ul>
        </div>
        <button onClick={shownavbar} className='nav-btn' >  <FaBars/> </button>
      </div>
    </div>
  )
}

export default Navbar
