import React from 'react';
import './About.css'

function About(props) {
    return (
        <div id='about'>
            <div className='container mt-5' >
                <h2 className='heading pt-5' >About me</h2>
            <div className='row'>
                <div className='col-md-6' id='content'>
                <div className='aos-init aos-animate'data-aos="fade-down">
                     <h2>I'am Yokesh Srenevas R</h2>
                     <p>Passionate MERN Stack Developer with a focus on creating efficient and user-friendly web applications. Skilled in
building responsive and intuitive interfaces that enhance user experiences.</p>
                </div>
               </div>
            </div>
            </div>
        </div>
    );
}

export default About;