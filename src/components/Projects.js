import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom';
import {FaExternalLinkAlt} from "react-icons/fa";
import IDProject from '../asserts/idgen-dark.png'

const Projects = () => {
  return (
    <div id='projects'>
        <h2>Recent projects</h2>
        <div id='projects-container'>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>ID Generator</h4>
                    <p>This Project is still in progress and is not yet ready to be view by anyone</p>
                    <Link to='#'><FaExternalLinkAlt color='white'/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image'src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>Family Tree</h4>
                    <p>This project is being developed under a private repository on gihub but you can view the hosted version of the project</p>
                    <Link to='#'><FaExternalLinkAlt color='white'/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>Lesson Plan</h4>
                    <p>This Project is still in progress and is not yet ready to be view by anyone</p>
                    <Link to='#'><FaExternalLinkAlt color='white'/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>mobile money transfer</h4>
                    <p>This Project is still in progress and is not yet ready to be view by anyone</p>
                    <Link to='#'><FaExternalLinkAlt color='white'/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>AdverHub</h4>
                    <p>This app is developed to showcase the mobile development skills i have, its just a sample app</p>
                    <Link to='#'><FaExternalLinkAlt color='white'/></Link>
                </div>
            </div>
            <div className='project-card'>
                <img id='image' src={IDProject} alt=''></img>
                <div className='hover-layer'>
                    <h4>Redemption</h4>
                    <p>This software helps you to make bootable devices on linux</p>
                    <Link to='#'><FaExternalLinkAlt color='white'/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects