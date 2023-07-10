import React, { useContext } from 'react';
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { FaFacebookF, FaGithub, FaPhone } from 'react-icons/fa';
import { themeContext } from './ThemeContext';


const Footer = () => {
  const date = new Date();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const lightStyle = {backgroundColor: darkMode ? 'rgba(34, 34, 34, 0.822)':'RGB(0, 100, 0)'};

  return (
    <footer id='footer' style={lightStyle}>
      <div id='footer-text'>
        <p>Copyright &copy; {date.getFullYear()} by Wamunyima Mukelabai | <FaPhone color='white'/> (+26097) 7269886 / 4393855 | All rights reserved.</p>
      </div>
      <div id='group'>
        <span id='socials'>
            <Link to='/'><FaFacebookF color='white'/></Link>
            <Link to='/'><FaGithub color='white'/></Link>
        </span>
        <span className='footer-home-btn'>
            <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true} id='footerA'>
              <FaArrowUp color='white'/>
            </ScrollLink>    
        </span>
      </div>
    </footer>
  );
};

export default Footer;