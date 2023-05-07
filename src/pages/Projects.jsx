import React from 'react';
import { useParams } from 'react-router-dom';


const Projects = ({projects}) => {

    const {id} = useParams()
    const project = projects[id]

    return (
        <div className='container'>
            <div className='projects'>
            <h3>{project.title}</h3>
            <img src={project.img} alt='' />
            <p>Skills: React, Node.js, MongoDB</p>
            <button className='project-btn'>
                <img src='/gitHub-black.svg' alt='' />GitHub repo
            </button>
            </div>
        </div>
    );
};

export default Projects;