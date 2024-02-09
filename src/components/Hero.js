import React, { useContext, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import HeroImage from '../asserts/hero_two-final.png';
import './Hero.css';
import { themeContext } from './ThemeContext';

const Hero = React.forwardRef((props, ref) => {
  const typedRef = useRef(null);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const darkGreen = { color: darkMode ? 'white' : ' RGB(0, 100, 0)' };

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

  return (
    <div id="hero" ref={ref} style={darkGreen}>
      <div id="hero-text">
        <h3>Welcome! My name is</h3>
        <h1>Wamunyima Mukelabai</h1>
        <h2 className="typed-container">
          Software engineer skilled in <span ref={typedRef}></span>
        </h2>
        <a
          className={darkMode ? 'btn dark' : 'btn light'}
          href="https://drive.google.com/uc?export=download&id=1KadXFu9hT1djhyzdotRQKB6AITJGz1d5"
          download="cv.pdf"
        >
          Download CV
        </a>
      </div>
      <img alt="HeroImage" src={HeroImage} />
    </div>
  );
});

export default Hero;
