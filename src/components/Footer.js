import React from 'react';
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Link as ScrollLink} from 'react-scroll';


const Footer = () => {
  const date = new Date();

  return (
    <footer id='footer'>
      <div id='footer-text'>
        <p>Copyright &copy; {date.getFullYear()} by Wamunyima Mukelabai | All rights reserved.</p>
      </div>
      <div className='footer-home-btn'>
            <ScrollLink to='hero' smooth={true} duration={500} offset={-70} spy={true}>
              <Link to='/' id='footerA'><FaArrowUp/></Link>
            </ScrollLink>
            
      </div>
    </footer>
  );
};

export default Footer;