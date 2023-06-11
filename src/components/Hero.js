import React from 'react';
import heroImage from './asserts/images/heroImage.jpg';

const Hero = () => {
  return (
    <div id='hero'>
      <div id="hero-text">
        <h4>Welcome! My name is</h4>
        <h1>Wamunyima Mukelabai</h1>
        <h5>A software engineer skilled in</h5>
      </div>
      <img id='hero-image' alt="Wamunyima's image" src={heroImage} />
    </div>
  );
}

export default Hero