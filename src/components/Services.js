import React from 'react';
import { FaCode, FaScrewdriver, FaPen } from "react-icons/fa";
import { Link, Routes, Route } from 'react-router-dom';
import './Services.css';
import Development from '../routes/Development'
import Lessons from '../routes/Lessons'
import Repairing from '../routes/Repairing'

const Services = () => {
    const iconSize = 50;
  return (
    <div id='services'>
        <h2>My Services</h2>
        <div id='services-container'>
            <div className='service-card'>
                <FaCode color='white' size={iconSize}/>
                <h3>Software Engineering</h3>
                <p>Utilization of sound software development methodologies to proficiently design and develop a wide range of applications, including mobile, web, and desktop applications.</p>
                <Link className='btn'>Read more ...</Link>
            </div>
            <div className='service-card'>

                <FaScrewdriver color='white' size={iconSize}/>
                <h3>Computer repairs</h3>
                <p>Providing expert solutions for phone and computer repairs, including fixing software-related issues, hardware replacements, virus removal, system optimization, and more.</p>
                <Link className='btn'>Read more ... </Link>
            </div>
            <div className='service-card'>
                <FaPen color='white' size={iconSize}/>
                <h3>Computer Lessons</h3>
                <p>Providing comprehensive computer lessons of various topics such as basic computer skills, software usage, programming languages, web development, database management, and more.</p>
                <Link className='btn'>Read more ... </Link>
            </div>
        </div>
    </div>
  )
}

export default Services