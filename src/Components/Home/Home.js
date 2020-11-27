import React from 'react';
import myImg from '../../Images/syum.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import './Home.css'
import Particles from 'react-particles-js';




const Home = () => {
    return (
        <div className='text-center'>
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
            <img className='mt-5' src={myImg} alt="syum akhlaque" width='350px'/>
            <div>
               <h2>Hi, I am Akhlaqur Rahman Siddiqui</h2>
               <h4>Programmer | Web Developer | Engineer</h4>
               <p>I am a frontend web developer. I can provide clean code and pixel perfect design. <br/>
                I also make website more &amp; more interactive with web animations.</p>
            </div>
            <div className= 'brands-a'>
                <a href="https://www.facebook.com/syum.akhlaque.5/"><FontAwesomeIcon icon={faFacebook} size="3x" /></a> &nbsp;  &nbsp;
                <a href="https://www.linkedin.com/in/md-akhlaqur-rahman-siddiqui-syum-832510139/"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a> &nbsp;  &nbsp;
                <a href="https://github.com/syum-akhlaque/"><FontAwesomeIcon icon={faGithub} size="3x" /></a> 
            </div>
        </div>
    );
};

export default Home;