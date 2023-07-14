import React, { useContext } from 'react';
import './Footer.css';
import { FaArrowUp, FaFacebookF, FaGithub, FaPhone, FaYoutube } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import { themeContext } from './ThemeContext';

const Footer = () => {
  const date = new Date();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const lightStyle = { backgroundColor: darkMode ? 'rgba(34, 34, 34, 0.822)' : 'RGB(0, 100, 0)' };

  return (
    <footer id="footer" style={lightStyle}>
      <div id="footer-text">
        <p>
          Copyright &copy; {date.getFullYear()} by Wamunyima Mukelabai |
          <FaPhone color="white" /> (+26097) 7269886 / 4393855 | All rights reserved.
        </p>
      </div>
      <div id="group">
        <span id="socials">
          <a href="https://www.facebook.com/profile.php?id=100076511817470" target="_blank" rel="noopener noreferrer">
            <FaFacebookF color="white" />
          </a>
          <a href="https://github.com/wamunyima3/" target="_blank" rel="noopener noreferrer">
            <FaGithub color="white" />
          </a>
          <a href="https://www.youtube.com/channel/UCTZBLTi6lUGBjwmWiFXq8Pw/" target="_blank" rel="noopener noreferrer">
            <FaYoutube color="white" />
          </a>
        </span>
        <span className="footer-home-btn">
          <ScrollLink to="hero" smooth={true} duration={500} offset={-70} spy={true} id="footerA">
            <FaArrowUp color="white" />
          </ScrollLink>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
