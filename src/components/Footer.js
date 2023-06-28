import React from 'react';
import './Footer.css'
import { FaArrowUp } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
  const date = new Date();

  return (
    <footer id='footer'>
      <div id='footer-text'>
        <p>Copyright &copy; {date.getFullYear()} by Wamunyima Mukelabai | All rights reserved.</p>
      </div>
      <div className='footer-home-btn'>
            <Link to='#'><FaArrowUp/></Link>
      </div>
    </footer>
  );
};

export default Footer;