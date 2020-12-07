import React from 'react';
import myImg from '../../Images/syum.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Home.css'
import Particles from 'react-particles-js';
import { animations } from 'react-animation'


const Home = () => {
    return (
        <div className='text-center px-3'>
            {/* <Particles className='particles'></Particles> */}
            <Particles className='particles'
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 10,
	            "random": true
	        },
	        "move": {
	            "direction": "bottom",
	            "out_mode": "out"
	        },
	        "line_linked": {
	            "enable": false
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "remove"
	            }
	        },
	        "modes": {
	            "remove": {
	                "particles_nb": 10
	            }
	        }
	    }
	}} />
            
		
			<img className='mt-5' src='https://i.ibb.co/D4jrN0Y/image-11-4.png' alt="syum akhlaque" width='220px' height='220px'style={{animation: animations.bounceIn}}/>
            <div className='mt-3' style={{animation: animations.fadeInUp, animationDuration:'2s'}}>
               <h2>Hi, I am Akhlaqur Rahman Siddiqui</h2>
               <h4>Programmer | Web Developer | Engineer</h4>
               <p className='mt-4'>I am a frontend web developer. I can provide clean code and pixel perfect design. <br/>
                I also make website more &amp; more interactive with web animations.</p>
            </div>
            <div className= 'brands-a' style={{animation: animations.fadeInUp, animationDuration:'4s'}}>
                <a href="https://www.facebook.com/syum.akhlaque.5/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a> &nbsp;  &nbsp;
                <a href="https://www.linkedin.com/in/md-akhlaqur-rahman-siddiqui-syum-832510139/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a> &nbsp;  &nbsp;
                <a href="https://github.com/syum-akhlaque/"><FontAwesomeIcon icon={faGithub} size="2x" /></a> 
            </div>
        </div>
    );
};

export default Home;