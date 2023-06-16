import React from 'react';
// import HeroImage from '../asserts/hero-image1.png'
import HeroImage from '../asserts/hero_two-final.png'
import './Hero.css';
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div id='hero'>
      <div id="hero-text">
        <h3>Welcome! My name is</h3>
        <h1>Wamunyima Mukelabai</h1>
        <h2>A software engineer skilled in mobile development</h2>
        <div id="socials">
          <Link to='/'><FaFacebookF/></Link>
          <Link to='/'><FaGithub/></Link>
        </div>
        <Link className='btn' to='/'>Download CV</Link>
      </div>
      <img alt='HeroImage' src={HeroImage}/>
    </div>
  );
}

export default Hero