import React, { useContext, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import HeroImage from '../asserts/hero_two-final.png';
import './Hero.css';
import { Link } from 'react-router-dom';

// import { ThemeContext } from './components/ThemeContext';

const Hero = () => {
  const typedRef = useRef(null);

  // const { theme } = useContext(ThemeContext);
  useEffect(() => {
    const options = {
      strings: [
        'application development',
        'web development',
        'desktop development',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Clean up the Typed instance
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id='hero'>
      <div id='hero-text'>
        <h3>Welcome! My name is</h3>
        <h1>Wamunyima Mukelabai</h1>
        <h2>A software engineer skilled in <span ref={typedRef}></span></h2>
        <Link className='btn' to='/'>Download CV</Link>
      </div>
      <img alt='HeroImage' src={HeroImage} />
    </div>
  );
};


export default Hero