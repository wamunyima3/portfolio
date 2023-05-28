import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeTogo from './ThemeTogo';

const NavBar = () => {
  const [open,setOpen] = useState(false);
  const openMenu = () => setOpen(!open);

  return (
    <div id='nav-bar'>
        <h1 id='logo'><Link to='/'>Portifolio</Link></h1>
        <ul id={open ? 'nav-links active':'nav-links'}>
            <li><Link to='/' className='active'>Home</Link> </li>
            <li><Link to='/'>About</Link> </li>
            <li><Link to='/'>Services</Link> </li>
            <li><Link to='/'>Projects</Link> </li>
            <li><Link to='/'>Contact</Link> </li>
        </ul>
        <ThemeTogo/>
        <div id='nav-menu-icon' onClick={openMenu}>
          {open ? (<FaTimes/>) : (<FaBars/>)}
        </div>
    </div>
  )
}

export default NavBar