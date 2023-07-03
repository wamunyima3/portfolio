import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeTogo from './ThemeTogo';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    // Scroll event listener
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const openMenu = () => setOpen(!open);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div id='nav-bar'>
      <h1 id='logo'>
        <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true}>
          <NavLink to='/'>Portfolio</NavLink>
        </ScrollLink>
      </h1>
      <nav className={open ? 'nav-links active' : 'nav-links'}>
        <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true} activeClass='active' onSetActive={handleSetActive}>
          <NavLink exact to='/' activeClassName='active'>Home</NavLink>
        </ScrollLink>

        <ScrollLink to='services' smooth={true} duration={500} offset={-70} spy={true} activeClass='active' onSetActive={handleSetActive}>
          <NavLink to='/services' activeClassName='active'>Services</NavLink>
        </ScrollLink>

        <ScrollLink to='projects' smooth={true} duration={500} offset={-70} spy={true} activeClass='active' onSetActive={handleSetActive}>
          <NavLink to='/projects' activeClassName='active'>Projects</NavLink>
        </ScrollLink>

        <ScrollLink to='contact' smooth={true} duration={500} offset={-70} spy={true} activeClass='active' onSetActive={handleSetActive}>
          <NavLink to='/contact' activeClassName='active'>Contact</NavLink>
        </ScrollLink>
      </nav>
      <ThemeTogo />
      <div id='nav-menu-icon' onClick={openMenu}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default NavBar;