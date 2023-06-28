import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';
import {FiExternalLink} from "react-icons/fi";
import IDProject from '../asserts/idgen.png'

const Projects = () => {
  return (
    <div id='projects'>
        <h2>Recent projects</h2>
        <div id='projects-container'>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This project helps you creat school IDs and then populate all of them in a word document for printing</p>
                    <Link to='#'><FiExternalLink/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image'src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This project helps you creat school IDs and then populate all of them in a word document for printing</p>
                    <Link to='#'><FiExternalLink/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This project helps you creat school IDs and then populate all of them in a word document for printing</p>
                    <Link to='#'><FiExternalLink/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This project helps you creat school IDs and then populate all of them in a word document for printing</p>
                    <Link to='#'><FiExternalLink/></Link>
            </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This project helps you creat school IDs and then populate all of them in a word document for printing</p>
                    <Link to='#'><FiExternalLink/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This project helps you creat school IDs and then populate all of them in a word document for printing</p>
                    <Link to='#'><FiExternalLink/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects