import React, { useState, useEffect, useContext } from 'react';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeTogo from './ThemeTogo';
import { themeContext } from './ThemeContext';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  

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
    <div id='nav-bar'
      style={{
        backgroundColor: darkMode ? 'rgba(34, 34, 34, 0.822)' : 'RGB(0, 100, 0)',
      }}
    >
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
        {open ? <FaTimes/> : <FaBars/>}
      </div>
    </div>
  );
};

export default NavBar;
