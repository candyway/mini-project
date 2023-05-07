import { Route,Routes,Link } from 'react-router-dom';
import React from 'react';



const Page1 = ({projects}) => {
    return (
        <div className='container'>
            <div className='section1'>
            <h2 className='title'>Hi, my name is <span className='name'>Yuri</span> <br/> <span className='liltitle'>a frontend developer</span></h2>
            <p className='page1-txt'>with passion for learning and creating.</p>
            <button className='btn'>Download CV</button>
            </div>
            <div className='section2'>
                <h3 className='s2-title'>Projects</h3>
                <div className='cards'>

                    {
                        projects.map(project => <Link to={`/project/${project.id}`} className='card'>
                            <img src={project.img} alt=''/>
                            <p>{project.title}</p>
                            </Link>)
                    }

                    {/* <div className='card'>
                    <img src="" alt=""/>
                    <p className='card-txt'>Gaming streaming portal</p>
                    </div>
                    <div className='card'>
                    <img src="" alt=""/>
                    <p className='card-txt'>Video service</p>
                    </div>
                    <div className='card'>
                    <img src="" alt=""/>
                    <p className='card-txt'>Video portal</p>
                    </div>
                    <div className='card'>
                    <img src="" alt=""/>
                    <p className='card-txt'>Dating app</p>
                    </div>
                    <div className='card'>
                    <img src="" alt=""/>
                    <p className='card-txt'>Landing</p>
                    </div>
                    <div className='card'>
                    <img src="" alt=""/>
                    <p className='card-txt'>Gaming community</p> 
                    </div>*/}
                </div>
            </div>
        </div>
    );
};

export default Page1;