import React from 'react'
import './NavBar.css'
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
const ThemeTogo = () => {
    const test = 'light';
    return (
        <div id='themeTogo'>
                <HiMoon/>
                <CgSun/>
                <div id='themeTogoButton' style={test === 'light'?{left:'2px'}:{right:'2px'}}></div>
        </div>
    )
}

export default ThemeTogo