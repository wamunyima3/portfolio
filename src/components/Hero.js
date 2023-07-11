import React, { useContext, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import HeroImage from '../asserts/hero_two-final.png';
import './Hero.css';
import { themeContext } from './ThemeContext';

const Hero = () => {
  const typedRef = useRef(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const darkGreen = { color: darkMode ? '' : ' RGB(0, 100, 0)' };

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
    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownloadCV = () => {
    const downloadUrl = 'https://drive.google.com/uc?export=download&id=1vlXA2B-jEv2WpQZP3yOTE3XaU87I6_SP';
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'cv.pdf';
    link.click();
  };

  return (
    <div id='hero'>
      <div id='hero-text'>
        <h3 style={darkGreen}>Welcome! My name is</h3>
        <h1 style={darkGreen}>Wamunyima Mukelabai</h1>
        <h2 style={darkGreen}>
          A software engineer skilled in <span ref={typedRef}></span>
        </h2>
        <a
          className={darkMode ? 'btn dark' : 'btn light'}
          href="javascript:void(0);"
          onClick={handleDownloadCV}
          download
        >
          Download CV
        </a>
      </div>
      <img alt='HeroImage' src={HeroImage} />
    </div>
  );
};

export default Hero;
