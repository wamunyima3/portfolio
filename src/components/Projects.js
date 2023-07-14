import React, { useContext } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import IDProject from '../asserts/idgen.png';
import FamilyTree from '../asserts/Family-Tree-dark.jpg';
import lessonPlan from '../asserts/lessonPlanLight.jpg';
import mobileMoney from '../asserts/mobileMoney.jpg';
import Agriculture from '../asserts/AgricultureLight.jpg';
import Adhub from '../asserts/AdhubLight.png';
import { themeContext } from './ThemeContext';

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const hoverLayer = { backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 100, 0, 0.800)' };

  return (
    <div id="projects">
      <h2 style={{ color: darkMode ? 'white' : 'RGB(0, 100, 0)' }}>Recent projects</h2>
      <div id="projects-container">
        <div className="project-card">
          <img id="image" src={IDProject} alt="" />
          <div className="hover-layer" style={hoverLayer}>
            <h4>ID Generator</h4>
            <p>This Project is still in progress and is not yet ready to be viewed by anyone</p>
            <a href="https://github.com/wamunyima3" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt color="white" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img id="image" src={FamilyTree} alt="" />
          <div className="hover-layer" style={hoverLayer}>
            <h4>Family Tree</h4>
            <p>
              This project is being developed under a private repository on GitHub, but you can view the hosted version
              of the project.
            </p>
            <a href="https://github.com/wamunyima3" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt color="white" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img id="image" src={lessonPlan} alt="" />
          <div className="hover-layer" style={hoverLayer}>
            <h4>Lesson Plan</h4>
            <p>This Project is still in progress and is not yet ready to be viewed by anyone</p>
            <a href="https://github.com/wamunyima3" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt color="white" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img id="image" src={mobileMoney} alt="" />
          <div className="hover-layer" style={hoverLayer}>
            <h4>Mobile Money</h4>
            <p>This Project is still in progress and is not yet ready to be viewed by anyone</p>
            <a href="https://github.com/wamunyima3" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt color="white" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img id="image" src={Adhub} alt="" />
          <div className="hover-layer" style={hoverLayer}>
            <h4>AdHub</h4>
            <p>This app is developed to showcase the mobile development skills I have. It's just a sample app.</p>
            <a href="https://github.com/wamunyima3/AdverHub" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt color="white" />
            </a>
          </div>
        </div>
        <div className="project-card">
          <img id="image" src={Agriculture} alt="" />
          <div className="hover-layer" style={hoverLayer}>
            <h4>Malasa Agri Products</h4>
            <p>A company that supplies agricultural products (e.g., Honey, Tomatoes, Okra, etc.)</p>
            <a href="https://github.com/wamunyima3" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt color="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
