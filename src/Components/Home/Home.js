import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Typewriter from 'typewriter-effect';
import Footer from '../Footer/Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Home(props) {
    return (
        <div className='home' id='home'>
        <Navbar/>
        <div className='container' style={{marginTop:'50px'}}>
            <div className='row pt-3 mt-5'>
                <div className='col-md-6 mt-5'>
                    <h1 id='header'>Hi
                    <Typewriter
                  options={{
                    strings: [
                        "I am Yokesh Srenevas",
                      "Full Stack Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
                       
                    </h1>
                    <span id='header-title'>MERN Stack Developer</span>
               
                <div className='mt-4 '>
                <AnchorLink href='#contact'><button className='btn btn-primary mr-3 py-3 '  id='homebtn' style={{width:"150px"}}>Contact</button></AnchorLink>
                <a href='https://drive.google.com/file/d/1JX1oUKUZIZYfEpSUbUjLdhZV1Mh8tzcN/view?usp=sharing' target='blank'><button className='btn btn-primary py-3 ' id='homebtn'  style={{width:"150px"}}>Resume</button></a>
                </div>
                <div className='mt-4'>
                   <a href='https://github.com/yokesh-code' target='blank'><i class="fa fa-github fa-2x" aria-hidden="true"></i> </a>
                   <a href='https://www.linkedin.com/in/yokesh-srenevas-r-0146b7212/' target='blank'> <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                   <a href='mailto:yokeshsre@gmail.com' target='blank'> <i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
                </div>
                </div>
                <div className='col-md-6'>
                <About/>
                </div>
            </div>
        </div>
        
        <Skills/> 
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
        
      
    );
}

export default Home;