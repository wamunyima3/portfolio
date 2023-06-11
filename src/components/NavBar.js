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
        <nav className={open ? 'nav-links active':'nav-links'}>
            <Link to='/' className='active'>Home</Link>
            <Link to='/'>About</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>Contact</Link>
        </nav>
        <ThemeTogo/>
        <div id='nav-menu-icon' onClick={openMenu}>
          {open ? (<FaTimes/>) : (<FaBars/>)}
        </div>
    </div>
  )
}

export default NavBar