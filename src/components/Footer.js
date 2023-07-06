import React from 'react';
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';
import { FaFacebookF, FaGithub, FaPhone } from 'react-icons/fa';


const Footer = () => {
  const date = new Date();

  return (
    <footer id='footer'>
      <div id='footer-text'>
        <p>Copyright &copy; {date.getFullYear()} by Wamunyima Mukelabai | <FaPhone color='white'/> (+26097) 7269886 / 4393855 | All rights reserved.</p>
      </div>
      <div id='group'>
        <span id='socials'>
            <Link to='/'><FaFacebookF color='white'/></Link>
            <Link to='/'><FaGithub color='white'/></Link>
        </span>
        <span className='footer-home-btn'>
            <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true}>
              <Link to='/' id='footerA'><FaArrowUp color='white' /></Link>
            </ScrollLink>    
        </span>
      </div>
    </footer>
  );
};

export default Footer;