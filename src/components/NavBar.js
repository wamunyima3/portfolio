import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const NavBar = () => {
  return (
    <div id='nav-bar'>
        <h1 id='logo'><Link to='/'>Portifolio</Link></h1>
        <ul id='nav-links'>
            <li><Link to='/'>Home</Link> </li>
            <li><Link to='/'>About</Link> </li>
            <li><Link to='/'>Services</Link> </li>
            <li><Link to='/'>Projects</Link> </li>
            <li><Link to='/'>Contact</Link> </li>
        </ul>
        <div id='themeTogo'>
            <HiMoon/>
            <CgSun/>
            <div id='themeTogoButton'></div>
        </div>
    </div>
  )
}

export default NavBar