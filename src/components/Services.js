import React, { useContext } from 'react';
import { FaCode, FaScrewdriver, FaPen } from 'react-icons/fa';
import './Services.css';
import { themeContext } from './ThemeContext';

const Services = () => {
  const iconSize = 50;
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const cardStyle = {
    background: darkMode ? 'rgba(34, 34, 34, 0.822)' : 'rgba(128, 128, 128, 0.11)',
    border: darkMode ? '' : '0.1rem solid green',
  };

  return (
    <div id="services">
      <h2 style={{ color: darkMode ? 'white' : 'RGB(0, 100, 0)' }}>My Services</h2>
      <div id="services-container">
        <div className="service-card" style={cardStyle}>
          <FaCode color={darkMode ? 'white' : 'RGB(0, 100, 0)'} size={iconSize} />
          <h3>Software Engineering</h3>
          <p>
            Utilization of sound software development methodologies to proficiently design and develop a wide range of
            applications, including mobile, web, and desktop applications.
          </p>
        </div>
        <div className="service-card" style={cardStyle}>
          <FaScrewdriver color={darkMode ? 'white' : 'RGB(0, 100, 0)'} size={iconSize} />
          <h3>Computer repairs</h3>
          <p>
            Providing expert solutions for phone and computer repairs, including fixing software-related issues, hardware
            replacements, virus removal, system optimization, and more.
          </p>
        </div>
        <div className="service-card" style={cardStyle}>
          <FaPen color={darkMode ? 'white' : 'RGB(0, 100, 0)'} size={iconSize} />
          <h3>Computer Lessons</h3>
          <p>
            Providing comprehensive computer lessons of various topics such as basic computer skills, software usage,
            programming languages, web development, database management, and more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
