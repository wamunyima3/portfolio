import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeTogo from './ThemeTogo';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const openMenu = () => setOpen(!open);

  return (
    <div id='nav-bar'>
      <h1 id='logo'>
        <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true}>
          Portfolio
        </ScrollLink>
      </h1>
      <nav className={open ? 'nav-links active' : 'nav-links'}>
        <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true}>
          Home
        </ScrollLink>

        <ScrollLink to='services' smooth={true} duration={500} offset={-70} spy={true}>
          Services
        </ScrollLink>

        <ScrollLink to='projects' smooth={true} duration={500} offset={-70} spy={true}>
          Projects
        </ScrollLink>

        <ScrollLink to='contact' smooth={true} duration={500} offset={-70} spy={true}>
          Contact
        </ScrollLink>
      </nav>
      <ThemeTogo />
      <div id='nav-menu-icon' onClick={openMenu}>
        {open ? <FaTimes color='white' /> : <FaBars color='white' />}
      </div>
    </div>
  );
};

export default NavBar;
